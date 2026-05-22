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
              transform how they deliver value — at scale, across markets, without losing
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
            <div className="home-section-head">
              <div className="section-letter">A</div>
              <div>
                <div className="section-verbose">Section A · Capabilities</div>
                <h2>What I bring to a project.</h2>
                <p>A bibliographically grounded self-assessment across five capability dimensions. Click any dimension to see it in action.</p>
              </div>
            </div>
            <RadarSkillsSection />
          </div>
        </section>

        {/* ── B: FEATURED WORK ── */}
        <section className="home-section">
          <div className="container-narrow">
            <div className="home-section-head">
              <div className="section-letter">B</div>
              <div>
                <div className="section-verbose">Section B · Selected work</div>
                <h2>Three cases that define the practice.</h2>
                <p>Chosen for range — sector, scale, and type of design challenge.</p>
              </div>
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
            <div className="home-section-head">
              <div className="section-letter">C</div>
              <div>
                <div className="section-verbose">Section C · Long-term engagement</div>
                <h2>Seven years designing for Grupo Bimbo.</h2>
                <p>The world's largest bread manufacturer. 17 countries. Four interconnected projects that built on each other.</p>
              </div>
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
            <div className="home-section-head">
              <div className="section-letter">D</div>
              <div>
                <div className="section-verbose">Section D · How I work</div>
                <h2>No silver bullets.</h2>
                <p>A mindset, not a method. Complex service problems don't have single solutions — they have navigation strategies.</p>
              </div>
            </div>
            <p className="home-approach-statement prose-constrained">
              "Experience cannot be designed — only enabled. Success emerges from
              navigating complexity through continuous evolution and adaptation,
              balancing control with emergence while maintaining a deep understanding
              of system dynamics."
            </p>
            <div style={{ margin: 'var(--s-7) 0', overflowX: 'auto' }}>
              <svg viewBox="0 0 960 280" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 960, height: 'auto', display: 'block' }}>
                <line x1="0" y1="60" x2="960" y2="60" stroke="var(--rule)" strokeWidth="1"/>
                <line x1="0" y1="220" x2="960" y2="220" stroke="var(--rule)" strokeWidth="1"/>

                <rect x="20" y="80" width="160" height="120" fill="hsl(48 100% 95%)" stroke="var(--ink)" strokeWidth="1.5"/>
                <text x="100" y="108" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="9" letterSpacing="0.18em" fill="var(--ink-3)">01</text>
                <text x="100" y="130" textAnchor="middle" fontFamily="var(--ff-editorial)" fontWeight="400" fontSize="13" fill="var(--ink)">Map the</text>
                <text x="100" y="148" textAnchor="middle" fontFamily="var(--ff-editorial)" fontWeight="400" fontSize="13" fill="var(--ink)">problem</text>
                <text x="100" y="170" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="9" letterSpacing="0.12em" fill="var(--ink-3)">BASE + DOMAIN</text>

                <line x1="180" y1="140" x2="220" y2="140" stroke="var(--ink)" strokeWidth="1.5"/>
                <polygon points="220,135 232,140 220,145" fill="var(--ink)"/>

                <rect x="232" y="80" width="160" height="120" fill="hsl(48 100% 95%)" stroke="var(--ink)" strokeWidth="1.5"/>
                <text x="312" y="108" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="9" letterSpacing="0.18em" fill="var(--ink-3)">02</text>
                <text x="312" y="130" textAnchor="middle" fontFamily="var(--ff-editorial)" fontWeight="400" fontSize="13" fill="var(--ink)">Choose</text>
                <text x="312" y="148" textAnchor="middle" fontFamily="var(--ff-editorial)" fontWeight="400" fontSize="13" fill="var(--ink)">your toolkit</text>
                <text x="312" y="170" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="9" letterSpacing="0.12em" fill="var(--ink-3)">EXPERIENCE FIRST</text>

                <line x1="392" y1="140" x2="432" y2="140" stroke="var(--ink)" strokeWidth="1.5"/>
                <polygon points="432,135 444,140 432,145" fill="var(--ink)"/>

                <rect x="444" y="80" width="160" height="120" fill="hsl(48 100% 95%)" stroke="var(--ink)" strokeWidth="1.5"/>
                <text x="524" y="108" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="9" letterSpacing="0.18em" fill="var(--ink-3)">03</text>
                <text x="524" y="130" textAnchor="middle" fontFamily="var(--ff-editorial)" fontWeight="400" fontSize="13" fill="var(--ink)">Experiment</text>
                <text x="524" y="148" textAnchor="middle" fontFamily="var(--ff-editorial)" fontWeight="400" fontSize="13" fill="var(--ink)">deliberately</text>
                <text x="524" y="170" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="9" letterSpacing="0.12em" fill="var(--ink-3)">ONE NEW TOOL</text>

                <line x1="604" y1="140" x2="644" y2="140" stroke="var(--ink)" strokeWidth="1.5"/>
                <polygon points="644,135 656,140 644,145" fill="var(--ink)"/>

                <rect x="656" y="80" width="160" height="120" fill="hsl(48 100% 95%)" stroke="var(--ink)" strokeWidth="1.5"/>
                <text x="736" y="108" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="9" letterSpacing="0.18em" fill="var(--ink-3)">04</text>
                <text x="736" y="130" textAnchor="middle" fontFamily="var(--ff-editorial)" fontWeight="400" fontSize="13" fill="var(--ink)">Fill critical</text>
                <text x="736" y="148" textAnchor="middle" fontFamily="var(--ff-editorial)" fontWeight="400" fontSize="13" fill="var(--ink)">gaps</text>
                <text x="736" y="170" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="9" letterSpacing="0.12em" fill="var(--ink-3)">EXTERNAL CAPACITY</text>

                <line x1="816" y1="140" x2="856" y2="140" stroke="var(--ink)" strokeWidth="1.5"/>
                <polygon points="856,135 868,140 856,145" fill="var(--ink)"/>

                <rect x="868" y="80" width="72" height="120" fill="var(--ink)" stroke="var(--ink)" strokeWidth="1.5"/>
                <text x="904" y="120" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="9" letterSpacing="0.14em" fill="hsl(48 100% 95%)">FEED</text>
                <text x="904" y="138" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="9" letterSpacing="0.14em" fill="hsl(48 100% 95%)">BACK</text>
                <text x="904" y="162" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="200" fontSize="20" fill="hsl(48 100% 95%)">↺</text>

                <path d="M 904 200 Q 904 250 480 250 Q 56 250 56 200" fill="none" stroke="var(--ink)" strokeWidth="1" strokeDasharray="4 4"/>
                <polygon points="52,200 56,212 60,200" fill="var(--ink)"/>

                <text x="480" y="270" textAnchor="middle" fontFamily="var(--ff-display)" fontWeight="300" fontSize="9" letterSpacing="0.20em" fill="var(--ink-4)">EACH PROJECT FEEDS THE NEXT · EXPERIENCE COMPOUNDS</text>
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
