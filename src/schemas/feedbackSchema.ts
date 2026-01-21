import z from "zod";

export const createFeedbackSchema = z.object({
    body: z.object({
        name: z.string({message: "É necessário colocar um Nome"}).min(2, {message: "O nome é necessário pelo menos 2 caracteres"}),
        message: z.string({message: "Para o envio do Forms é necessário colocar um feedback"})
    })
})