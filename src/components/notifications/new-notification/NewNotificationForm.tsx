'use client';
import Input from '@/components/utils/Input';
import * as Select from '@/components/utils/Select';
import { NotificationTypeIdentifier } from '@prisma/client';
import * as Form from '@radix-ui/react-form';
import React, { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { createNotification } from './actions';
import { useRouter } from 'next/navigation';

interface NewNotificationFormProps {
  id?: string;
  onComplete?: () => void;
}

interface NotificationTypeSelectProps {
  value?: NotificationTypeIdentifier;
  onValueChange?: (value: NotificationTypeIdentifier) => void;
}

const NotificationTypeSelect: React.FC<NotificationTypeSelectProps> = ({ value, onValueChange }) => {
  const items = [
    { value: NotificationTypeIdentifier.PlatformUpdate, name: 'Platform Update' },
    { value: NotificationTypeIdentifier.CommentTag, name: 'Comment Tag' },
    { value: NotificationTypeIdentifier.AccessGranted, name: 'Access Granted' },
    { value: NotificationTypeIdentifier.JoinWorkspace, name: 'Join Workspace' },
  ];

  return (
    <Select.Root defaultValue={items[0].value} name='typeIdentifier' onValueChange={onValueChange} value={value}>
      {items.map(
        (item) => (
          <Select.Item key={item.value} value={item.value}> {item.name} </Select.Item>
        ),
      )}
    </Select.Root>
  );
};

const SenderNotificationInputs = (errors: Zod.ZodIssue[]) => {
  const senderNameErrors = findErrors('senderName', errors);
  return (
    <Input label='Sender' name='senderName' type='text' required>
      <Form.Message className='text-red-500 text-sm' match='valueMissing'>
        Sender is required.
      </Form.Message>
      {senderNameErrors.map((error, index) => (
        <Form.Message key={index} className='text-red-500 text-sm' >
          {error}
        </Form.Message>
      ))}
    </Input>
  );
};

const PlatformUpdateInputs = (errors: Zod.ZodIssue[]) => {
  const versionErrors = findErrors('additionalData.version', errors);
  return (
    <Input label='Version' name='additionalData.version' type='text' required>
      <Form.Message className='text-red-500 text-sm' match='valueMissing'>
        Version is required.
      </Form.Message>
      {versionErrors.map((error, index) => (
        <Form.Message key={index} className='text-red-500 text-sm'>
          {error}
        </Form.Message>
      ))}
    </Input>
  );
};

const inputsMap = {
  [NotificationTypeIdentifier.PlatformUpdate]: PlatformUpdateInputs,
  [NotificationTypeIdentifier.CommentTag]: SenderNotificationInputs,
  [NotificationTypeIdentifier.AccessGranted]: SenderNotificationInputs,
  [NotificationTypeIdentifier.JoinWorkspace]: SenderNotificationInputs,
};

const NewNotificationForm: React.FC<NewNotificationFormProps> = ({ id, onComplete }) => {
  const [state, formAction] = useFormState(createNotification, {});
  const [notificationType, setNotificationType] = useState<NotificationTypeIdentifier>(NotificationTypeIdentifier.PlatformUpdate);
  const router = useRouter();

  useEffect(() => {
    if (state.ok && onComplete) {
      router.refresh();
      onComplete();
    }
  }, [state.ok, onComplete]);

  return (
    <Form.Root action={formAction} className='w-full p-4' id={id}>
      <Form.Field className='mb-3' name='type'>
        <Form.Label className='mb-1 block text-sm text-slate-800 dark:text-white'>Notification Type</Form.Label>
        <Form.Control asChild>
          <NotificationTypeSelect value={notificationType} onValueChange={setNotificationType} />
        </Form.Control>
      </Form.Field>
      {inputsMap[notificationType](state.errors ?? [])}

      {state.errorMessage!! && (
        <p className='text-red-500 text-sm'>
          {state.errorMessage}
        </p>
      )}
    </Form.Root >
  );
};

const findErrors = (fieldName: string, errors?: Zod.ZodIssue[]) => {
  if (!errors) return [];
  return errors
    .filter((item) => {
      return item.path.includes(fieldName);
    })
    .map((item) => item.message);
};

export default NewNotificationForm;