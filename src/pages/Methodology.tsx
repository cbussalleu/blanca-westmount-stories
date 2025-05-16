import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Simplified SVG Components with clearer visual language
const SystemsFrameworkSVG = () => (
  <svg width="300" height="180" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto my-6">
    <rect x="20" y="40" width="120" height="100" rx="4" fill="hsla(48, 100%, 92%, 0.7)" stroke="#222" strokeWidth="1" />
    <rect x="160" y="40" width="120" height="100" rx="4" fill="hsla(142, 35%, 82%, 0.5)" stroke="#222" strokeWidth="1" />
    <text x="80" y="32" fontSize="12" fontFamily="Helvetica, sans-serif" textAnchor="middle">Human Systems</text>
    <text x="220" y="32" fontSize="12" fontFamily="Helvetica, sans-serif" textAnchor="middle">Functional Systems</text>
    <text x="40" y="60" fontSize="10" fontFamily="Helvetica, sans-serif">• Behaviors</text>
    <text x="40" y="80" fontSize="10" fontFamily="Helvetica, sans-serif">• Culture</text>
    <text x="40" y="100" fontSize="10" fontFamily="Helvetica, sans-serif">• Relationships</text>
    <text x="40" y="120" fontSize="10" fontFamily="Helvetica, sans-serif">• Perceptions</text>
    <text x="180" y="60" fontSize="10" fontFamily="Helvetica, sans-serif">• Processes</text>
    <text x="180" y="80" fontSize="10" fontFamily="Helvetica, sans-serif">• Technology</text>
    <text x="180" y="100" fontSize="10" fontFamily="Helvetica, sans-serif">• Metrics</text>
    <text x="180" y="120" fontSize="10" fontFamily="Helvetica, sans-serif">• Operations</text>
    <line x1="140" y1="90" x2="160" y2="90" stroke="#222" strokeWidth="1" />
    <text x="150" y="85" fontSize="12" fontFamily="Helvetica, sans-serif" textAnchor="middle" dominantBaseline="middle">+</text>
    <text x="150" y="160" fontSize="10" fontFamily="Helvetica, sans-serif" textAnchor="middle">Service Design Framework</text>
  </svg>
);

const ProcessDiagramSVG = () => (
  <svg width="500" height="100" viewBox="0 0 500 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto my-6 max-w-full">
    <rect x="30" y="30" width="120" height="40" rx="4" fill="hsla(48, 100%, 92%, 0.7)" stroke="#222" strokeWidth="1" />
    <rect x="190" y="30" width="120" height="40" rx="4" fill="hsla(48, 100%, 92%, 0.7)" stroke="#222" strokeWidth="1" />
    <rect x="350" y="30" width="120" height="40" rx="4" fill="hsla(48, 100%, 92%, 0.7)" stroke="#222" strokeWidth="1" />
    <text x="90" y="55" fontSize="14" fontFamily="Westmount, serif" textAnchor="middle">Research</text>
    <text x="250" y="55" fontSize="14" fontFamily="Westmount, serif" textAnchor="middle">Design</text>
    <text x="410" y="55" fontSize="14" fontFamily="Westmount, serif" textAnchor="middle">Implementation</text>
    <line x1="150" y1="50" x2="190" y2="50" stroke="#222" strokeWidth="1" strokeDasharray="4,2" />
    <line x1="310" y1="50" x2="350" y2="50" stroke="#222" strokeWidth="1" strokeDasharray="4,2" />
    <polygon points="185,50 180,47 180,53" fill="#222" />
    <polygon points="345,50 340,47 340,53" fill="#222" />
  </svg>
);

const Methodology = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
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
                <h2 className="text-2xl mb-6 font-westmount">Framework</h2>
                <p className="text-sm mb-4 font-merriweather">
                  Service design operates at the intersection of human and functional systems. This framework recognizes that while functional elements can be structured and designed, human experiences can only be enabled.
                </p>
                
                <SystemsFrameworkSVG />
                
                <p className="text-sm mt-6 font-merriweather">
                  This intersection creates a space where solutions must balance prescriptive elements with space for adaptation and emergence. The result is design that works both systematically and organically.
                </p>
              </div>
              
              {/* Process */}
              <div className="mb-16">
                <h2 className="text-2xl mb-6 font-westmount">Process</h2>
                <p className="text-sm mb-4 font-merriweather">
                  My process follows an iterative pattern across three primary phases, with each informing the others through continuous learning.
                </p>
                
                <ProcessDiagramSVG />
                
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <div>
                    <h3 className="text-lg mb-4 font-westmount">Research</h3>
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
                    <h3 className="text-lg mb-4 font-westmount">Design</h3>
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
                    <h3 className="text-lg mb-4 font-westmount">Implementation</h3>
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
                <h2 className="text-2xl mb-6 font-westmount">Principles</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white border border-gray-100 rounded-lg">
                    <h3 className="text-base mb-3 font-westmount">Systemic Perspective</h3>
                    <p className="text-sm font-merriweather">
                      Services exist within broader systems. Understanding these contexts is essential for creating solutions that integrate rather than disrupt.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-white border border-gray-100 rounded-lg">
                    <h3 className="text-base mb-3 font-westmount">Adaptability</h3>
                    <p className="text-sm font-merriweather">
                      Creating frameworks that can evolve rather than rigid structures that break under changing conditions.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-white border border-gray-100 rounded-lg">
                    <h3 className="text-base mb-3 font-westmount">Human-Centered</h3>
                    <p className="text-sm font-merriweather">
                      Balancing business requirements with genuine human needs, recognizing that experiences cannot be controlled, only supported.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-white border border-gray-100 rounded-lg">
                    <h3 className="text-base mb-3 font-westmount">Iterative Learning</h3>
                    <p className="text-sm font-merriweather">
                      Using continuous feedback loops to refine and improve, treating implementation as an ongoing conversation rather than a final statement.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Tools */}
              <div className="mb-16">
                <h2 className="text-2xl mb-6 font-westmount">Tools Proficiency</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-100 text-center">
                    <p className="text-sm font-merriweather">Figma</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 text-center">
                    <p className="text-sm font-merriweather">Miro</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 text-center">
                    <p className="text-sm font-merriweather">Salesforce</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 text-center">
                    <p className="text-sm font-merriweather">Adobe CS</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 text-center">
                    <p className="text-sm font-merriweather">Tableau</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 text-center">
                    <p className="text-sm font-merriweather">Power BI</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 text-center">
                    <p className="text-sm font-merriweather">Optimal Workshop</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 text-center">
                    <p className="text-sm font-merriweather">JIRA</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 text-center">
                    <p className="text-sm font-merriweather">InVision</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 text-center">
                    <p className="text-sm font-merriweather">Confluence</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 text-center">
                    <p className="text-sm font-merriweather">Marvel</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-100 text-center">
                    <p className="text-sm font-merriweather">UX Pin</p>
                  </div>
                </div>
              </div>
              
              {/* Outcomes */}
              <div>
                <h2 className="text-2xl mb-6 font-westmount">Outcomes</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white border border-gray-100 rounded-lg">
                    <h3 className="text-base mb-3 font-westmount">System Integration</h3>
                    <p className="text-sm font-merriweather">
                      Services that work harmoniously with existing processes rather than creating friction points.
                    </p>
                  </div>
                  <div className="p-6 bg-white border border-gray-100 rounded-lg">
                    <h3 className="text-base mb-3 font-westmount">Stakeholder Alignment</h3>
                    <p className="text-sm font-merriweather">
                      Improved coordination across departments and clearer shared understanding of priorities.
                    </p>
                  </div>
                  <div className="p-6 bg-white border border-gray-100 rounded-lg">
                    <h3 className="text-base mb-3 font-westmount">Sustainable Evolution</h3>
                    <p className="text-sm font-merriweather">
                      Solutions designed to adapt and grow beyond initial implementation, maintaining relevance.
                    </p>
                  </div>
                  <div className="p-6 bg-white border border-gray-100 rounded-lg">
                    <h3 className="text-base mb-3 font-westmount">Improved Experience</h3>
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
