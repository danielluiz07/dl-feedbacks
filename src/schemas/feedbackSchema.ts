import z from "zod";

export const feedbackSchema = z.object({
    body: z.object({
        name: z.string({message: "É necessário colocar um Nome"}).min(2, {message: "O nome é necessário pelo menos 2 caracteres"}),
        message: z.string({message: "Para o envio do Forms é necessário colocar um feedback"}).min(5, "O feedback preciosa ter pelo menos 5 caracteres")
    })
})

export type FeedbackInput = z.infer<typeof feedbackSchema>;

