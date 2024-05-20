import { z } from 'zod';

export const LoginValidation = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export type LoginValidationType = z.infer<typeof LoginValidation>;
