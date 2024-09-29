import dotenv from 'dotenv';
import { z } from 'zod';

// Load environment variables from .env file
dotenv.config();

// Define the schema for our environment variables
const envSchema = z.object({
  ENVIRONMENT: z.enum(['development', 'production', 'test']),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32),
  MAILERSEND_API_KEY: z.string(),
  PORT: z.custom<number>()
    .refine((value) => value ?? false, "Required")
    .refine((value) => Number.isFinite(Number(value)), "Invalid number")
    .transform((value) => Number(value)),
})


const parseResult = envSchema.safeParse(process.env);

if(!parseResult.success) {
  console.error(parseResult.error.errors.map(x => { return {path: x.path, error: x.message}}))
  throw new Error('Invalid environment variables')
}

export const env = parseResult.data;