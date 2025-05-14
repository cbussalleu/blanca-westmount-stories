
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

const BimboRelationship = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8">
              <Link to="/" className="inline-flex items-center font-helvetica text-sm hover:text-gray-600 transition-colors">
                <ArrowLeft size={16} className="mr-1" /> Back to Home
              </Link>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <h1 className="font-westmount text-4xl md:text-5xl mb-8">Grupo Bimbo and I</h1>
              
              <div className="mb-12">
                <p className="font-helvetica text-lg text-gray-600 mb-6">
                  For the past 7 years, I have led the design and implementation processes for Grupo Bimbo's largest 
                  customer experience transformation effort of the last decade. As the world's largest bread manufacturer 
                  with presence in over 33 countries, this strategic initiative, known as the Connection Center, establishes 
                  a new operational model for customer and consumer engagement across global markets.
                </p>
                
                <p className="font-helvetica text-lg text-gray-600 mb-6">
                  My work encompasses the complete service design lifecycle: from initial research and conceptualization, 
                  through detailed process and experience design, to global implementation in 17 countries across 
                  Latin America, Europe, and Asia, adapting the model to diverse cultural, technological, and operational contexts.
                </p>
              </div>
              
              <div className="mb-12">
                <h2 className="font-westmount text-2xl mb-6">Project Global Objectives</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle size={24} className="mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-westmount text-lg">Unify Experience Management</h3>
                      <p className="font-helvetica text-gray-600">Create a single governance point for all customer contact channels, eliminating operational silos.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={24} className="mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-westmount text-lg">Democratize Insight Access</h3>
                      <p className="font-helvetica text-gray-600">Transform customer feedback into valuable, actionable information for all internal departments.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={24} className="mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-westmount text-lg">Accelerate Innovation Cycles</h3>
                      <p className="font-helvetica text-gray-600">Utilize voice of customer to drive continuous improvement and innovation processes in products and services.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={24} className="mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-westmount text-lg">Optimize Investment</h3>
                      <p className="font-helvetica text-gray-600">Consolidate resources and budgets to maximize return on customer experience investment.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={24} className="mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-westmount text-lg">Enhance B2C and B2B Experience</h3>
                      <p className="font-helvetica text-gray-600">Elevate satisfaction levels for both end consumers and B2B customers in the HORECA channel and large stores.</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="mb-12">
                <h2 className="font-westmount text-2xl mb-6">Key Projects</h2>
                
                <div className="space-y-8">
                  <div className="border-l-4 border-gray-200 pl-6">
                    <h3 className="font-westmount text-xl mb-3">Omnichannel Connection Center Research & Design</h3>
                    <p className="font-helvetica text-gray-600 mb-4">
                      Designed a global omnichannel customer experience model capable of standardizing consumer and 
                      customer engagement while adapting to diverse market needs across 17 countries.
                    </p>
                    <Link 
                      to="/portfolio/connection-center"
                      className="inline-flex items-center font-helvetica text-sm hover:text-gray-600 transition-colors"
                    >
                      View Project <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                  
                  <div className="border-l-4 border-gray-200 pl-6">
                    <h3 className="font-westmount text-xl mb-3">CRM Service Design & Implementation</h3>
                    <p className="font-helvetica text-gray-600 mb-4">
                      Transformed research insights and service blueprints into a functional, scalable CRM implementation 
                      that would unify customer experience processes while enabling local adaptation.
                    </p>
                    <Link 
                      to="/portfolio/crm-service-design"
                      className="inline-flex items-center font-helvetica text-sm hover:text-gray-600 transition-colors"
                    >
                      View Project <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                  
                  <div className="border-l-4 border-gray-200 pl-6">
                    <h3 className="font-westmount text-xl mb-3">Continuous Improvement & Innovation Framework</h3>
                    <p className="font-helvetica text-gray-600 mb-4">
                      Designed and implemented a sustainable model for continuous improvement and innovation across 
                      the global Connection Center ecosystem.
                    </p>
                    <Link 
                      to="/portfolio/continuous-improvement"
                      className="inline-flex items-center font-helvetica text-sm hover:text-gray-600 transition-colors"
                    >
                      View Project <ArrowRight size={16} className="ml-1" />
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
