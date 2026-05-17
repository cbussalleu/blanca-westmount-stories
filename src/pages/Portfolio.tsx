import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/ProjectsData';
import { useScrollToTop } from '../hooks/use-scroll-to-top';

const Portfolio = () => {
  useScrollToTop();
  
  return (
    <div className="min-h-screen bg-[hsl(var(--pastel-yellow))]">
      <Header />
      <main className="pt-24">
        <div className="container-narrow">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-xs hover:opacity-70 transition-opacity">
              <ArrowLeft size={14} className="mr-1" /> Back to Home
            </Link>
          </div>
        </div>
        
        <Hero 
          title="Portfolio"
          subtitle=""
          description="A collection of my most significant service design projects across various industries and global markets."
        />
        
        <section className="py-16">
          <div className="container-narrow">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {projects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
