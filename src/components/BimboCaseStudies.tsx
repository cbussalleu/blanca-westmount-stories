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
      {/* Sección de imagen hero - COMPLETAMENTE REPLANTEADA */}
      <div className="relative group cursor-pointer">
        {/* Contenedor principal con bordes redondeados */}
        <div className="image-with-overlay rounded-lg overflow-hidden shadow-md bg-[hsl(var(--pastel-yellow))]">
          {/* Imagen con dimensiones fijas y claras */}
          <div className="relative">
            <div className="w-full h-[260px] md:h-[580px]">
              {/* Imagen para móvil (derecha) - más vertical */}
              <img
                src="/lovable-uploads/bimbo-bakery-mobile.png"
                alt="Bimbo small business owner - mobile"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] block md:hidden"
                style={{
                  filter: 'grayscale(1) contrast(1.1) brightness(0.9)'
                }}
              />
              {/* Imagen para desktop (izquierda) - más horizontal */}
              <img
                src="/lovable-uploads/bimbo-bakery-desktop.PNG"
                alt="Bimbo small business owner - desktop"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] hidden md:block"
                style={{
                  filter: 'grayscale(1) contrast(1.1) brightness(0.9)'
                }}
              />
            </div>
            
            {/* Overlay permanente (siempre visible) - reduciendo la opacidad para menos amarillo */}
            <div className="absolute inset-0 bg-[hsl(var(--image-overlay))] opacity-0 mix-blend-multiply"></div>
            
            {/* Overlay hover (solo en hover) */}
           <div className="absolute inset-0 bg-[hsl(var(--pastel-yellow))] opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Texto superpuesto */}
            <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
              <h3 className="text-white text-lg sm:text-xl md:text-2xl font-westmount text-center transition-all duration-300 group-hover:tracking-[0.02em] drop-shadow-lg leading-tight">
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
              <h3 className="text-lg font-merriweather mb-2">{caseStudy.title}</h3>
              <p className="font-merriweather text-[15px] leading-[1.65] text-gray-700 mb-2">{caseStudy.description}</p>
              <Link
                to={`/portfolio/${caseStudy.slug}`}
                className="inline-flex items-center text-xs border-b border-black pb-0.5 hover:opacity-60 transition-opacity duration-200 font-merriweather group"
              >
                View Project <ArrowRight size={12} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:text-left">
          <Link
            to="/bimbo-relationship"
            className="inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-60 transition-opacity font-merriweather group"
          >
            Inside the Bimbo story 
            <ArrowRight 
              size={14} 
              className="ml-1 group-hover:translate-x-1 transition-transform duration-200" 
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BimboCaseStudies;
