
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';

interface ProjectCardProps {
  number: number;
  title: string;
  description: string;
  client: string;
  slug: string;
  icon?: string;
}

const ProjectCard = ({ number, title, description, client, slug, icon }: ProjectCardProps) => {
  return (
    <div className="group border border-gray-100 rounded-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <AspectRatio ratio={16/9} className="bg-gray-50 flex items-center justify-center">
        <div className="text-5xl flex items-center justify-center h-full w-full">
          {icon || '📊'}
        </div>
      </AspectRatio>
      <div className="p-6">
        <div className="mb-2 text-sm font-helvetica text-gray-500">{client}</div>
        <h3 className="font-westmount text-xl mb-3">{title}</h3>
        <p className="text-gray-600 font-helvetica mb-4 line-clamp-3">{description}</p>
        <Link 
          to={`/portfolio/${slug}`} 
          className="inline-flex items-center font-helvetica text-sm text-black hover:text-gray-600 transition-colors"
        >
          View Project <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
