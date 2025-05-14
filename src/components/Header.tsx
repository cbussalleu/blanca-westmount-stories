
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`fixed w-full top-0 z-30 transition-all duration-300 ${scrolled ? 'bg-[hsl(var(--pastel-yellow))] shadow-sm' : 'bg-[hsl(var(--pastel-yellow))]'}`}>
      <div className="container-narrow py-6 border-b border-gray-200">
        <div className="flex justify-between items-center">
          {/* Logo - sin sombra */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/e898d468-a0f6-4fab-9b9d-deb5d934e1d9.png" 
              alt="Logo" 
              className="h-8 w-auto logo-transparent" 
            />
          </Link>

          <div className="text-center flex-1">
            <Link to="/" className="text-xl uppercase tracking-widest font-westmount inline-block">
              <img 
                src="/lovable-uploads/9f9fc7a2-b36d-4e65-b061-0337b3d21ad6.png" 
                alt="Christian Bussalleu" 
                className="h-8 w-auto mx-auto logo-transparent" 
              />
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
        <div className="fixed inset-0 bg-white z-40 animate-fade-in py-24">
          <nav className="container-narrow flex flex-col space-y-8 text-center items-center">
            <Link to="/" className="text-2xl font-westmount hover:opacity-70 transition-opacity" onClick={toggleMenu}>Home</Link>
            <Link to="/portfolio" className="text-2xl font-westmount hover:opacity-70 transition-opacity" onClick={toggleMenu}>Portfolio</Link>
            <Link to="/bimbo-relationship" className="text-2xl font-westmount hover:opacity-70 transition-opacity" onClick={toggleMenu}>Grupo Bimbo</Link>
            <Link to="/methodology" className="text-2xl font-westmount hover:opacity-70 transition-opacity" onClick={toggleMenu}>Methodology</Link>
            <Link to="/contact" className="text-2xl font-westmount hover:opacity-70 transition-opacity" onClick={toggleMenu}>Contact</Link>
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
