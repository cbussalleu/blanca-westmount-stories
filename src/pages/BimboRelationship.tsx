
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import BimboCaseStudies from '../components/BimboCaseStudies';

const BimboRelationship = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--pastel-yellow))]">
      <Header />
      <main className="pt-24">
        <section className="py-12">
          <div className="container-narrow">
            <div className="mb-8">
              <Link to="/" className="inline-flex items-center text-xs hover:opacity-70 transition-opacity">
                <ArrowLeft size={14} className="mr-1" /> Back to Home
              </Link>
            </div>
            
            <div className="text-center mb-16">
              <h1 className="text-5xl font-westmount">GRUPO BIMBO AND I</h1>
              <p className="text-sm max-w-2xl mx-auto mt-8">
                For the past 7 years, I have led the design and implementation processes for Grupo Bimbo's largest customer experience transformation initiative.
              </p>
            </div>
            
            <div className="max-w-2xl mx-auto mt-12">
              <div className="space-y-6 text-sm">
                <p>
                  As the world's largest bread manufacturer with presence in over 33 countries, this strategic initiative, 
                  known as the Connection Center, establishes a new operational model for customer and consumer engagement across global markets.
                </p>
                
                <p>
                  My work encompasses the complete service design lifecycle: from initial research and conceptualization, 
                  through detailed process and experience design, to global implementation in 17 countries across 
                  Latin America, Europe, and Asia, adapting the model to diverse cultural, technological, and operational contexts.
                </p>
              </div>
              
              <div className="mt-12 mb-12">
                <h2 className="text-xl mb-6">Project Global Objectives</h2>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <CheckCircle size={18} className="mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-base">Unify Experience Management</h3>
                      <p className="text-sm text-gray-600">Create a single governance point for all customer contact channels, eliminating operational silos.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-base">Democratize Insight Access</h3>
                      <p className="text-sm text-gray-600">Transform customer feedback into valuable, actionable information for all internal departments.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={18} className="mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-base">Accelerate Innovation Cycles</h3>
                      <p className="text-sm text-gray-600">Utilize voice of customer to drive continuous improvement and innovation processes in products and services.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12">
                <h2 className="text-xl mb-6">Key Projects</h2>
                
                <div className="space-y-10">
                  <div className="border-l border-gray-300 pl-4">
                    <h3 className="text-base mb-2">Omnichannel Connection Center Research & Design</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Designed a global omnichannel customer experience model capable of standardizing consumer and 
                      customer engagement while adapting to diverse market needs across 17 countries.
                    </p>
                    <Link 
                      to="/portfolio/connection-center"
                      className="inline-flex items-center text-xs border-b border-black pb-0.5 hover:opacity-70 transition-opacity"
                    >
                      View Project <ArrowRight size={12} className="ml-1" />
                    </Link>
                  </div>
                  
                  <div className="border-l border-gray-300 pl-4">
                    <h3 className="text-base mb-2">CRM Service Design & Implementation</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Transformed research insights and service blueprints into a functional, scalable CRM implementation 
                      that would unify customer experience processes while enabling local adaptation.
                    </p>
                    <Link 
                      to="/portfolio/crm-service-design"
                      className="inline-flex items-center text-xs border-b border-black pb-0.5 hover:opacity-70 transition-opacity"
                    >
                      View Project <ArrowRight size={12} className="ml-1" />
                    </Link>
                  </div>
                  
                  <div className="border-l border-gray-300 pl-4">
                    <h3 className="text-base mb-2">Continuous Improvement & Innovation Framework</h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Designed and implemented a sustainable model for continuous improvement and innovation across 
                      the global Connection Center ecosystem.
                    </p>
                    <Link 
                      to="/portfolio/continuous-improvement"
                      className="inline-flex items-center text-xs border-b border-black pb-0.5 hover:opacity-70 transition-opacity"
                    >
                      View Project <ArrowRight size={12} className="ml-1" />
                    </Link>
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

export default BimboRelationship;
