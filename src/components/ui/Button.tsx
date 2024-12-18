import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2';
  
  const variants = {
    primary: 'bg-yellow-600 hover:bg-yellow-700 text-white',
    secondary: 'bg-white hover:bg-gray-100 text-yellow-600 border border-yellow-600',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}