import React from 'react';
export interface CardProps { children: React.ReactNode; className?: string; padding?: 'none' | 'sm' | 'md' | 'lg'; variant?: 'elevated' | 'outlined' | 'flat'; }
export function Card({ children, className = '', padding = 'md', variant = 'elevated' }: CardProps) {
  const paddings = { none: '', sm: 'p-3', md: 'p-5', lg: 'p-7' };
  const variants = { elevated: 'bg-white shadow-md rounded-xl', outlined: 'bg-white border border-gray-200 rounded-xl', flat: 'bg-gray-50 rounded-xl' };
  return React.createElement('div', { className: ${variants[variant]}   }, children);
}
