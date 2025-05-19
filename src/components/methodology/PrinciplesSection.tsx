
import React from 'react';

const PrinciplesSection = () => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl mb-6 font-merriweather font-normal">Principles</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border border-gray-400 rounded-lg">
          <h3 className="text-base mb-3 font-merriweather">Systemic Perspective</h3>
          <p className="text-sm font-merriweather">
            Services exist within broader systems. Understanding these contexts is essential for creating solutions that integrate rather than disrupt.
          </p>
        </div>
        
        <div className="p-6 border border-gray-400 rounded-lg">
          <h3 className="text-base mb-3 font-merriweather">Adaptability</h3>
          <p className="text-sm font-merriweather">
            Creating frameworks that can evolve rather than rigid structures that break under changing conditions.
          </p>
        </div>
        
        <div className="p-6 border border-gray-400 rounded-lg">
          <h3 className="text-base mb-3 font-merriweather">Human-Centered</h3>
          <p className="text-sm font-merriweather">
            Balancing business requirements with genuine human needs, recognizing that experiences cannot be controlled, only supported.
          </p>
        </div>
        
        <div className="p-6 border border-gray-400 rounded-lg">
          <h3 className="text-base mb-3 font-merriweather">Iterative Learning</h3>
          <p className="text-sm font-merriweather">
            Using continuous feedback loops to refine and improve, treating implementation as an ongoing conversation rather than a final statement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrinciplesSection;
