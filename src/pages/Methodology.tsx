
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MethodologySection from '../components/MethodologySection';

const Methodology = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Hero 
          title="My Methodology"
          subtitle="SERVICE DESIGN APPROACH"
          description="Experience cannot be designed, only enabled. This principle guides my systematic approach to service design, recognizing the intersection between human and functional systems."
        />
        
        <MethodologySection />
      </main>
      <Footer />
    </div>
  );
};

export default Methodology;
