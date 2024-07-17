import { z } from "zod";

export const signupFormSchema = z.object({
  email: z
    .string({
      required_error: "Email is required"
    })
    .min(2)
    .regex(new RegExp('^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'))
    .max(25),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});
