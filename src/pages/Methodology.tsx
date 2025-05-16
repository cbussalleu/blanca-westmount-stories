import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// SVG Components for minimalist graphics
const SystemsIntersectionSVG = () => (
  <svg width="280" height="220" viewBox="0 0 280 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto my-6">
    <circle cx="100" cy="110" r="80" fill="hsla(48, 100%, 90%, 0.6)" />
    <circle cx="180" cy="110" r="80" fill="hsla(142, 35%, 62%, 0.4)" />
    <text x="60" y="60" fontSize="14" fontFamily="Westmount, serif">Human Systems</text>
    <text x="60" y="78" fontSize="10" fontFamily="Helvetica, sans-serif" fill="#555">behaviors, culture</text>
    <text x="60" y="92" fontSize="10" fontFamily="Helvetica, sans-serif" fill="#555">relationships, perceptions</text>
    <text x="170" y="60" fontSize="14" fontFamily="Westmount, serif">Functional Systems</text>
    <text x="170" y="78" fontSize="10" fontFamily="Helvetica, sans-serif" fill="#555">processes, technology</text>
    <text x="170" y="92" fontSize="10" fontFamily="Helvetica, sans-serif" fill="#555">metrics, operations</text>
    <text x="125" y="180" fontSize="14" fontFamily="Westmount, serif" textAnchor="middle">Service Design</text>
  </svg>
);

const ComplexityMindsetSVG = () => (
  <svg width="280" height="180" viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto my-6">
    <line x1="40" y1="90" x2="240" y2="90" stroke="#000" strokeWidth="1" strokeDasharray="5,5" />
    <circle cx="70" cy="90" r="10" fill="hsla(48, 100%, 90%, 0.8)" />
    <circle cx="140" cy="90" r="10" fill="hsla(48, 100%, 90%, 0.8)" />
    <circle cx="210" cy="90" r="10" fill="hsla(48, 100%, 90%, 0.8)" />
    <path d="M40 90 Q 95 40, 140 90 Q 185 140, 240 90" stroke="#555" strokeWidth="1" fill="none" />
    <text x="55" y="50" fontSize="12" fontFamily="Helvetica, sans-serif">Navigate</text>
    <text x="125" y="50" fontSize="12" fontFamily="Helvetica, sans-serif">Act</text>
    <text x="190" y="50" fontSize="12" fontFamily="Helvetica, sans-serif">Adapt</text>
    <text x="140" y="150" fontSize="14" fontFamily="Westmount, serif" textAnchor="middle">Complexity Mindset</text>
  </svg>
);

const ProcessFlowSVG = () => (
  <svg width="600" height="120" viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto my-6 max-w-full">
    <rect x="50" y="40" width="140" height="60" rx="4" fill="hsla(48, 100%, 85%, 0.8)" />
    <rect x="230" y="40" width="140" height="60" rx="4" fill="hsla(142, 35%, 62%, 0.4)" />
    <rect x="410" y="40" width="140" height="60" rx="4" fill="hsla(210, 40%, 90%, 0.5)" />
    <text x="120" y="75" fontSize="16" fontFamily="Westmount, serif" textAnchor="middle">Understand</text>
    <text x="300" y="75" fontSize="16" fontFamily="Westmount, serif" textAnchor="middle">Ideate</text>
    <text x="480" y="75" fontSize="16" fontFamily="Westmount, serif" textAnchor="middle">Deliver</text>
    <path d="M190 70 L 230 70" stroke="#000" strokeWidth="1" markerEnd="url(#arrowhead)" />
    <path d="M370 70 L 410 70" stroke="#000" strokeWidth="1" markerEnd="url(#arrowhead)" />
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#000" />
      </marker>
    </defs>
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
              <h2 className="text-xl font-westmount mt-4">NO SILVER BULLETS</h2>
              <p className="text-sm max-w-2xl mx-auto mt-6">
                Designing within complexity, not around it.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {/* Introduction */}
              <div className="mb-16 text-center">
                <p className="text-sm font-merriweather italic mb-4">
                  "I don't believe in perfect solutions.<br />
                  I believe in better questions, adaptive systems, and learning through doing."
                </p>
              </div>
              
              {/* Experience can't be designed—only enabled */}
              <div className="mb-16">
                <h2 className="text-2xl mb-6 font-westmount">Experience can't be designed—only enabled</h2>
                <p className="text-sm mb-4">
                  I work at the intersection of two systems:
                </p>
                
                <SystemsIntersectionSVG />
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <p className="text-sm mb-2 font-bold">Functional systems can be structured</p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>Processes</li>
                      <li>Technology</li>
                      <li>Metrics</li>
                      <li>Architecture</li>
                      <li>Operations</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm mb-2 font-bold">Human experiences must be supported</p>
                    <ul className="text-sm list-disc pl-5 space-y-1">
                      <li>Behaviors</li>
                      <li>Culture</li>
                      <li>Relationships</li>
                      <li>Perceptions</li>
                      <li>Expectations</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-sm mt-6 text-center italic">
                  That's why I design for <span className="font-bold">emergence</span>, not predictability.
                </p>
              </div>
              
              {/* A Complexity Mindset */}
              <div className="mb-16">
                <h2 className="text-2xl mb-6 font-westmount">A Complexity Mindset</h2>
                <p className="text-sm mb-4">
                  Modern services operate in messy, dynamic environments.
                  Instead of simplifying that complexity, I help teams:
                </p>
                
                <ComplexityMindsetSVG />
                
                <ul className="text-sm space-y-2 mt-6">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[hsla(48,100%,90%,0.8)] mr-2 rounded-full"></span>
                    <span><strong>Navigate it with clarity</strong> - Create models that make sense of messy realities</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[hsla(48,100%,90%,0.8)] mr-2 rounded-full"></span>
                    <span><strong>Act in uncertainty</strong> - Move forward without complete information</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-[hsla(48,100%,90%,0.8)] mr-2 rounded-full"></span>
                    <span><strong>Adapt continuously</strong> - Adjust and evolve as systems change</span>
                  </li>
                </ul>
                
                <p className="text-sm mt-6 text-center">
                  I balance control with emergence — and always keep the bigger system in view.
                </p>
              </div>
              
              {/* What I Bring */}
              <div className="mb-16">
                <h2 className="text-2xl mb-6 font-westmount">What I Bring</h2>
                <p className="text-sm mb-6">
                  I don't just design services — I <strong>build design capabilities</strong> inside organizations.
                  That means I:
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-4 border border-gray-200 rounded-lg bg-white">
                    <div className="text-center mb-2 text-3xl">🔍</div>
                    <h3 className="text-base mb-2 text-center font-westmount">Systemic Lens</h3>
                    <p className="text-sm text-center">
                      Keep a systemic perspective throughout research and delivery
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg bg-white">
                    <div className="text-center mb-2 text-3xl">🤝</div>
                    <h3 className="text-base mb-2 text-center font-westmount">Collaboration</h3>
                    <p className="text-sm text-center">
                      Enable effective collaboration across organizational silos
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg bg-white">
                    <div className="text-center mb-2 text-3xl">🗺️</div>
                    <h3 className="text-base mb-2 text-center font-westmount">Actionable Roadmaps</h3>
                    <p className="text-sm text-center">
                      Translate complexity into clear, actionable paths forward
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg bg-white">
                    <div className="text-center mb-2 text-3xl">🔄</div>
                    <h3 className="text-base mb-2 text-center font-westmount">Adaptation</h3>
                    <p className="text-sm text-center">
                      Guide teams to learn and adapt in real time
                    </p>
                  </div>
                </div>
              </div>
              
              {/* My Service Design Process */}
              <div className="mb-16">
                <h2 className="text-2xl mb-6 font-westmount">My Service Design Process</h2>
                
                <ProcessFlowSVG />
                
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                  <div>
                    <h3 className="text-lg mb-4 font-westmount">Understand</h3>
                    <ul className="text-sm space-y-2">
                      <li>• Research planning</li>
                      <li>• Qualitative & quantitative research</li>
                      <li>• Journey analytics & mapping</li>
                      <li>• Stakeholder & process mapping</li>
                      <li>• Benchmarking</li>
                      <li>• Process mapping (BPM + Blueprinting)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg mb-4 font-westmount">Ideate</h3>
                    <ul className="text-sm space-y-2">
                      <li>• Conceptualization workshops</li>
                      <li>• Prototyping facilitation</li>
                      <li>• Experience vision</li>
                      <li>• Value proposition concept</li>
                      <li>• Sketching</li>
                      <li>• Wireframing</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg mb-4 font-westmount">Deliver</h3>
                    <ul className="text-sm space-y-2">
                      <li>• Process design</li>
                      <li>• Continuous improvement framework</li>
                      <li>• Service orchestration</li>
                      <li>• Adoption monitoring</li>
                      <li>• Sprint planning</li>
                      <li>• Project management</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* What You Get */}
              <div>
                <h2 className="text-2xl mb-6 font-westmount">What You Get</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-4 border border-gray-200 rounded-lg bg-white">
                    <h3 className="text-base mb-2 font-westmount">Better Integration</h3>
                    <p className="text-sm">
                      Services that work with existing processes and systems rather than fighting against them
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg bg-white">
                    <h3 className="text-base mb-2 font-westmount">Sustainable Change</h3>
                    <p className="text-sm">
                      Solutions that continue to work and evolve after the initial implementation
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg bg-white">
                    <h3 className="text-base mb-2 font-westmount">Systemic Awareness</h3>
                    <p className="text-sm">
                      Better identification of ripple effects and unintended consequences before they become problems
                    </p>
                  </div>
                  <div className="p-4 border border-gray-200 rounded-lg bg-white">
                    <h3 className="text-base mb-2 font-westmount">Effective Alignment</h3>
                    <p className="text-sm">
                      More effective management of competing interests and priorities across stakeholders
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
