
import React from 'react';

const AnimatedVennDiagram = () => {
  return (
    <div className="flex flex-col items-center my-12">
      <div className="relative w-full max-w-md h-64 mx-auto">
        {/* Venn Diagram SVG */}
        <svg 
          viewBox="0 0 400 250" 
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* First Circle - Design */}
          <circle 
            cx="150" 
            cy="120" 
            r="100" 
            fill="rgba(255, 240, 200, 0.6)" 
            stroke="#000" 
            strokeWidth="1"
            className="transition-all duration-700 hover:fill-[#f8e8c0]"
          >
            <animate
              attributeName="opacity"
              values="0.6;0.8;0.6"
              dur="5s"
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Second Circle - Business */}
          <circle 
            cx="250" 
            cy="120" 
            r="100" 
            fill="rgba(220, 238, 220, 0.6)" 
            stroke="#000" 
            strokeWidth="1"
            className="transition-all duration-700 hover:fill-[#d8ecd8]"
          >
            <animate
              attributeName="opacity"
              values="0.6;0.8;0.6"
              dur="5s"
              begin="1.5s"
              repeatCount="indefinite"
            />
          </circle>
          
          {/* Text Labels */}
          <text 
            x="100" 
            y="120" 
            fontFamily="Merriweather, serif" 
            fontSize="14"
            textAnchor="middle"
            className="font-merriweather"
          >
            DESIGN
          </text>
          
          <text 
            x="300" 
            y="120" 
            fontFamily="Merriweather, serif" 
            fontSize="14"
            textAnchor="middle"
            className="font-merriweather"
          >
            BUSINESS
          </text>
          
          {/* Intersection Text */}
          <text 
            x="200" 
            y="120" 
            fontFamily="Merriweather, serif" 
            fontSize="14"
            textAnchor="middle"
            fontWeight="bold"
            className="font-merriweather"
          >
            SERVICE
            <tspan x="200" y="140">DESIGN</tspan>
          </text>
          
          {/* Service Design Box */}
          <rect
            x="160"
            y="165"
            width="80"
            height="35"
            rx="4"
            fill="#000"
          >
            <animate
              attributeName="opacity"
              values="0;1"
              dur="1.5s"
              begin="0.5s"
              fill="freeze"
            />
          </rect>
          
          <text
            x="200"
            y="188"
            fontFamily="Merriweather, serif"
            fontSize="14"
            fill="#fff"
            textAnchor="middle"
            className="font-merriweather"
          >
            IMPACT
            <animate
              attributeName="opacity"
              values="0;1"
              dur="1s"
              begin="1s"
              fill="freeze"
            />
          </text>
        </svg>
      </div>
      
      {/* Descriptive text */}
      <p className="text-sm font-merriweather max-w-md text-center mt-4">
        Service Design bridges the gap between design thinking and business strategy, 
        creating solutions that are both user-centered and business-viable.
      </p>
      
      {/* Decorative arrow */}
      <div className="mt-8 mb-4">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M12 5L12 19M12 19L5 12M12 19L19 12" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="24"
              to="0"
              dur="1.5s"
              fill="freeze"
            />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedVennDiagram;
