
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
              {/* Left Circle - Human Systems */}
              <circle 
                cx="130" 
                cy="150" 
                r="110" 
                fill="none" 
                stroke="#333" 
                strokeWidth="1.5"
                opacity="0.9"
              />
              
              {/* Right Circle - Functional Systems */}
              <circle 
                cx="350" 
                cy="150" 
                r="110" 
                fill="none" 
                stroke="#333" 
                strokeWidth="1.5"
                opacity="0.9"
              />
              
              {/* Human Systems Text - positioned inside the left circle */}
              <text 
                x="130" 
                y="95" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="14" 
                fontWeight="600"
              >
                Human Systems
              </text>
              
              {/* Human Systems List - positioned inside the left circle */}
              <text x="75" y="125" fontFamily="Merriweather" fontSize="12">• Behaviors</text>
              <text x="75" y="150" fontFamily="Merriweather" fontSize="12">• Culture</text>
              <text x="75" y="175" fontFamily="Merriweather" fontSize="12">• Relationships</text>
              
              {/* Functional Systems Text - positioned inside the right circle */}
              <text 
                x="350" 
                y="95" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="14" 
                fontWeight="600"
              >
                Functional Systems
              </text>
              
              {/* Functional Systems List - positioned inside the right circle */}
              <text x="295" y="125" fontFamily="Merriweather" fontSize="12">• Processes</text>
              <text x="295" y="150" fontFamily="Merriweather" fontSize="12">• Technology</text>
              <text x="295" y="175" fontFamily="Merriweather" fontSize="12">• Metrics</text>
              
              {/* SERVICE DESIGN Box - wider and positioned lower */}
              <rect 
                x="180" 
                y="145" 
                width="120" 
                height="40" 
                rx="6" 
                fill="white" 
                stroke="#333" 
                strokeWidth="1.5"
              />
              
              <text 
                x="240" 
                y="170" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="12" 
                fontWeight="700"
              >
                SERVICE DESIGN
              </text>
              
              {/* Bottom Labels */}
              <text 
                x="130" 
                y="280" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="11"
                fontStyle="italic"
              >
                Human experiences
              </text>
              <text 
                x="130" 
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
                x="350" 
                y="280" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="11"
                fontStyle="italic"
              >
                Functional elements
              </text>
              <text 
                x="350" 
                y="300" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="11"
                fontStyle="italic"
              >
                can be designed and controlled
              </text>
              
              {/* Arrow with control labels */}
              <line x1="40" y1="320" x2="440" y2="320" stroke="#333" strokeWidth="1" strokeDasharray="2,2" />
              <polyline points="40,320 30,315 30,325 40,320" fill="#333" />
              <polyline points="440,320 450,315 450,325 440,320" fill="#333" />
              
              <text 
                x="130" 
                y="335" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="10"
                fill="#666"
              >
                less control
              </text>
              
              <text 
                x="350" 
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
              viewBox="0 0 280 400" 
              className="w-[85%] transition-all"
            >
              {/* Top Circle - Human Systems */}
              <circle 
                cx="140" 
                cy="90" 
                r="80" 
                fill="none" 
                stroke="#333" 
                strokeWidth="1.5"
                opacity="0.9"
              />
              
              {/* Bottom Circle - Functional Systems */}
              <circle 
                cx="140" 
                cy="260" 
                r="80" 
                fill="none" 
                stroke="#333" 
                strokeWidth="1.5"
                opacity="0.9"
              />
              
              {/* Human Systems Text */}
              <text 
                x="140" 
                y="55" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="12" 
                fontWeight="600"
              >
                Human Systems
              </text>
              
              {/* Human Systems List */}
              <text x="100" y="75" fontFamily="Merriweather" fontSize="10">• Behaviors</text>
              <text x="100" y="90" fontFamily="Merriweather" fontSize="10">• Culture</text>
              <text x="100" y="105" fontFamily="Merriweather" fontSize="10">• Relationships</text>
              
              {/* SERVICE DESIGN Box - between circles */}
              <rect 
                x="90" 
                y="160" 
                width="100" 
                height="30" 
                rx="6" 
                fill="white" 
                stroke="#333" 
                strokeWidth="1.5"
              />
              
              <text 
                x="140" 
                y="180" 
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
                y="225" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="12" 
                fontWeight="600"
              >
                Functional Systems
              </text>
              
              {/* Functional Systems List */}
              <text x="100" y="245" fontFamily="Merriweather" fontSize="10">• Processes</text>
              <text x="100" y="260" fontFamily="Merriweather" fontSize="10">• Technology</text>
              <text x="100" y="275" fontFamily="Merriweather" fontSize="10">• Metrics</text>
              
              {/* Vertical Arrow with control labels */}
              <line x1="20" y1="60" x2="20" y2="290" stroke="#333" strokeWidth="1" strokeDasharray="2,2" />
              <polyline points="20,60 15,70 25,70 20,60" fill="#333" />
              <polyline points="20,290 15,280 25,280 20,290" fill="#333" />
              
              <text 
                x="8" 
                y="90" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="8"
                fill="#666"
                transform="rotate(-90 8 90)"
              >
                less control
              </text>
              
              <text 
                x="8" 
                y="260" 
                textAnchor="middle" 
                fontFamily="Merriweather" 
                fontSize="8"
                fill="#666"
                transform="rotate(-90 8 260)"
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
