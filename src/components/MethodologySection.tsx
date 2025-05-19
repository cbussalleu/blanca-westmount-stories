
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import MethodologyDiagram from './methodology/MethodologyDiagram';

const MethodologySection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-westmount text-3xl md:text-4xl mb-8 text-center">My Approach</h2>
          
          <p className="font-merriweather text-gray-700 mb-12 text-lg text-center max-w-2xl mx-auto">
            Success emerges from navigating complexity through continuous evolution and adaptation,
            balancing control with emergence, and maintaining a deep understanding of system dynamics and integration.
          </p>
          
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/472e4aed-29ea-4e3d-a5b2-e83280e3be88.png" 
              alt="Service Design Methodology" 
              className="w-[57%] sm:w-[55%] md:w-[52%] lg:w-[49%] transition-all"
            />
          </div>
          
          {/* Animated Venn Diagram */}
          <MethodologyDiagram />
          
          <div className="mb-12">
            <h3 className="font-westmount text-xl mb-4 text-center">Core Principle</h3>
            <p className="font-merriweather text-gray-700 text-center italic text-lg mb-6">
              Experience cannot be designed, only enabled.
            </p>
            
            <p className="font-merriweather text-gray-700 text-center">
              This principle guides me to maintain a systemic mindset during:
            </p>
            <ol className="list-decimal list-inside space-y-2 mt-4 font-merriweather text-gray-700 max-w-2xl mx-auto">
              <li><strong>Problem Understanding Phase:</strong> Holistic research considering all system dimensions</li>
              <li><strong>Stakeholder Relationship Management:</strong> Facilitation of alignment between diverse objectives</li>
              <li><strong>Solution Design:</strong> Creation of frameworks that allow for adaptation and evolution</li>
              <li><strong>Implementation and Management:</strong> Recognition that services are living organisms requiring continuous adaptation</li>
            </ol>
          </div>
          
          <div className="text-center">
            <Link 
              to="/methodology" 
              className="inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-70 transition-opacity font-merriweather"
            >
              Learn More <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
