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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-merriweather mb-8 sm:mb-16 text-left sm:text-center">
              Hello, I'm Christian.<br className="hidden sm:block" />
              <span className="inline sm:hidden"> </span>Service Designer in Barcelona.<br className="hidden sm:block" />
              <span className="inline sm:hidden"> </span>I don't bring perfect answers —<br className="hidden sm:block" />
              <span className="inline sm:hidden"> </span>I help teams ask better questions<br className="hidden sm:block" />
              <span className="inline sm:hidden"> </span>and build adaptive solutions
            </h1>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-16">
            <div className="space-y-4 md:space-y-6">
              {/* Primer párrafo - SIEMPRE VISIBLE */}
              <p className="text-sm leading-relaxed font-merriweather">
                With over a decade in service design across global organizations, I've learned the importance of guiding teams through complexity. My approach emphasizes understanding patterns and creating adaptable solutions. This perspective works in environments where stakeholder needs shift and service ecosystems grow increasingly interconnected.
              </p>
            </div>
            <div className="space-y-4 md:space-y-6">
              {/* Segundo párrafo - SOLO DESKTOP */}
              <p className="text-sm leading-relaxed font-merriweather hidden md:block">
                My background in communication strategy helps translate research into narratives that drive stakeholder alignment. This becomes valuable when working across departments with competing priorities. While I enjoy the engineering aspects of blueprinting, I've learned that effective service design is equally about politics and maintaining curiosity about improvement.
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
