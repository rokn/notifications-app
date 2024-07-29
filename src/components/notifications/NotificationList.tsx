'use server';
import React from 'react';
import AlertNotification from './AlertNotification';
import OpenUrlNotification from './OpenUrlNotification';
import prisma from '@/db';
import { NotificationProps } from './Notification';

const fetchNotifications = async () => {
  return prisma.notification.findMany({
    include: {
      sender: true,
      type: true,
    },
    orderBy: [
      {
        read: 'asc',
      },
      {
        createdAt: 'desc',
      }
    ]
  });
};

type NotificationType = Awaited<ReturnType<typeof fetchNotifications>>[number]

const formatString = (str: string, data: Record<string, string>) => {
  return str?.replace(/\{(.*?)}/g, (_, key) => data.hasOwnProperty(key) ? data[key] : '');
};

const createNotification = (notification: NotificationType) => {
  let formatVars = { senderName: notification.senderName ?? '' };
  if (typeof notification?.additionalData === 'object') {
    formatVars = { ...formatVars, ...notification.additionalData };
  }
  const message = formatString(notification.type.messageTemplate, formatVars);
  let notificationProps: NotificationProps = {
    id: notification.id,
    type: notification.typeIdentifier,
    message: message,
    avatarUrl: notification.sender?.avatarUrl,
    senderName: notification.sender?.name,
    read: notification.read,
  };

  if (notification.type.actionType === 'Alert') {
    const alertMessage = formatString(notification.type.actionTemplate ?? '', formatVars);
    return <AlertNotification
      alertMessage={alertMessage}
      {...notificationProps}
    />;
  } else if (notification.type.actionType === 'OpenUrl') {
    const href = formatString(notification.type.actionTemplate ?? '/', formatVars);
    return <OpenUrlNotification
      href={href}
      {...notificationProps}
    />;
  }
};

const NotificationList: React.FC = async () => {
  const notifications = await fetchNotifications();

  return (
    <div className='flex flex-col space-y-3 rounded-md overflow-y-auto'>
      {notifications.map(createNotification)}
    </div>
  );
};

export default NotificationList;