
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
              viewBox="0 0 500 340" 
              className="w-[70%] xs:w-[68%] sm:w-[65%] md:w-[62%] lg:w-[60%] transition-all"
            >
              {/* Left Circle - Human Systems (moved closer to center) */}
              <circle 
                cx="170" 
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
                x="170" 
                y="95" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="14" 
                fontWeight="600"
              >
                Human Systems
              </text>
              
              {/* Human Systems List - positioned inside the left circle */}
              <text x="115" y="125" fontFamily="Merriweather" fontSize="12">• Behaviors</text>
              <text x="115" y="150" fontFamily="Merriweather" fontSize="12">• Culture</text>
              <text x="115" y="175" fontFamily="Merriweather" fontSize="12">• Relationships</text>
              
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
                x="200" 
                y="130" 
                width="100" 
                height="40" 
                rx="6" 
                fill="white" 
                stroke="#333" 
                strokeWidth="1.5"
              />
              
              <text 
                x="250" 
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
                x="170" 
                y="280" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="11"
                fontStyle="italic"
              >
                Human experiences
              </text>
              <text 
                x="170" 
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
              <line x1="80" y1="320" x2="420" y2="320" stroke="#333" strokeWidth="1" strokeDasharray="2,2" />
              <polyline points="80,320 70,315 70,325 80,320" fill="#333" />
              <polyline points="420,320 430,315 430,325 420,320" fill="#333" />
              
              <text 
                x="170" 
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
              viewBox="0 0 280 500" 
              className="w-[85%] transition-all"
            >
              {/* Top Circle - Human Systems */}
              <circle 
                cx="140" 
                cy="110" 
                r="90" 
                fill="none" 
                stroke="#333" 
                strokeWidth="1.5"
                opacity="0.9"
              />
              
              {/* Bottom Circle - Functional Systems */}
              <circle 
                cx="140" 
                cy="320" 
                r="90" 
                fill="none" 
                stroke="#333" 
                strokeWidth="1.5"
                opacity="0.9"
              />
              
              {/* Human Systems Text */}
              <text 
                x="140" 
                y="70" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="12" 
                fontWeight="600"
              >
                Human Systems
              </text>
              
              {/* Human Systems List */}
              <text x="95" y="95" fontFamily="Merriweather" fontSize="10">• Behaviors</text>
              <text x="95" y="110" fontFamily="Merriweather" fontSize="10">• Culture</text>
              <text x="95" y="125" fontFamily="Merriweather" fontSize="10">• Relationships</text>
              
              {/* SERVICE DESIGN Box - between circles */}
              <rect 
                x="90" 
                y="195" 
                width="100" 
                height="35" 
                rx="6" 
                fill="white" 
                stroke="#333" 
                strokeWidth="1.5"
              />
              
              <text 
                x="140" 
                y="218" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="11" 
                fontWeight="700"
              >
                SERVICE DESIGN
              </text>
              
              {/* Functional Systems Text */}
              <text 
                x="140" 
                y="280" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="12" 
                fontWeight="600"
              >
                Functional Systems
              </text>
              
              {/* Functional Systems List */}
              <text x="95" y="305" fontFamily="Merriweather" fontSize="10">• Processes</text>
              <text x="95" y="320" fontFamily="Merriweather" fontSize="10">• Technology</text>
              <text x="95" y="335" fontFamily="Merriweather" fontSize="10">• Metrics</text>
              
              {/* Left Labels */}
              <text 
                x="50" 
                y="110" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="9"
                fontStyle="italic"
                transform="rotate(-90 50 110)"
              >
                Human experiences can only be enabled
              </text>
              
              {/* Right Labels */}
              <text 
                x="230" 
                y="320" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="9"
                fontStyle="italic"
                transform="rotate(-90 230 320)"
              >
                Functional elements can be designed and controlled
              </text>
              
              {/* Vertical Arrow with control labels */}
              <line x1="25" y1="80" x2="25" y2="350" stroke="#333" strokeWidth="1" strokeDasharray="2,2" />
              <polyline points="25,80 20,90 30,90 25,80" fill="#333" />
              <polyline points="25,350 20,340 30,340 25,350" fill="#333" />
              
              <text 
                x="10" 
                y="115" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="8"
                fill="#666"
                transform="rotate(-90 10 115)"
              >
                less control
              </text>
              
              <text 
                x="10" 
                y="315" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="8"
                fill="#666"
                transform="rotate(-90 10 315)"
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
