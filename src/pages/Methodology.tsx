
import Header from '../components/Header';
import Footer from '../components/Footer';

const Methodology = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <section className="py-16">
          <div className="container-narrow">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-westmount">METHODOLOGY</h1>
              <p className="text-sm max-w-2xl mx-auto mt-8">
                I <span className="text-[#8ab1a2]">tackle</span> a broad variety of 
                disciplines in the <u>agile process</u>, 
                of creating meaningful products
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto mb-16">
              <div className="flex justify-center">
                <img 
                  src="/lovable-uploads/a44d8134-2342-431d-aaf8-18fe1829dc0a.png" 
                  alt="Service Design Methodology" 
                  className="max-w-full"
                />
              </div>
            </div>
            
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
