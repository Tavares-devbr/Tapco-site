import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`glass p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:border-brand-primary/50 ${className}`}>
      {children}
    </div>
  );
};
