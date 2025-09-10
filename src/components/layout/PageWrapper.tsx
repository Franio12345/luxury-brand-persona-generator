// src/components/layout/PageWrapper.tsx

import React from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const PageWrapper = ({ children, className = '' }: PageWrapperProps) => {
  return (
    <div className={`container mx-auto px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
};