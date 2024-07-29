'use server';

import prisma from '@/db';

export const fetchNotifications = async () => {
  // TODO: add pagination :/
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

export const getUnreadNotificationCount = async () => {
  return prisma.notification.count({
    where: { read: false },
  });
};