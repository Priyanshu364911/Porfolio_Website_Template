
import { useState } from "react";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  
  // Get all unique tags from projects
  const allTags = ["All", ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  
  // Filter projects by tag
  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));
  
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center animate-reveal">
          <span className="text-gradient-primary">Featured Projects</span>
        </h2>
        
        <p className="mt-4 text-center text-foreground/70 max-w-2xl mx-auto animate-reveal-delay-1">
          A showcase of my recent work, spanning web development, interactive experiences, and creative coding.
        </p>
        
        <div className="mt-10 flex flex-wrap justify-center gap-3 animate-reveal-delay-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeFilter === tag 
                  ? "bg-primary text-white" 
                  : "bg-secondary text-foreground/70 hover:bg-secondary/80"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
