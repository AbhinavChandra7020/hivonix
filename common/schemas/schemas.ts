// common/schemas/contactFormSchema.ts
import { z } from "zod";

export const schemas = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be 10 digits"),
  role: z.enum(["Student", "Teacher"], {
    errorMap: () => ({ message: "Role must be Student or Teacher" }),
  }),
  university: z.string().min(1, "University is required"),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof schemas>;
