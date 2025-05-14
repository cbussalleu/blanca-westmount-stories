
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const BimboFeature = () => {
  return (
    <section className="py-12">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 order-2 md:order-1">
            <h2 className="text-2xl mb-2">Grupo Bimbo and I</h2>
            <p className="text-sm">
              For the past 7 years, I have led Grupo Bimbo's largest customer experience 
              transformation initiative, establishing a new operational model for 
              customer engagement across global markets.
            </p>
            <div className="mt-4">
              <Link 
                to="/bimbo-relationship" 
                className="inline-flex items-center text-sm border-b border-black pb-1 hover:opacity-70 transition-opacity"
              >
                Learn More <ArrowRight size={14} className="ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="image-with-overlay order-1 md:order-2">
            <AspectRatio ratio={4/3} className="w-full">
              <img 
                src="/lovable-uploads/62c5b772-9c99-41b3-b48e-83926e910229.png" 
                alt="Grupo Bimbo Connection Center" 
                className="object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BimboFeature;
