
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
    <section className={`flex items-center ${fullHeight ? 'min-h-[70vh]' : 'py-20'}`}>
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          {subtitle && (
            <span className="uppercase text-xs tracking-widest">{subtitle}</span>
          )}
          
          <h1 className="text-3xl md:text-4xl">
            {title}
          </h1>
          
          {description && (
            <p className="text-sm md:text-base leading-relaxed">
              {description}
            </p>
          )}
          
          {ctaText && ctaLink && (
            <div className="pt-4">
              <Link 
                to={ctaLink} 
                className="inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-70 transition-opacity"
              >
                {ctaText} <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
