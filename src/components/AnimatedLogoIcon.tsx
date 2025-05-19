
import React from 'react';

const AnimatedLogoIcon = ({ className = '' }: { className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={`h-full w-auto ${className}`}
    >
      {/* Define gradient for the moving water/spark effect */}
      <defs>
        <linearGradient id="sparkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
          <stop offset="50%" stopColor="rgba(255, 255, 255, 0.8)">
            <animate
              attributeName="offset"
              from="-1"
              to="2"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </linearGradient>
        
        {/* Define the path for animation */}
        <path id="topPath" d="M20 25 H80" />
        <path id="middlePath" d="M20 50 H80" />
        <path id="bottomPath" d="M20 75 H80" />
        
        {/* Define mask for spark effect */}
        <mask id="lineMask">
          <path d="M20 25 H80 M20 50 H80 M20 75 H80" stroke="white" strokeWidth="2" />
        </mask>
      </defs>
      
      {/* Static lines (base) */}
      <path 
        d="M20 25 H80 M20 50 H80 M20 75 H80" 
        stroke="black" 
        strokeWidth="2"
        fill="none"
      />
      
      {/* Animated flowing effect using stroke-dasharray */}
      <path 
        d="M20 25 H80" 
        stroke="url(#sparkGradient)" 
        strokeWidth="3"
        fill="none"
        strokeDasharray="5,10"
      >
        <animate 
          attributeName="stroke-dashoffset" 
          from="15" 
          to="0" 
          dur="1.5s" 
          repeatCount="indefinite" 
        />
      </path>
      
      <path 
        d="M20 50 H80" 
        stroke="url(#sparkGradient)" 
        strokeWidth="3"
        fill="none"
        strokeDasharray="5,10"
      >
        <animate 
          attributeName="stroke-dashoffset" 
          from="15" 
          to="0" 
          dur="1.5s" 
          begin="0.5s"
          repeatCount="indefinite" 
        />
      </path>
      
      <path 
        d="M20 75 H80" 
        stroke="url(#sparkGradient)" 
        strokeWidth="3"
        fill="none"
        strokeDasharray="5,10"
      >
        <animate 
          attributeName="stroke-dashoffset" 
          from="15" 
          to="0" 
          dur="1.5s"
          begin="1s" 
          repeatCount="indefinite" 
        />
      </path>
      
      {/* Spark particles */}
      <circle r="2" fill="#ffffff">
        <animateMotion 
          path="M20 25 H80" 
          dur="2s" 
          repeatCount="indefinite"
          rotate="auto"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      
      <circle r="2" fill="#ffffff">
        <animateMotion 
          path="M20 50 H80" 
          dur="2s"
          begin="0.7s" 
          repeatCount="indefinite"
          rotate="auto"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="2s"
          begin="0.7s"
          repeatCount="indefinite"
        />
      </circle>
      
      <circle r="2" fill="#ffffff">
        <animateMotion 
          path="M20 75 H80" 
          dur="2s"
          begin="1.4s" 
          repeatCount="indefinite"
          rotate="auto"
        />
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="2s"
          begin="1.4s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default AnimatedLogoIcon;
