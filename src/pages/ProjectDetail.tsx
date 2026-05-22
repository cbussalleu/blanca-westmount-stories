import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
        <div className="bg-[hsl(var(--pastel-yellow))] py-16">
          <div className="container-narrow">
            <div className="flex items-center justify-center mb-8">
              <div className="text-8xl">{project.icon}</div>
            </div>
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-4 font-westmount font-light text-[11px] tracking-[0.22em] uppercase text-gray-500">{project.client}</div>
              <h1 className="font-westmount font-light text-4xl md:text-5xl leading-[0.92] tracking-[-0.02em] mb-4">{project.title}</h1>
              <p className="font-merriweather text-[15px] leading-[1.65] text-gray-700 max-w-2xl mx-auto">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="container-narrow py-8">
          <Link to="/portfolio" className="inline-flex items-center font-merriweather text-xs hover:opacity-60 transition-opacity">
            <ArrowLeft size={16} className="mr-1" /> Back to Portfolio
          </Link>
        </div>

        {/* Project Content */}
        <div className="container-narrow py-8">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="font-westmount text-2xl mb-4">Project Overview</h2>
              <p className="font-merriweather text-[15px] leading-[1.65] text-gray-700">
                {project.description}
              </p>
            </div>

            {project.challenge && (
              <div className="mb-12">
                <h2 className="font-westmount text-2xl mb-4">Challenge & Context</h2>
                <p className="font-merriweather text-[15px] leading-[1.65] text-gray-700 mb-6">
                  {project.challenge}
                </p>

                {project.complexity && project.complexity.length > 0 && (
                  <div>
                    <h3 className="font-westmount text-lg mb-3">Complexity Factors</h3>
                    <ul className="space-y-2">
                      {project.complexity.map((item: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-1 text-gray-700" />
                          <span className="font-merriweather text-[15px] leading-[1.65] text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {project.research && project.research.length > 0 && (
              <div className="mb-12">
                <h2 className="font-westmount text-2xl mb-4">Research Approach</h2>
                <ul className="space-y-2">
                  {project.research.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-1 text-gray-700" />
                      <span className="font-merriweather text-[15px] leading-[1.65] text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.insights && project.insights.length > 0 && (
              <div className="mb-12">
                <h2 className="font-westmount text-2xl mb-4">Key Insights</h2>
                <ul className="space-y-2">
                  {project.insights.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-1 text-gray-700" />
                      <span className="font-merriweather text-[15px] leading-[1.65] text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.process && project.process.length > 0 && (
              <div className="mb-12">
                <h2 className="font-westmount text-2xl mb-4">Service Design Process</h2>
                <ul className="space-y-2">
                  {project.process.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-1 text-gray-700" />
                      <span className="font-merriweather text-[15px] leading-[1.65] text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.impact && project.impact.length > 0 && (
              <div className="mb-12">
                <h2 className="font-westmount text-2xl mb-4">Impact & Results</h2>
                <ul className="space-y-2">
                  {project.impact.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="mr-2 flex-shrink-0 mt-1 text-gray-700" />
                      <span className="font-merriweather text-[15px] leading-[1.65] text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.tools && project.tools.length > 0 && (
              <div className="mb-12">
                <h2 className="font-westmount text-2xl mb-4">Tools Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool: string, index: number) => (
                    <span key={index} className="border border-gray-400 px-3 py-1 text-[11px] font-merriweather">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Contact CTA */}
            <div className="mt-16 py-12 border-t border-black text-center">
              <p className="font-merriweather text-[15px] leading-[1.65] text-gray-700 mb-6 max-w-md mx-auto">
                Interested in working together or want to know more about this project?
              </p>
              <Link
                to="/contact"
                className="inline-block border border-black px-8 py-3 text-[11px] font-westmount font-light tracking-[0.2em] uppercase hover:bg-black hover:text-[hsl(var(--pastel-yellow))] transition-colors"
              >
                Get in Touch
              </Link>
            </div>

            {/* Prev / Next Navigation */}
            <div className="border-t border-black mt-16 pt-8 flex justify-between items-center">
              <div>
                {prevSlug && (
                  <Link
                    to={`/portfolio/${prevSlug}`}
                    className="inline-flex items-center gap-2 font-westmount font-light text-[11px] tracking-[0.2em] uppercase hover:opacity-60 transition-opacity"
                  >
                    <ArrowLeft size={14} /> Previous Project
                  </Link>
                )}
              </div>
              <Link
                to="/portfolio"
                className="font-westmount font-light text-[11px] tracking-[0.2em] uppercase hover:opacity-60 transition-opacity"
              >
                All Work
              </Link>
              <div>
                {nextSlug && (
                  <Link
                    to={`/portfolio/${nextSlug}`}
                    className="inline-flex items-center gap-2 font-westmount font-light text-[11px] tracking-[0.2em] uppercase hover:opacity-60 transition-opacity"
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
