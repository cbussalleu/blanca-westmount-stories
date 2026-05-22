import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BimboCaseStudies from '../components/BimboCaseStudies';
import { useScrollToTop } from '../hooks/use-scroll-to-top';

const timeline = [
  {
    years: "2017",
    title: "Research & Discovery",
    description: "Conducted systematic process audits across 9 initial markets. 65+ stakeholder interviews. Documented 24 key customer journeys across B2C and B2B channels. Identified critical gaps: fragmented governance, 24-hour average response times, and a complete disconnect between customer insights and product innovation."
  },
  {
    years: "2018–2019",
    title: "Service Design & Blueprint",
    description: "Designed the global CX model: 43 processes in Blueprint format, 54 personalized reports, and an online playbook with version control. Defined the governance model that would unify 3 previously siloed departments into a single customer experience function."
  },
  {
    years: "2019–2021",
    title: "CRM Implementation",
    description: "Translated service blueprints into a functional Salesforce implementation across 17 countries. Designed modular system architecture enabling local adaptation. Result: 60% reduction in complaint handling time, 30% reduction in response time, 85%+ adoption rates across all markets."
  },
  {
    years: "2020–2022",
    title: "T-Conecta B2B Platform",
    description: "Designed an integrated digital platform for small business owners (Bimbo's direct customers), combining ordering, financial services, and additional revenue streams. 27% adoption rate in second year. Monthly transaction volume of 250,000."
  },
  {
    years: "2022–Present",
    title: "Continuous Improvement Framework",
    description: "Designed the organizational capability for customer-driven innovation: a feedback-to-action pipeline connecting customer insights to product teams across 17 countries. 47 product and process improvements implemented in first two years."
  }
];

const projects = [
  {
    slug: "connection-center",
    title: "Connection Center Research & Design",
    description: "Designed a global omnichannel CX model standardizing consumer and customer engagement across 17 countries."
  },
  {
    slug: "crm-service-design",
    title: "CRM Service Design & Implementation",
    description: "Translated 43 service blueprints into a functional, scalable Salesforce implementation across 17 markets."
  },
  {
    slug: "continuous-improvement",
    title: "Continuous Improvement & Innovation Framework",
    description: "Designed the organizational capability for customer-driven innovation across the global Connection Center ecosystem."
  },
  {
    slug: "t-conecta",
    title: "T-Conecta: B2B Omnichannel Service Ecosystem",
    description: "Designed an integrated digital platform for small businesses combining ordering, financial services, and revenue streams."
  }
];

const BimboRelationship = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[hsl(var(--pastel-yellow))]">
      <Header />
      <main>

        <div className="pd-breadcrumb hero-wrap">
          <span>Portfolio · Long-term engagement</span>
          <span>Grupo Bimbo · 2017–present</span>
          <Link to="/">← Home</Link>
        </div>

        <section className="pd-hero">
          <div className="hero-wrap">
            <div className="pd-eyebrow">
              <span>Grupo Bimbo</span>
              <span className="sep">·</span>
              <span>FMCG</span>
              <span className="sep">·</span>
              <span>7 years · 17 countries</span>
            </div>
            <div className="pd-hero-row" style={{ paddingTop: 'var(--s-6)' }}>
              <div className="pd-num">
                <span className="big">7</span>
                <div className="small">
                  <span className="slash">/</span>
                  <span className="total" style={{ fontSize: 22 }}>yrs</span>
                  <span className="num-label">engagement</span>
                </div>
              </div>
              <div className="pd-title-block">
                <h1>Grupo Bimbo &amp; I.</h1>
                <p className="pd-lede">
                  The world's largest bread manufacturer. Four interconnected projects
                  over seven years — from initial research through global CRM implementation,
                  B2B platform design, and continuous improvement infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        <dl className="pd-meta hero-wrap">
          <div><dt>Client</dt><dd>Grupo Bimbo</dd></div>
          <div><dt>Period</dt><dd>2017 — present</dd></div>
          <div><dt>Countries</dt><dd>17 · 3 continents</dd></div>
          <div><dt>Projects</dt><dd>4 interconnected</dd></div>
          <div><dt>Employees</dt><dd>134,000+</dd></div>
        </dl>

        <section className="py-16 pb-24">
          <div className="container-narrow">

              {/* Intro */}
              <div className="mb-12 space-y-4">
                <p className="font-merriweather text-[15px] leading-[1.65] text-gray-700">
                  As the world's largest bread manufacturer, present in over 33 countries, operating more than 100 brands, and employing over 134,000 people, Grupo Bimbo required a customer experience transformation at a scale that few organizations ever attempt.
                </p>
                <p className="font-merriweather text-[15px] leading-[1.65] text-gray-700">
                  Since 2017, I have led the design and implementation of the Connection Center: a new global operational model for customer and consumer engagement. The work spans the complete service design lifecycle, from initial research across 9 markets, through the design of 43 service blueprints, to implementation across 17 countries in Latin America, Europe, and Asia.
                </p>
              </div>

              {/* Timeline */}
              <div className="mb-16">
                <h2 className="text-xl font-westmount mb-8">How it unfolded</h2>
                <div className="space-y-8">
                  {timeline.map(({ years, title, description }) => (
                    <div key={years} className="flex gap-6">
                      <div className="flex-shrink-0 w-24 text-right">
                        <span className="text-xs font-merriweather text-gray-500">{years}</span>
                      </div>
                      <div className="border-l border-gray-400 pl-6 pb-2">
                        <h3 className="text-sm font-westmount mb-2">{title}</h3>
                        <p className="font-merriweather text-[15px] leading-[1.65] text-gray-700">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project cards */}
              <div className="mb-16">
                <h2 className="text-xl font-westmount mb-8">The work</h2>
                <div className="space-y-6">
                  {projects.map(({ slug, title, description }) => (
                    <div key={slug} className="border-l border-gray-400 pl-4">
                      <h3 className="text-sm font-westmount mb-2">{title}</h3>
                      <p className="font-merriweather text-[15px] leading-[1.65] text-gray-700 mb-3">{description}</p>
                      <Link
                        to={`/portfolio/${slug}`}
                        className="inline-flex items-center text-xs hover:opacity-60 transition-opacity"
                      >
                        View project <ArrowRight size={12} className="ml-1" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center border-t border-gray-400 pt-12">
                <p className="font-merriweather text-[15px] leading-[1.65] text-gray-700 mb-4">Want to see the full portfolio?</p>
                <Link to="/portfolio" className="inline-flex items-center font-westmount font-light text-[11px] tracking-[0.2em] uppercase hover:opacity-60 transition-opacity">
                  All 10 projects <ArrowRight size={12} className="ml-1" />
                </Link>
              </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BimboRelationship;
