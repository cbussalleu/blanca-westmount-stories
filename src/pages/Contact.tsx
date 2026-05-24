import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';
import { useScrollToTop } from '../hooks/use-scroll-to-top';

const Contact = () => {
  useScrollToTop();
  return (
    <div className="min-h-screen bg-[hsl(var(--pastel-yellow))]">
      <Header />

      {/* Breadcrumb */}
      <div style={{ width:'100%', maxWidth:1120, marginInline:'auto', paddingInline:'clamp(20px,4vw,48px)', paddingBlock:'var(--s-5)', paddingTop:'calc(var(--s-5) + 80px)', borderBottom:'1px solid var(--rule)', display:'flex', justifyContent:'space-between', fontFamily:'var(--ff-display)', fontWeight:300, fontSize:11, letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--ink-3)' }}>
        <span>Portfolio · Contact</span>
        <Link to="/" style={{ color:'var(--ink)', borderBottom:'1px solid var(--ink)', paddingBottom:2 }}>← Home</Link>
      </div>

      {/* Hero */}
      <section style={{ borderBottom:'1px solid var(--rule)', paddingBlock:'var(--s-9) var(--s-8)' }}>
        <div style={{ width:'100%', maxWidth:1120, marginInline:'auto', paddingInline:'clamp(20px,4vw,48px)' }}>
          <div style={{ fontFamily:'var(--ff-display)', fontWeight:300, fontSize:12, letterSpacing:'0.24em', textTransform:'uppercase', color:'var(--ink-2)', marginBottom:'var(--s-6)' }}>
            Christian Bussalleu · Barcelona
          </div>
          <h1 style={{ fontFamily:'var(--ff-display)', fontWeight:200, fontSize:'clamp(48px,7vw,96px)', lineHeight:0.92, letterSpacing:'-0.02em', textTransform:'uppercase', margin:'0 0 var(--s-5)', maxWidth:'14ch' }}>
            Get in Touch.
          </h1>
          <p style={{ fontFamily:'var(--ff-editorial)', fontSize:'var(--t-lede)', lineHeight:1.55, color:'var(--ink-2)', maxWidth:'52ch', margin:0 }}>
            Available for Service Design engagements, consulting, and senior CX roles. Based in Barcelona, working globally.
          </p>
        </div>
      </section>

      {/* Two-column: Form + Info */}
      <div className="contact-grid" style={{ width:'100%', maxWidth:1120, marginInline:'auto', paddingInline:'clamp(20px,4vw,48px)', paddingBlock:'var(--s-9) var(--s-8)', display:'grid', gridTemplateColumns:'minmax(0,1.3fr) minmax(0,1fr)', gap:'var(--s-9)', alignItems:'start', borderBottom:'1px solid var(--rule)' }}>

        {/* Left: Form */}
        <div>
          <div style={{ fontFamily:'var(--ff-display)', fontWeight:300, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-3)', marginBottom:'var(--s-6)', paddingBottom:'var(--s-3)', borderBottom:'1px solid var(--rule)' }}>
            Send a message
          </div>
          <ContactForm />
        </div>

        {/* Right: Info */}
        <div style={{ position:'sticky', top:120, display:'flex', flexDirection:'column', gap:'var(--s-5)' }}>

          {/* Direct contact */}
          <div style={{ border:'1px solid var(--rule)', padding:'var(--s-5)' }}>
            <div style={{ fontFamily:'var(--ff-display)', fontWeight:300, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-3)', marginBottom:'var(--s-4)', paddingBottom:'var(--s-3)', borderBottom:'1px solid var(--rule)' }}>
              Direct contact
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:'var(--s-4)' }}>
              <div>
                <div style={{ fontFamily:'var(--ff-display)', fontWeight:300, fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-4)', marginBottom:4 }}>Email</div>
                <a href="mailto:christian.bussalleu@gmail.com" style={{ fontFamily:'var(--ff-editorial)', fontSize:14, color:'var(--ink)', borderBottom:'1px solid var(--rule)', paddingBottom:2 }}>
                  christian.bussalleu@gmail.com
                </a>
              </div>
              <div>
                <div style={{ fontFamily:'var(--ff-display)', fontWeight:300, fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-4)', marginBottom:4 }}>LinkedIn</div>
                <a href="https://www.linkedin.com/in/christianbussalleu/" target="_blank" rel="noopener noreferrer" style={{ fontFamily:'var(--ff-editorial)', fontSize:14, color:'var(--ink)', borderBottom:'1px solid var(--rule)', paddingBottom:2 }}>
                  christianbussalleu
                </a>
              </div>
              <div>
                <div style={{ fontFamily:'var(--ff-display)', fontWeight:300, fontSize:9, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-4)', marginBottom:4 }}>Location</div>
                <span style={{ fontFamily:'var(--ff-editorial)', fontSize:14, color:'var(--ink-2)' }}>Barcelona · Available globally</span>
              </div>
            </div>
          </div>

          {/* CV download */}
          <div style={{ border:'1px solid var(--rule)', padding:'var(--s-5)' }}>
            <div style={{ fontFamily:'var(--ff-display)', fontWeight:300, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-3)', marginBottom:'var(--s-4)', paddingBottom:'var(--s-3)', borderBottom:'1px solid var(--rule)' }}>
              CV
            </div>
            <p style={{ fontFamily:'var(--ff-editorial)', fontSize:13, lineHeight:1.55, color:'var(--ink-2)', margin:'0 0 var(--s-4)' }}>
              Full work history, project list, and education: available as PDF.
            </p>
            <a
              href="/CV_CX_Christian_Bussalleu_2026_ENG.pdf"
              download
              style={{ fontFamily:'var(--ff-display)', fontWeight:300, fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'var(--ink)', border:'1px solid var(--rule)', padding:'7px 14px', display:'inline-block', transition:'background 200ms, color 200ms' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'hsl(var(--pastel-yellow))'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; }}
            >
              Download CV
            </a>
          </div>

          {/* Availability block */}
          <div style={{ padding:'var(--s-5)', background:'var(--ink)', color:'hsl(var(--pastel-yellow))' }}>
            <div style={{ fontFamily:'var(--ff-display)', fontWeight:300, fontSize:10, letterSpacing:'0.22em', textTransform:'uppercase', marginBottom:'var(--s-3)', opacity:0.6 }}>
              Availability
            </div>
            <p style={{ fontFamily:'var(--ff-editorial)', fontSize:13, lineHeight:1.55, margin:'0 0 var(--s-4)', opacity:0.8 }}>
              Currently open to senior Service Design, CX Strategy, and consulting roles. Preference for complex, multi-market engagements.
            </p>
            <Link to="/portfolio" style={{ fontFamily:'var(--ff-display)', fontWeight:300, fontSize:10, letterSpacing:'0.20em', textTransform:'uppercase', color:'hsl(var(--pastel-yellow))', borderBottom:'1px solid hsl(var(--pastel-yellow) / 0.4)', paddingBottom:2 }}>
              See the full portfolio →
            </Link>
          </div>

        </div>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
