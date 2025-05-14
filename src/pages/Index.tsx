
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import MethodologySection from '../components/MethodologySection';
import Header from '../components/Header';
import Footer from '../components/Footer';
import GroupoBimboSection from '../components/GroupoBimboSection';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    number: 1,
    title: "Connection Center Research & Design",
    description: "Designed a global omnichannel customer experience model capable of standardizing consumer and customer engagement while adapting to diverse market needs.",
    client: "Grupo Bimbo",
    slug: "connection-center",
    icon: "🌐"
  },
  {
    number: 2,
    title: "CRM Service Design & Implementation",
    description: "Transformed research insights into a functional CRM implementation with specialized modules for different departments across 17 countries.",
    client: "Grupo Bimbo",
    slug: "crm-service-design",
    icon: "💼"
  },
  {
    number: 3,
    title: "T-Conecta: B2B Omnichannel Service Ecosystem",
    description: "Designed an integrated digital and physical service ecosystem for small businesses, connecting ordering systems, financial services, and additional revenue streams.",
    client: "Grupo Bimbo",
    slug: "t-conecta",
    icon: "🏪"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <Hero 
          title="About Me"
          description="As a Service Design Lead with over 10 years of experience, I create innovative solutions that combine human empathy and technology to solve complex business challenges. I apply a human-centered design approach with a systems-thinking mindset to deliver value across food and beverage, finance, and government sectors."
          ctaText="View Portfolio"
          ctaLink="/portfolio"
          fullHeight
        />
        
        <div className="section-divider" />
        
        <section className="py-16">
          <div className="container-narrow">
            <div className="space-y-12">
              <div className="text-center">
                <h2 className="text-2xl mb-8">Grupo Bimbo and I</h2>
                <p className="text-sm max-w-2xl mx-auto">
                  For the past 7 years, I have led Grupo Bimbo's largest customer experience 
                  transformation initiative, establishing a new operational model for 
                  customer engagement across global markets.
                </p>
                <div className="mt-6">
                  <Link 
                    to="/bimbo-relationship" 
                    className="inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-70 transition-opacity"
                  >
                    Learn More <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
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
