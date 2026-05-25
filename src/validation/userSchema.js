import { z } from "zod";

export const userSchema = z.object({
  fullname: z
    .string()
    .min(1, "Full name is required")
    .min(3, "Full name must be atleast 3 characters"),

  age: z.number().int("Age must be a whole number"),

  email: z.string().email("Invalid email format"),

  phone: z
    .string()
    .min(10, "Phone must be 10 digits")
    .max(15, "Phone must be at most 15 digits")
    .regex(/^\d+$/, "Phone must contain only digits"),

  addressCity: z
    .string()
    .min(2, "City must be at least 2 characters")
    .max(50, "City must be at most 50 characters"),

  companyName: z
    .string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be at most 100 characters"),
});
