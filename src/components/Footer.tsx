
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex justify-center md:justify-start">
            <img src="/lovable-uploads/69552967-182b-43cb-9a77-04a4d046299a.png" alt="Logo" className="h-8 w-auto" />
          </div>
          
          <div className="text-center">
            <div className="flex flex-col space-y-2 items-center">
              <a 
                href="mailto:christian.bussalleu@gmail.com" 
                className="text-sm hover:opacity-70 transition-opacity"
              >
                christian.bussalleu@gmail.com
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm">&copy; {new Date().getFullYear()} Christian Bussalleu</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
