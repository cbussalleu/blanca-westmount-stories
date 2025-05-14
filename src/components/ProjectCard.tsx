
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  number: number;
  title: string;
  description: string;
  client: string;
  slug: string;
  imageUrl?: string;
}

const ProjectCard = ({ number, title, description, client, slug, imageUrl }: ProjectCardProps) => {
  return (
    <div className="group border border-gray-100 rounded-md overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-64">
        <div className="bg-gray-100 h-full w-full">
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center">
          <span className="text-sm font-westmount font-semibold">{number}</span>
        </div>
      </div>
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
