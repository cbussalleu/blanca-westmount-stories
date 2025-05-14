
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
    <header className={`fixed w-full top-0 z-30 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-2' : 'bg-white/90 py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/lovable-uploads/e898d468-a0f6-4fab-9b9d-deb5d934e1d9.png" alt="Logo" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-black font-helvetica font-medium hover:text-gray-600 transition-colors">Home</Link>
            <Link to="/portfolio" className="text-black font-helvetica font-medium hover:text-gray-600 transition-colors">Portfolio</Link>
            <Link to="/bimbo-relationship" className="text-black font-helvetica font-medium hover:text-gray-600 transition-colors">Grupo Bimbo</Link>
            <Link to="/methodology" className="text-black font-helvetica font-medium hover:text-gray-600 transition-colors">Methodology</Link>
            <Link to="/contact" className="text-black font-helvetica font-medium hover:text-gray-600 transition-colors">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden text-black">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="text-black font-helvetica font-medium hover:text-gray-600 transition-colors" onClick={toggleMenu}>Home</Link>
            <Link to="/portfolio" className="text-black font-helvetica font-medium hover:text-gray-600 transition-colors" onClick={toggleMenu}>Portfolio</Link>
            <Link to="/bimbo-relationship" className="text-black font-helvetica font-medium hover:text-gray-600 transition-colors" onClick={toggleMenu}>Grupo Bimbo</Link>
            <Link to="/methodology" className="text-black font-helvetica font-medium hover:text-gray-600 transition-colors" onClick={toggleMenu}>Methodology</Link>
            <Link to="/contact" className="text-black font-helvetica font-medium hover:text-gray-600 transition-colors" onClick={toggleMenu}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
