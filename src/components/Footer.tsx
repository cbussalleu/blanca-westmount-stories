
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex justify-center md:justify-start">
            <img src="/lovable-uploads/69552967-182b-43cb-9a77-04a4d046299a.png" alt="Logo" className="h-8 w-auto" />
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-wide">Navigation</p>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm hover:opacity-70 transition-opacity">Home</Link>
              <Link to="/portfolio" className="text-sm hover:opacity-70 transition-opacity">Portfolio</Link>
              <Link to="/methodology" className="text-sm hover:opacity-70 transition-opacity">Methodology</Link>
              <Link to="/contact" className="text-sm hover:opacity-70 transition-opacity">Contact</Link>
            </nav>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm">&copy; {new Date().getFullYear()} Christian Bussalleu</p>
            <p className="text-xs mt-1">Service Design Portfolio</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
