import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const feedbacks = await prisma.feedback.findMany({
        orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(feedbacks)
}

export async function POST(request: Request) {
    try {
        const {name, message} = await request.json()
        const newFeedback = await prisma.feedback.create({
            data: {name, message}
        })

        return NextResponse.json(newFeedback, {status: 201})
    } catch (error) {
        return NextResponse.json({Error: "Erro ao criar um feedback"}, {status: 500})
    }
}