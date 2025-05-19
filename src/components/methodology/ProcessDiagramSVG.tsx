
import React from 'react';

interface ProcessDiagramSVGProps {
  animate: boolean;
}

const ProcessDiagramSVG = ({ animate }: ProcessDiagramSVGProps) => (
  <svg width="500" height="100" viewBox="0 0 500 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto my-6 max-w-full">
    {/* Static Lines */}
    <line x1="150" y1="50" x2="190" y2="50" stroke="#333" strokeWidth="1" strokeDasharray="4,2" />
    <line x1="310" y1="50" x2="350" y2="50" stroke="#333" strokeWidth="1" strokeDasharray="4,2" />
    <polygon points="185,50 180,47 180,53" fill="#333" />
    <polygon points="345,50 340,47 340,53" fill="#333" />
    
    {/* First Box with Text - Research */}
    <g>
      {animate && (
        <>
          <animateTransform
            id="research-to-design"
            attributeName="transform"
            type="translate"
            from="0 0"
            to="160 0"
            begin="5s"
            dur="0.5s"
            fill="freeze"
          />
          <animateTransform
            id="research-to-design-back"
            attributeName="transform"
            type="translate"
            from="160 0"
            to="0 0"
            begin="research-to-design.end+4s"
            dur="0.5s"
            fill="freeze"
          />
        </>
      )}
      <rect x="30" y="30" width="120" height="40" rx="4" fill="hsla(48, 100%, 92%, 0.7)" stroke="#333" strokeWidth="1" />
      <text x="90" y="55" fontSize="14" fontWeight="500" fill="#333" textAnchor="middle" dominantBaseline="middle" fontFamily="Merriweather">Research</text>
    </g>
    
    {/* Second Box with Text - Design */}
    <g>
      {animate && (
        <>
          <animateTransform
            id="design-to-research"
            attributeName="transform"
            type="translate"
            from="0 0"
            to="-160 0"
            begin="5s"
            dur="0.5s"
            fill="freeze"
          />
          <animateTransform
            id="design-to-research-back"
            attributeName="transform"
            type="translate"
            from="-160 0"
            to="0 0"
            begin="design-to-research.end+4s"
            dur="0.5s"
            fill="freeze"
          />
          <animateTransform
            id="design-to-implement"
            attributeName="transform"
            type="translate"
            from="0 0"
            to="160 0"
            begin="design-to-research-back.end+4s"
            dur="0.5s"
            fill="freeze"
          />
          <animateTransform
            id="design-to-implement-back"
            attributeName="transform"
            type="translate"
            from="160 0"
            to="0 0"
            begin="design-to-implement.end+4s"
            dur="0.5s"
            fill="freeze"
          />
        </>
      )}
      <rect x="190" y="30" width="120" height="40" rx="4" fill="hsla(48, 100%, 92%, 0.7)" stroke="#333" strokeWidth="1" />
      <text x="250" y="55" fontSize="14" fontWeight="500" fill="#333" textAnchor="middle" dominantBaseline="middle" fontFamily="Merriweather">Design</text>
    </g>
    
    {/* Third Box with Text - Implementation */}
    <g>
      {animate && (
        <>
          <animateTransform
            id="implement-to-design"
            attributeName="transform"
            type="translate"
            from="0 0"
            to="-160 0"
            begin="design-to-implement.begin"
            dur="0.5s"
            fill="freeze"
          />
          <animateTransform
            id="implement-to-design-back"
            attributeName="transform"
            type="translate"
            from="-160 0"
            to="0 0"
            begin="implement-to-design.end+4s"
            dur="0.5s"
            fill="freeze"
          />
        </>
      )}
      <rect x="350" y="30" width="120" height="40" rx="4" fill="hsla(48, 100%, 92%, 0.7)" stroke="#333" strokeWidth="1" />
      <text x="410" y="55" fontSize="14" fontWeight="500" fill="#333" textAnchor="middle" dominantBaseline="middle" fontFamily="Merriweather">Implementation</text>
    </g>
  </svg>
);

export default ProcessDiagramSVG;
