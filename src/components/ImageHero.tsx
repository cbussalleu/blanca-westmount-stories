
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ImageHeroProps {
  imageSrc: string;
  title: string;
  description: string;
  aspectRatio?: number;
}

const ImageHero = ({ imageSrc, title, description, aspectRatio = 16/9 }: ImageHeroProps) => {
  return (
    <section className="grid md:grid-cols-2 gap-8 py-16">
      <div className="image-with-overlay rounded-lg overflow-hidden shadow-md">
        <AspectRatio ratio={aspectRatio} className="w-full">
          <img 
            src={imageSrc} 
            alt={title}
            className="object-cover"
          />
        </AspectRatio>
      </div>
      
      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-3xl">{title}</h1>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
    </section>
  );
};

export default ImageHero;
