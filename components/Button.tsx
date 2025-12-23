
import React from 'react';
import { INSTAGRAM_URL } from '../constants.tsx';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const PrimaryButton: React.FC<ButtonProps> = ({ children, className = "" }) => {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white bg-indigo-600 rounded-full shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95 text-center ${className}`}
    >
      {children}
    </a>
  );
};
