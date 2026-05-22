import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
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

const timelineLinks: Record<string, string> = {
  "2017": "/portfolio/connection-center",
  "2018": "/portfolio/crm-service-design",
  "2020": "/portfolio/t-conecta",
  "2022": "/portfolio/continuous-improvement",
};

const BimboRelationship = () => {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[hsl(var(--pastel-yellow))]">
      <Header />

      {/* Breadcrumb */}
      <div style={{ width:'100%', maxWidth:1120, marginInline:'auto', paddingInline:'clamp(20px,4vw,48px)', paddingBlock:'var(--s-5)', paddingTop:'calc(var(--s-5) + 80px)', borderBottom:'1px solid var(--rule)', display:'flex', justifyContent:'space-between', fontFamily:'var(--ff-display)', fontWeight:300, fontSize:11, letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--ink-3)' }}>
        <span>Portfolio · Long-term engagement</span>
        <Link to="/" style={{ color:'var(--ink)', borderBottom:'1px solid var(--ink)', paddingBottom:2 }}>← Home</Link>
      </div>

      {/* Hero */}
      <section style={{ borderBottom: '1px solid var(--rule)', paddingBlock: 'var(--s-9) var(--s-8)' }}>
        <div className="bimbo-hero-grid" style={{ width: '100%', maxWidth: 1120, marginInline: 'auto', paddingInline: 'clamp(20px,4vw,48px)', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', gap: 'var(--s-9)', alignItems: 'end' }}>
          <div>
            <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--ink-2)', marginBottom: 'var(--s-6)' }}>
              Grupo Bimbo · FMCG · 2017–present
            </div>
            <h1 style={{ fontFamily: 'var(--ff-display)', fontWeight: 200, fontSize: 'clamp(48px,7vw,96px)', lineHeight: 0.92, letterSpacing: '-0.02em', textTransform: 'uppercase', margin: '0 0 var(--s-5)', maxWidth: '14ch' }}>
              Grupo Bimbo &amp; I.
            </h1>
            <p style={{ fontFamily: 'var(--ff-editorial)', fontSize: 'var(--t-lede)', lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: '52ch', margin: 0 }}>
              The world's largest bread manufacturer. Four interconnected projects over seven years, from initial research through global CRM implementation, B2B platform design, and continuous improvement infrastructure.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--rule)', border: '1px solid var(--rule)', alignSelf: 'end' }}>
            {[
              { num: '7', label: 'Years' },
              { num: '17', label: 'Countries' },
              { num: '43', label: 'Blueprints' },
              { num: '134k+', label: 'Employees' },
            ].map(({ num, label }) => (
              <div key={label} style={{ background: 'hsl(var(--pastel-yellow))', padding: 'var(--s-5)' }}>
                <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 200, fontSize: 48, lineHeight: 0.9, letterSpacing: '-0.04em', color: 'var(--ink)' }}>{num}</div>
                <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 300, fontSize: 10, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'var(--ink-3)', marginTop: 'var(--s-2)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline — full width */}
      <div style={{ width:'100%', maxWidth:1120, marginInline:'auto', paddingInline:'clamp(20px,4vw,48px)', paddingBlock:'var(--s-9) var(--s-8)', borderBottom:'1px solid var(--rule)' }}>
        <div style={{ fontFamily:'var(--ff-display)', fontWeight:300, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-3)', marginBottom:'var(--s-6)', paddingBottom:'var(--s-3)', borderBottom:'1px solid var(--rule)' }}>
          How it unfolded
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
          {timeline.map(({ years, title, description }) => (
            <div key={years} style={{ display:'grid', gridTemplateColumns:'80px 1fr', gap:'var(--s-5)', paddingBlock:'var(--s-6)', borderBottom:'1px solid var(--rule-2)' }}>
              <div style={{ fontFamily:'var(--ff-display)', fontWeight:200, fontSize:32, lineHeight:1, letterSpacing:'-0.03em', color:'var(--ink-4)', paddingTop:4 }}>{years.split('–')[0]}</div>
              <div>
                <div style={{ fontFamily:'var(--ff-display)', fontWeight:300, fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--ink-3)', marginBottom:'var(--s-2)' }}>{years}</div>
                <h3 style={{ fontFamily:'var(--ff-editorial)', fontWeight:400, fontSize:17, lineHeight:1.3, letterSpacing:'-0.01em', margin:'0 0 var(--s-3)' }}>{title}</h3>
                <p style={{ fontFamily:'var(--ff-editorial)', fontSize:13.5, lineHeight:1.65, color:'var(--ink-2)', margin:0 }}>{description}</p>
                {timelineLinks[years.split('–')[0]] && (
                  <Link
                    to={timelineLinks[years.split('–')[0]]}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      marginTop: 'var(--s-4)',
                      fontFamily: 'var(--ff-display)',
                      fontWeight: 300,
                      fontSize: 10,
                      letterSpacing: '0.20em',
                      textTransform: 'uppercase',
                      color: 'var(--ink)',
                      borderBottom: '1px solid var(--ink)',
                      paddingBottom: 2,
                      transition: 'opacity 200ms',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.6'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    View project →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Closing */}

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .bimbo-hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default BimboRelationship;
