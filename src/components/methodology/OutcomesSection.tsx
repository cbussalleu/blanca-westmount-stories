
import React from 'react';

const OutcomesSection = () => {
  return (
    <div>
      <h2 className="text-2xl mb-6 font-merriweather font-normal">Outcomes</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border border-gray-400 rounded-lg">
          <h3 className="text-base mb-3 font-merriweather">System Integration</h3>
          <p className="text-sm font-merriweather">
            Services that work harmoniously with existing processes rather than creating friction points.
          </p>
        </div>
        <div className="p-6 border border-gray-400 rounded-lg">
          <h3 className="text-base mb-3 font-merriweather">Stakeholder Alignment</h3>
          <p className="text-sm font-merriweather">
            Improved coordination across departments and clearer shared understanding of priorities.
          </p>
        </div>
        <div className="p-6 border border-gray-400 rounded-lg">
          <h3 className="text-base mb-3 font-merriweather">Sustainable Evolution</h3>
          <p className="text-sm font-merriweather">
            Solutions designed to adapt and grow beyond initial implementation, maintaining relevance.
          </p>
        </div>
        <div className="p-6 border border-gray-400 rounded-lg">
          <h3 className="text-base mb-3 font-merriweather">Improved Experience</h3>
          <p className="text-sm font-merriweather">
            Services that feel more intuitive and responsive to both customers and service providers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OutcomesSection;
