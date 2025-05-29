import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
      <div className="image-with-overlay rounded-lg overflow-hidden shadow-md hidden sm:block">
        <AspectRatio ratio={1} className="w-full">
          {imageSrc ? (
            <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center text-2xl">
              {title.charAt(0)}
            </div>
          )}
        </AspectRatio>
      </div>
      
      <div className="space-y-2">
        <div className="uppercase text-xs tracking-widest font-westmount font-extralight">{client}</div>
        <h3 className="text-lg font-merriweather">{title}</h3>
        <p className="text-sm text-gray-600 font-merriweather" style={{ 
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          minHeight: 'calc(1.5 * 1rem * 2)', // 2 líneas con line-height 1.5
          lineHeight: '1.5',
          marginBottom: '1rem'
        }}>
          {description}
        </p>
        
        <div className="pt-2">
          <Link 
            to={`/portfolio/${slug}`} 
            className="inline-flex items-center text-xs border-b border-black pb-0.5 hover:opacity-70 transition-opacity font-merriweather group"
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
