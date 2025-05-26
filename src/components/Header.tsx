
import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';
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
      
      // Show/hide header based on scroll direction
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setScrolled(isScrolled);
      setPrevScrollPos(currentScrollPos);
    };
    
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const openEmail = (e) => {
    e.preventDefault();
    window.location.href = "mailto:christian.bussalleu@gmail.com";
    toggleMenu();
  };

  const initiateCall = (e) => {
    e.preventDefault();
    window.location.href = "tel:+34626557807";
    toggleMenu();
  };

  return (
    <header className={`fixed w-full z-30 transition-all duration-300 ${scrolled ? 'bg-[hsl(var(--pastel-yellow))]' : 'bg-[hsl(var(--pastel-yellow))]'} ${visible ? 'top-0' : '-top-24'}`}>
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

          {/* Empty center space */}
          <div className="flex-1"></div>

          {/* Mobile Menu Button */}
          <div className="flex items-center justify-end h-8 md:h-10">
            <button onClick={toggleMenu} className="md:hidden text-black flex items-center justify-center">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {/* Desktop Navigation (hidden on mobile) */}
            <nav className="hidden md:flex items-center">
              <button onClick={toggleMenu} className="text-black flex items-center justify-center">
                <Menu size={20} />
              </button>
            </nav>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[hsl(var(--pastel-yellow))] z-40 animate-fade-in py-24">
          <nav className="container-narrow flex flex-col space-y-8 text-center items-center">
            <Link to="/" className="text-2xl font-westmount hover:opacity-70 transition-opacity" onClick={toggleMenu}>Home</Link>
            <Link to="/portfolio" className="text-2xl font-westmount hover:opacity-70 transition-opacity" onClick={toggleMenu}>Portfolio</Link>
            <Link to="/bimbo-relationship" className="text-2xl font-westmount hover:opacity-70 transition-opacity" onClick={toggleMenu}>Grupo Bimbo</Link>
            <Link to="/methodology" className="text-2xl font-westmount hover:opacity-70 transition-opacity" onClick={toggleMenu}>Methodology</Link>
            
            {/* Email Me link replacing Contact */}
            <a 
              href="mailto:christian.bussalleu@gmail.com" 
              className="text-2xl font-westmount hover:opacity-70 transition-opacity"
              onClick={openEmail}
            >
              Email Me
            </a>
            
            <button 
              className="absolute top-6 right-6 text-black" 
              onClick={toggleMenu}
            >
              <X size={24} />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
