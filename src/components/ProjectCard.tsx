
import { ExternalLink, Github } from "lucide-react";
import { type Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const delay = `animate-reveal-delay-${index % 3}`;
  
  return (
    <div 
      className={`glass-morphism rounded-xl overflow-hidden group ${delay}`}
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-background/40 z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-2">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary transition"
              >
                <Github size={16} />
              </a>
            )}
            
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary transition"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-montserrat font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-foreground/70">{project.description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs rounded-full bg-secondary text-foreground/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
