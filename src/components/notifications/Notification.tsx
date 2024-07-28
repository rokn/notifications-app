'use client';
import clsx from 'clsx';
import React from 'react';
import AvatarCircle from '../utils/AvatarCircle';
import { NotificationTypeIdentifier } from '@prisma/client';

export interface NotificationProps {
  type: NotificationTypeIdentifier;
  message: string;
  avatarUrl?: string;
  senderName?: string;
  onClick?: () => void;
}

const colorMap = {
  [NotificationTypeIdentifier.PlatformUpdate]: 'bg-lime-200 dark:bg-lime-700',
  [NotificationTypeIdentifier.CommentTag]: 'bg-amber-200 dark:bg-amber-700',
  [NotificationTypeIdentifier.AccessGranted]: 'bg-cyan-200 dark:bg-cyan-700',
  [NotificationTypeIdentifier.JoinWorkspace]: 'bg-violet-200 dark:bg-violet-700',
};

const Notification: React.FC<NotificationProps> = ({ type, message, avatarUrl, senderName, onClick }) => {
  avatarUrl = avatarUrl ?? 'https://api.multiavatar.com/CPU.png';
  return (
    <div
      className={clsx(
        'w-full h-24 sm:h-16 rounded-md p-3 flex items-center space-x-3',
        { 'cursor-pointer': onClick != undefined },
        colorMap[type])}
      onClick={onClick}
    >
      <AvatarCircle src={avatarUrl} alt={senderName} />
      <div>
        <p className='font-bold text-sm'> {type} </p>
        <p> {message} </p>
      </div>
    </div >
  );
};

export default Notification;