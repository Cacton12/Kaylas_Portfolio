import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  details?: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, details, children }: ModalProps) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-80 backdrop-blur-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
          tabIndex={-1}
        >
          <motion.div
            className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-lg shadow-2xl max-w-lg w-full relative border dark:neutral-gray-700"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            {/* Header */}
            <header className="flex items-center justify-between border-b dark:border-neutral-700 pb-2 mb-4">
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{title || 'Details'}</h2>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 text-2xl font-bold leading-none"
              >
                &times;
              </button>
            </header>

            {/* Details Section */}
            {details && (
              <section className="mb-4 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed whitespace-pre-wrap">
                {details}
              </section>
            )}

            {/* Main Content */}
            <section>{children}</section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
