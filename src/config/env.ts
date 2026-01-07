import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  DATABASE_URL: z.string().url({ message: "DATABASE_URL must be a valid URL" }),
  JWT_SECRET: z
    .string()
    .min(10, { message: "JWT_SECRET must be at least 10 characters long" }),
});

const envServer = envSchema.safeParse(process.env);

if (!envServer.success) {
  console.error("❌ Invalid environment variables:");
  console.error(JSON.stringify(envServer.error.flatten().fieldErrors, null, 2));
}

export const env = envServer.success
  ? envServer.data
  : ({} as z.infer<typeof envSchema>);
