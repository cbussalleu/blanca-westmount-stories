
import React, { useRef, useState, useEffect } from 'react';
import ProcessDiagramSVG from './ProcessDiagramSVG';

const ProcessSection = () => {
  const [animateProcess, setAnimateProcess] = useState(false);
  const processRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Setup intersection observer for process section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Start animation 5 seconds after section becomes visible
            setTimeout(() => {
              setAnimateProcess(true);
            }, 5000);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    
    return () => {
      if (processRef.current) {
        observer.unobserve(processRef.current);
      }
    };
  }, []);

  return (
    <div className="mb-16" ref={processRef}>
      <h2 className="text-2xl mb-6 font-merriweather font-normal">Process</h2>
      <p className="text-sm mb-4 font-merriweather">
        My approach follows an iterative pattern across three primary phases. While I plan for a logical, iterative process, I also develop capabilities to manage disruptions that arise from stakeholder needs or the dynamic nature of projects themselves. This flexibility ensures we can adapt while maintaining progress toward defined outcomes.
      </p>
      
      <ProcessDiagramSVG animate={animateProcess} />
      
      <div className="grid md:grid-cols-3 gap-8 mt-8">
        <div>
          <h3 className="text-lg mb-4 font-merriweather">Research</h3>
          <ul className="text-sm space-y-2 font-merriweather">
            <li>• Research planning</li>
            <li>• Contextual inquiry</li>
            <li>• Journey analysis</li>
            <li>• Stakeholder mapping</li>
            <li>• Process documentation</li>
            <li>• Competitive analysis</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg mb-4 font-merriweather">Design</h3>
          <ul className="text-sm space-y-2 font-merriweather">
            <li>• Blueprint development</li>
            <li>• Prototype creation</li>
            <li>• User testing</li>
            <li>• Experience modeling</li>
            <li>• System architecture</li>
            <li>• Interface design</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg mb-4 font-merriweather">Implementation</h3>
          <ul className="text-sm space-y-2 font-merriweather">
            <li>• Process documentation</li>
            <li>• Change management</li>
            <li>• Technical integration</li>
            <li>• Measurement frameworks</li>
            <li>• Training & support</li>
            <li>• Continuous iteration</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
