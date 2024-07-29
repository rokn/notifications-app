'use client';
import React from 'react';
import Notification, { NotificationProps } from './Notification';
import Link from '../utils/Link';

interface OpenUrlNotificationProps {
  href: string;
}

const OpenUrlNotification: React.FC<OpenUrlNotificationProps & NotificationProps> = ({ href, ...props }) => {
  return (
    <Link href={href}>
      <Notification {...props} />
    </Link>
  );
};

export default OpenUrlNotification;