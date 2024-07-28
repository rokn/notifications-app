import React from 'react';
import AlertNotification from './AlertNotification';
import OpenUrlNotification from './OpenUrlNotification';

const NotificationList: React.FC = () => {
  return (
    <div className='flex flex-col space-y-3 p-4 rounded-md'>
      <AlertNotification alertMessage='1.2.3' type={'PlatformUpdate'} message='New features - see what’s new' />
      <OpenUrlNotification href='/comments' type={'CommentTag'} message='Alan Turing tagged you in a comment' senderName='Alan Turing' />
      <OpenUrlNotification href='/chats' type={'AccessGranted'} message='Alan Turing shared a chat with you' senderName='Alan Turing' />
      <OpenUrlNotification href='/workspaces' type={'JoinWorkspace'} message='Alan Turing joined your workspace' senderName='Alan Turing' />
    </div>
  );
};

export default NotificationList;