'use client';
import React from 'react';
import Notification, { NotificationProps } from './Notification';

interface AlertNotificationProps {
  alertMessage: string;
}

const AlertNotification: React.FC<AlertNotificationProps & NotificationProps> = ({ alertMessage, ...props }) => {
  return (
    <Notification onClick={() => alert(alertMessage)} {...props} />
  );
};

export default AlertNotification;