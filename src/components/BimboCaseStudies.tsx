
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
  }
];

const BimboCaseStudies = () => {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="image-with-overlay-bimbo rounded-lg overflow-hidden relative group">
        <AspectRatio ratio={3/4} className="w-full">
          <div className="bimbo-image-container w-full h-full bg-[hsla(var(--bimbo-overlay))]">
            <img 
              src="/lovable-uploads/aba0f719-b826-4af0-9302-5fe7b9bd47fa.png" 
              alt="Bimbo bakery worker" 
              className="object-cover w-full h-full"
            />
          </div>
        </AspectRatio>
      </div>
      
      <div>
        <div className="space-y-8">
          {bimboCases.map((caseStudy, index) => (
            <div key={index} className="group">
              <h3 className="text-lg font-merriweather mb-2">{caseStudy.title}</h3>
              <p className="text-sm text-gray-700 mb-2 font-merriweather">{caseStudy.description}</p>
              <Link 
                to={`/portfolio/${caseStudy.slug}`}
                className="inline-flex items-center text-xs border-b border-black pb-0.5 hover:opacity-70 transition-opacity font-merriweather"
              >
                View Project <ArrowRight size={12} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <Link 
            to="/bimbo-relationship"
            className="inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-70 transition-opacity font-merriweather"
          >
            Inside the Bimbo story <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BimboCaseStudies;
