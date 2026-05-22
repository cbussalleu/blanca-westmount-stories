import { forwardRef } from 'react';

interface AboutMeSectionProps {
  className?: string;
}

const AboutMeSection = forwardRef<HTMLElement, AboutMeSectionProps>(
  ({ className }, ref) => {
    return (
      <section className={`py-8 sm:py-16 ${className || ''}`} ref={ref}>
        <div className="container-narrow">
          <div className="mb-8 sm:mb-12">
            <h1 className="font-merriweather font-normal text-[clamp(22px,3.6vw,48px)] leading-[1.25] tracking-[-0.01em] max-w-[22ch] md:max-w-[36ch] mb-8 sm:mb-16" style={{textWrap:'balance'}}>
              Hello, I'm Christian. Service Designer in Barcelona. I don't bring perfect answers — I help teams ask better questions and build adaptive solutions.
            </h1>
          </div>
          <div className="grid md:grid-cols-2 gap-4 md:gap-12">
            <div className="space-y-4 md:space-y-6">
              <p className="font-merriweather text-[15px] leading-[1.65] text-gray-700">
                Service Designer with 15+ years of experience designing and implementing complex service systems at a global scale. I work at the intersection of human-centered research, organizational change, and operational design, helping companies transform how they deliver value to customers and users.
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              <p className="font-merriweather text-[15px] leading-[1.65] text-gray-700">
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
