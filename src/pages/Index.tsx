import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ImageHero from '../components/ImageHero';
import BimboCaseStudies from '../components/BimboCaseStudies';
import AnimatedVennDiagram from '../components/methodology/AnimatedVennDiagram';
import RadarSkillsSection from '../components/RadarSkillsSection';

const projects = [
  {
    number: 1,
    title: "Cardholder Loyalty Program Redesign",
    description: "Redesigned loyalty program for credit card holders to drive card usage and retention with optimized points accrual system.",
    client: "BBVA",
    slug: "loyalty-program-redesign",
    imageSrc: "https://images.unsplash.com/photo-1589758438368-0ad531db3366?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    number: 2,
    title: "BARTISTA - Global Coffee Content Production Model",
    description: "Designed an operational model for producing content at global scale for Nestlé's premium coffee brands, balancing global consistency with local relevance.",
    client: "Nestlé",
    slug: "bartista",
    imageSrc: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    number: 3,
    title: "Insurance Customer Journey Redesign",
    description: "Redesigned end-to-end customer journey for insurance claims processing to improve satisfaction and operational efficiency.",
    client: "La Positiva",
    slug: "insurance-journey-redesign",
    imageSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

const Index = () => {
  const sectionRefs = {
    about: useRef(null),
    skills: useRef(null),
    bimbo: useRef(null),
    projects: useRef(null),
    methodology: useRef(null)
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[hsl(var(--pastel-yellow))]">
      <Header />
      <main className="pt-24">
        {/* About Me Section */}
        <section className="py-8 sm:py-16" ref={sectionRefs.about}>
          <div className="container-narrow">
            <div className="mb-8 sm:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-merriweather mb-8 sm:mb-16 text-left sm:text-center">
                Hello, I'm Christian.<br className="hidden sm:block" />
                <span className="inline sm:hidden"> </span>Service Designer in Barcelona.<br className="hidden sm:block" />
                <span className="inline sm:hidden"> </span>I don't bring perfect answers —<br className="hidden sm:block" />
                <span className="inline sm:hidden"> </span>I help teams ask better questions<br className="hidden sm:block" />
                <span className="inline sm:hidden"> </span>and build adaptive solutions
              </h1>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-16">
              <div className="space-y-4 md:space-y-6">
                <p className="text-sm leading-relaxed font-merriweather">
                  With over a decade in service design across global organizations, I've learned the importance of guiding teams through complexity. My approach emphasizes understanding patterns and creating adaptable solutions. This perspective works in environments where stakeholder needs shift and service ecosystems grow increasingly interconnected.
                </p>
              </div>
              <div className="space-y-4 md:space-y-6">
                <p className="text-sm leading-relaxed font-merriweather">
                  My background in communication strategy helps translate research into narratives that drive stakeholder alignment. This becomes valuable when working across departments with competing priorities. While I enjoy the engineering aspects of blueprinting, I've learned that effective service design is equally about politics and maintaining curiosity about improvement.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Radar Section */}
        <section ref={sectionRefs.skills}>
          <RadarSkillsSection />
        </section>
        
        {/* Grupo Bimbo Section */}
        <section className="py-8 sm:py-16" ref={sectionRefs.bimbo}>
          <div className="container-narrow">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-westmount mb-8 sm:mb-16 text-center">
              GRUPO BIMBO AND I
            </h2>
            <BimboCaseStudies />
          </div>
        </section>
        
        {/* Featured Projects Section */}
        <section className="py-8 sm:py-16" ref={sectionRefs.projects}>
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
        
        {/* Methodology Section */}
        <section className="py-8 sm:py-16" ref={sectionRefs.methodology}>
          <div className="container-narrow">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-westmount">MY APPROACH</h2>
              <p className="text-sm max-w-2xl mx-auto mt-4 sm:mt-8 text-base font-merriweather">
                I <span className="text-[#8ab1a2]">tackle</span> a broad variety of 
                disciplines in the <u>agile process</u>, 
                of creating meaningful products
              </p>
            </div>
            
            <div className="flex justify-center mt-8 sm:mt-12">
              <img 
                src="/lovable-uploads/a44d8134-2342-431d-aaf8-18fe1829dc0a.png" 
                alt="Service Design Methodology" 
                className="w-[65%] xs:w-[63%] sm:w-[60%] md:w-[58%] lg:w-[55%] transition-all" 
              />
            </div>
            
            {/* Add animated Venn diagram here */}
            <AnimatedVennDiagram />
            
            <div className="text-center mt-8 sm:mt-12">
              <Link 
                to="/methodology" 
                className="inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-70 transition-opacity font-merriweather"
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
