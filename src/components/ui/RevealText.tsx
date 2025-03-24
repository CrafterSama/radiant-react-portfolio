
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

const RevealText = ({ text, className = "", delay = 0, tag = 'span' }: RevealTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const textElement = target.querySelector('.text-reveal') as HTMLElement;
          
          if (textElement) {
            textElement.style.animationDelay = `${delay}s`;
            textElement.classList.add('animate-reveal-text');
          }
          
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.1 });
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [delay]);
  
  const Tag = tag;
  
  return (
    <div ref={containerRef} className="text-reveal-container">
      <Tag className={cn('text-reveal', className)}>
        {text}
      </Tag>
    </div>
  );
};

export default RevealText;
