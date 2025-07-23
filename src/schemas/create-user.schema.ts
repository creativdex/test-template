import * as z from 'zod';

export const createUserBodySchema = z.object({
  id: z.number(),
  username: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.email(),
  password: z.string(),
  phone: z.string(),
  userStatus: z.number(),
});

export const createUserRespSchema = z.object({
  code: z.number(),
  type: z.string(),
  message: z.string(),
});

export type CreateUserBodyType = z.infer<typeof createUserBodySchema>;
export type CreateUserRespType = z.infer<typeof createUserRespSchema>;
