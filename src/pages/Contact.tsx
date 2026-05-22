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
      <main>

        <div className="pd-breadcrumb hero-wrap">
          <span>Portfolio · Contact</span>
          <span>Get in touch</span>
          <Link to="/">← Home</Link>
        </div>

        <section className="pd-hero">
          <div className="hero-wrap">
            <div className="pd-eyebrow">
              <span>Christian Bussalleu</span>
              <span className="sep">·</span>
              <span>Barcelona</span>
            </div>
            <div style={{ paddingTop: 'var(--s-6)' }}>
              <h1 style={{
                fontFamily: 'var(--ff-display)',
                fontWeight: 200,
                fontSize: 'clamp(48px, 7vw, 96px)',
                lineHeight: 0.92,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                margin: '0 0 var(--s-5)'
              }}>Get in<br/><em style={{ fontFamily: "'westmount-outline', serif", fontStyle: 'normal', fontWeight: 'normal', letterSpacing: '0.04em' }}>Touch.</em></h1>
              <p style={{
                fontFamily: 'var(--ff-editorial)',
                fontSize: 'var(--t-lede)',
                lineHeight: 1.55,
                color: 'var(--ink-2)',
                maxWidth: '54ch',
                margin: 0
              }}>
                Available for Service Design engagements, consulting, and senior CX roles.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-narrow">
            <ContactForm />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Contact;
