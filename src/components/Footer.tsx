
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex justify-center md:justify-start">
            <img src="/lovable-uploads/69552967-182b-43cb-9a77-04a4d046299a.png" alt="Logo" className="h-8 w-auto" />
          </div>
          
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-wide">Contact</p>
            <div className="flex flex-col space-y-2 items-center">
              <a 
                href="mailto:christian.bussalleu@gmail.com" 
                className="text-sm hover:opacity-70 transition-opacity inline-flex items-center"
              >
                <Mail size={16} className="mr-2" />
                christian.bussalleu@gmail.com
              </a>
            </div>
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
