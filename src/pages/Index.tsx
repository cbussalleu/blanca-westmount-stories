
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
    imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80"
  },
  {
    number: 2,
    title: "CRM Service Design & Implementation",
    description: "Transformed research insights into a functional CRM implementation with specialized modules for different departments across 17 countries.",
    client: "Grupo Bimbo",
    slug: "crm-service-design",
    imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80"
  },
  {
    number: 3,
    title: "T-Conecta: B2B Omnichannel Service Ecosystem",
    description: "Designed an integrated digital and physical service ecosystem for small businesses, connecting ordering systems, financial services, and additional revenue streams.",
    client: "Grupo Bimbo",
    slug: "t-conecta",
    imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Hero 
          title="About Me"
          description="As a Service Design Lead, I create innovative solutions that combine human empathy and technology, and that solve complex business challenges and deliver value to customers. I have over 10 years of experience in customer experience and strategic design. I work with a multidisciplinary team to apply a human-centered design approach and a system-thinking mindset to understand the needs, behaviors, and motivations of the users and the stakeholders, and to design feasible and desirable solutions. I have led and contributed to projects across various industries, such as food and beverage, finance, and government. I am passionate about exploring the opportunities and challenges in the food system, and I am interested in gathering insights from food system entrepreneurs or food-tech projects."
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
