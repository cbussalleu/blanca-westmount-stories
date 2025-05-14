
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  number: number;
  title: string;
  description: string;
  client: string;
  slug: string;
  icon?: string;
}

const ProjectCard = ({ title, description, client, slug, icon }: ProjectCardProps) => {
  return (
    <div className="group space-y-4">
      <div className="aspect-square flex items-center justify-center bg-white border border-gray-200 text-4xl">
        {icon || '📊'}
      </div>
      
      <div className="space-y-2">
        <div className="uppercase text-xs tracking-widest">{client}</div>
        <h3 className="text-lg">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
        
        <div className="pt-2">
          <Link 
            to={`/portfolio/${slug}`} 
            className="inline-flex items-center text-xs border-b border-black pb-0.5 hover:opacity-70 transition-opacity"
          >
            View Project <ArrowRight size={12} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
