import { z } from "zod";

export const signupFormSchema = z.object({
  email: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(25),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});
