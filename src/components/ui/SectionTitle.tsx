import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTitle({ children, className = '' }: SectionTitleProps) {
  return (
    <h2 className={`text-4xl font-bold text-center mb-16 ${className}`}>
      {children}
    </h2>
  );
}