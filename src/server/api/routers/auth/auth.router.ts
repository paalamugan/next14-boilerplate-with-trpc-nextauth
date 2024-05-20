import { TRPCError } from '@trpc/server';

import { Logger } from '@/server/api/common/logger';
import { type AuthTokenQueryResult } from '@/server/api/routers/auth/auth.types';
import { authService } from '@/server/api/routers/auth/service/auth.service';
import { createTRPCRouter, protectedProcedure, publicProcedure } from '@/server/api/trpc';

import { LoginInput } from './auth.input';
import type { AuthToken } from './service/auth.service.types';

export const authRouter = createTRPCRouter({
  signIn: publicProcedure.input(LoginInput).mutation(async ({ input, ctx }): Promise<AuthToken> => {
    return authService.signIn({ input, headers: ctx.headers });
  }),

  authToken: protectedProcedure.query(async ({ ctx }): Promise<AuthTokenQueryResult> => {
    return ctx.authToken;
  }),

  signOut: protectedProcedure.mutation(async ({ ctx }) => {
    try {
      await authService.signOut({
        authToken: ctx.authToken,
        headers: ctx.headers,
      });
    } catch (error: unknown) {
      Logger.error('Failed to logout', error);
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to logout',
      });
    }
  }),
});
