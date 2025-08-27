import React from 'react';
import { cn } from '@/lib/utils';

interface PopCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'dots';
  hover?: boolean;
}

const PopCard: React.FC<PopCardProps> = ({ 
  children, 
  className, 
  variant = 'default',
  hover = true 
}) => {
  const baseClasses = "border-4 border-black rounded-2xl overflow-hidden transition-all duration-300 ease-out";
  
  const variantClasses = {
    default: "bg-white shadow-[8px_8px_0px_black]",
    gradient: "gradient-pop-1 shadow-[8px_8px_0px_black]",
    dots: "bg-white dots-pattern shadow-[8px_8px_0px_black]"
  };
  
  const hoverClasses = hover 
    ? "hover:-translate-y-2 hover:shadow-[12px_12px_0px_black] hover:scale-105" 
    : "";

  return (
    <div className={cn(
      baseClasses,
      variantClasses[variant],
      hoverClasses,
      className
    )}>
      {children}
    </div>
  );
};

export default PopCard;