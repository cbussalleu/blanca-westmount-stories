
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <Hero 
          title="Contact Me"
          subtitle="GET IN TOUCH"
          description="Interested in discussing a project or have questions about my work? Feel free to reach out."
        />
        
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
