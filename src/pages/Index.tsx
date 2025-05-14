
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
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Hero 
          title="About Me"
          description="As a Service Design Lead with over 10 years of experience, I create innovative solutions that combine human empathy and technology to solve complex business challenges. I apply a human-centered design approach with a systems-thinking mindset to deliver value across food and beverage, finance, and government sectors."
          ctaText="View Portfolio"
          ctaLink="/portfolio"
          fullHeight
        />
        
        <GroupoBimboSection />
        
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex justify-between items-end mb-10">
              <h2 className="font-westmount text-3xl">Featured Projects</h2>
              <Link 
                to="/portfolio" 
                className="flex items-center font-helvetica text-sm hover:text-gray-600 transition-colors"
              >
                View All Projects <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          </div>
        </section>
        
        <MethodologySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
