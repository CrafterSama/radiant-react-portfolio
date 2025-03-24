
import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ 
  children, 
  className,
  ...props 
}) => {
  return (
    <div 
      className={cn("w-full max-w-7xl mx-auto px-6 md:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
