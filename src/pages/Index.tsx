
import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ImageHero from '../components/ImageHero';
import BimboCaseStudies from '../components/BimboCaseStudies';

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
  const sectionRefs = {
    about: useRef(null),
    bimbo: useRef(null),
    projects: useRef(null),
    methodology: useRef(null)
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--pastel-yellow))]">
      <Header />
      <main className="pt-24">
        {/* About Me Section (New Style) */}
        <section className="py-16" ref={sectionRefs.about}>
          <div className="container-narrow">
            <div className="mb-12">
              <h1 className="text-5xl font-westmount mb-16 text-center">
                Hello, I'm Roland,<br />
                Creative Technologist & User<br />
                Experience Engineer based in<br />
                Berlin – I create digital products<br />
                with knowledge and passion.
              </h1>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <p className="text-sm leading-relaxed">
                  With more than a decade of experience I tackle a broad variety of disciplines in the process of creating meaningful products that make a real difference. With carefully selected tools and skills I express my visions ranging from product design to the creation of user experience up to development and delivery.
                </p>
                <p className="text-sm leading-relaxed">
                  My distinctive strategic thinking helps me to pinpoint the holistic scope of a product and evolve it by adding new business ideas, innovations and values that meet user needs as well as business objectives. Besides building user flows, information architecture and wireframes, tailor-made interactive prototypes are constantly
                </p>
              </div>
              <div className="space-y-6">
                <p className="text-sm leading-relaxed">
                  putting concepts and ideas to the test and emphasize the user-centered approach in my work. I work with the latest techniques in web development and my agile workflow is the result of the precisely combined tools and strategies that include object oriented patterns, build scripts, pre-processors and minification, source code management, testing as well as deployment.
                </p>
                <p className="text-sm leading-relaxed">
                  With my knowledge in both design and technology I foster productive teams in an collaborative environment that meets the requirements of creatives and developers at the same time.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Grupo Bimbo Section */}
        <section className="py-16" ref={sectionRefs.bimbo}>
          <div className="container-narrow">
            <h2 className="text-5xl font-westmount mb-16 text-center">
              GRUPO BIMBO AND I
            </h2>
            <BimboCaseStudies />
          </div>
        </section>
        
        {/* Featured Projects Section */}
        <section className="py-16" ref={sectionRefs.projects}>
          <div className="container-narrow">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-westmount">FEATURED PROJECTS</h2>
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
        
        {/* Methodology Section */}
        <section className="py-16" ref={sectionRefs.methodology}>
          <div className="container-narrow">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-westmount">MY METHODOLOGY</h2>
              <p className="text-sm max-w-2xl mx-auto mt-8">
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
