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
        <span>Portfolio · Methodology</span>
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
            In 1986 Fred Brooks argued that no single technique would produce an order-of-magnitude improvement in software — because some complexity is essential, living in the problem itself. The same is true of service design. This is not a methodology. It is a navigation system.
          </p>
        </div>
      </section>

      {/* Main content — two columns */}
      <div className="methodology-grid" style={{ width: '100%', maxWidth: 1120, marginInline: 'auto', paddingInline: 'clamp(20px,4vw,48px)', paddingBlock: 'var(--s-9) var(--s-8)', display: 'grid', gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)', gap: 'var(--s-9)', borderBottom: '1px solid var(--rule)', alignItems: 'start' }}>

        {/* Left column — main narrative */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-8)' }}>

          {/* Principle 1 */}
          <div style={{ borderTop: '1px solid var(--rule)', paddingTop: 'var(--s-6)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-3)', marginBottom: 'var(--s-4)' }}>
              <span style={{ fontFamily: 'var(--ff-display)', fontWeight: 400, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', background: 'var(--ink)', color: 'hsl(var(--pastel-yellow))', padding: '4px 8px' }}>01</span>
              <span style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', padding: '4px 8px', border: '1px solid var(--ink)', color: 'var(--ink)' }}>Mindset</span>
            </div>
            <h2 style={{ fontFamily: 'var(--ff-editorial)', fontWeight: 400, fontSize: 'var(--t-h3)', lineHeight: 1.3, letterSpacing: '-0.01em', margin: '0 0 var(--s-4)', maxWidth: '30ch' }}>Complexity is the material, not the obstacle.</h2>
            <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0, maxWidth: '56ch' }}>
              Designing services means working with human behavior, organizational dynamics, and operational constraints simultaneously. This complexity cannot be eliminated — it can only be navigated. The designer's job is not to simplify what is inherently complex, but to make it traversable.
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
              The second is context-specific: designing a survey for oncology patients is not the same as designing one for retail consumers. Communicating to a general manager is not the same as communicating to a community leader. Once you have mapped both layers, you choose the tools where your experience is deepest — and you experiment deliberately with what you still need to learn.
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
              Each project is not just a deliverable — it is an iteration of the knowledge system. What you learn from navigating a B2B loyalty program in Mexico feeds how you approach a public sector assessment in Peru. The value is not in the portfolio of outputs. It is in the accumulated capacity to recognize patterns across domains and act decisively under uncertainty.
            </p>
            <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 14, lineHeight: 1.65, color: 'var(--ink-2)', margin: 0, maxWidth: '56ch' }}>
              Done and imperfect is better than perfect and unfinished. Decision-making under ambiguity is a skill, not a compromise. The chaos of real projects is not an obstacle to good design — it is where good design actually happens.
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
              AI has not changed what is hard about designing services. It has changed what is possible around it. The judgment calls — what to research, how to interpret ambiguous findings, when a design is good enough — remain human. What AI changes is the infrastructure: how knowledge is stored, surfaced, and combined.
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

        {/* Right column — supporting elements */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-6)', position: 'sticky', top: 120 }}>

          {/* Summary box */}
          <div style={{ border: '1px solid var(--rule)', padding: 'var(--s-5)' }}>
            <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 'var(--s-4)', paddingBottom: 'var(--s-3)', borderBottom: '1px solid var(--rule)' }}>
              The navigation process
            </div>
            {[
              { num: '01', text: 'Map the problem across both layers — base methodology and domain-specific context' },
              { num: '02', text: 'Choose the toolkit where your experience is deepest' },
              { num: '03', text: 'Experiment deliberately with one new tool where needed' },
              { num: '04', text: 'Bring in external capability for critical gaps' },
              { num: '05', text: 'Feed what you learn back into the knowledge system' },
            ].map(({ num, text }) => (
              <div key={num} style={{ display: 'grid', gridTemplateColumns: '32px 1fr', gap: 'var(--s-3)', padding: 'var(--s-3) 0', borderBottom: '1px solid var(--rule-2)' }}>
                <span style={{ fontFamily: 'var(--ff-display)', fontWeight: 200, fontSize: 22, lineHeight: 1, letterSpacing: '-0.03em', color: 'var(--ink-4)' }}>{num}</span>
                <span style={{ fontFamily: 'var(--ff-editorial)', fontSize: 13, lineHeight: 1.55, color: 'var(--ink-2)' }}>{text}</span>
              </div>
            ))}
          </div>

          {/* Cases reference */}
          <div style={{ border: '1px solid var(--rule)', padding: 'var(--s-5)' }}>
            <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 'var(--s-4)', paddingBottom: 'var(--s-3)', borderBottom: '1px solid var(--rule)' }}>
              This principle in action
            </div>
            {[
              { slug: 'connection-center', label: 'Complexity navigation', title: 'Connection Center — Grupo Bimbo' },
              { slug: 'continuous-improvement', label: 'Knowledge as infrastructure', title: 'Continuous Improvement — Grupo Bimbo' },
              { slug: 'knowledge-architecture', label: 'AI amplification', title: 'Knowledge Architecture — Findasense' },
            ].map(({ slug, label, title }) => (
              <Link key={slug} to={`/portfolio/${slug}`} style={{ display: 'block', padding: 'var(--s-3) 0', borderBottom: '1px solid var(--rule-2)', textDecoration: 'none' }}>
                <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 4 }}>{label}</div>
                <div style={{ fontFamily: 'var(--ff-editorial)', fontSize: 13, color: 'var(--ink)', lineHeight: 1.4 }}>{title} →</div>
              </Link>
            ))}
          </div>

          {/* Capabilities CTA */}
          <div style={{ padding: 'var(--s-5)', background: 'var(--ink)', color: 'hsl(var(--pastel-yellow))' }}>
            <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', marginBottom: 'var(--s-3)', opacity: 0.6 }}>
              Behind this methodology
            </div>
            <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 13, lineHeight: 1.55, margin: '0 0 var(--s-4)', opacity: 0.8 }}>
              The Radar shows the capability dimensions that make this navigation possible — grounded in bibliographic analysis, not self-promotion.
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

      <Footer />
    </div>
  );
};

export default Methodology;
