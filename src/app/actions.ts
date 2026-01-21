'use server';

import { prisma } from '@/lib/prisma';
import { feedbackSchema } from '@/schemas/feedbackSchema';
import { revalidatePath } from 'next/cache';

export async function createFeedbackAction(formData: { name: string; message: string }) {
  const result = feedbackSchema.safeParse(formData);
  
  if (!result.success) {
    return { error: result.error.flatten().fieldErrors };
  }

  await prisma.feedback.create({
    data: result.data,
  });

  revalidatePath('/');
  return { success: true };
}