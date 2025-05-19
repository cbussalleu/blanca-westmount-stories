
import React from 'react';

const MethodologyDiagram = () => {
  return (
    <div className="flex justify-center mb-12">
      <svg width="460" height="340" viewBox="0 0 460 340" xmlns="http://www.w3.org/2000/svg" className="max-w-full">
        {/* Left Circle - Human Systems with Animation */}
        <circle 
          cx="170" 
          cy="150" 
          r="110" 
          fill="none" 
          stroke="#333" 
          strokeWidth="1.5"
          opacity="0.9"
        >
          <animate 
            attributeName="r" 
            values="110;115;110" 
            dur="6s" 
            repeatCount="indefinite" 
          />
        </circle>
        
        {/* Right Circle - Functional Systems with Animation */}
        <circle 
          cx="290" 
          cy="150" 
          r="110" 
          fill="none" 
          stroke="#333" 
          strokeWidth="1.5"
          opacity="0.9"
        >
          <animate 
            attributeName="r" 
            values="110;115;110" 
            dur="6s" 
            repeatCount="indefinite" 
            begin="3s"
          />
        </circle>
        
        {/* Human Systems Text */}
        <text 
          x="120" 
          y="100" 
          textAnchor="middle" 
          className="font-merriweather" 
          fontFamily="Merriweather" 
          fontSize="14" 
          fontWeight="600"
        >
          Human Systems
        </text>
        
        {/* Human Systems List */}
        <text x="70" y="130" fontFamily="Merriweather" fontSize="12">• Behaviors</text>
        <text x="70" y="155" fontFamily="Merriweather" fontSize="12">• Culture</text>
        <text x="70" y="180" fontFamily="Merriweather" fontSize="12">• Relationships</text>
        
        {/* Functional Systems Text */}
        <text 
          x="340" 
          y="100" 
          textAnchor="middle" 
          className="font-merriweather" 
          fontFamily="Merriweather" 
          fontSize="14" 
          fontWeight="600"
        >
          Functional Systems
        </text>
        
        {/* Functional Systems List */}
        <text x="290" y="130" fontFamily="Merriweather" fontSize="12">• Processes</text>
        <text x="290" y="155" fontFamily="Merriweather" fontSize="12">• Technology</text>
        <text x="290" y="180" fontFamily="Merriweather" fontSize="12">• Metrics</text>
        
        {/* SERVICE DESIGN Box */}
        <rect 
          x="180" 
          y="220" 
          width="100" 
          height="40" 
          rx="6" 
          fill="white" 
          stroke="#333" 
          strokeWidth="1.5"
        />
        
        <text 
          x="230" 
          y="245" 
          textAnchor="middle" 
          fontFamily="Merriweather" 
          fontSize="12" 
          fontWeight="700"
        >
          SERVICE DESIGN
        </text>
        
        {/* Bottom Labels */}
        <text 
          x="120" 
          y="300" 
          textAnchor="middle" 
          fontFamily="Merriweather" 
          fontSize="11"
          fontStyle="italic"
        >
          Human experiences
        </text>
        <text 
          x="120" 
          y="320" 
          textAnchor="middle" 
          fontFamily="Merriweather" 
          fontSize="11"
          fontStyle="italic"
        >
          can only be enabled
        </text>
        
        <text 
          x="340" 
          y="300" 
          textAnchor="middle" 
          fontFamily="Merriweather" 
          fontSize="11"
          fontStyle="italic"
        >
          Functional elements
        </text>
        <text 
          x="340" 
          y="320" 
          textAnchor="middle" 
          fontFamily="Merriweather" 
          fontSize="11"
          fontStyle="italic"
        >
          can be designed and controlled
        </text>
        
        {/* Decorative Arrow */}
        <line x1="70" y1="310" x2="390" y2="310" stroke="#333" strokeWidth="1" strokeDasharray="2,2" />
        <polyline points="70,310 60,305 60,315 70,310" fill="#333" />
        <polyline points="390,310 400,305 400,315 390,310" fill="#333" />
      </svg>
    </div>
  );
};

export default MethodologyDiagram;
