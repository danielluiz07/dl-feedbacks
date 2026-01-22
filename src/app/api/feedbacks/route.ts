import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { feedbackSchema } from '@/schemas/feedbackSchema'; 

export async function GET() {
  try {
    const feedbacks = await prisma.feedback.findMany({
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(feedbacks);
  } catch (error) {
    console.error("ERRO NO BANCO:", error); 
    return NextResponse.json({ error: "Erro ao buscar dados" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = feedbackSchema.safeParse(body);

    if (!result.success) {
      console.log("ERRO DE VALIDAÇÃO:", result.error.format());
      return NextResponse.json(
        { errors: result.error }, 
        { status: 400 }
      );
    }
    const { name, message } = result.data;

    const newFeedback = await prisma.feedback.create({
      data: { name, message },
    });

    return NextResponse.json(newFeedback, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
  }
}