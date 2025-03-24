
import React, { useEffect, useRef, useState } from 'react';
import Container from './ui/Container';
import { Code, Layout, Zap } from 'lucide-react';

const About = () => {
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
  
  const skills = [
    "React", "TypeScript", "JavaScript", "HTML5", "CSS3", 
    "Tailwind CSS", "Redux", "Next.js", "Git", "RESTful APIs"
  ];
  
  return (
    <section id="about" ref={sectionRef} className="section-padding bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.1s' }}>
              <span className="text-primary font-medium">About Me</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Passionate about creating exceptional web experiences
              </h2>
              <p className="text-gray-600 mb-6">
                I'm a frontend developer specializing in building (and occasionally designing) 
                exceptional digital experiences. Currently, I'm focused on building accessible, 
                responsive web applications with modern JavaScript frameworks and libraries.
              </p>
              <p className="text-gray-600">
                I believe in writing clean, reusable code and staying up-to-date with the latest 
                development practices. With a keen eye for design and a passion for creating 
                intuitive user interfaces, I strive to deliver high-quality web solutions.
              </p>
            </div>
            
            <div className={`mt-8 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.3s' }}>
              <h3 className="font-semibold text-lg mb-4">Technologies I work with:</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="bg-gray-100 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div 
              className={`glass-card rounded-xl p-6 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: '0.4s' }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Code className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-600">
                I write clean, maintainable, and efficient code using the latest technologies 
                and best practices.
              </p>
            </div>
            
            <div 
              className={`glass-card rounded-xl p-6 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: '0.6s' }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Layout className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
              <p className="text-gray-600">
                I create websites that look and work flawlessly across all devices and screen sizes.
              </p>
            </div>
            
            <div 
              className={`glass-card rounded-xl p-6 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`}
              style={{ animationDelay: '0.8s' }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Focused</h3>
              <p className="text-gray-600">
                I optimize applications for maximum speed and scalability, providing the best user experience.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
