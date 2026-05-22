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
            <p className="home-approach-statement prose-constrained">
              "Experience cannot be designed: only enabled. Success emerges from
              navigating complexity through continuous evolution and adaptation,
              balancing control with emergence while maintaining a deep understanding
              of system dynamics."
            </p>
            <div style={{ margin: 'var(--s-7) 0', overflowX: 'auto' }}>
              <svg viewBox="0 0 960 360" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 960, height: 'auto', display: 'block', fontFamily: 'var(--ff-display)' }}>

                <text x="20" y="20" fontSize="9" fontWeight="300" letterSpacing="0.20em" fill="var(--ink-4)">KNOWLEDGE INPUT</text>
                <text x="560" y="20" fontSize="9" fontWeight="300" letterSpacing="0.20em" fill="var(--ink-4)">NAVIGATION PROCESS</text>

                <rect x="20" y="36" width="220" height="80" fill="none" stroke="var(--ink)" strokeWidth="1.5"/>
                <text x="30" y="56" fontSize="9" fontWeight="300" letterSpacing="0.18em" fill="var(--ink-3)">01 · BASE</text>
                <text x="30" y="76" fontSize="13" fontWeight="400" fontFamily="var(--ff-editorial)" fill="var(--ink)">Context-agnostic</text>
                <text x="30" y="94" fontSize="11" fontWeight="300" fill="var(--ink-3)">Research · Analysis · Facilitation</text>
                <text x="30" y="108" fontSize="11" fontWeight="300" fill="var(--ink-3)">Communication · Delivery</text>

                <rect x="20" y="136" width="220" height="80" fill="var(--ink)" stroke="var(--ink)" strokeWidth="1.5"/>
                <text x="30" y="156" fontSize="9" fontWeight="300" letterSpacing="0.18em" fill="hsl(48 100% 95%)" opacity="0.6">02 · SPECIALIZED</text>
                <text x="30" y="176" fontSize="13" fontWeight="400" fontFamily="var(--ff-editorial)" fill="hsl(48 100% 95%)">Context-specific</text>
                <text x="30" y="194" fontSize="11" fontWeight="300" fill="hsl(48 100% 95%)" opacity="0.7">Sector · Audience · Regulation</text>
                <text x="30" y="208" fontSize="11" fontWeight="300" fill="hsl(48 100% 95%)" opacity="0.7">Culture · Domain expertise</text>

                <line x1="240" y1="76" x2="280" y2="140" stroke="var(--ink)" strokeWidth="1.5"/>
                <line x1="240" y1="176" x2="280" y2="160" stroke="var(--ink)" strokeWidth="1.5"/>
                <line x1="280" y1="140" x2="280" y2="160" stroke="var(--ink)" strokeWidth="1.5"/>
                <line x1="280" y1="150" x2="310" y2="150" stroke="var(--ink)" strokeWidth="1.5"/>
                <polygon points="310,145 322,150 310,155" fill="var(--ink)"/>

                <rect x="322" y="110" width="130" height="80" fill="hsl(var(--pastel-yellow))" stroke="var(--ink)" strokeWidth="1.5"/>
                <text x="387" y="133" textAnchor="middle" fontSize="9" fontWeight="300" letterSpacing="0.16em" fill="var(--ink-3)">STEP 1</text>
                <text x="387" y="153" textAnchor="middle" fontSize="13" fontWeight="400" fontFamily="var(--ff-editorial)" fill="var(--ink)">Map both</text>
                <text x="387" y="170" textAnchor="middle" fontSize="13" fontWeight="400" fontFamily="var(--ff-editorial)" fill="var(--ink)">layers</text>
                <line x1="452" y1="150" x2="482" y2="150" stroke="var(--ink)" strokeWidth="1.5"/>
                <polygon points="482,145 494,150 482,155" fill="var(--ink)"/>

                <rect x="494" y="110" width="130" height="80" fill="hsl(var(--pastel-yellow))" stroke="var(--ink)" strokeWidth="1.5"/>
                <text x="559" y="133" textAnchor="middle" fontSize="9" fontWeight="300" letterSpacing="0.16em" fill="var(--ink-3)">STEP 2</text>
                <text x="559" y="153" textAnchor="middle" fontSize="13" fontWeight="400" fontFamily="var(--ff-editorial)" fill="var(--ink)">Choose</text>
                <text x="559" y="170" textAnchor="middle" fontSize="13" fontWeight="400" fontFamily="var(--ff-editorial)" fill="var(--ink)">your toolkit</text>
                <line x1="624" y1="150" x2="654" y2="150" stroke="var(--ink)" strokeWidth="1.5"/>
                <polygon points="654,145 666,150 654,155" fill="var(--ink)"/>

                <rect x="666" y="110" width="130" height="80" fill="hsl(var(--pastel-yellow))" stroke="var(--ink)" strokeWidth="1.5"/>
                <text x="731" y="133" textAnchor="middle" fontSize="9" fontWeight="300" letterSpacing="0.16em" fill="var(--ink-3)">STEP 3</text>
                <text x="731" y="153" textAnchor="middle" fontSize="13" fontWeight="400" fontFamily="var(--ff-editorial)" fill="var(--ink)">Experiment</text>
                <text x="731" y="170" textAnchor="middle" fontSize="13" fontWeight="400" fontFamily="var(--ff-editorial)" fill="var(--ink)">+ fill gaps</text>
                <line x1="796" y1="150" x2="826" y2="150" stroke="var(--ink)" strokeWidth="1.5"/>
                <polygon points="826,145 838,150 826,155" fill="var(--ink)"/>

                <rect x="838" y="110" width="102" height="80" fill="var(--ink)" stroke="var(--ink)" strokeWidth="1.5"/>
                <text x="889" y="140" textAnchor="middle" fontSize="9" fontWeight="300" letterSpacing="0.16em" fill="hsl(48 100% 95%)" opacity="0.6">OUTPUT</text>
                <text x="889" y="160" textAnchor="middle" fontSize="13" fontWeight="400" fontFamily="var(--ff-editorial)" fill="hsl(48 100% 95%)">Deliver</text>
                <text x="889" y="177" textAnchor="middle" fontSize="11" fontWeight="300" fill="hsl(48 100% 95%)" opacity="0.7">and learn</text>

                <path d="M 889 190 Q 889 280 460 280 Q 30 280 30 216" fill="none" stroke="var(--ink)" strokeWidth="1" strokeDasharray="4 4"/>
                <polygon points="26,216 30,228 34,216" fill="var(--ink)"/>
                <text x="460" y="300" textAnchor="middle" fontSize="9" fontWeight="300" letterSpacing="0.20em" fill="var(--ink-4)">EACH PROJECT ENRICHES THE KNOWLEDGE BASE</text>

                <rect x="322" y="230" width="518" height="28" fill="none" stroke="var(--rule)" strokeWidth="1" strokeDasharray="2 2"/>
                <text x="581" y="249" textAnchor="middle" fontSize="9" fontWeight="300" letterSpacing="0.18em" fill="var(--ink-4)">ACCUMULATED EXPERIENCE · NO SILVER BULLETS · COMPLEXITY AS MATERIAL</text>

              </svg>
            </div>

            <Link to="/methodology" className="cta-link cta-link-md">
              Read the methodology →
            </Link>
          </div>
        </section>

        {/* ── FOOTER STRIP ── */}
        <div className="home-footer-strip container-narrow">
          <span>
            <span style={{ display: 'inline-block', width: 6, height: 6, background: 'var(--ink)', borderRadius: '50%', marginRight: 8, verticalAlign: 1 }}></span>
            nosilverbullets.eu
          </span>
          <span>Service Design Portfolio · Christian Bussalleu · Barcelona</span>
        </div>

      </main>
      <Footer />
    </div>
  );
};

export default Index;
