import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getProjectBySlug } from '../data/ProjectsData';
import { useScrollToTop } from '../hooks/use-scroll-to-top';

const ProjectDetail = () => {
  useScrollToTop();
  const { slug } = useParams<{ slug: string }>();

  const project = getProjectBySlug(slug || '') || {
    title: 'Project Not Found',
    client: '',
    description: 'This project could not be found.',
    number: 0,
    slug: '',
    imageSrc: '',
    icon: '❓',
  };

  const projectSlugs = [
    'connection-center',
    'crm-service-design',
    'continuous-improvement',
    'digital-sales-transformation',
    't-conecta',
    'bartista',
    'innovation-maturity-index',
    'meta-sales-optimization',
    'loyalty-program-redesign',
    'self-assessment-framework',
    'knowledge-architecture',
    'case-manager',
    'findasense-pulse',
  ];

  const currentIndex = projectSlugs.indexOf(slug || '');
  const prevSlug = currentIndex > 0 ? projectSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < projectSlugs.length - 1 ? projectSlugs[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[hsl(var(--pastel-yellow))]" style={{ paddingTop: '80px' }}>
      <Header />

      {/* Breadcrumb */}
      <div className="pd-breadcrumb container-narrow">
        <span>Portfolio · Case study</span>
        <span>Case {String(currentIndex + 1).padStart(2, '0')} of {String(projectSlugs.length).padStart(2, '0')} · {project.client}</span>
        <Link to="/portfolio">← All work</Link>
      </div>

      {/* Hero */}
      <section className="pd-hero">
        <div className="container-narrow">
          <div className="pd-eyebrow">
            <span>{project.client}</span>
            {project.category?.map((cat, i) => (
              <React.Fragment key={cat}>
                <span className="sep">·</span>
                <span>{cat}</span>
              </React.Fragment>
            ))}
          </div>
          <div className="pd-hero-row">
            <div className="pd-num">
              <span className="big">{String(currentIndex + 1).padStart(2, '0')}</span>
              <div className="small">
                <span className="slash">/</span>
                <span className="total">{String(projectSlugs.length).padStart(2, '0')}</span>
                <span className="num-label">Case study</span>
              </div>
            </div>
            <div className="pd-title-block">
              <h1>{project.title}</h1>
              <p className="pd-lede">{project.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meta strip */}
      <dl className="pd-meta container-narrow">
        <div><dt>Client</dt><dd>{project.client}</dd></div>
        <div><dt>Sector</dt><dd>{project.category?.join(' · ')}</dd></div>
        <div><dt>Role</dt><dd>Lead Service Designer</dd></div>
        <div><dt>Projects</dt><dd>Case {String(currentIndex + 1).padStart(2, '0')} of {String(projectSlugs.length).padStart(2, '0')}</dd></div>
        <div><dt>Tools</dt><dd>{project.tools?.slice(0, 2).join(' · ')}</dd></div>
      </dl>

      {/* Impact tiles */}
      {project.impact && project.impact.length > 0 && (
        <section className="impact-section">
          <div className="container-narrow">
            <div className="impact-head">
              <h2>What changed.</h2>
              <div className="impact-eyebrow">Outcome · headline figures</div>
            </div>
            <div className="impact-tiles">
              {project.impact.slice(0, 5).map((item, i) => (
                <div className="impact-tile" key={i}>
                  <div className="stat"><span className="big">{i + 1}</span></div>
                  <div className="tile-label">Result {i + 1}</div>
                  <div className="tile-body">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section A — Challenge */}
      {project.challenge && (
        <section className="pd-case" id="challenge">
          <div className="container-narrow">
            <header className="pd-case-head">
              <div className="case-letter">A</div>
              <div>
                <div className="case-verbose">Section A · The brief</div>
                <h2>The challenge.</h2>
                <p className="case-lede">{project.challenge}</p>
              </div>
            </header>
            {project.complexity?.map((item, i) => (
              <article className="pd-item" key={i}>
                <div className="item-meta">
                  <div className="item-id-row">
                    <span className="item-id">A·{i + 1}</span>
                    <span className="item-tag" data-tag="complexity">Complexity</span>
                  </div>
                </div>
                <div className="item-body">
                  <p>{item}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Section B — Research */}
      {project.research && project.research.length > 0 && (
        <section className="pd-case" id="research">
          <div className="container-narrow">
            <header className="pd-case-head">
              <div className="case-letter">B</div>
              <div>
                <div className="case-verbose">Section B · How I approached it</div>
                <h2>Research approach.</h2>
              </div>
            </header>
            {project.research.map((item, i) => (
              <article className="pd-item" key={i}>
                <div className="item-meta">
                  <div className="item-id-row">
                    <span className="item-id">B·{i + 1}</span>
                    <span className="item-tag" data-tag="research">Method</span>
                  </div>
                </div>
                <div className="item-body">
                  <p>{item}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Section C — Insights */}
      {project.insights && project.insights.length > 0 && (
        <section className="pd-case" id="insights">
          <div className="container-narrow">
            <header className="pd-case-head">
              <div className="case-letter">C</div>
              <div>
                <div className="case-verbose">Section C · What I learned</div>
                <h2>Key insights.</h2>
              </div>
            </header>
            {project.insights.map((item, i) => (
              <article className="pd-item" key={i}>
                <div className="item-meta">
                  <div className="item-id-row">
                    <span className="item-id">C·{i + 1}</span>
                    <span className="item-tag" data-tag="insight">Insight</span>
                  </div>
                </div>
                <div className="item-body">
                  <p>{item}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Section D — Process */}
      {project.process && project.process.length > 0 && (
        <section className="pd-case" id="process">
          <div className="container-narrow">
            <header className="pd-case-head">
              <div className="case-letter">D</div>
              <div>
                <div className="case-verbose">Section D · What I designed</div>
                <h2>How it was built.</h2>
              </div>
            </header>
            {project.process.map((item, i) => (
              <article className="pd-item" key={i}>
                <div className="item-meta">
                  <div className="step-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="item-id-row">
                    <span className="item-id">D·{i + 1}</span>
                    <span className="item-tag" data-tag="process">Process</span>
                  </div>
                </div>
                <div className="item-body">
                  <p>{item}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* Tools */}
      {project.tools && project.tools.length > 0 && (
        <section className="pd-tools">
          <div className="container-narrow">
            <h2>Tools.</h2>
            <div className="tools-grid">
              {project.tools.map((tool, i) => (
                <div className="tool-cell" key={i}>
                  <div className="tool-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="tool-name">{tool}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case navigation */}
      <div className="pd-case-nav container-narrow">
        {prevSlug ? (
          <Link to={`/portfolio/${prevSlug}`}>
            <div className="nav-dir">← Previous case</div>
            <div className="nav-id">{String(currentIndex).padStart(2, '0')}</div>
            <p className="nav-title">{getProjectBySlug(prevSlug)?.title}</p>
          </Link>
        ) : <div />}
        {nextSlug ? (
          <Link to={`/portfolio/${nextSlug}`} className="next">
            <div className="nav-dir">Next case →</div>
            <div className="nav-id">{String(currentIndex + 2).padStart(2, '0')}</div>
            <p className="nav-title">{getProjectBySlug(nextSlug)?.title}</p>
          </Link>
        ) : <div />}
      </div>

      {/* Closing line */}
      <div className="pd-closing container-narrow">
        <span className="closing-label">End of case study {String(currentIndex + 1).padStart(2, '0')}/{String(projectSlugs.length).padStart(2, '0')}</span>
        <div className="closing-meta">
          {project.client} · {project.category?.join(' · ')}<br />
          <Link to="/portfolio">→ All {projectSlugs.length} cases</Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
