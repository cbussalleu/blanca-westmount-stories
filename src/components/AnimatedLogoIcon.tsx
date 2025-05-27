
import React from 'react';

const AnimatedLogoIcon = ({ className = '' }: { className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={`h-full w-auto ${className}`}
    >
      {/* Removed the three horizontal lines */}
    </svg>
  );
};

export default AnimatedLogoIcon;
