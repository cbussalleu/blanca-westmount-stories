
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex items-center justify-center min-h-screen pt-24 pb-20">
        <div className="text-center">
          <h1 className="font-westmount text-6xl mb-4">404</h1>
          <p className="text-xl text-gray-600 font-helvetica mb-8">Página no encontrada</p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 border border-black rounded-md font-helvetica hover:bg-black hover:text-white transition-colors"
          >
            Volver a Inicio
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
