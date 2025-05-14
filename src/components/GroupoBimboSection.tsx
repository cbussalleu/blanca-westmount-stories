
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const bimboProjects = [
  {
    title: "Omnichannel Connection Center Research & Design",
    description: "Led the design of a global omnichannel customer experience model across 17 countries in Latin America, Europe, and Asia.",
    slug: "connection-center",
    icon: "🌐"
  },
  {
    title: "CRM Service Design & Implementation",
    description: "Transformed research insights into a functional CRM implementation with specialized modules for different departments.",
    slug: "crm-service-design",
    icon: "💼"
  },
  {
    title: "Continuous Improvement & Innovation Framework",
    description: "Designed and implemented a sustainable model for continuous improvement and innovation across the global Connection Center ecosystem.",
    slug: "continuous-improvement",
    icon: "🔄"
  }
];

const GroupoBimboSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-westmount text-3xl mb-4">Grupo Bimbo and I</h2>
          <p className="text-gray-600 font-helvetica">
            For the past 7 years, I have led design and implementation processes for Grupo Bimbo's largest customer 
            experience transformation effort, establishing a new operational model for customer and 
            consumer engagement across global markets.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {bimboProjects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">{project.icon}</div>
              <h3 className="font-westmount text-xl mb-3">{project.title}</h3>
              <p className="font-helvetica text-gray-600 mb-4">{project.description}</p>
              <Link 
                to={`/portfolio/${project.slug}`}
                className="inline-flex items-center text-sm font-helvetica hover:text-gray-600 transition-colors"
              >
                View Project <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/bimbo-relationship"
            className="inline-flex items-center px-6 py-3 border border-black rounded-md font-helvetica hover:bg-black hover:text-white transition-colors"
          >
            Learn more about my work with Grupo Bimbo <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GroupoBimboSection;
