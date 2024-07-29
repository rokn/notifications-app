'use client';
import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import AvatarCircle from '../utils/AvatarCircle';
import { NotificationTypeIdentifier } from '@prisma/client';
import { EnvelopeClosedIcon, EnvelopeOpenIcon } from '@radix-ui/react-icons';
import { markNotificationAsRead } from './actions';
import { useRouter } from 'next/navigation';

export interface NotificationProps {
  id: number;
  type: NotificationTypeIdentifier;
  message: string;
  avatarUrl?: string;
  senderName?: string;
  read?: boolean;
  onClick?: () => void;
}

const colorMap = {
  [NotificationTypeIdentifier.PlatformUpdate]: 'bg-lime-200 dark:bg-lime-700',
  [NotificationTypeIdentifier.CommentTag]: 'bg-amber-200 dark:bg-amber-700',
  [NotificationTypeIdentifier.AccessGranted]: 'bg-cyan-200 dark:bg-cyan-700',
  [NotificationTypeIdentifier.JoinWorkspace]: 'bg-violet-200 dark:bg-violet-700',
};

const Notification: React.FC<NotificationProps> = ({ id, type, message, avatarUrl, senderName, read, onClick }) => {
  avatarUrl = avatarUrl ?? 'https://api.multiavatar.com/CPU.png'; // System default avatar
  const [isRead, setRead] = useState(read);
  const router = useRouter();

  const handleClick = useCallback(async () => {
    onClick?.();
    await markNotificationAsRead(id);
    setRead(true);
    router.refresh();
  }, [id, onClick, router]);

  return (
    <div
      className={clsx(
        'w-full h-24 sm:h-16 rounded-md p-3 flex items-center',
        { 'cursor-pointer': onClick != undefined },
        colorMap[type])}
      onClick={handleClick}
    >
      <AvatarCircle src={avatarUrl} alt={senderName} />
      <div className='mx-3'>
        <p className='font-bold text-sm'> {type} </p>
        <p> {message} </p>
      </div>
      <div className='ml-auto'>
        {isRead ? <EnvelopeOpenIcon /> : <EnvelopeClosedIcon />}
      </div>
    </div >
  );
};

export default Notification;