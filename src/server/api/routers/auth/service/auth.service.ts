import { TRPCError } from '@trpc/server';

import { Logger } from '@/server/api/common/logger';
import {
  type AuthToken,
  type LoginArgs,
  type LogoutArgs,
} from '@/server/api/routers/auth/service/auth.service.types';

class AuthService {
  private readonly logger = new Logger(AuthService.name);

  async checkNextAuthTokenIsValid(authToken: AuthToken | null): Promise<boolean> {
    // FIXME: Implement actual token validation logic
    return !!authToken?.id;
  }

  public async signIn(args: LoginArgs): Promise<AuthToken> {
    try {
      // FIXME: Implement actual login logic
      const { credentials } = args.input;
      this.logger.info('User Sign In credentials', credentials);
      return {
        id: crypto.randomUUID(),
        username: credentials.username,
      };
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: error.message,
        });
      }
      if (error instanceof TRPCError) throw error;
      // TODO: Logging
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Failed to login',
      });
    }
  }

  public async signOut(args: LogoutArgs): Promise<void> {
    // FIXME: Implement actual logout logic
    this.logger.info('User signed out', args);
  }
}

export const authService = new AuthService();
