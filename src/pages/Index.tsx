import Header from '../components/Header';
import Footer from '../components/Footer';
import RadarSkillsSection from '../components/RadarSkillsSection';
import { useScrollToTop } from '../hooks/use-scroll-to-top';
import { Link } from 'react-router-dom';
import { projects } from '../data/ProjectsData';

const featuredSlugs = ["connection-center", "digital-sales-transformation", "bartista"];
const bimboSlugs = ["connection-center", "crm-service-design", "continuous-improvement", "t-conecta"];

const Index = () => {
  useScrollToTop();
  const featuredProjects = projects.filter(p => featuredSlugs.includes(p.slug));
  const bimboProjects = projects.filter(p => bimboSlugs.includes(p.slug));

  return (
    <div className="min-h-screen bg-[hsl(var(--pastel-yellow))]">
      <Header />
      <main className="pt-24">

        {/* ── HERO ── */}
        <section className="home-hero">
          <div className="hero-wrap">
            <div className="home-hero-top">
              <div><span className="dot"></span>Service Design Portfolio</div>
              <div>Barcelona · 15+ years · Global scale</div>
            </div>
            <h1>
              Hello,<br/>
              I am<br/>
              <em>Christian.</em>
            </h1>
            <p className="home-lede prose-lede-constrained">
              Service Designer working at the intersection of human-centered research,
              organizational change, and operational design. I help complex organizations
              transform how they deliver value: at scale, across markets, without losing
              the human detail.
            </p>
          </div>
        </section>

        {/* ── META STRIP ── */}
        <dl className="home-meta hero-wrap">
          <div><dt>Discipline</dt><dd>Service Design · CX Strategy</dd></div>
          <div><dt>Experience</dt><dd>15+ years · Global scale</dd></div>
          <div><dt>Sectors</dt><dd>FMCG · Finance · Tech · Public</dd></div>
          <div><dt>Geography</dt><dd>Latin America · Europe · Asia</dd></div>
        </dl>

        {/* ── A: CAPABILITIES (Radar) ── */}
        <section className="home-section">
          <div className="container-narrow">
            <div style={{ marginBottom: 'var(--s-8)' }}>
              <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 'var(--s-4)' }}>
                Capabilities
              </div>
              <h2 style={{ fontFamily: 'var(--ff-editorial)', fontWeight: 400, fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 var(--s-3)', maxWidth: '24ch', textWrap: 'balance' }}>
                What I bring to a project.
              </h2>
              <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 'var(--t-lede)', color: 'var(--ink-2)', lineHeight: 1.55, maxWidth: '54ch', margin: 0 }}>
                A bibliographically grounded self-assessment across five capability dimensions. Click any dimension to see it in action.
              </p>
            </div>
            <RadarSkillsSection />
          </div>
        </section>

        {/* ── B: FEATURED WORK ── */}
        <section className="home-section">
          <div className="container-narrow">
            <div style={{ marginBottom: 'var(--s-8)' }}>
              <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 'var(--s-4)' }}>
                Selected work
              </div>
              <h2 style={{ fontFamily: 'var(--ff-editorial)', fontWeight: 400, fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 var(--s-3)', maxWidth: '24ch', textWrap: 'balance' }}>
                Three cases that define the practice.
              </h2>
              <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 'var(--t-lede)', color: 'var(--ink-2)', lineHeight: 1.55, maxWidth: '54ch', margin: 0 }}>
                Chosen for range: sector, scale, and type of design challenge.
              </p>
            </div>
            <div className="home-featured-grid">
              {featuredProjects.map((project, i) => (
                <Link
                  key={project.slug}
                  to={`/portfolio/${project.slug}`}
                  className="home-featured-card"
                >
                  <div className="card-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="card-eyebrow">{project.client}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="card-cta">View case →</div>
                </Link>
              ))}
            </div>
            <div style={{ paddingTop: 'var(--s-6)', textAlign: 'right' }}>
              <Link to="/portfolio" className="cta-link cta-link-md">
                All {projects.length} cases →
              </Link>
            </div>
          </div>
        </section>

        {/* ── C: GRUPO BIMBO ── */}
        <section className="home-section">
          <div className="container-narrow">
            <div style={{ marginBottom: 'var(--s-8)' }}>
              <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 'var(--s-4)' }}>
                Long-term engagement
              </div>
              <h2 style={{ fontFamily: 'var(--ff-editorial)', fontWeight: 400, fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 var(--s-3)', maxWidth: '24ch', textWrap: 'balance' }}>
                Seven years designing for Grupo Bimbo.
              </h2>
              <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 'var(--t-lede)', color: 'var(--ink-2)', lineHeight: 1.55, maxWidth: '54ch', margin: 0 }}>
                The world's largest bread manufacturer. 17 countries. Four interconnected projects that built on each other.
              </p>
            </div>
            <div className="home-bimbo-cases">
              {bimboProjects.map((project, i) => (
                <Link
                  key={project.slug}
                  to={`/portfolio/${project.slug}`}
                  className="home-bimbo-case"
                >
                  <div className="case-num">{String(i + 1).padStart(2, '0')}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="case-link">View case →</div>
                </Link>
              ))}
            </div>
            <div style={{ paddingTop: 'var(--s-6)', textAlign: 'right' }}>
              <Link to="/bimbo-relationship" className="cta-link cta-link-md">
                The full Bimbo story →
              </Link>
            </div>
          </div>
        </section>

        {/* ── D: METHODOLOGY ── */}
        <section className="home-section">
          <div className="container-narrow">
            <div style={{ marginBottom: 'var(--s-8)' }}>
              <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 'var(--s-4)' }}>
                How I work
              </div>
              <h2 style={{ fontFamily: 'var(--ff-editorial)', fontWeight: 400, fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.1, letterSpacing: '-0.02em', margin: '0 0 var(--s-3)', maxWidth: '24ch', textWrap: 'balance' }}>
                No silver bullets.
              </h2>
              <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 'var(--t-lede)', color: 'var(--ink-2)', lineHeight: 1.55, maxWidth: '54ch', margin: 0 }}>
                A mindset, not a method. Complex service problems don't have single solutions: they have navigation strategies.
              </p>
            </div>
            <p style={{ fontFamily: 'var(--ff-editorial)', fontWeight: 400, fontSize: 'clamp(18px, 2.5vw, 28px)', lineHeight: 1.3, letterSpacing: '-0.01em', maxWidth: '52ch', margin: '0 0 var(--s-7)', color: 'var(--ink)' }}>
              Navigating complex service problems requires two things: a broad methodology toolkit and the accumulated experience to know when to use each part of it.
            </p>

            <style>{`
              .nav-diagram { width: 100%; overflow: hidden; }

              .nav-diagram-inner {
                display: grid;
                grid-template-columns: 1fr auto 1fr auto 1fr;
                gap: 0;
                align-items: stretch;
              }

              @media (max-width: 640px) {
                .nav-diagram-inner {
                  grid-template-columns: auto 1fr;
                  grid-template-rows: auto auto auto auto auto auto auto auto auto;
                }
              }

              .nav-node {
                border: 1px solid var(--rule);
                padding: var(--s-5);
                display: flex;
                flex-direction: column;
                gap: var(--s-3);
                background: hsl(var(--pastel-yellow));
              }
              .nav-node.accent {
                border-color: var(--accent);
                background: hsl(160 25% 95%);
              }
              .nav-node-num {
                font-family: var(--ff-display);
                font-weight: 200;
                font-size: 40px;
                line-height: 0.9;
                letter-spacing: -0.04em;
                color: var(--ink-4);
              }
              .nav-node-label {
                font-family: var(--ff-display);
                font-weight: 300;
                font-size: 9px;
                letter-spacing: 0.20em;
                text-transform: uppercase;
                color: var(--ink-3);
              }
              .nav-node.accent .nav-node-label { color: var(--accent); }
              .nav-node-title {
                font-family: var(--ff-editorial);
                font-weight: 400;
                font-size: 15px;
                line-height: 1.25;
                color: var(--ink);
                margin: 0;
              }
              .nav-node-body {
                font-family: var(--ff-editorial);
                font-size: 12px;
                line-height: 1.55;
                color: var(--ink-2);
                margin: 0;
              }

              .nav-arrow {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 var(--s-3);
                color: var(--ink-4);
                font-size: 18px;
                flex-shrink: 0;
                border-top: 1px solid var(--rule);
                border-bottom: 1px solid var(--rule);
                background: hsl(var(--pastel-yellow));
              }
              .nav-arrow.accent-arrow {
                color: var(--accent);
                border-color: var(--accent);
              }

              @media (max-width: 640px) {
                .nav-arrow {
                  writing-mode: vertical-lr;
                  padding: var(--s-3) 0;
                  border: none;
                  border-left: 1px solid var(--rule);
                  border-right: 1px solid var(--rule);
                  justify-content: center;
                  font-size: 16px;
                  transform: rotate(90deg);
                  height: 40px;
                  width: 100%;
                  border-top: none;
                  border-bottom: none;
                }
                .nav-arrow.accent-arrow {
                  border-color: var(--accent);
                }
              }

              .nav-knowledge-bar {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1px;
                background: var(--rule);
                border: 1px solid var(--rule);
                border-top: 2px solid var(--accent);
                margin-top: var(--s-5);
              }
              .nav-knowledge-cell {
                background: hsl(var(--pastel-yellow));
                padding: var(--s-5);
                display: flex;
                flex-direction: column;
                gap: var(--s-2);
              }
              .nav-knowledge-cell-label {
                font-family: var(--ff-display);
                font-weight: 300;
                font-size: 9px;
                letter-spacing: 0.20em;
                text-transform: uppercase;
                color: var(--accent);
              }
              .nav-knowledge-cell-title {
                font-family: var(--ff-editorial);
                font-weight: 400;
                font-size: 14px;
                line-height: 1.25;
                color: var(--ink);
                margin: 0;
              }
              .nav-knowledge-cell-body {
                font-family: var(--ff-editorial);
                font-size: 12px;
                line-height: 1.55;
                color: var(--ink-2);
                margin: 0;
              }
              .nav-footer-label {
                font-family: var(--ff-display);
                font-weight: 300;
                font-size: 9px;
                letter-spacing: 0.20em;
                text-transform: uppercase;
                color: var(--ink-4);
                margin-top: var(--s-4);
                text-align: center;
              }
            `}</style>

            <div className="nav-diagram">

              <div className="nav-diagram-inner">

                <div className="nav-node">
                  <div className="nav-node-num">01</div>
                  <div className="nav-node-label">Kick-off</div>
                  <div className="nav-node-title">Map the problem</div>
                  <div className="nav-node-body">Identify base methodology needs and domain-specific context before choosing any tool.</div>
                </div>

                <div className="nav-arrow">→</div>

                <div className="nav-node">
                  <div className="nav-node-num">02</div>
                  <div className="nav-node-label">Navigate</div>
                  <div className="nav-node-title">Choose where you are strongest</div>
                  <div className="nav-node-body">Deploy the toolkit where experience is deepest. Confidence reduces cognitive load under uncertainty.</div>
                </div>

                <div className="nav-arrow">→</div>

                <div className="nav-node">
                  <div className="nav-node-num">03</div>
                  <div className="nav-node-label">Continuous improvement</div>
                  <div className="nav-node-title">Navigate ongoing uncertainty</div>
                  <div className="nav-node-body">Iterate through ambiguity. Document what works and what doesn't. Each cycle refines the system.</div>
                </div>

              </div>

              <div className="nav-knowledge-bar">
                <div className="nav-knowledge-cell">
                  <div className="nav-knowledge-cell-label">Core knowledge · Replicable</div>
                  <div className="nav-knowledge-cell-title">Context-agnostic methodology</div>
                  <div className="nav-knowledge-cell-body">Research · Analysis · Facilitation · Communication · Delivery. Transfers across every domain and sector.</div>
                </div>
                <div className="nav-knowledge-cell">
                  <div className="nav-knowledge-cell-label">Specific knowledge · Contextual</div>
                  <div className="nav-knowledge-cell-title">Domain and audience expertise</div>
                  <div className="nav-knowledge-cell-body">When gaps appear: experiment with a new tool, or integrate external capability. Intellectual honesty over false confidence.</div>
                </div>
              </div>

              <div className="nav-footer-label">
                EXPERIENCE COMPOUNDS · LEARNING DOCUMENTED · KNOWLEDGE SYSTEM GROWS WITH EACH PROJECT
              </div>

            </div>

            <Link to="/methodology" className="cta-link cta-link-md">
              Read the methodology →
            </Link>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
};

export default Index;
