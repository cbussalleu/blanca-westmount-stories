
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

  return (
    <header className={`fixed w-full z-30 transition-all duration-300 bg-[hsl(var(--pastel-yellow))] ${
      visible ? 'top-0' : '-top-24'
    } ${scrolled ? 'border-b border-[var(--rule)]' : ''}`}>
      <div className="container-narrow py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center h-8 md:h-10">
            <Link to="/" className="flex items-center">
              <img
                src="/lovable-uploads/69552967-182b-43cb-9a77-04a4d046299a.png"
                alt="Logo"
                className="h-6 sm:h-7 md:h-8 w-auto transition-all"
              />
              <AnimatedLogoIcon className="h-6 sm:h-7 md:h-8 ml-2" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/portfolio"         className="eyebrow text-link">Work</Link>
            <Link to="/bimbo-relationship" className="eyebrow text-link">Bimbo</Link>
            <Link to="/methodology"        className="eyebrow text-link">Methodology</Link>
            <Link to="/ai"                 className="eyebrow text-link">AI</Link>
            <Link to="/contact"            className="eyebrow text-link">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center justify-end h-8 md:h-10">
            <button onClick={toggleMenu} className="text-black flex items-center justify-center">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[hsl(var(--pastel-yellow))] z-40 animate-fade-in py-24">
          <nav className="container-narrow flex flex-col space-y-8 text-center items-center">
            <Link to="/"                  className="text-2xl font-westmount text-link" onClick={toggleMenu}>Home</Link>
            <Link to="/portfolio"         className="text-2xl font-westmount text-link" onClick={toggleMenu}>Work</Link>
            <Link to="/bimbo-relationship" className="text-2xl font-westmount text-link" onClick={toggleMenu}>Grupo Bimbo</Link>
            <Link to="/methodology"        className="text-2xl font-westmount text-link" onClick={toggleMenu}>Methodology</Link>
            <Link to="/ai"                 className="text-2xl font-westmount text-link" onClick={toggleMenu}>AI</Link>
            <Link to="/contact"            className="text-2xl font-westmount text-link" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
