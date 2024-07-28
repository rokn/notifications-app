
import React, { HTMLInputTypeAttribute } from 'react';
import * as Form from '@radix-ui/react-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ name, label, children, ...props }) => {
  return (
    <Form.Field className='mb-3' name={name}>
      <Form.Label className='mb-1 block text-sm text-slate-800 dark:text-white'>{label}</Form.Label>
      <Form.Control asChild className='block'>
        <input className='default-input' {...props} />
      </Form.Control>
      {children}
    </Form.Field>
  );
};

export default Input;