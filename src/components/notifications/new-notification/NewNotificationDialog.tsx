'use client';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { clsx } from 'clsx';
import React from 'react';
import Button from '@/components/utils/Button';
import NewNotificationForm from './NewNotificationForm';
import SubmitButton from '@/components/utils/SubmitButton';

interface NewNotificationDialogProps { }

const NewNotificationDialog: React.FC<NewNotificationDialogProps> = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button>Create New</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 z-20 bg-black/50' />
        <Dialog.Content
          className={clsx(
            'fixed z-50',
            'w-[95vw] max-w-xs rounded-lg',
            'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
            'bg-white dark:bg-gray-600',
          )}
        >
          <div className='flex justify-between items-center rounded-t-lg p-3 bg-orange-100 dark:bg-gray-800 text-slate-800 dark:text-slate-100'>
            <Dialog.Title className='ml-2 text-lg font-semibold'>
              Create New Notification
            </Dialog.Title>
            <Dialog.Close
              className={clsx(
                'rounded-full p-1',
                'focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-75',
              )}
            >
              <Cross2Icon className='h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400' />
            </Dialog.Close>
          </div>

          <NewNotificationForm id='notification-form' onComplete={() => setOpen(false)} />

          <div className='p-3 flex justify-center'>
            <SubmitButton form='notification-form'>Create</SubmitButton>
          </div>

        </Dialog.Content>
      </Dialog.Portal >
    </Dialog.Root >
  );
};

export default NewNotificationDialog;