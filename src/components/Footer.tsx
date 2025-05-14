
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="inline-block">
              <img src="/lovable-uploads/91dafe4d-b474-4207-9638-48548245869b.png" alt="Christian Bussalleu Logo" className="h-12 w-auto" />
            </Link>
          </div>
          
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <Link to="/" className="text-black font-helvetica hover:text-gray-600 transition-colors">Home</Link>
            <Link to="/portfolio" className="text-black font-helvetica hover:text-gray-600 transition-colors">Portfolio</Link>
            <Link to="/methodology" className="text-black font-helvetica hover:text-gray-600 transition-colors">Methodology</Link>
            <Link to="/contact" className="text-black font-helvetica hover:text-gray-600 transition-colors">Contact</Link>
          </nav>
        </div>
        
        <div className="mt-8 border-t border-gray-100 pt-8">
          <p className="text-sm text-gray-600 font-helvetica text-center">
            © {new Date().getFullYear()} Christian Bussalleu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
