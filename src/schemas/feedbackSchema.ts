import z from "zod";

export const feedbackSchema = z.object({
  name: z.string().min(2, { message: "Mínimo 2 caracteres" }),
  message: z.string().min(5, { message: "Mínimo 5 caracteres" })
});