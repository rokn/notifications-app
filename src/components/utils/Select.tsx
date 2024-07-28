import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as RSelect from '@radix-ui/react-select';
import clsx from 'clsx';
import React from 'react';

interface RootProps extends RSelect.SelectProps {
  children: React.ReactNode;
}

export const Root: React.FC<RootProps> = ({ children, ...props }) => {
  return (
    <RSelect.Root {...props}>
      <RSelect.Trigger className='inline-flex default-input dark:bg-gray-800 dark:text-gray-100 gap-1 p-2 hover:bg-gray-300 dark:hover:bg-gray-900'>
        <RSelect.Value />
        <RSelect.Icon className='ml-2'>
          <ChevronDownIcon />
        </RSelect.Icon>
      </RSelect.Trigger>
      <RSelect.Portal>
        <RSelect.Content className='z-50'>
          <RSelect.ScrollUpButton className='flex items-center justify-center text-gray-700 dark:text-gray-300'>
            <ChevronUpIcon />
          </RSelect.ScrollUpButton>
          <RSelect.Viewport className='bg-white dark:bg-gray-800 p-2 rounded-lg shadow-lg'>
            <RSelect.Group>
              {children}
            </RSelect.Group>
          </RSelect.Viewport>
          <RSelect.ScrollDownButton className='flex items-center justify-center text-gray-700 dark:text-gray-300'>
            <ChevronDownIcon />
          </RSelect.ScrollDownButton>
        </RSelect.Content>
      </RSelect.Portal>
    </RSelect.Root>
  );
};

export const Item = React.forwardRef<HTMLDivElement, RSelect.SelectItemProps>(({ children, ...props }, ref) => {
  return (
    <RSelect.Item ref={ref} {...props}
      className={clsx(
        'relative flex items-center px-8 py-2 rounded-md text-sm text-gray-700 dark:text-gray-300 font-medium focus:bg-gray-100 dark:focus:bg-gray-900',
        'focus:outline-none select-none',
      )}>
      <RSelect.ItemText>{children}</RSelect.ItemText>
      <RSelect.ItemIndicator className='absolute left-2 inline-flex items-center'>
        <CheckIcon />
      </RSelect.ItemIndicator>
    </RSelect.Item>
  );
});
Item.displayName = 'Item';