
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import MethodologySection from '../components/MethodologySection';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ImageHero from '../components/ImageHero';
import BimboFeature from '../components/BimboFeature';

const projects = [
  {
    number: 1,
    title: "Connection Center Research & Design",
    description: "Designed a global omnichannel customer experience model capable of standardizing consumer and customer engagement while adapting to diverse market needs.",
    client: "Grupo Bimbo",
    slug: "connection-center",
    imageSrc: "https://images.unsplash.com/photo-1565767292670-bbc01d6ce4a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    number: 2,
    title: "CRM Service Design & Implementation",
    description: "Transformed research insights into a functional CRM implementation with specialized modules for different departments across 17 countries.",
    client: "Grupo Bimbo",
    slug: "crm-service-design",
    imageSrc: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    number: 3,
    title: "Cardholder Loyalty Program Redesign",
    description: "Redesigned loyalty program for credit card holders to drive card usage and retention with optimized points accrual system.",
    client: "BBVA",
    slug: "loyalty-program-redesign",
    imageSrc: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24">
        <div className="container-narrow">
          <ImageHero 
            imageSrc="/lovable-uploads/311b143b-9bfb-4b23-b7b2-cf5fb6a91457.png"
            title="About Me"
            description="As a Service Design Lead, I create innovative solutions that combine human empathy and technology to solve complex business challenges and deliver value across food and beverage, finance, and government sectors."
            aspectRatio={16/9}
          />
        </div>
        
        <div className="section-divider" />
        
        <BimboFeature />
        
        <div className="section-divider" />
        
        <section className="py-16">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <h2 className="text-2xl">Featured Projects</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {projects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/portfolio" 
                className="inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-70 transition-opacity"
              >
                View All Projects <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>
        
        <div className="section-divider" />
        
        <section className="py-16">
          <div className="container-narrow">
            <div className="text-center mb-12">
              <h2 className="text-2xl">My Methodology</h2>
              <p className="text-sm max-w-2xl mx-auto mt-4">
                Experience cannot be designed, only enabled. This principle guides my systematic 
                approach to service design, recognizing the intersection between human and functional systems.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mt-12">
              <div className="space-y-4">
                <h3 className="text-lg">Human Systems</h3>
                <ul className="text-sm space-y-2">
                  <li>• Behaviors</li>
                  <li>• Culture</li>
                  <li>• Relationships</li>
                  <li>• Perceptions</li>
                  <li>• Expectations</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg">Functional Systems</h3>
                <ul className="text-sm space-y-2">
                  <li>• Processes</li>
                  <li>• Technology</li>
                  <li>• Metrics</li>
                  <li>• Architecture</li>
                  <li>• Operations</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/methodology" 
                className="inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-70 transition-opacity"
              >
                Learn More <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
