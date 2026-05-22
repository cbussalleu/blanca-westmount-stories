import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollToTop } from '../hooks/use-scroll-to-top';

const Methodology = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[hsl(var(--pastel-yellow))]">
      <Header />
      <main className="pt-24 pb-16">
        <section className="py-8">
          <div className="container-narrow">
            <div className="max-w-3xl mx-auto">

              {/* Back link */}
              <div className="mb-8">
                <Link to="/" className="inline-flex items-center text-xs hover:opacity-70 transition-opacity">
                  <ArrowLeft size={14} className="mr-1" /> Back to Home
                </Link>
              </div>

              {/* Section 1 — Title + Intro */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-16"
              >
                <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">A methodology mindset</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-westmount mb-8">NO SILVER BULLETS</h1>
                <p className="text-sm font-merriweather leading-relaxed">
                  In 1986, Fred Brooks argued that there is no single development technique that will produce an order-of-magnitude improvement in software productivity. His argument was not about tools; it was about the nature of complexity itself. Some complexity is accidental: it comes from imperfect tools and can be reduced. But some complexity is essential: it lives in the problem itself and cannot be abstracted away. Thirty years later, this distinction matters more than ever in service and experience design.
                </p>
              </motion.div>

              {/* Section 2 — Three principles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-16 space-y-12"
              >
                <div className="flex gap-6">
                  <span className="text-5xl font-westmount text-gray-200 leading-none select-none flex-shrink-0">01</span>
                  <div>
                    <h2 className="text-lg font-westmount mb-3">Complexity is the material, not the obstacle</h2>
                    <p className="text-sm font-merriweather leading-relaxed">
                      Designing services and experiences means working with human behavior, organizational dynamics, and operational constraints, all at once. This complexity is not a problem to eliminate. It is the material we work with. The role of the designer is not to simplify what is inherently complex, but to make it navigable.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <span className="text-5xl font-westmount text-gray-200 leading-none select-none flex-shrink-0">02</span>
                  <div>
                    <h2 className="text-lg font-westmount mb-3">Method follows problem, not the other way around</h2>
                    <p className="text-sm font-merriweather leading-relaxed">
                      There is no fixed process. Each project starts with a question: what does this situation actually require? Sometimes that means deep ethnographic research. Sometimes it means a two-hour stakeholder workshop. The toolkit is large (research, blueprinting, prototyping, facilitation, data analysis) but the choice of what to use, when, and in what combination requires judgment that no methodology can pre-program.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <span className="text-5xl font-westmount text-gray-200 leading-none select-none flex-shrink-0">03</span>
                  <div>
                    <h2 className="text-lg font-westmount mb-3">Knowledge compounds when it has structure</h2>
                    <p className="text-sm font-merriweather leading-relaxed">
                      Experience is only an asset if it is retrievable. The most valuable thing a designer builds over time is not a portfolio of solutions: it is a structured understanding of why things work and why they fail. This means investing in knowledge architecture: separating what is stable and reusable from what is contextual and ephemeral, and building systems where each project makes the next one better.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Section 3 — AI as amplifier */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-16"
              >
                <blockquote className="text-xl font-merriweather italic text-center leading-relaxed mb-8 px-4">
                  "AI does not reduce essential complexity. It amplifies the capacity of those who have already done the work of understanding it."
                </blockquote>
                <p className="text-sm font-merriweather leading-relaxed">
                  The integration of AI into research and design practice has changed what is possible, but not what is hard. Structuring the right question, interpreting ambiguous findings, navigating organizational resistance, deciding when a prototype is good enough: these remain fundamentally human judgments. What AI changes is the infrastructure around those judgments. When knowledge is well-structured, AI can surface it faster, combine it more fluidly, and apply it more consistently. The designer becomes an architect of knowledge systems, not just a practitioner of methods.
                </p>
              </motion.div>

              {/* Section 4 — Case references */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-16 grid md:grid-cols-2 gap-6"
              >
                <div className="p-6 border border-gray-400">
                  <p className="text-xs tracking-widest uppercase text-gray-500 mb-3">Complexity navigation</p>
                  <h3 className="font-westmount text-base mb-3">Connection Center, Grupo Bimbo</h3>
                  <p className="text-sm font-merriweather leading-relaxed mb-4">
                    Designing a global CX model across 17 countries meant working with 5 dimensions of complexity simultaneously: digital maturity, regulatory variation, cultural context, stakeholder priorities, and organizational politics. No framework covered all of it.
                  </p>
                  <Link to="/portfolio/connection-center" className="inline-flex items-center text-xs hover:opacity-70 transition-opacity">
                    See the case <ArrowRight size={12} className="ml-1" />
                  </Link>
                </div>

                <div className="p-6 border border-gray-400">
                  <p className="text-xs tracking-widest uppercase text-gray-500 mb-3">Knowledge as infrastructure</p>
                  <h3 className="font-westmount text-base mb-3">Continuous Improvement, Grupo Bimbo</h3>
                  <p className="text-sm font-merriweather leading-relaxed mb-4">
                    Building a sustainable improvement model meant designing the knowledge architecture first: how insights flow from customers to product teams, and how learnings from each cycle feed the next. The system, not the individual project, was the deliverable.
                  </p>
                  <Link to="/portfolio/continuous-improvement" className="inline-flex items-center text-xs hover:opacity-70 transition-opacity">
                    See the case <ArrowRight size={12} className="ml-1" />
                  </Link>
                </div>
              </motion.div>

              {/* Section 5 — CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <p className="text-sm font-merriweather mb-4">Curious about the capabilities behind this approach?</p>
                <Link to="/" className="inline-flex items-center text-xs tracking-widest uppercase hover:opacity-70 transition-opacity">
                  See the Radar <ArrowRight size={12} className="ml-1" />
                </Link>
              </motion.div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Methodology;
