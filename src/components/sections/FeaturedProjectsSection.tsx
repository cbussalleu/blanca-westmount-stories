import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';
import { projects } from '../../data/ProjectsData';

interface FeaturedProjectsSectionProps {
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const FeaturedProjectsSection = forwardRef<HTMLElement, FeaturedProjectsSectionProps>(
  ({ className }, ref) => {
    return (
      <section className={`py-8 sm:py-16 ${className || ''}`} ref={ref}>
        <div className="container-narrow">
          <motion.div 
            className="text-center mb-8 sm:mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-westmount">FEATURED PROJECTS</h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8 sm:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project) => (
              <motion.div key={project.slug} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              to="/portfolio" 
              className="inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-70 transition-opacity font-merriweather group"
            >
              View All Projects 
              <ArrowRight 
                size={14} 
                className="ml-1 group-hover:translate-x-1 transition-transform duration-200" 
              />
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }
);

FeaturedProjectsSection.displayName = 'FeaturedProjectsSection';

export default FeaturedProjectsSection;
