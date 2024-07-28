import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button className='bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded' {...props}>
      {children}
    </button>
  );
};

export default Button;