import * as Nav from '@radix-ui/react-navigation-menu';
import React from 'react';
import NotificationBell from '@/components/notifications/NotificationBell';
import NotificationList from '@/components/notifications/NotificationList';

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
          <Nav.Content className='rounded-lg' >
            <NotificationList />
          </Nav.Content>
        </Nav.Item>
      </Nav.List>

      <div className='absolute flex justify-end pe-2 w-[100%] top-[100%]' style={{ perspective: '2000px', }}>
        <Nav.Viewport className='relative w-[100%] sm:w-auto mt-2 shadow-lg rounded-md overflow-hidden origin-[top_center] bg-orange-100 dark:bg-gray-800' />
      </div>

    </Nav.Root >
  );
};

export default NavigationMenu;