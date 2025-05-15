import { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [contactHovered, setContactHovered] = useState(false);
  
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
    <header className={`w-full z-30 transition-all duration-300 ${scrolled ? 'bg-[hsl(var(--pastel-yellow))]' : 'bg-[hsl(var(--pastel-yellow))]'} ${visible ? 'top-0' : '-top-24'}`}>
      <div className="container-narrow py-6">
        <div className="flex justify-between items-center">
          {/* Logo - sin fondo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/69552967-182b-43cb-9a77-04a4d046299a.png" 
              alt="Logo" 
              className="h-6 sm:h-7 md:h-8 w-auto transition-all"
            />
          </Link>

          <div className="text-center flex-1">
            <Link to="/" className="text-xl uppercase tracking-widest inline-block">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-['westmount-outline'] transition-all">
                NO SILVER BULLETS
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-black">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation (hidden on mobile) */}
          <nav className="hidden md:flex">
            <button onClick={toggleMenu} className="text-black">
              <Menu size={20} />
            </button>
          </nav>
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
            
            {/* Contact Link with Enhanced Hover Effect */}
            <div className="relative group w-full">
              <Link 
                to="/contact" 
                className="text-2xl font-westmount hover:opacity-70 transition-opacity block md:hidden" 
                onClick={toggleMenu}
              >
                Contact
              </Link>
              
              {/* Mobile - Email Only */}
              <button 
                className="text-2xl font-westmount hover:opacity-70 transition-opacity hidden sm:block md:hidden" 
                onClick={openEmail}
              >
                Email Me
              </button>
              
              {/* Desktop with hover effect */}
              <div 
                className="text-2xl font-westmount transition-opacity hidden md:block cursor-pointer relative z-20"
                onMouseEnter={() => setContactHovered(true)}
                onMouseLeave={() => setContactHovered(false)}
              >
                Contact
              </div>
              
              {/* Full-width animated black overlay */}
              <div 
                className={`fixed left-0 right-0 w-full bg-black flex justify-between items-center py-3 px-5 transition-all origin-top duration-300 ${
                  contactHovered ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                } z-10`}
                style={{
                  position: 'absolute',
                  top: '0',
                  transformOrigin: 'top',
                  pointerEvents: contactHovered ? 'auto' : 'none'
                }}
              >
                <a 
                  href="mailto:christian.bussalleu@gmail.com" 
                  className="text-[hsl(var(--pastel-yellow))] font-westmount text-sm tracking-widest"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMenu();
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Mail size={16} />
                    EMAIL ME
                  </span>
                </a>
                <a 
                  href="tel:+34626557807" 
                  className="text-[hsl(var(--pastel-yellow))] font-westmount text-sm tracking-widest"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMenu();
                  }}
                >
                  <span className="flex items-center gap-2">
                    <Phone size={16} />
                    CALL ME
                  </span>
                </a>
              </div>
            </div>
            
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
