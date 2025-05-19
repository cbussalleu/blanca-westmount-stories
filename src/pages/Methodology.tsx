
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MethodologyHeader from '../components/methodology/MethodologyHeader';
import FrameworkSection from '../components/methodology/FrameworkSection';
import ProcessSection from '../components/methodology/ProcessSection';
import PrinciplesSection from '../components/methodology/PrinciplesSection';
import ToolsSection from '../components/methodology/ToolsSection';
import OutcomesSection from '../components/methodology/OutcomesSection';

const Methodology = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-[hsl(var(--pastel-yellow))]">
      <Header />
      <main className="pt-24 pb-16">
        <section className="py-8">
          <div className="container-narrow">
            <MethodologyHeader />
            
            <div className="max-w-3xl mx-auto">
              <FrameworkSection />
              <ProcessSection />
              <PrinciplesSection />
              <ToolsSection />
              <OutcomesSection />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Methodology;
