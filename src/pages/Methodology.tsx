
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

const Methodology = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <Hero 
          title="My Methodology"
          subtitle="SERVICE DESIGN APPROACH"
          description="Experience cannot be designed, only enabled. This principle guides my systematic approach to service design, recognizing the intersection between human and functional systems."
        />
        
        <section className="py-16">
          <div className="container-narrow">
            <div className="max-w-2xl mx-auto">
              <div className="space-y-12">
                <div>
                  <h2 className="text-2xl mb-6">Core Principle</h2>
                  <p className="text-sm">Experience cannot be designed, only enabled.</p>
                  <p className="text-sm mt-4">
                    This principle guides me to maintain a systemic mindset during all phases 
                    of the service design process, recognizing the complex interplay between 
                    human needs and functional systems.
                  </p>
                </div>
                
                <div>
                  <h2 className="text-2xl mb-6">My Approach</h2>
                  <div className="grid md:grid-cols-2 gap-12">
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
                </div>
                
                <div>
                  <h2 className="text-2xl mb-6">Service Design Process</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg mb-3">Understand</h3>
                      <ul className="text-sm grid grid-cols-2 md:grid-cols-3 gap-2">
                        <li>• Research planning</li>
                        <li>• Qualitative research</li>
                        <li>• Quantitative research</li>
                        <li>• Journey analytics</li>
                        <li>• Journey mapping</li>
                        <li>• Benchmarking</li>
                        <li>• Stakeholder mapping</li>
                        <li>• Process mapping</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg mb-3">Ideate</h3>
                      <ul className="text-sm grid grid-cols-2 md:grid-cols-3 gap-2">
                        <li>• Conceptualization</li>
                        <li>• Workshop facilitation</li>
                        <li>• Experience vision</li>
                        <li>• Value proposition</li>
                        <li>• Sketching</li>
                        <li>• Wireframing</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg mb-3">Deliver</h3>
                      <ul className="text-sm grid grid-cols-2 md:grid-cols-3 gap-2">
                        <li>• Process design</li>
                        <li>• Improvement framework</li>
                        <li>• Service orchestration</li>
                        <li>• Adoption monitoring</li>
                        <li>• Sprint planning</li>
                        <li>• Project management</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl mb-6">Key Benefits</h2>
                  <ul className="text-sm space-y-2">
                    <li>• Better integration with existing processes</li>
                    <li>• Higher likelihood of sustainable change</li>
                    <li>• Better at identifying systemic effects</li>
                    <li>• More effective at managing competing interests</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Methodology;
