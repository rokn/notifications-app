'use client';
import React from 'react';
import { Viewport } from '@radix-ui/react-navigation-menu';

const NavigationViewport: React.FC = () => {
  return (
    <div className='absolute flex justify-end pe-2 w-[100%] top-[100%]' style={{ perspective: '2000px' }}>
      <Viewport className='relative w-[100%] sm:w-auto mt-2 shadow-lg rounded-md overflow-hidden origin-[top_center] bg-orange-100 dark:bg-gray-800'
        onPointerLeave={(event) => event.preventDefault()}
      />
    </div>
  );
};

export default NavigationViewport;