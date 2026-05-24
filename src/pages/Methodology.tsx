import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollToTop } from '../hooks/use-scroll-to-top';

const Methodology = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[hsl(var(--pastel-yellow))]">
      <Header />

      {/* Breadcrumb */}
      <div style={{ width: '100%', maxWidth: 1120, marginInline: 'auto', paddingInline: 'clamp(20px,4vw,48px)', paddingBlock: 'var(--s-5)', paddingTop: 'calc(var(--s-5) + 80px)', borderBottom: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 11, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
        <span>Portfolio · How I work</span>
        <Link to="/" style={{ color: 'var(--ink)', borderBottom: '1px solid var(--ink)', paddingBottom: 2 }}>← Home</Link>
      </div>

      {/* Hero */}
      <section style={{ borderBottom: '1px solid var(--rule)', paddingBlock: 'var(--s-9) var(--s-8)' }}>
        <div style={{ width: '100%', maxWidth: 1120, marginInline: 'auto', paddingInline: 'clamp(20px,4vw,48px)' }}>
          <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--ink-2)', marginBottom: 'var(--s-6)' }}>
            Christian Bussalleu · How I work
          </div>
          <h1 style={{ fontFamily: 'var(--ff-display)', fontWeight: 200, fontSize: 'clamp(48px,7vw,96px)', lineHeight: 0.92, letterSpacing: '-0.02em', textTransform: 'uppercase', margin: '0 0 var(--s-5)', maxWidth: '18ch' }}>
            No Silver<br/>Bullets.
          </h1>
          <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 'var(--t-lede)', lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: '54ch', margin: 0 }}>
            Fred Brooks wrote No Silver Bullets in 1986. The argument was about software, but it translates exactly: some complexity is essential. It lives in the problem itself and cannot be designed away. No solution eliminates it. No methodology does either. What matters is building the judgment to navigate both.
          </p>
        </div>
      </section>

      {/* Main content: two columns */}
      <div className="methodology-grid" style={{ width: '100%', maxWidth: 1120, marginInline: 'auto', paddingInline: 'clamp(20px,4vw,48px)', paddingBlock: 'var(--s-9) var(--s-8)', display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)', gap: 'var(--s-9)', borderBottom: '1px solid var(--rule)', alignItems: 'start' }}>

        {/* Left column: main narrative */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-8)' }}>

          {/* Principle 1 */}
          <div style={{ borderTop: '2px solid var(--accent)', paddingTop: 'var(--s-6)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-3)', marginBottom: 'var(--s-4)' }}>
              <span style={{ fontFamily: 'var(--ff-display)', fontWeight: 400, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', background: 'var(--ink)', color: 'hsl(var(--pastel-yellow))', padding: '4px 8px' }}>01</span>
              <span style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', padding: '4px 8px', border: '1px solid var(--ink)', color: 'var(--ink)' }}>Mindset</span>
            </div>
            <h2 style={{ fontFamily: 'var(--ff-editorial)', fontWeight: 400, fontSize: 'var(--t-h3)', lineHeight: 1.3, letterSpacing: '-0.01em', margin: '0 0 var(--s-4)', maxWidth: '30ch' }}>Complexity is the material, not the obstacle.</h2>
            <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0, maxWidth: '56ch' }}>
              Designing services means working with human behavior, organizational dynamics, and operational constraints simultaneously. This complexity cannot be eliminated: it can only be navigated. The designer's job is not to simplify what is inherently complex, but to make it traversable.
            </p>
          </div>

          {/* Principle 2 */}
          <div style={{ borderTop: '1px solid var(--rule)', paddingTop: 'var(--s-6)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-3)', marginBottom: 'var(--s-4)' }}>
              <span style={{ fontFamily: 'var(--ff-display)', fontWeight: 400, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', background: 'var(--ink)', color: 'hsl(var(--pastel-yellow))', padding: '4px 8px' }}>02</span>
              <span style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', padding: '4px 8px', border: '1px solid var(--ink)', color: 'var(--ink)' }}>Navigation</span>
            </div>
            <h2 style={{ fontFamily: 'var(--ff-editorial)', fontWeight: 400, fontSize: 'var(--t-h3)', lineHeight: 1.3, letterSpacing: '-0.01em', margin: '0 0 var(--s-4)', maxWidth: '30ch' }}>Every problem needs two maps: base and specialized.</h2>
            <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-2)', margin: '0 0 var(--s-4)', maxWidth: '56ch' }}>
              Navigating a service problem requires two simultaneous layers of knowledge. The first is context-agnostic: how to research, how to analyze, how to facilitate, how to communicate under ambiguity. These transfer across every domain.
            </p>
            <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0, maxWidth: '56ch' }}>
              The second is context-specific: designing a survey for oncology patients is not the same as designing one for retail consumers. Communicating to a general manager is not the same as communicating to a community leader. Once you have mapped both layers, you choose the tools where your experience is deepest: and you experiment deliberately with what you still need to learn.
            </p>
          </div>

          {/* Principle 3 */}
          <div style={{ borderTop: '1px solid var(--rule)', paddingTop: 'var(--s-6)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-3)', marginBottom: 'var(--s-4)' }}>
              <span style={{ fontFamily: 'var(--ff-display)', fontWeight: 400, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', background: 'var(--ink)', color: 'hsl(var(--pastel-yellow))', padding: '4px 8px' }}>03</span>
              <span style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', padding: '4px 8px', border: '1px solid var(--ink)', color: 'var(--ink)' }}>Experience</span>
            </div>
            <h2 style={{ fontFamily: 'var(--ff-editorial)', fontWeight: 400, fontSize: 'var(--t-h3)', lineHeight: 1.3, letterSpacing: '-0.01em', margin: '0 0 var(--s-4)', maxWidth: '30ch' }}>Experience is the system, not the résumé.</h2>
            <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-2)', margin: '0 0 var(--s-4)', maxWidth: '56ch' }}>
              Each project is not just a deliverable: it is an iteration of the knowledge system. What you learn from navigating a B2B loyalty program in Mexico feeds how you approach a public sector assessment in Peru. The value is not in the portfolio of outputs. It is in the accumulated capacity to recognize patterns across domains and act decisively under uncertainty.
            </p>
            <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0, maxWidth: '56ch' }}>
              Done and imperfect is better than perfect and unfinished. Decision-making under ambiguity is a skill, not a compromise. The chaos of real projects is not an obstacle to good design: it is where good design actually happens.
            </p>
          </div>

          {/* AI section */}
          <div style={{ borderTop: '1px solid var(--rule)', paddingTop: 'var(--s-6)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-3)', marginBottom: 'var(--s-4)' }}>
              <span style={{ fontFamily: 'var(--ff-display)', fontWeight: 400, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', background: 'var(--ink)', color: 'hsl(var(--pastel-yellow))', padding: '4px 8px' }}>04</span>
              <span style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', padding: '4px 8px', border: '1px solid var(--ink)', color: 'var(--ink)' }}>AI</span>
            </div>
            <h2 style={{ fontFamily: 'var(--ff-editorial)', fontWeight: 400, fontSize: 'var(--t-h3)', lineHeight: 1.3, letterSpacing: '-0.01em', margin: '0 0 var(--s-4)', maxWidth: '30ch' }}>AI amplifies the system. It does not replace it.</h2>
            <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-2)', margin: '0 0 var(--s-4)', maxWidth: '56ch' }}>
              AI has not changed what is hard about designing services. It has changed what is possible around it. The judgment calls (what to research, how to interpret ambiguous findings, when a design is good enough) remain human. What AI changes is the infrastructure: how knowledge is stored, surfaced, and combined.
            </p>
            <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0, maxWidth: '56ch' }}>
              When knowledge is well-structured, AI can amplify it. When it is not, AI produces consistent mediocrity. The designer becomes an architect of knowledge systems, not just a practitioner of methods.
            </p>
            <div style={{ marginTop: 'var(--s-5)' }}>
              <Link to="/portfolio/knowledge-architecture" style={{ fontFamily: 'var(--ff-editorial)', fontSize: 14, color: 'var(--ink)', borderBottom: '1px solid var(--ink)', paddingBottom: 2, display: 'inline-flex', alignItems: 'center', gap: 6, transition: 'opacity 200ms' }}>
                See the Knowledge Architecture project <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>

        {/* Right column: supporting elements */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-6)', position: 'sticky', top: 120 }}>

          {/* Cases reference */}
          <div style={{ border: '1px solid var(--rule)', padding: 'var(--s-5)' }}>
            <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 'var(--s-4)', paddingBottom: 'var(--s-3)', borderBottom: '1px solid var(--rule)' }}>
              This principle in action
            </div>
            {[
              { slug: 'connection-center', label: 'Complexity navigation', title: 'Connection Center', client: 'Grupo Bimbo', desc: '5 complexity dimensions navigated simultaneously across 17 countries.' },
              { slug: 'continuous-improvement', label: 'Knowledge as infrastructure', title: 'Continuous Improvement', client: 'Grupo Bimbo', desc: 'Designing the system that makes each improvement cycle better than the last.' },
              { slug: 'knowledge-architecture', label: 'AI amplification', title: 'Knowledge Architecture', client: 'Findasense', desc: 'Structuring knowledge so AI can amplify it rather than replace it.' },
              { slug: 'digital-sales-transformation', label: 'Domain expertise', title: 'Digital Sales Transformation', client: 'La Positiva', desc: 'Financial services context required specialized regulatory and sector knowledge.' },
              { slug: 'innovation-maturity-index', label: 'External capability', title: 'Innovation Maturity Index', client: 'Gobierno Peruano', desc: 'Bibliographic research integrated as external knowledge to build the framework.' },
              { slug: 'self-assessment-framework', label: 'Honest self-assessment', title: 'Self-Assessment Framework', client: 'Internal', desc: "The same methodology applied to mapping one's own capabilities with rigor." },
            ].map(({ slug, label, title, client, desc }) => (
              <Link key={slug} to={`/portfolio/${slug}`} style={{ display: 'block', padding: 'var(--s-4) 0', borderBottom: '1px solid var(--rule-2)', textDecoration: 'none' }}>
                <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 3 }}>{label}</div>
                <div style={{ fontFamily: 'var(--ff-editorial)', fontSize: 13, color: 'var(--ink)', lineHeight: 1.3, marginBottom: 4 }}>{title} · {client} →</div>
                <div style={{ fontFamily: 'var(--ff-editorial)', fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.5 }}>{desc}</div>
              </Link>
            ))}
          </div>

          {/* Capabilities CTA */}
          <div style={{ padding: 'var(--s-5)', background: 'var(--ink)', color: 'hsl(var(--pastel-yellow))' }}>
            <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 'var(--s-3)', opacity: 0.6 }}>
              Behind this approach
            </div>
            <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 13, lineHeight: 1.55, margin: '0 0 var(--s-4)', opacity: 0.8 }}>
              The Radar shows the capability dimensions that make this navigation possible: grounded in bibliographic analysis, not self-promotion.
            </p>
            <Link to="/" style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'hsl(var(--pastel-yellow))', borderBottom: '1px solid hsl(var(--pastel-yellow) / 0.4)', paddingBottom: 2 }}>
              See the Capabilities Radar →
            </Link>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .methodology-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section style={{ borderTop: '2px solid var(--accent)', borderBottom: '1px solid var(--rule)', padding: 'var(--s-9) 0' }}>
        <div style={{ width: '100%', maxWidth: 1120, marginInline: 'auto', paddingInline: 'clamp(20px,4vw,48px)' }}>
          <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 'var(--s-7)' }}>
            The navigation process
          </div>

          <style>{`
            .method-steps { display: flex; flex-direction: row; gap: 0; }
            .method-step { flex: 1; padding: var(--s-5); border-left: 1px solid var(--rule); display: flex; flex-direction: column; gap: var(--s-3); }
            .method-step:first-child { border-left: 2px solid var(--accent); }
            .method-step-arrow { display: flex; align-items: center; justify-content: center; padding: 0 var(--s-3); color: var(--ink-4); font-size: 18px; flex-shrink: 0; }
            @media (max-width: 768px) {
              .method-steps { flex-direction: column; }
              .method-step { border-left: 2px solid var(--rule); border-top: none; padding: var(--s-5) var(--s-5) var(--s-5) var(--s-6); }
              .method-step:first-child { border-left: 2px solid var(--accent); }
              .method-step-arrow { transform: rotate(90deg); justify-content: flex-start; padding: var(--s-2) 0 var(--s-2) var(--s-4); }
            }
          `}</style>

          <div className="method-steps">
            {[
              { num: '01', label: 'Map', title: 'Map both layers', body: 'Identify what the problem requires at the base level (research, analysis, facilitation) and at the domain-specific level (sector, audience, regulation).' },
              { num: '02', label: 'Choose', title: 'Choose your toolkit', body: 'Select the methods and frameworks where your experience is deepest. Confidence in the toolkit reduces cognitive load during execution.' },
              { num: '03', label: 'Experiment', title: 'Experiment deliberately', body: 'Introduce one new tool or method where the problem requires it. Deliberate experimentation, not improvisation.' },
              { num: '04', label: 'Fill gaps', title: 'Fill critical gaps', body: "Bring in external capability where there are hard gaps. Knowing what you don't know is a capability in itself." },
              { num: '05', label: 'Deliver', title: 'Deliver and feed back', body: 'Execute, measure, and contribute what you learned back into the knowledge system. The next project starts better.' },
            ].map(({ num, label, title, body }, i, arr) => (
              <>
                <div className="method-step" key={num}
                  style={{ borderLeftColor: num === '05' ? 'var(--accent)' : undefined, background: num === '05' ? 'hsl(161 28% 60% / 0.06)' : 'transparent' }}
                >
                  <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 200, fontSize: 32, lineHeight: 0.9, letterSpacing: '-0.03em', color: 'var(--ink-4)' }}>{num}</div>
                  <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 9, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{label}</div>
                  <div style={{ fontFamily: 'var(--ff-editorial)', fontWeight: 400, fontSize: 15, lineHeight: 1.3, margin: 0 }}>{title}</div>
                  <div style={{ fontFamily: 'var(--ff-editorial)', fontSize: 13, lineHeight: 1.6, color: 'var(--ink-2)', margin: 0 }}>{body}</div>
                </div>
                {i < arr.length - 1 && (
                  <div className="method-step-arrow" key={`arrow-${num}`}>→</div>
                )}
              </>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Methodology;
