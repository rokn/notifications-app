import * as Nav from '@radix-ui/react-navigation-menu';
import React from 'react';
import NotificationBell from '@/components/notifications/NotificationBell';
import NotificationsDropdown from '../notifications/NotificationsDropdown';
import NavigationViewport from './NavigationViewport';

const NavigationMenu = () => {
  return (
    <Nav.Root className='relative bg-orange-100 dark:bg-gray-800 text-slate-800 dark:text-slate-100'>
      <Nav.List className='flex flex-row rounded-b-lg p-4 gap-2 place-content-between'>
        <Nav.Item>
          <Nav.Link href='/' className='font-bold text-2xl text-nowrap'>Notification App</Nav.Link>
        </Nav.Item>
        <Nav.Item className='flex'>
          <Nav.Trigger>
            <NotificationBell />
          </Nav.Trigger>
          <Nav.Content className='rounded-lg'>
            <NotificationsDropdown />
          </Nav.Content>
        </Nav.Item>
      </Nav.List>

      <NavigationViewport />

    </Nav.Root >
  );
};

export default NavigationMenu;