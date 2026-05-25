import { useState } from 'react';
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
  const [showTooltip, setShowTooltip] = useState(false);
  const featuredProjects = projects.filter(p => featuredSlugs.includes(p.slug));
  const bimboProjects = projects.filter(p => bimboSlugs.includes(p.slug));

  const handleDownload = () => {
    const cvMetadata = {
      format_version: "1.0.0",
      last_updated: "2026-05",
      profile: {
        name: "Christian Bussalleu",
        role: "Senior Service Designer & CX Management Services Lead",
        email: "christian.bussalleu@gmail.com",
        linkedin: "https://linkedin.com/in/christianbussalleu",
        portfolio: "https://nosilverbullets.eu",
        location: "Barcelona, Spain",
        languages: ["Spanish", "English", "French"]
      },
      summary: "Service Designer with 12+ years of experience implementing CX programs and leading cross-functional teams. Background in data analytics and communications strategy. Focused on designing complex service systems at global scale.",
      skills: {
        service_design: ["Service Design", "Customer Journey Mapping", "Service Blueprint", "Process Design", "Workshop Facilitation", "CX Assessment"],
        cx_management: ["CRM Implementation", "Customer Service Orchestration", "VoC Implementation", "Loyalty Programs", "CX Training"],
        tools: ["Figma", "Miro", "Salesforce", "Tableau", "Looker Studio", "MySQL", "Illustrator", "Visio", "Excel", "Colab", "Jira", "GitHub"]
      },
      experience: [
        {
          role: "CX Management Services Lead",
          company: "Findasense - TP Infinity, part of Teleperformance Group",
          period: "2018 - Present",
          summary: "Led implementation of consultancy service practice, increasing overall customer satisfaction by 20%. Managed end-to-end projects including customer journey mapping, CX operations, CX training for large operations, loyalty programs, and VoC implementation."
        },
        {
          role: "CX Service Design Consultant",
          company: "Government & Digital Transformation Lab of Peruvian Government",
          period: "2022 - 2024",
          summary: "Led design and implementation of key digital transformation projects for Peru: Citizen Integrated Channels (omnichannel platform for 15M citizens), Digital Innovation Index (measuring innovation maturity of 2,500 public entities), and Community of Peruvian Innovators."
        }
      ],
      international_experience: {
        brands: 20,
        industries: ["Food & Beverage", "Finance", "Luxury"],
        countries: 15,
        regions: ["Americas", "EMEA", "Asia"]
      },
      education: [
        {
          degree: "Executive Master in Strategic Business Analytics",
          institution: "Universitat de Barcelona",
          location: "Barcelona, Spain",
          period: "2024 - 2026"
        },
        {
          degree: "Business Analytics Specialization",
          institution: "The Wharton School",
          location: "Philadelphia, US",
          period: "2015 - 2016"
        },
        {
          degree: "Bachelor of Marketing Communications",
          institution: "University of Piura",
          location: "Piura, Peru",
          period: "2007 - 2011"
        }
      ],
      portfolio_cases: [
        "Connection Center Research & Design (Grupo Bimbo)",
        "CRM Service Design & Implementation (Grupo Bimbo)",
        "T-Conecta B2B Platform (Grupo Bimbo)",
        "Continuous Improvement Framework (Grupo Bimbo)",
        "Digital Sales Transformation (La Positiva)",
        "Bartista Content Model (Nestlé)",
        "Digital Innovation Maturity Index (Gobierno Peruano)",
        "META Sales Optimization (Facebook/Meta)",
        "Cardholder Loyalty Program (BBVA)"
      ]
    };

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cvMetadata, null, 2));
    const anchor = document.createElement('a');
    anchor.setAttribute("href", dataStr);
    anchor.setAttribute("download", "christian-bussalleu-cv-metadata.json");
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
  };

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
              <span style={{ display: 'block' }}>Hello,</span>
              <span style={{ display: 'block' }}>I am</span>
              <em>
                <span
                  style={{ display: 'inline', cursor: 'pointer' }}
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  Christian
                  <button
                    type="button"
                    className="logo-dot-wrapper"
                    onClick={handleDownload}
                    aria-label="Download CV metadata as JSON"
                    style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'inline-block', verticalAlign: 'baseline' }}
                  >
                    <span className="logo-dot-mobile">.</span>
                    <span className="logo-dot-desktop">
                      <img
                        src="/lovable-uploads/69552967-182b-43cb-9a77-04a4d046299a.png"
                        alt="Download CV Metadata"
                        className={`logo-dot-img ${showTooltip ? 'logo-dot-img--active' : ''}`}
                      />
                    </span>
                  </button>
                </span>
              </em>
            </h1>
            {showTooltip && (
              <>
                <div
                  className="logo-dot-bridge"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                />
                <div
                  className="logo-dot-panel"
                  onMouseEnter={() => setShowTooltip(true)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <div className="logo-dot-panel-header">
                    CV Metadata · JSON
                  </div>
                  <div className="logo-dot-panel-body">
                    <span className="logo-dot-panel-title">Download CV Metadata (JSON)</span>
                    <span className="logo-dot-panel-sub">For AI screening tools, automated ATS pipelines, or programmatic HR analysis.</span>
                  </div>
                </div>
              </>
            )}
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
            <div style={{ paddingTop: 'var(--s-3)', textAlign: 'right' }}>
              <Link
                to="/portfolio/self-assessment-framework"
                style={{
                  fontFamily: 'var(--ff-editorial)',
                  fontSize: 14,
                  color: 'var(--ink)',
                  borderBottom: '1px solid var(--ink)',
                  paddingBottom: 2,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  transition: 'opacity 200ms'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                Behind the radar →
              </Link>
            </div>
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
                A working relationship
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
                No framework eliminates essential complexity. What matters is building the judgment to navigate it.
              </p>
            </div>
            <div style={{ margin: 'var(--s-6) 0' }}>
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
              Read the full approach →
            </Link>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
};

export default Index;
