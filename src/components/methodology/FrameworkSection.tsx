
import React from 'react';
import SystemsFrameworkSVG from './SystemsFrameworkSVG';

const FrameworkSection = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl mb-6 font-merriweather font-normal">Framework</h2>
      <p className="text-sm mb-4 font-merriweather">
        Service design operates at the intersection of human and functional systems. This framework recognizes that while functional elements can be structured and designed, human experiences can only be enabled.
      </p>
      
      <SystemsFrameworkSVG />
      
      <p className="text-sm mt-6 font-merriweather">
        This intersection creates a space where solutions must balance prescriptive elements with space for adaptation and emergence. The result is design that works both systematically and organically.
      </p>
    </div>
  );
};

export default FrameworkSection;
