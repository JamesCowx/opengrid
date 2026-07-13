import React from 'react';
export interface ModalProps { open: boolean; onClose: () => void; title: string; children: React.ReactNode; }
export function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null;
  return React.createElement('div', { className: 'fixed inset-0 z-50 flex items-center justify-center bg-black/50' },
    React.createElement('div', { className: 'bg-white rounded-2xl p-6 max-w-md w-full shadow-xl' },
      React.createElement('div', { className: 'flex items-center justify-between mb-4' },
        React.createElement('h2', { className: 'text-lg font-semibold' }, title),
        React.createElement('button', { onClick: onClose, className: 'text-gray-400 hover:text-gray-600' }, 'X')),
      children));
}
