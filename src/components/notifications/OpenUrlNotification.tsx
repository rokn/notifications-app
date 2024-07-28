'use client';
import React from 'react';
import Notification, { NotificationProps } from './Notification';
import { useRouter } from 'next/navigation';

interface OpenUrlNotificationProps {
  href: string;
}

const OpenUrlNotification: React.FC<OpenUrlNotificationProps & NotificationProps> = ({ href, ...props }) => {
  const router = useRouter();
  return (
    <Notification onClick={() => router.push(href)} {...props} />
  );
};

export default OpenUrlNotification;