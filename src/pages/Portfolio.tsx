import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { Link } from 'react-router-dom';
import { projects } from '../data/ProjectsData';
import { useScrollToTop } from '../hooks/use-scroll-to-top';
import { ArrowLeft } from 'lucide-react';

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

        {/* Breadcrumb */}
        <div style={{ width: '100%', maxWidth: 1120, marginInline: 'auto', paddingInline: 'clamp(20px,4vw,48px)', paddingBlock: 'var(--s-5)', paddingTop: 'calc(var(--s-5) + 80px)', borderBottom: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 11, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
          <span>Portfolio · All work</span>
          <Link to="/" style={{ color: 'var(--ink)', borderBottom: '1px solid var(--ink)', paddingBottom: 2 }}>← Home</Link>
        </div>

        {/* Hero */}
        <section style={{ borderBottom: '1px solid var(--rule)', paddingBlock: 'var(--s-9) var(--s-8)' }}>
          <div className="portfolio-hero-grid" style={{ width: '100%', maxWidth: 1120, marginInline: 'auto', paddingInline: 'clamp(20px,4vw,48px)', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--s-9)', alignItems: 'end' }}>
            <div>
              <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--ink-2)', marginBottom: 'var(--s-6)' }}>
                Christian Bussalleu · Service Design
              </div>
              <h1 style={{ fontFamily: 'var(--ff-display)', fontWeight: 200, fontSize: 'clamp(48px,7vw,96px)', lineHeight: 0.92, letterSpacing: '-0.02em', textTransform: 'uppercase', margin: '0 0 var(--s-5)', maxWidth: '14ch' }}>
                All Work.
              </h1>
              <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 'var(--t-lede)', lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: '48ch', margin: 0 }}>
                Thirteen cases across FMCG, financial services, technology, and public sector.
                From research to implementation, at global scale.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)', alignSelf: 'end' }}>
              {[
                { num: '13', label: 'Cases' },
                { num: '5', label: 'Sectors' },
                { num: '17', label: 'Countries' },
                { num: '15+', label: 'Years' },
              ].map(({ num, label }) => (
                <div key={label} style={{ background: 'hsl(var(--pastel-yellow))', padding: 'var(--s-5)' }}>
                  <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 200, fontSize: 48, lineHeight: 0.9, letterSpacing: '-0.04em', color: 'var(--ink)' }}>{num}</div>
                  <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--ink-3)', marginTop: 'var(--s-2)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <style>{`
          @media (max-width: 640px) {
            .portfolio-hero-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

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
