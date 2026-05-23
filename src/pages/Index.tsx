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
            <div style={{ margin: 'var(--s-6) 0' }}>
              <style>{`
                .nav-grid {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 1px;
                  background: var(--rule);
                  border: 1px solid var(--rule);
                  border-top: 2px solid var(--accent);
                }
                .nav-cell {
                  background: hsl(var(--pastel-yellow));
                  padding: var(--s-5) var(--s-5);
                  display: flex;
                  flex-direction: column;
                  gap: var(--s-2);
                }
                .nav-cell-top {
                  grid-column: 1 / -1;
                  display: grid;
                  grid-template-columns: repeat(3, 1fr);
                  gap: 1px;
                  background: var(--rule);
                }
                .nav-cell-eyebrow {
                  font-family: var(--ff-display);
                  font-weight: 300;
                  font-size: 9px;
                  letter-spacing: 0.20em;
                  text-transform: uppercase;
                  color: var(--ink-4);
                }
                .nav-cell-num {
                  font-family: var(--ff-display);
                  font-weight: 200;
                  font-size: 28px;
                  line-height: 1;
                  letter-spacing: -0.03em;
                  color: var(--ink-4);
                }
                .nav-cell-title {
                  font-family: var(--ff-editorial);
                  font-weight: 400;
                  font-size: 13px;
                  line-height: 1.3;
                  color: var(--ink);
                  margin: 0;
                }
                .nav-cell.accent-cell {
                  background: hsl(160 25% 96%);
                }
                .nav-cell.accent-cell .nav-cell-eyebrow {
                  color: var(--accent);
                }
                @media (max-width: 640px) {
                  .nav-cell-top { grid-template-columns: 1fr; }
                  .nav-grid { grid-template-columns: 1fr; }
                }
              `}</style>

              <div className="nav-grid">

                <div className="nav-cell-top">
                  <div className="nav-cell">
                    <div className="nav-cell-num">01</div>
                    <div className="nav-cell-eyebrow">Kick-off</div>
                    <div className="nav-cell-title">Map base and domain knowledge needs</div>
                  </div>
                  <div className="nav-cell">
                    <div className="nav-cell-num">02</div>
                    <div className="nav-cell-eyebrow">Navigate</div>
                    <div className="nav-cell-title">Deploy where experience is deepest</div>
                  </div>
                  <div className="nav-cell">
                    <div className="nav-cell-num">03</div>
                    <div className="nav-cell-eyebrow">Continuous improvement</div>
                    <div className="nav-cell-title">Iterate, document, refine the system</div>
                  </div>
                </div>

                <div className="nav-cell accent-cell">
                  <div className="nav-cell-eyebrow">Core · Replicable</div>
                  <div className="nav-cell-title">Research · Analysis · Facilitation · Delivery</div>
                </div>
                <div className="nav-cell accent-cell">
                  <div className="nav-cell-eyebrow">Specific · Contextual</div>
                  <div className="nav-cell-title">Experiment with new tools or integrate external capability</div>
                </div>

              </div>
            </div>

            <Link to="/methodology" className="cta-link cta-link-md">
              How I work →
            </Link>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
};

export default Index;
