import { forwardRef } from 'react';

interface AboutMeSectionProps {
  className?: string;
}

const AboutMeSection = forwardRef<HTMLElement, AboutMeSectionProps>(
  ({ className }, ref) => {
    return (
      <section className={`sec ${className || ''}`} ref={ref}>
        <div className="container-narrow">
          <h1
            className="editorial-l text-center mx-auto gap-heading"
            style={{ maxWidth: '22ch' }}
          >
            Hello, I'm Christian. Service Designer in Barcelona.
            I don't bring perfect answers — I help teams ask better
            questions and build adaptive solutions
          </h1>
          <div className="grid md:grid-cols-2 gap-4 md:gap-12">
            <div>
              <p className="prose">
                Service Designer with 15+ years of experience designing and implementing complex service systems at a global scale. I work at the intersection of human-centered research, organizational change, and operational design, helping companies transform how they deliver value to customers and users.
              </p>
            </div>
            <div>
              <p className="prose">
                My work spans sectors including FMCG, financial services, technology, and public sector, with deep experience in multi-country deployments across Latin America, Europe, and Asia.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

AboutMeSection.displayName = 'AboutMeSection';

export default AboutMeSection;
