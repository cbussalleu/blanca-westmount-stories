
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

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
    title: "T-Conecta: B2B Omnichannel Service Ecosystem",
    description: "Designed an integrated digital and physical service ecosystem for small businesses, connecting ordering systems, financial services, and additional revenue streams.",
    client: "Grupo Bimbo",
    slug: "t-conecta",
    imageSrc: "https://images.unsplash.com/photo-1554224155-1696413565d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    number: 4,
    title: "Continuous Improvement & Innovation Framework",
    description: "Designed and implemented a sustainable model for continuous improvement and innovation across the global Connection Center ecosystem.",
    client: "Grupo Bimbo",
    slug: "continuous-improvement",
    imageSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    number: 5,
    title: "Digital Sales Channel Transformation",
    description: "Transformed traditional insurance sales into digital channel, being the first key project in La Positiva's transformative roadmap.",
    client: "La Positiva Insurance",
    slug: "digital-sales-transformation",
    imageSrc: "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    number: 6,
    title: "BARTISTA - Global Coffee Content Production Model",
    description: "Designed an operational model for producing content at global scale for Nestlé's premium coffee brands, balancing global consistency with local relevance.",
    client: "Nestlé",
    slug: "bartista",
    imageSrc: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    number: 7,
    title: "Digital Innovation Maturity Index",
    description: "Development of self-assessment tool and roadmap planning service for public institutions to enhance understanding of innovation capabilities.",
    client: "Peruvian Government",
    slug: "innovation-maturity-index",
    imageSrc: "https://images.unsplash.com/photo-1584941705321-d883d8b6a3c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    number: 8,
    title: "META Sales Optimization Program",
    description: "Redesign of telephone sales process and training program for Meta advertisers, resulting in improved conversion rates and agent performance.",
    client: "Facebook",
    slug: "meta-sales-optimization",
    imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    number: 9,
    title: "Cardholder Loyalty Program Redesign",
    description: "Redesigned loyalty program for credit card holders to drive card usage and retention with optimized points accrual system.",
    client: "BBVA",
    slug: "loyalty-program-redesign",
    imageSrc: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

const Portfolio = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
