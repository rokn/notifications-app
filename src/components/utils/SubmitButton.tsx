import React from 'react';
import Button, { ButtonProps } from './Button';

interface SubmitButtonProps extends ButtonProps {
  form?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ form, ...props }) => {
  return (
    <Button form={form} type='submit' {...props} />
  );
};

export default SubmitButton;