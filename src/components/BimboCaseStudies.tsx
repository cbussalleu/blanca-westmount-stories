
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const bimboCases = [
  {
    title: "Connection Center Research & Design",
    description: "Designed a global omnichannel customer experience model across 17 countries in Latin America, Europe, and Asia.",
    slug: "connection-center",
  },
  {
    title: "CRM Service Design & Implementation",
    description: "Transformed research insights into a functional CRM implementation with specialized modules for different departments.",
    slug: "crm-service-design",
  },
  {
    title: "Continuous Improvement & Innovation Framework",
    description: "Designed and implemented a sustainable model for continuous improvement and innovation across the global Connection Center ecosystem.",
    slug: "continuous-improvement",
  },
  {
    title: "Global Adoption Strategy",
    description: "Created a phased implementation approach that ensured successful adoption across diverse markets and cultures.",
    slug: "global-adoption",
  }
];

const BimboCaseStudies = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="image-with-overlay rounded-lg overflow-hidden relative group">
        <AspectRatio ratio={3/4} className="w-full">
          <img 
            src="/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png" 
            alt="Grupo Bimbo Connection Center" 
            className="object-cover"
          />
        </AspectRatio>
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-xl md:text-2xl font-westmount text-center px-6 uppercase transition-transform duration-300 group-hover:scale-110 group-hover:font-bold">
            7 years designing for an ever-evolving industry
          </h3>
        </div>
      </div>
      
      <div>
        <div className="space-y-8">
          {bimboCases.map((caseStudy, index) => (
            <div key={index} className="group">
              <h3 className="text-lg font-medium mb-2">{caseStudy.title}</h3>
              <p className="text-sm text-gray-700 mb-2">{caseStudy.description}</p>
              <Link 
                to={`/portfolio/${caseStudy.slug}`}
                className="inline-flex items-center text-xs border-b border-black pb-0.5 hover:opacity-70 transition-opacity"
              >
                View Project <ArrowRight size={12} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <Link 
            to="/bimbo-relationship"
            className="inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-70 transition-opacity"
          >
            Learn More About My Work with Grupo Bimbo <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BimboCaseStudies;
