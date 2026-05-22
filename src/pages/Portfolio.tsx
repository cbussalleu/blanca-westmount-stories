import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { projects } from '../data/ProjectsData';
import { useScrollToTop } from '../hooks/use-scroll-to-top';

const Portfolio = () => {
  useScrollToTop();
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const filters = ["All", "Service Design", "FMCG", "Financial Services", "B2B", "Public Sector", "Technology", "AI"];
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category?.includes(activeFilter));

  return (
    <div className="min-h-screen bg-[hsl(var(--pastel-yellow))]">
      <Header />
      <main>

        <div className="pd-breadcrumb hero-wrap">
          <span>Portfolio · All work</span>
          <span>{projects.length} cases · Service Design</span>
          <Link to="/">← Home</Link>
        </div>

        <section className="pd-hero">
          <div className="hero-wrap">
            <div className="pd-eyebrow">
              <span>Christian Bussalleu</span>
              <span className="sep">·</span>
              <span>Service Design</span>
              <span className="sep">·</span>
              <span>{projects.length} cases</span>
            </div>
            <div style={{ paddingTop: 'var(--s-6)' }}>
              <h1 style={{
                fontFamily: 'var(--ff-display)',
                fontWeight: 200,
                fontSize: 'clamp(48px, 7vw, 96px)',
                lineHeight: 0.92,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                margin: '0 0 var(--s-5)'
              }}>All Work.</h1>
              <p style={{
                fontFamily: 'var(--ff-editorial)',
                fontSize: 'var(--t-lede)',
                lineHeight: 1.55,
                color: 'var(--ink-2)',
                maxWidth: '54ch',
                margin: 0
              }}>
                Thirteen cases across FMCG, financial services, technology, and public sector.
                Service Design from research to implementation, at scale.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-2 mb-12">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-xs font-westmount tracking-widest uppercase px-4 py-2 border border-black transition-colors ${
                    activeFilter === filter
                      ? "bg-black text-[hsl(var(--pastel-yellow))]"
                      : "bg-transparent text-black hover:opacity-60"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} {...project} />
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
