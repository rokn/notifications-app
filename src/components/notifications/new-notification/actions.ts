'use server';
import { zfd } from 'zod-form-data';
import { z } from 'zod';
import { zu } from 'zod_utilz';
import { NotificationTypeIdentifier } from '@prisma/client';
import prisma from '@/db';

const schema = zfd.formData({
  typeIdentifier: zfd.text(z.nativeEnum(NotificationTypeIdentifier)),
  senderName: zfd.text().optional(),
  additionalData: zfd.text(z.record(zu.json())).optional(),
});

export interface CreateNotificationResult {
  ok?: boolean;
  errors?: z.ZodIssue[];
  errorMessage?: string;
};

export async function createNotification(prev: any, formData: FormData): Promise<CreateNotificationResult> {
  // print form data:
  const validation = schema.safeParse(formData);
  if (!validation.success) {
    return {
      ok: false,
      errors: validation.error.issues,
    };
  }

  try {
    await prisma.notification.create({ data: validation.data });
  } catch (e) {
    return {
      ok: false,
      errorMessage: 'Failed to create notification',
    };
  }

  return { ok: true };
}