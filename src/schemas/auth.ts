import { z } from "zod";

export const RegisterSchema = z.strictObject({
  body: z
    .object({
      username: z
        .string({ error: "Username is required" })
        .min(3, { error: "Username must be at least 3 characters long" })
        .max(30, { error: "Username must be at most 30 characters long" }),
      email: z.email({ error: "Valid email is required" }),
      password: z
        .string({ error: "Password is required" })
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/, {
          error: "Password does not meet security requirements",
        }),
      passwordConfirmation: z.string({
        error: "Password confirmation is required",
      }),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      error: "Passwords do not match",
      path: ["passwordConfirmation"],
    }),
  query: z.object({}).optional(),
  params: z.object({}).optional(),
});

export const LoginSchema = z.strictObject({
  body: z.object({
    identifier: z.coerce
      .string()
      .nonempty({ error: "Username or email is required" }),
    password: z.coerce
      .string()
      .min(8)
      .nonempty({ error: "Password is required" }),
  }),
  query: z.object({}).optional(),
  params: z.object({}).optional(),
});

export type RegisterType = z.infer<typeof RegisterSchema>["body"];

export type LoginType = z.infer<typeof LoginSchema>["body"];
