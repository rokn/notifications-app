'use server';

import prisma from '@/db';

export const fetchNotifications = async () => {
  return prisma.notification.findMany({
    include: {
      sender: true,
      type: true,
    },
  });
};

export const markNotificationAsRead = async (id: number) => {
  return prisma.notification.update({
    where: { id },
    data: { read: true },
  });
};