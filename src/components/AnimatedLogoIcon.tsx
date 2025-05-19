
import React from 'react';

const AnimatedLogoIcon = ({ className = '' }: { className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={`h-full w-auto ${className}`}
    >
      <path 
        d="M20 25 H80 M20 50 H80 M20 75 H80" 
        stroke="black" 
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

export default AnimatedLogoIcon;
