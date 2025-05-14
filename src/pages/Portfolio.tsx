
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';

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
  },
  {
    number: 4,
    title: "Continuous Improvement & Innovation Framework",
    description: "Designed and implemented a sustainable model for continuous improvement and innovation across the global Connection Center ecosystem.",
    client: "Grupo Bimbo",
    slug: "continuous-improvement",
    icon: "🔄"
  },
  {
    number: 5,
    title: "Digital Sales Channel Transformation",
    description: "Transformed traditional insurance sales into digital channel, being the first key project in La Positiva's transformative roadmap.",
    client: "La Positiva Insurance",
    slug: "digital-sales-transformation",
    icon: "📱"
  },
  {
    number: 6,
    title: "BARTISTA - Global Coffee Content Production Model",
    description: "Designed an operational model for producing content at global scale for Nestlé's premium coffee brands, balancing global consistency with local relevance.",
    client: "Nestlé",
    slug: "bartista",
    icon: "☕"
  },
  {
    number: 7,
    title: "Digital Innovation Maturity Index",
    description: "Development of self-assessment tool and roadmap planning service for public institutions to enhance understanding of innovation capabilities.",
    client: "Peruvian Government",
    slug: "innovation-maturity-index",
    icon: "📊"
  },
  {
    number: 8,
    title: "META Sales Optimization Program",
    description: "Redesign of telephone sales process and training program for Meta advertisers, resulting in improved conversion rates and agent performance.",
    client: "Facebook",
    slug: "meta-sales-optimization",
    icon: "📞"
  },
  {
    number: 9,
    title: "Cardholder Loyalty Program Redesign",
    description: "Redesigned loyalty program for credit card holders to drive card usage and retention with optimized points accrual system.",
    client: "BBVA",
    slug: "loyalty-program-redesign",
    icon: "💳"
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Hero 
          title="Portfolio"
          subtitle="SERVICE DESIGN PROJECTS"
          description="A collection of my most significant service design projects across various industries and global markets."
        />
        
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
