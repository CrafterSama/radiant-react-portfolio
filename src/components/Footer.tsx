
import React from 'react';
import Container from './ui/Container';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gray-50 py-12">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <a href="#home" className="text-xl font-semibold">
              <span className="text-primary">Dev</span>Portfolio
            </a>
            <p className="text-gray-500 mt-2">
              © {currentYear} All rights reserved.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-100"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="text-primary" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
