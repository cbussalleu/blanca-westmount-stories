import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { OptimizedImage } from '@/components/OptimizedImage';

interface ProjectCardProps {
  number: number;
  title: string;
  description: string;
  client: string;
  slug: string;
  imageSrc?: string;
}

const ProjectCard = ({ title, description, client, slug, imageSrc }: ProjectCardProps) => {
  return (
    <div className="group space-y-4">
      {/* Desktop: full-width 1:1 image above text */}
      <div className="image-with-overlay overflow-hidden hidden sm:block">
        <AspectRatio ratio={1} className="w-full">
          {imageSrc ? (
            <OptimizedImage src={imageSrc} alt={title} className="w-full h-full" />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-2xl">
              {title.charAt(0)}
            </div>
          )}
        </AspectRatio>
      </div>

      {/* Mobile: 80px thumbnail next to text */}
      <div className="flex gap-3 sm:hidden">
        <div className="image-with-overlay rounded-lg overflow-hidden shadow-sm w-20 h-20 flex-shrink-0">
          {imageSrc ? (
            <OptimizedImage src={imageSrc} alt={title} className="w-full h-full" />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-xl">
              {title.charAt(0)}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="eyebrow mb-1">{client}</div>
          <h3 className="heading-m">{title}</h3>
        </div>
      </div>

      <div className="space-y-2">
        <div className="eyebrow hidden sm:block">{client}</div>
        <h3 className="heading-m hidden sm:block">{title}</h3>
        <p className="prose">{description}</p>
        <div className="pt-2">
          <Link to={`/portfolio/${slug}`} className="cta-link cta-link-sm">
            View Project <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
