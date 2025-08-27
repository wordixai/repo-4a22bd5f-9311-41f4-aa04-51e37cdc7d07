import React from 'react';
import { cn } from '@/lib/utils';

interface PopButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'orange' | 'pink' | 'yellow' | 'blue';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const PopButton: React.FC<PopButtonProps> = ({ 
  variant = 'orange', 
  size = 'md', 
  className, 
  children, 
  onClick,
  ...props 
}) => {
  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 150);
    if (onClick) onClick(e);
  };

  const baseClasses = "font-handwritten font-semibold border-4 border-black transition-all duration-150 ease-out rounded-lg relative overflow-hidden";
  
  const variantClasses = {
    orange: "bg-pop-orange text-white shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] active:shadow-[2px_2px_0px_black]",
    pink: "bg-pop-pink text-white shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] active:shadow-[2px_2px_0px_black]",
    yellow: "bg-pop-yellow text-black shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] active:shadow-[2px_2px_0px_black]",
    blue: "bg-pop-blue text-white shadow-[4px_4px_0px_black] hover:shadow-[6px_6px_0px_black] active:shadow-[2px_2px_0px_black]"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-lg",
    lg: "px-8 py-4 text-xl"
  };
  
  const transformClasses = isClicked 
    ? "translate-y-1 scale-95" 
    : "hover:-translate-y-1 hover:scale-105 active:translate-y-1 active:scale-95";

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        transformClasses,
        isClicked && "wiggle-pop",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default PopButton;