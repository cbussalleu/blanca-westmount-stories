
import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Animated SVG Components
const SystemsFrameworkSVG = () => (
  <svg width="300" height="180" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto my-6">
    <rect x="20" y="40" width="120" height="100" rx="4" fill="hsla(48, 100%, 92%, 0.7)" stroke="#333" strokeWidth="1">
      <animate 
        attributeName="x" 
        values="20; 15; 20" 
        dur="4s" 
        repeatCount="indefinite" 
      />
    </rect>
    <rect x="160" y="40" width="120" height="100" rx="4" fill="hsla(142, 35%, 82%, 0.5)" stroke="#333" strokeWidth="1">
      <animate 
        attributeName="x" 
        values="160; 165; 160" 
        dur="4s" 
        repeatCount="indefinite" 
      />
    </rect>
    <text x="80" y="32" fontSize="12" fontWeight="500" fill="#333" textAnchor="middle" dominantBaseline="middle">
      <animate 
        attributeName="x" 
        values="80; 75; 80" 
        dur="4s" 
        repeatCount="indefinite" 
      />
      Human Systems
    </text>
    <text x="220" y="32" fontSize="12" fontWeight="500" fill="#333" textAnchor="middle" dominantBaseline="middle">
      <animate 
        attributeName="x" 
        values="220; 225; 220" 
        dur="4s" 
        repeatCount="indefinite" 
      />
      Functional Systems
    </text>
    <text x="40" y="60" fontSize="11" fill="#333">
      <animate 
        attributeName="x" 
        values="40; 35; 40" 
        dur="4s" 
        repeatCount="indefinite" 
      />
      • Behaviors
    </text>
    <text x="40" y="80" fontSize="11" fill="#333">
      <animate 
        attributeName="x" 
        values="40; 35; 40" 
        dur="4s" 
        repeatCount="indefinite" 
      />
      • Culture
    </text>
    <text x="40" y="100" fontSize="11" fill="#333">
      <animate 
        attributeName="x" 
        values="40; 35; 40" 
        dur="4s" 
        repeatCount="indefinite" 
      />
      • Relationships
    </text>
    <text x="40" y="120" fontSize="11" fill="#333">
      <animate 
        attributeName="x" 
        values="40; 35; 40" 
        dur="4s" 
        repeatCount="indefinite" 
      />
      • Perceptions
    </text>
    <text x="180" y="60" fontSize="11" fill="#333">
      <animate 
        attributeName="x" 
        values="180; 185; 180" 
        dur="4s" 
        repeatCount="indefinite" 
      />
      • Processes
    </text>
    <text x="180" y="80" fontSize="11" fill="#333">
      <animate 
        attributeName="x" 
        values="180; 185; 180" 
        dur="4s" 
        repeatCount="indefinite" 
      />
      • Technology
    </text>
    <text x="180" y="100" fontSize="11" fill="#333">
      <animate 
        attributeName="x" 
        values="180; 185; 180" 
        dur="4s" 
        repeatCount="indefinite" 
      />
      • Metrics
    </text>
    <text x="180" y="120" fontSize="11" fill="#333">
      <animate 
        attributeName="x" 
        values="180; 185; 180" 
        dur="4s" 
        repeatCount="indefinite" 
      />
      • Operations
    </text>
    <line x1="140" y1="90" x2="160" y2="90" stroke="#333" strokeWidth="1">
      <animate 
        attributeName="x1" 
        values="140; 135; 140" 
        dur="4s" 
        repeatCount="indefinite" 
      />
      <animate 
        attributeName="x2" 
        values="160; 165; 160" 
        dur="4s" 
        repeatCount="indefinite" 
      />
    </line>
    <text x="150" y="85" fontSize="14" fill="#333" textAnchor="middle" dominantBaseline="middle">+</text>
    <text x="150" y="160" fontSize="11" fontWeight="500" fill="#333" textAnchor="middle">Service Design Framework</text>
  </svg>
);

const ProcessDiagramSVG = ({ animate }: { animate: boolean }) => (
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
      <text x="90" y="55" fontSize="14" fontWeight="500" fill="#333" textAnchor="middle" dominantBaseline="middle">Research</text>
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
      <text x="250" y="55" fontSize="14" fontWeight="500" fill="#333" textAnchor="middle" dominantBaseline="middle">Design</text>
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
      <text x="410" y="55" fontSize="14" fontWeight="500" fill="#333" textAnchor="middle" dominantBaseline="middle">Implementation</text>
    </g>
  </svg>
);

const Methodology = () => {
  const [animateProcess, setAnimateProcess] = useState(false);
  const processRef = useRef<HTMLDivElement>(null);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
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
    <div className="min-h-screen bg-[hsl(var(--pastel-yellow))]">
      <Header />
      <main className="pt-24 pb-16">
        <section className="py-8">
          <div className="container-narrow">
            <div className="mb-8">
              <Link to="/" className="inline-flex items-center text-xs hover:opacity-70 transition-opacity">
                <ArrowLeft size={14} className="mr-1" /> Back to Home
              </Link>
            </div>
            
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-westmount">METHODOLOGY</h1>
              <p className="text-sm max-w-2xl mx-auto mt-8 font-merriweather">
                An approach for navigating complexity through methods that balance structure with emergence.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {/* Framework */}
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
              
              {/* Process */}
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
              
              {/* Principles */}
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
              
              {/* Tools */}
              <div className="mb-16">
                <h2 className="text-2xl mb-6 font-merriweather font-normal">Tools Proficiency</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="py-3 border-b border-gray-400 text-center">
                    <p className="text-sm font-merriweather">Figma</p>
                  </div>
                  <div className="py-3 border-b border-gray-400 text-center">
                    <p className="text-sm font-merriweather">Miro</p>
                  </div>
                  <div className="py-3 border-b border-gray-400 text-center">
                    <p className="text-sm font-merriweather">Salesforce</p>
                  </div>
                  <div className="py-3 border-b border-gray-400 text-center">
                    <p className="text-sm font-merriweather">Adobe CS</p>
                  </div>
                  <div className="py-3 border-b border-gray-400 text-center">
                    <p className="text-sm font-merriweather">Tableau</p>
                  </div>
                  <div className="py-3 border-b border-gray-400 text-center">
                    <p className="text-sm font-merriweather">Power BI</p>
                  </div>
                  <div className="py-3 border-b border-gray-400 text-center">
                    <p className="text-sm font-merriweather">Optimal Workshop</p>
                  </div>
                  <div className="py-3 border-b border-gray-400 text-center">
                    <p className="text-sm font-merriweather">JIRA</p>
                  </div>
                  <div className="py-3 border-b border-gray-400 text-center">
                    <p className="text-sm font-merriweather">Qualtrics</p>
                  </div>
                  <div className="py-3 border-b border-gray-400 text-center">
                    <p className="text-sm font-merriweather">Lucidchart</p>
                  </div>
                  <div className="py-3 border-b border-gray-400 text-center">
                    <p className="text-sm font-merriweather">Marvel</p>
                  </div>
                  <div className="py-3 border-b border-gray-400 text-center">
                    <p className="text-sm font-merriweather">UX Pin</p>
                  </div>
                </div>
              </div>
              
              {/* Outcomes */}
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Methodology;
