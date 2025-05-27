
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
          
          {/* Desktop/Tablet Horizontal Diagram */}
          <div className="hidden sm:flex justify-center mb-8 sm:mb-12">
            <svg 
              viewBox="0 0 480 340" 
              className="w-[70%] xs:w-[68%] sm:w-[65%] md:w-[62%] lg:w-[60%] transition-all"
            >
              {/* Left Circle - Human Systems (moved closer to center) */}
              <circle 
                cx="150" 
                cy="150" 
                r="110" 
                fill="none" 
                stroke="#333" 
                strokeWidth="1.5"
                opacity="0.9"
              />
              
              {/* Right Circle - Functional Systems (moved closer to center) */}
              <circle 
                cx="330" 
                cy="150" 
                r="110" 
                fill="none" 
                stroke="#333" 
                strokeWidth="1.5"
                opacity="0.9"
              />
              
              {/* Human Systems Text - positioned inside the left circle */}
              <text 
                x="150" 
                y="95" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="14" 
                fontWeight="600"
              >
                Human Systems
              </text>
              
              {/* Human Systems List - positioned inside the left circle */}
              <text x="95" y="125" fontFamily="Merriweather" fontSize="12">• Behaviors</text>
              <text x="95" y="150" fontFamily="Merriweather" fontSize="12">• Culture</text>
              <text x="95" y="175" fontFamily="Merriweather" fontSize="12">• Relationships</text>
              
              {/* Functional Systems Text - positioned inside the right circle */}
              <text 
                x="330" 
                y="95" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="14" 
                fontWeight="600"
              >
                Functional Systems
              </text>
              
              {/* Functional Systems List - positioned inside the right circle */}
              <text x="275" y="125" fontFamily="Merriweather" fontSize="12">• Processes</text>
              <text x="275" y="150" fontFamily="Merriweather" fontSize="12">• Technology</text>
              <text x="275" y="175" fontFamily="Merriweather" fontSize="12">• Metrics</text>
              
              {/* SERVICE DESIGN Box - centered between circles */}
              <rect 
                x="190" 
                y="130" 
                width="100" 
                height="40" 
                rx="6" 
                fill="white" 
                stroke="#333" 
                strokeWidth="1.5"
              />
              
              <text 
                x="240" 
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
                x="150" 
                y="280" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="11"
                fontStyle="italic"
              >
                Human experiences
              </text>
              <text 
                x="150" 
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
                x="330" 
                y="280" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="11"
                fontStyle="italic"
              >
                Functional elements
              </text>
              <text 
                x="330" 
                y="300" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="11"
                fontStyle="italic"
              >
                can be designed and controlled
              </text>
              
              {/* Arrow with control labels */}
              <line x1="60" y1="320" x2="420" y2="320" stroke="#333" strokeWidth="1" strokeDasharray="2,2" />
              <polyline points="60,320 50,315 50,325 60,320" fill="#333" />
              <polyline points="420,320 430,315 430,325 420,320" fill="#333" />
              
              <text 
                x="150" 
                y="335" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="10"
                fill="#666"
              >
                less control
              </text>
              
              <text 
                x="330" 
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

          {/* Mobile Vertical Diagram */}
          <div className="flex sm:hidden justify-center mb-8">
            <svg 
              viewBox="0 0 280 480" 
              className="w-[85%] transition-all"
            >
              {/* Top Circle - Human Systems */}
              <circle 
                cx="140" 
                cy="100" 
                r="80" 
                fill="none" 
                stroke="#333" 
                strokeWidth="1.5"
                opacity="0.9"
              />
              
              {/* Bottom Circle - Functional Systems */}
              <circle 
                cx="140" 
                cy="300" 
                r="80" 
                fill="none" 
                stroke="#333" 
                strokeWidth="1.5"
                opacity="0.9"
              />
              
              {/* Human Systems Text */}
              <text 
                x="140" 
                y="65" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="12" 
                fontWeight="600"
              >
                Human Systems
              </text>
              
              {/* Human Systems List */}
              <text x="100" y="85" fontFamily="Merriweather" fontSize="10">• Behaviors</text>
              <text x="100" y="100" fontFamily="Merriweather" fontSize="10">• Culture</text>
              <text x="100" y="115" fontFamily="Merriweather" fontSize="10">• Relationships</text>
              
              {/* SERVICE DESIGN Box - between circles */}
              <rect 
                x="90" 
                y="185" 
                width="100" 
                height="30" 
                rx="6" 
                fill="white" 
                stroke="#333" 
                strokeWidth="1.5"
              />
              
              <text 
                x="140" 
                y="205" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="10" 
                fontWeight="700"
              >
                SERVICE DESIGN
              </text>
              
              {/* Functional Systems Text */}
              <text 
                x="140" 
                y="265" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="12" 
                fontWeight="600"
              >
                Functional Systems
              </text>
              
              {/* Functional Systems List */}
              <text x="100" y="285" fontFamily="Merriweather" fontSize="10">• Processes</text>
              <text x="100" y="300" fontFamily="Merriweather" fontSize="10">• Technology</text>
              <text x="100" y="315" fontFamily="Merriweather" fontSize="10">• Metrics</text>
              
              {/* Left Labels */}
              <text 
                x="40" 
                y="100" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="9"
                fontStyle="italic"
                transform="rotate(-90 40 100)"
              >
                Human experiences can only be enabled
              </text>
              
              {/* Right Labels */}
              <text 
                x="240" 
                y="300" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="9"
                fontStyle="italic"
                transform="rotate(-90 240 300)"
              >
                Functional elements can be designed and controlled
              </text>
              
              {/* Vertical Arrow with control labels */}
              <line x1="20" y1="70" x2="20" y2="330" stroke="#333" strokeWidth="1" strokeDasharray="2,2" />
              <polyline points="20,70 15,80 25,80 20,70" fill="#333" />
              <polyline points="20,330 15,320 25,320 20,330" fill="#333" />
              
              <text 
                x="8" 
                y="100" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="8"
                fill="#666"
                transform="rotate(-90 8 100)"
              >
                less control
              </text>
              
              <text 
                x="8" 
                y="300" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="8"
                fill="#666"
                transform="rotate(-90 8 300)"
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
