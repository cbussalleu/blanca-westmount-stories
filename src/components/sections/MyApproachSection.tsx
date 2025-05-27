
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface MyApproachSectionProps {
  className?: string;
}

const MyApproachSection = forwardRef<HTMLElement, MyApproachSectionProps>(
  ({ className }, ref) => {
    return (
      <section className={`py-8 sm:py-16 ${className || ''}`} ref={ref}>
        <div className="container-narrow">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-westmount">MY APPROACH</h2>
            <p className="text-sm max-w-2xl mx-auto mt-4 sm:mt-8 text-base font-merriweather">
              If you're serious about being human-centered, you better be systems-centered too. Break it down. Rebuild it better.
            </p>
          </div>
          
          {/* Updated Venn Diagram with more separated circles */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <svg 
              viewBox="0 0 580 340" 
              className="w-[70%] xs:w-[68%] sm:w-[65%] md:w-[62%] lg:w-[60%] transition-all"
            >
              {/* Left Circle - Human Systems (moved more to the left) */}
              <circle 
                cx="140" 
                cy="150" 
                r="110" 
                fill="none" 
                stroke="#333" 
                strokeWidth="1.5"
                opacity="0.9"
              />
              
              {/* Right Circle - Functional Systems (moved more to the right) */}
              <circle 
                cx="440" 
                cy="150" 
                r="110" 
                fill="none" 
                stroke="#333" 
                strokeWidth="1.5"
                opacity="0.9"
              />
              
              {/* Human Systems Text - positioned inside the left circle */}
              <text 
                x="140" 
                y="95" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="14" 
                fontWeight="600"
              >
                Human Systems
              </text>
              
              {/* Human Systems List - positioned inside the left circle */}
              <text x="85" y="125" fontFamily="Merriweather" fontSize="12">• Behaviors</text>
              <text x="85" y="150" fontFamily="Merriweather" fontSize="12">• Culture</text>
              <text x="85" y="175" fontFamily="Merriweather" fontSize="12">• Relationships</text>
              
              {/* Functional Systems Text - positioned inside the right circle */}
              <text 
                x="440" 
                y="95" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="14" 
                fontWeight="600"
              >
                Functional Systems
              </text>
              
              {/* Functional Systems List - positioned inside the right circle */}
              <text x="385" y="125" fontFamily="Merriweather" fontSize="12">• Processes</text>
              <text x="385" y="150" fontFamily="Merriweather" fontSize="12">• Technology</text>
              <text x="385" y="175" fontFamily="Merriweather" fontSize="12">• Metrics</text>
              
              {/* SERVICE DESIGN Box - centered between circles */}
              <rect 
                x="240" 
                y="130" 
                width="100" 
                height="40" 
                rx="6" 
                fill="white" 
                stroke="#333" 
                strokeWidth="1.5"
              />
              
              <text 
                x="290" 
                y="155" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="12" 
                fontWeight="700"
              >
                SERVICE DESIGN
              </text>
              
              {/* Bottom Labels */}
              <text 
                x="140" 
                y="280" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="11"
                fontStyle="italic"
              >
                Human experiences
              </text>
              <text 
                x="140" 
                y="300" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="11"
                fontStyle="italic"
              >
                can only be enabled
              </text>
              
              {/* Functional Systems Text */}
              <text 
                x="440" 
                y="280" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="11"
                fontStyle="italic"
              >
                Functional elements
              </text>
              <text 
                x="440" 
                y="300" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="11"
                fontStyle="italic"
              >
                can be designed and controlled
              </text>
              
              {/* Arrow with control labels */}
              <line x1="50" y1="320" x2="530" y2="320" stroke="#333" strokeWidth="1" strokeDasharray="2,2" />
              <polyline points="50,320 40,315 40,325 50,320" fill="#333" />
              <polyline points="530,320 540,315 540,325 530,320" fill="#333" />
              
              <text 
                x="140" 
                y="335" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="10"
                fill="#666"
              >
                less control
              </text>
              
              <text 
                x="440" 
                y="335" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="10"
                fill="#666"
              >
                more control
              </text>
            </svg>
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Link 
              to="/methodology" 
              className="inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-70 transition-opacity font-merriweather"
            >
              The thinking behind <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    );
  }
);

MyApproachSection.displayName = 'MyApproachSection';

export default MyApproachSection;
