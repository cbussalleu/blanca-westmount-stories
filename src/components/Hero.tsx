
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  fullHeight?: boolean;
}

const Hero = ({ title, subtitle, description, ctaText, ctaLink, fullHeight = false }: HeroProps) => {
  return (
    <section className={`flex items-center bg-white ${fullHeight ? 'min-h-[80vh]' : 'py-20 md:py-32'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          {subtitle && (
            <span className="block mb-3 text-gray-500 font-helvetica">{subtitle}</span>
          )}
          
          <h1 className="font-westmount text-4xl md:text-5xl lg:text-6xl mb-6">
            {title}
          </h1>
          
          {description && (
            <p className="text-gray-600 font-helvetica text-lg mb-8 leading-relaxed">
              {description}
            </p>
          )}
          
          {ctaText && ctaLink && (
            <Link 
              to={ctaLink} 
              className="inline-flex items-center px-6 py-3 border border-black rounded-md font-helvetica hover:bg-black hover:text-white transition-colors"
            >
              {ctaText} <ArrowRight size={16} className="ml-2" />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
