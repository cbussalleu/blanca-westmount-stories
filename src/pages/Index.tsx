
import { useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BimboCaseStudies from '../components/BimboCaseStudies';
import RadarSkillsSection from '../components/RadarSkillsSection';
import NoSilverBulletsSection from '../components/sections/NoSilverBulletsSection';
import AboutMeSection from '../components/sections/AboutMeSection';
import FeaturedProjectsSection from '../components/sections/FeaturedProjectsSection';
import MyApproachSection from '../components/sections/MyApproachSection';

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
        {/* NO SILVER BULLETS Section */}
        <NoSilverBulletsSection />

        {/* About Me Section */}
        <AboutMeSection ref={sectionRefs.about} />
        
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
        <FeaturedProjectsSection ref={sectionRefs.projects} />
        
        {/* Methodology Section */}
        <MyApproachSection ref={sectionRefs.methodology} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
