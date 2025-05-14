
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ImageHeroProps {
  imageSrc: string;
  title: string;
  description: string;
  aspectRatio?: number;
}

const ImageHero = ({ imageSrc, title, description, aspectRatio = 16/9 }: ImageHeroProps) => {
  return (
    <section>
      <div className="grid md:grid-cols-2 gap-8 py-8">
        <div className="image-with-overlay rounded-lg overflow-hidden shadow-md">
          <AspectRatio ratio={aspectRatio} className="w-full">
            <img 
              src={imageSrc} 
              alt={title}
              className="object-cover"
            />
          </AspectRatio>
          <p className="text-xs text-center mt-2 text-gray-600">Estilo actual: Escala de grises completa con menos contraste</p>
        </div>
        
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-3xl">{title}</h1>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      <h2 className="text-xl mt-12 mb-4">Opciones de blending alternativas</h2>
      
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        <div>
          <div className="image-blend-grayscale rounded-lg overflow-hidden shadow-md">
            <AspectRatio ratio={4/3} className="w-full">
              <img 
                src={imageSrc} 
                alt="Opción 1"
                className="object-cover"
              />
            </AspectRatio>
          </div>
          <p className="text-xs text-center mt-2 text-gray-600">Opción 1: Escala de grises completa (100%)</p>
        </div>
        
        <div>
          <div className="image-blend-soft rounded-lg overflow-hidden shadow-md">
            <AspectRatio ratio={4/3} className="w-full">
              <img 
                src={imageSrc} 
                alt="Opción 2"
                className="object-cover"
              />
            </AspectRatio>
          </div>
          <p className="text-xs text-center mt-2 text-gray-600">Opción 2: Escala de grises completa con menos contraste</p>
        </div>
        
        <div>
          <div className="image-blend-vivid rounded-lg overflow-hidden shadow-md">
            <AspectRatio ratio={4/3} className="w-full">
              <img 
                src={imageSrc} 
                alt="Opción 3"
                className="object-cover"
              />
            </AspectRatio>
          </div>
          <p className="text-xs text-center mt-2 text-gray-600">Opción 3: Mayor contraste con escala de grises moderada</p>
        </div>
      </div>
    </section>
  );
};

export default ImageHero;
