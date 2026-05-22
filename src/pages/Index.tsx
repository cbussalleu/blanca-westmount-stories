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
              <svg viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100%', maxWidth: 560, height: 'auto', display: 'block', margin: '0 auto' }}>

                <circle cx="280" cy="280" r="240" fill="none" stroke="var(--rule)" strokeWidth="1"/>
                <circle cx="280" cy="280" r="120" fill="none" stroke="var(--rule)" strokeWidth="1"/>

                <circle cx="280" cy="280" r="80" fill="var(--ink)" />
                <text x="280" y="270" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="10" letterSpacing="0.18em" fill="hsl(48 100% 95%)" opacity="0.6">KNOWLEDGE</text>
                <text x="280" y="288" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="10" letterSpacing="0.18em" fill="hsl(48 100% 95%)" opacity="0.6">SYSTEM</text>
                <text x="280" y="312" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="200" fontSize="28" fill="hsl(48 100% 95%)">↺</text>

                <circle cx="280" cy="40" r="36" fill="hsl(var(--pastel-yellow))" stroke="var(--ink)" strokeWidth="1.5"/>
                <text x="280" y="35" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="9" letterSpacing="0.14em" fill="var(--ink-3)">01</text>
                <text x="280" y="50" textAnchor="middle" fontFamily="var(--ff-editorial)" fontWeight="400" fontSize="11" fill="var(--ink)">Map</text>

                <path d="M 314 58 A 240 240 0 0 1 494 193" fill="none" stroke="var(--ink)" strokeWidth="1" strokeDasharray="3 3"/>
                <polygon points="490,190 498,200 500,188" fill="var(--ink)"/>

                <circle cx="508" cy="207" r="36" fill="hsl(var(--pastel-yellow))" stroke="var(--ink)" strokeWidth="1.5"/>
                <text x="508" y="202" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="9" letterSpacing="0.14em" fill="var(--ink-3)">02</text>
                <text x="508" y="217" textAnchor="middle" fontFamily="var(--ff-editorial)" fontWeight="400" fontSize="11" fill="var(--ink)">Choose</text>

                <path d="M 508 243 A 240 240 0 0 1 394 498" fill="none" stroke="var(--ink)" strokeWidth="1" strokeDasharray="3 3"/>
                <polygon points="390,494 396,506 402,494" fill="var(--ink)"/>

                <circle cx="394" cy="516" r="36" fill="hsl(var(--pastel-yellow))" stroke="var(--ink)" strokeWidth="1.5"/>
                <text x="394" y="510" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="9" letterSpacing="0.14em" fill="var(--ink-3)">03</text>
                <text x="394" y="525" textAnchor="middle" fontFamily="var(--ff-editorial)" fontWeight="400" fontSize="11" fill="var(--ink)">Experiment</text>

                <path d="M 358 516 A 240 240 0 0 1 166 516" fill="none" stroke="var(--ink)" strokeWidth="1" strokeDasharray="3 3"/>
                <polygon points="170,522 162,512 158,524" fill="var(--ink)"/>

                <circle cx="166" cy="516" r="36" fill="hsl(var(--pastel-yellow))" stroke="var(--ink)" strokeWidth="1.5"/>
                <text x="166" y="510" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="9" letterSpacing="0.14em" fill="var(--ink-3)">04</text>
                <text x="166" y="525" textAnchor="middle" fontFamily="var(--ff-editorial)" fontWeight="400" fontSize="11" fill="var(--ink)">Fill gaps</text>

                <path d="M 132 498 A 240 240 0 0 1 52 207" fill="none" stroke="var(--ink)" strokeWidth="1" strokeDasharray="3 3"/>
                <polygon points="48,212 50,200 60,210" fill="var(--ink)"/>

                <circle cx="52" cy="193" r="36" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1.5"/>
                <text x="52" y="188" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="9" letterSpacing="0.14em" fill="white" opacity="0.8">05</text>
                <text x="52" y="203" textAnchor="middle" fontFamily="var(--ff-editorial)" fontWeight="400" fontSize="11" fill="white">Deliver</text>

                <path d="M 66 158 A 240 240 0 0 1 248 42" fill="none" stroke="var(--accent)" strokeWidth="1.5"/>
                <polygon points="244,36 252,46 260,36" fill="var(--accent)"/>

                <line x1="280" y1="76" x2="280" y2="200" stroke="var(--rule)" strokeWidth="1"/>
                <line x1="472" y1="207" x2="400" y2="260" stroke="var(--rule)" strokeWidth="1"/>
                <line x1="366" y1="480" x2="320" y2="360" stroke="var(--rule)" strokeWidth="1"/>
                <line x1="194" y1="480" x2="240" y2="360" stroke="var(--rule)" strokeWidth="1"/>
                <line x1="88" y1="207" x2="160" y2="260" stroke="var(--rule)" strokeWidth="1"/>

                <text x="100" y="72" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="8" letterSpacing="0.16em" fill="var(--accent)">FEEDS BACK</text>
                <text x="100" y="84" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="8" letterSpacing="0.16em" fill="var(--accent)">INTO SYSTEM</text>

                <text x="280" y="556" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="8" letterSpacing="0.20em" fill="var(--ink-4)">EXPERIENCE COMPOUNDS · EACH PROJECT ENRICHES THE NEXT</text>

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
