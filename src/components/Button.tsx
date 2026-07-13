import React from 'react';
export interface ButtonProps { variant?: 'primary' | 'secondary' | 'ghost' | 'danger'; size?: 'sm' | 'md' | 'lg'; disabled?: boolean; loading?: boolean; children: React.ReactNode; onClick?: () => void; }
export function Button({ variant = 'primary', size = 'md', disabled, loading, children, onClick }: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = { primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500', secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500', ghost: 'bg-transparent text-gray-700 hover:bg-gray-100', danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500' };
  const sizes = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2 text-base', lg: 'px-6 py-3 text-lg' };
  return React.createElement('button', { className: ${base}  , disabled: disabled || loading, onClick }, loading ? 'Loading...' : children);
}
