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

      {/* Breadcrumb */}
      <div style={{ width:'100%', maxWidth:1120, marginInline:'auto', paddingInline:'clamp(20px,4vw,48px)', paddingBlock:'var(--s-5)', paddingTop:'calc(var(--s-5) + 80px)', borderBottom:'1px solid var(--rule)', display:'flex', justifyContent:'space-between', fontFamily:'var(--ff-display)', fontWeight:300, fontSize:11, letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--ink-3)' }}>
        <span>Portfolio · Long-term engagement</span>
        <Link to="/" style={{ color:'var(--ink)', borderBottom:'1px solid var(--ink)', paddingBottom:2 }}>← Home</Link>
      </div>

      {/* Hero */}
      <section style={{ borderBottom:'1px solid var(--rule)', paddingBlock:'var(--s-9) var(--s-8)' }}>
        <div style={{ width:'100%', maxWidth:1120, marginInline:'auto', paddingInline:'clamp(20px,4vw,48px)' }}>
          <div style={{ fontFamily:'var(--ff-display)', fontWeight:300, fontSize:12, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--ink-2)', marginBottom:'var(--s-6)' }}>
            Grupo Bimbo · FMCG · 2017–present
          </div>
          <div className="pd-hero-row">
            <div className="pd-num">
              <span className="big">7</span>
              <div className="small">
                <span className="slash">/</span>
                <span className="total" style={{ fontSize:22 }}>yrs</span>
                <span className="num-label">engagement</span>
              </div>
            </div>
            <div className="pd-title-block">
              <h1>Grupo Bimbo &amp; I.</h1>
              <p className="pd-lede" style={{ maxWidth:'54ch' }}>
                The world's largest bread manufacturer. Four interconnected projects over seven years — from initial research through global CRM implementation, B2B platform design, and continuous improvement infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meta strip */}
      <dl className="pd-meta" style={{ width:'100%', maxWidth:1120, marginInline:'auto', paddingInline:'clamp(20px,4vw,48px)' }}>
        <div><dt>Client</dt><dd>Grupo Bimbo</dd></div>
        <div><dt>Period</dt><dd>2017 — present</dd></div>
        <div><dt>Countries</dt><dd>17 · 3 continents</dd></div>
        <div><dt>Projects</dt><dd>4 interconnected</dd></div>
        <div><dt>Employees</dt><dd>134,000+</dd></div>
      </dl>

      {/* Impact tiles */}
      <section style={{ borderBottom:'1px solid var(--rule)', paddingBlock:'var(--s-8)' }}>
        <div style={{ width:'100%', maxWidth:1120, marginInline:'auto', paddingInline:'clamp(20px,4vw,48px)' }}>
          <div className="impact-tiles">
            {[
              { stat:'7', unit:'', label:'Years', body:'Continuous collaboration from 2017 to present across four interconnected projects.' },
              { stat:'17', unit:'', label:'Countries', body:'Standardized model deployed across Latin America, Europe, and Asia.' },
              { stat:'43', unit:'', label:'Blueprints', body:'Service blueprints designed, versioned, and integrated into the global playbook.' },
              { stat:'134', unit:'k+', label:'Employees', body:'Workforce operating within the Connection Center model across all markets.' },
              { stat:'60', unit:'%', label:'Faster resolution', body:'Reduction in complaint handling time measured against the 2018 baseline.' },
            ].map(({ stat, unit, label, body }) => (
              <div className="impact-tile" key={label}>
                <div className="stat"><span className="big">{stat}</span>{unit && <span className="unit">{unit}</span>}</div>
                <div className="tile-label">{label}</div>
                <div className="tile-body">{body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two-column: Timeline + Projects */}
      <div className="bimbo-grid" style={{ width:'100%', maxWidth:1120, marginInline:'auto', paddingInline:'clamp(20px,4vw,48px)', paddingBlock:'var(--s-9) var(--s-8)', display:'grid', gridTemplateColumns:'minmax(0,1.2fr) minmax(0,1fr)', gap:'var(--s-9)', borderBottom:'1px solid var(--rule)', alignItems:'start' }}>

        {/* Left — Timeline */}
        <div>
          <div style={{ fontFamily:'var(--ff-display)', fontWeight:300, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-3)', marginBottom:'var(--s-6)', paddingBottom:'var(--s-3)', borderBottom:'1px solid var(--rule)' }}>
            How it unfolded
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
            {timeline.map(({ years, title, description }) => (
              <div key={years} style={{ display:'grid', gridTemplateColumns:'80px 1fr', gap:'var(--s-5)', paddingBlock:'var(--s-6)', borderBottom:'1px solid var(--rule-2)' }}>
                <div style={{ fontFamily:'var(--ff-display)', fontWeight:200, fontSize:32, lineHeight:1, letterSpacing:'-0.03em', color:'var(--ink-4)', paddingTop:4 }}>{years.split('–')[0]}</div>
                <div>
                  <div style={{ fontFamily:'var(--ff-display)', fontWeight:300, fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--ink-3)', marginBottom:'var(--s-2)' }}>{years}</div>
                  <h3 style={{ fontFamily:'var(--ff-editorial)', fontWeight:400, fontSize:17, lineHeight:1.3, letterSpacing:'-0.01em', margin:'0 0 var(--s-3)', maxWidth:'28ch' }}>{title}</h3>
                  <p style={{ fontFamily:'var(--ff-editorial)', fontSize:13.5, lineHeight:1.65, color:'var(--ink-2)', margin:0, maxWidth:'52ch' }}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Project cards */}
        <div style={{ position:'sticky', top:120 }}>
          <div style={{ fontFamily:'var(--ff-display)', fontWeight:300, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-3)', marginBottom:'var(--s-6)', paddingBottom:'var(--s-3)', borderBottom:'1px solid var(--rule)' }}>
            The work
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
            {projects.map(({ slug, title, description }, i) => (
              <Link key={slug} to={`/portfolio/${slug}`} style={{ display:'block', paddingBlock:'var(--s-5)', borderBottom:'1px solid var(--rule-2)', textDecoration:'none', transition:'background 200ms' }}
                onMouseEnter={e => e.currentTarget.style.background = 'hsl(48 60% 92%)'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ fontFamily:'var(--ff-display)', fontWeight:200, fontSize:32, lineHeight:1, letterSpacing:'-0.03em', color:'var(--ink-4)', marginBottom:'var(--s-3)' }}>
                  {String(i+1).padStart(2,'0')}
                </div>
                <h3 style={{ fontFamily:'var(--ff-editorial)', fontWeight:400, fontSize:17, lineHeight:1.3, letterSpacing:'-0.01em', margin:'0 0 var(--s-2)', maxWidth:'28ch' }}>{title}</h3>
                <p style={{ fontFamily:'var(--ff-editorial)', fontSize:13, lineHeight:1.6, color:'var(--ink-2)', margin:'0 0 var(--s-3)', maxWidth:'44ch' }}>{description}</p>
                <div style={{ fontFamily:'var(--ff-display)', fontWeight:300, fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--ink-3)' }}>View case →</div>
              </Link>
            ))}
          </div>
          <div style={{ paddingTop:'var(--s-6)', textAlign:'right' }}>
            <Link to="/portfolio" style={{ fontFamily:'var(--ff-display)', fontWeight:300, fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--ink)', borderBottom:'1px solid var(--ink)', paddingBottom:2 }}>
              All 13 cases →
            </Link>
          </div>
        </div>
      </div>

      {/* Closing */}
      <div className="pd-closing" style={{ width:'100%', maxWidth:1120, marginInline:'auto', paddingInline:'clamp(20px,4vw,48px)' }}>
        <span className="closing-label">End of Grupo Bimbo engagement</span>
        <div className="closing-meta">Grupo Bimbo · 2017–present · 17 countries<br/><Link to="/portfolio" style={{ color:'var(--ink)', borderBottom:'1px solid var(--ink)', paddingBottom:2 }}>→ All 13 cases</Link></div>
      </div>

      <Footer />

      <style>{`@media (max-width: 768px) { .bimbo-grid { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
};

export default BimboRelationship;
