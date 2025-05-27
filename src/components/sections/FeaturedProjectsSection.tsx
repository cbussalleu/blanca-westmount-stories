
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '../ProjectCard';
import { projects } from '../../data/ProjectsData';

interface FeaturedProjectsSectionProps {
  className?: string;
}

const FeaturedProjectsSection = forwardRef<HTMLElement, FeaturedProjectsSectionProps>(
  ({ className }, ref) => {
    return (
      <section className={`py-8 sm:py-16 ${className || ''}`} ref={ref}>
        <div className="container-narrow">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-westmount">FEATURED PROJECTS</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-70 transition-opacity font-merriweather"
            >
              View All Projects <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>
    );
  }
);

FeaturedProjectsSection.displayName = 'FeaturedProjectsSection';

export default FeaturedProjectsSection;
