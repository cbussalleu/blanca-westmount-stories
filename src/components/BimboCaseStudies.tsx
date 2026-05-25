import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
    <div className="grid md:grid-cols-2 gap-8">
      {/* Hero image card */}
      <div className="relative group cursor-pointer">
        <div className="image-with-overlay overflow-hidden bg-[hsl(var(--pastel-yellow))]">
          <div className="relative">
            <div className="w-full h-[260px] md:h-[580px]">
              <img
                src="/lovable-uploads/bimbo-bakery-mobile.png"
                alt="Bimbo small business owner - mobile"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] block md:hidden"
                style={{ filter: 'grayscale(1) contrast(1.1) brightness(0.9)' }}
              />
              <img
                src="/lovable-uploads/bimbo-bakery-desktop.PNG"
                alt="Bimbo small business owner - desktop"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] hidden md:block"
                style={{ filter: 'grayscale(1) contrast(1.1) brightness(0.9)' }}
              />
            </div>

            <div className="absolute inset-0 bg-[hsl(var(--image-overlay))] opacity-0 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-[hsl(var(--pastel-yellow))] opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
              <h3
                className="text-white text-lg sm:text-xl md:text-2xl font-westmount text-center transition-all duration-300 leading-tight tracking-normal group-hover:tracking-[0.02em]"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.35))' }}
              >
                Over 7 years designing for a bold brand in an ever-evolving industry
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="space-y-8">
          {bimboCases.map((caseStudy, index) => (
            <div key={index} className="group">
              <h3 className="heading-m mb-2">{caseStudy.title}</h3>
              <p className="prose mb-2">{caseStudy.description}</p>
              <Link to={`/portfolio/${caseStudy.slug}`} className="cta-link cta-link-sm">
                View Project <ArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:text-left">
          <Link to="/bimbo-relationship" className="cta-link cta-link-md">
            Inside the Bimbo story <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BimboCaseStudies;
