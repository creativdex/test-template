import * as z from "zod";

export const createUserSchema = z.object({
    id: z.number(),
    username: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.email(),
    password: z.string(),
    phone: z.string(),
    userStatus: z.number()
});

export type CreateUserType = z.infer<typeof createUserSchema>;