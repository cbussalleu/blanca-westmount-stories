import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { OptimizedImage } from '../components/OptimizedImage';
import { getProjectBySlug } from '../data/ProjectsData';
import { useScrollToTop } from '../hooks/use-scroll-to-top';

const ProjectDetail = () => {
  useScrollToTop();
  const { slug } = useParams<{ slug: string }>();

  const project = getProjectBySlug(slug || "") || {
    title: "Project Not Found",
    client: "",
    description: "This project could not be found.",
    number: 0,
    slug: "",
    imageSrc: "",
    icon: "❓"
  };

  const projectSlugs = [
    "connection-center",
    "crm-service-design",
    "continuous-improvement",
    "digital-sales-transformation",
    "t-conecta",
    "bartista",
    "innovation-maturity-index",
    "meta-sales-optimization",
    "loyalty-program-redesign",
    "self-assessment-framework"
  ];

  const currentIndex = projectSlugs.indexOf(slug || '');
  const prevSlug = currentIndex > 0 ? projectSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < projectSlugs.length - 1 ? projectSlugs[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[hsl(var(--pastel-yellow))]">
      <Header />
      <main className="pt-20">

        {/* Hero Section */}
        <div className="bg-[hsl(var(--pastel-yellow))] sec">
          <div className="container-narrow">
            <div className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-10 items-end">
              {/* Project number — typographic anchor */}
              <div className="display-xl text-ink leading-none flex items-baseline">
                <span>{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="text-ink-4 text-3xl md:text-4xl px-1 font-light">/</span>
                <span className="text-ink-3 text-3xl md:text-4xl font-light">{String(projectSlugs.length).padStart(2, '0')}</span>
              </div>

              {/* Title block */}
              <div>
                <div className="eyebrow mb-3">{project.client}</div>
                <h1 className="display-l mb-3">{project.title}</h1>
                <p className="prose-lede">{project.description}</p>

                {project.category && project.category.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.category.map((c: string) => (
                      <span key={c} className="tag-chip">{c}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Full-bleed project image */}
        {project.imageSrc && (
          <div className="image-with-overlay">
            <div className="container-narrow">
              <div className="w-full" style={{ aspectRatio: '16/7' }}>
                <OptimizedImage src={project.imageSrc} alt={project.title} className="w-full h-full" />
              </div>
            </div>
          </div>
        )}

        {/* Back Link */}
        <div className="container-narrow py-8">
          <Link to="/portfolio" className="cta-link cta-link-sm">
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>
        </div>

        {/* Project Content */}
        <div className="container-narrow py-8">
          <div className="max-w-3xl mx-auto">

            <div className="mb-12">
              <h2 className="display-m gap-heading-tight">Project Overview</h2>
              <p className="prose">{project.description}</p>
            </div>

            {project.challenge && (
              <div className="mb-12">
                <h2 className="display-m gap-heading-tight">Challenge &amp; Context</h2>
                <p className="prose mb-6">{project.challenge}</p>

                {project.complexity && project.complexity.length > 0 && (
                  <div>
                    <h3 className="heading-m mb-3">Complexity Factors</h3>
                    <ul className="space-y-2">
                      {project.complexity.map((item: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-1" style={{ color: 'var(--ink-3)' }} />
                          <span className="prose">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {project.research && project.research.length > 0 && (
              <div className="mb-12">
                <h2 className="display-m gap-heading-tight">Research Approach</h2>
                <ul className="space-y-2">
                  {project.research.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-1" style={{ color: 'var(--ink-3)' }} />
                      <span className="prose">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.insights && project.insights.length > 0 && (
              <div className="mb-12">
                <h2 className="display-m gap-heading-tight">Key Insights</h2>
                <ul className="space-y-2">
                  {project.insights.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-1" style={{ color: 'var(--ink-3)' }} />
                      <span className="prose">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.process && project.process.length > 0 && (
              <div className="mb-12">
                <h2 className="display-m gap-heading-tight">Service Design Process</h2>
                <ul className="space-y-2">
                  {project.process.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-1" style={{ color: 'var(--ink-3)' }} />
                      <span className="prose">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.impact && project.impact.length > 0 && (
              <div className="mb-12">
                <h2 className="display-m gap-heading-tight">Impact &amp; Results</h2>
                <ul className="space-y-2">
                  {project.impact.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-1" style={{ color: 'var(--ink-3)' }} />
                      <span className="prose">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.tools && project.tools.length > 0 && (
              <div className="mb-12">
                <h2 className="display-m gap-heading-tight">Tools Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool: string, index: number) => (
                    <span key={index} className="tag-chip">{tool}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Contact CTA */}
            <div className="mt-16 py-12 border-t border-black text-center">
              <p className="prose mb-6 mx-auto">
                Interested in working together or want to know more about this project?
              </p>
              <Link to="/contact" className="tag-chip px-8 py-3">
                Get in Touch
              </Link>
            </div>

            {/* Prev / Next Navigation */}
            <div className="border-t border-black mt-16 pt-8 flex justify-between items-center">
              <div>
                {prevSlug && (
                  <Link
                    to={`/portfolio/${prevSlug}`}
                    className="eyebrow text-link inline-flex items-center gap-2"
                  >
                    <ArrowLeft size={14} /> Previous Project
                  </Link>
                )}
              </div>
              <Link to="/portfolio" className="eyebrow text-link">
                All Work
              </Link>
              <div>
                {nextSlug && (
                  <Link
                    to={`/portfolio/${nextSlug}`}
                    className="eyebrow text-link inline-flex items-center gap-2"
                  >
                    Next Project <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
