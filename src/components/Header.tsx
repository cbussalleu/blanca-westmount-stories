
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedLogoIcon from './AnimatedLogoIcon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolled = currentScrollPos > 20;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setScrolled(isScrolled);
      setPrevScrollPos(currentScrollPos);
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const navLinkStyle: React.CSSProperties = {
    fontFamily: 'var(--ff-display)',
    fontWeight: 300,
    fontSize: 11,
    letterSpacing: '0.20em',
    textTransform: 'uppercase',
    color: 'var(--ink-3)',
    transition: 'color 200ms',
  };

  return (
    <header className={`fixed w-full z-30 transition-all duration-300 bg-[hsl(var(--pastel-yellow))] ${
      visible ? 'top-0' : '-top-24'
    } ${scrolled ? 'border-b border-[var(--rule)]' : ''}`}>
      <div style={{
        width: '100%',
        maxWidth: '1120px',
        marginInline: 'auto',
        paddingInline: 'clamp(20px, 4vw, 48px)',
        paddingBlock: 'var(--s-4)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img
            src="/lovable-uploads/69552967-182b-43cb-9a77-04a4d046299a.png"
            alt="Christian Bussalleu"
            style={{ height: 28, width: 'auto' }}
          />
          <AnimatedLogoIcon style={{ height: 28 }} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center" style={{ gap: 'var(--s-6)' }}>
          <Link to="/portfolio" style={navLinkStyle}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-3)'}>
            Work
          </Link>
          <Link to="/bimbo-relationship" style={navLinkStyle}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-3)'}>
            Bimbo
          </Link>
          <Link to="/methodology" style={navLinkStyle}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--ink)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--ink-3)'}>
            Methodology
          </Link>
          <Link to="/contact" style={{
            fontFamily: 'var(--ff-display)',
            fontWeight: 300,
            fontSize: 11,
            letterSpacing: '0.20em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            border: '1px solid var(--rule)',
            padding: '6px 14px',
            transition: 'background 200ms, color 200ms',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--ink)'; e.currentTarget.style.color = 'hsl(var(--pastel-yellow))'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink)'; }}>
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          className="flex md:hidden"
          style={{ color: 'var(--ink)', background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {isMenuOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'hsl(var(--pastel-yellow))',
          zIndex: 40,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--s-7)',
        }}>
          <button
            onClick={toggleMenu}
            style={{ position: 'absolute', top: 24, right: 24, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ink)' }}
          >
            <X size={24} />
          </button>
          {[
            { to: '/', label: 'Home' },
            { to: '/portfolio', label: 'Work' },
            { to: '/bimbo-relationship', label: 'Grupo Bimbo' },
            { to: '/methodology', label: 'Methodology' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={toggleMenu}
              style={{
                fontFamily: 'var(--ff-display)',
                fontWeight: 200,
                fontSize: 'clamp(32px, 6vw, 56px)',
                letterSpacing: '-0.01em',
                textTransform: 'uppercase',
                color: 'var(--ink)',
                transition: 'opacity 200ms',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
