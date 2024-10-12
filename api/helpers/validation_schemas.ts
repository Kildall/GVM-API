import { z } from "zod";

const castToNumberSchema = z
  .custom<number>()
  .refine((value) => value ?? false, "Required")
  .refine((value) => Number.isFinite(Number(value)), "Invalid number")
  .transform((value) => Number(value));

const orderBySchema = z
  .string()
  .transform((str) => {
    try {
      return JSON.parse(str);
    } catch {
      return str; // If it's not valid JSON, return the original string
    }
  })
  .pipe(
    z
      .record(z.string().min(3).max(64), z.enum(["desc", "asc"]))
      .refine(
        (val) => Object.keys(val).length > 0,
        "At least one orderBy field is required"
      )
  );

export { castToNumberSchema, orderBySchema };
