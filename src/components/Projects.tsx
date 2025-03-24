
import React, { useEffect, useRef, useState } from 'react';
import Container from './ui/Container';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce businesses with analytics, inventory management, and order processing features.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      image: "https://via.placeholder.com/600x350",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tags: ["React", "Redux", "Firebase", "Styled Components"],
      image: "https://via.placeholder.com/600x350",
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Weather Application",
      description: "A sleek weather application providing current conditions, forecasts, and location-based weather data with beautiful visualizations.",
      tags: ["React", "Context API", "CSS Modules", "Weather API"],
      image: "https://via.placeholder.com/600x350",
      demoLink: "#",
      codeLink: "#"
    }
  ];
  
  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.1s' }}>
            <span className="text-primary font-medium">My Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Featured Projects
            </h2>
            <p className="text-gray-600">
              Here are some of my recent projects that showcase my skills and expertise in 
              frontend development using React and modern web technologies.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`glass-card rounded-xl overflow-hidden opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: `${0.2 + index * 0.2}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-primary/5 text-primary px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a 
                    href={project.demoLink}
                    className="flex items-center gap-1 text-primary font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={16} />
                  </a>
                  
                  <a 
                    href={project.codeLink}
                    className="flex items-center gap-1 text-gray-600 font-medium hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Code</span>
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '1s' }}>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            <span>View All Projects</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
