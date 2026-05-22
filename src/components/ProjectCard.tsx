import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
      <div className="image-with-overlay rounded-lg overflow-hidden shadow-md">
        <div className="w-full aspect-[16/9] sm:aspect-square">
          {imageSrc ? (
            <OptimizedImage
              src={imageSrc}
              alt={title}
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-2xl">
              {title.charAt(0)}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <div className="font-westmount font-light text-[11px] tracking-[0.20em] uppercase">{client}</div>
        <h3 className="text-lg font-merriweather">{title}</h3>
        <p className="text-sm text-gray-600 font-merriweather line-clamp-3 leading-[1.5] mb-4">
          {description}
        </p>

        <div className="pt-2">
          <Link
            to={`/portfolio/${slug}`}
            className="inline-flex items-center text-xs border-b border-black pb-0.5 hover:opacity-60 transition-opacity duration-200 font-merriweather group"
          >
            View Project
            <ArrowRight
              size={12}
              className="ml-1 group-hover:translate-x-1 transition-transform duration-200"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
