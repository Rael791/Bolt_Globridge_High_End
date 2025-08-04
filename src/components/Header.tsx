import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Globe className="w-8 h-8 text-amber-600" />
            <span className="text-2xl font-serif font-bold text-stone-800">GloBridge</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-stone-700 hover:text-amber-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-stone-700 hover:text-amber-600 transition-colors font-medium">
              Über uns
            </button>
            <button onClick={() => scrollToSection('triax')} className="text-stone-700 hover:text-amber-600 transition-colors font-medium">
              TRIAX®
            </button>
            <button onClick={() => scrollToSection('services')} className="text-stone-700 hover:text-amber-600 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('programs')} className="text-stone-700 hover:text-amber-600 transition-colors font-medium">
              Programme
            </button>
            <button onClick={() => scrollToSection('cases')} className="text-stone-700 hover:text-amber-600 transition-colors font-medium">
              Cases
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-stone-700 hover:text-amber-600 transition-colors font-medium">
              Kontakt
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <select className="text-sm text-stone-600 bg-transparent border-none">
              <option>DE</option>
              <option>EN</option>
              <option>AR</option>
            </select>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
            >
              Erstgespräch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-amber-100">
          <nav className="px-4 py-6 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-stone-700 hover:text-amber-600 transition-colors font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-stone-700 hover:text-amber-600 transition-colors font-medium">
              Über uns
            </button>
            <button onClick={() => scrollToSection('triax')} className="block w-full text-left text-stone-700 hover:text-amber-600 transition-colors font-medium">
              TRIAX®
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-stone-700 hover:text-amber-600 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('programs')} className="block w-full text-left text-stone-700 hover:text-amber-600 transition-colors font-medium">
              Programme
            </button>
            <button onClick={() => scrollToSection('cases')} className="block w-full text-left text-stone-700 hover:text-amber-600 transition-colors font-medium">
              Cases
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-stone-700 hover:text-amber-600 transition-colors font-medium">
              Kontakt
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 font-medium mt-4"
            >
              Erstgespräch
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;