import { z } from "zod";

const RegisterSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email("Invalid Email"),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
});

const LoginSchema = z.object({
  email: z.string().email("Invalid Email"),
  password: z.string().min(6),
})

export { RegisterSchema, LoginSchema };
