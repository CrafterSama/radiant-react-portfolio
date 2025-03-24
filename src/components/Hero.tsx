
import React, { useEffect, useState } from 'react';
import Container from './ui/Container';
import RevealText from './ui/RevealText';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20">
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-50 to-gray-100"
        aria-hidden="true" 
      />
      
      <Container className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-4 mb-8">
            <div className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '0.2s' }}>
              <span className="inline-block text-primary text-lg font-medium px-4 py-1 rounded-full bg-primary/5 mb-4">
                Frontend Developer
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight space-y-4">
              <div>
                <RevealText 
                  text="Crafting digital" 
                  tag="span" 
                  delay={0.5}
                  className="inline-block"
                />
              </div>
              <div>
                <RevealText 
                  text="experiences with React" 
                  tag="span" 
                  delay={0.7}
                  className="inline-block"
                />
              </div>
            </h1>
            
            <div className={`opacity-0 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '1.2s' }}>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6 text-balance">
                I build exceptional and accessible digital experiences 
                for the web, focusing on responsive design and performance.
              </p>
            </div>
          </div>
          
          <div className={`mt-12 space-x-4 opacity-0 ${isVisible ? 'animate-fade-in' : ''}`} style={{ animationDelay: '1.4s' }}>
            <a href="#projects" className="button-primary">
              View Projects
            </a>
            <a href="#contact" className="button-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </Container>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown className="text-primary/70" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
