import React from 'react';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-stone-800 to-stone-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Globe className="w-8 h-8 text-amber-500" />
              <span className="text-2xl font-serif font-bold">GloBridge</span>
            </div>
            <p className="text-stone-300 leading-relaxed mb-6 max-w-md">
              Wo Transformation wirkt – nicht nur aussieht wie Arbeit. 
              Wir verbinden Menschen, Kulturen und Systeme für nachhaltigen Wandel.
            </p>
            <div className="flex space-x-4">
              <select className="bg-stone-700 text-white px-3 py-2 rounded-lg border border-stone-600">
                <option>DE</option>
                <option>EN</option>
                <option>AR</option>
              </select>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <nav className="space-y-2">
              <button onClick={() => scrollToSection('home')} className="block text-stone-300 hover:text-amber-400 transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block text-stone-300 hover:text-amber-400 transition-colors">
                Über uns
              </button>
              <button onClick={() => scrollToSection('triax')} className="block text-stone-300 hover:text-amber-400 transition-colors">
                TRIAX®
              </button>
              <button onClick={() => scrollToSection('services')} className="block text-stone-300 hover:text-amber-400 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('programs')} className="block text-stone-300 hover:text-amber-400 transition-colors">
                Programme
              </button>
              <button onClick={() => scrollToSection('cases')} className="block text-stone-300 hover:text-amber-400 transition-colors">
                Cases
              </button>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center text-stone-300">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">kontakt@globridge.de</span>
              </div>
              <div className="flex items-center text-stone-300">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+49 (0) 123 456 789</span>
              </div>
              <div className="flex items-center text-stone-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Deutschland • MENA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-stone-400 text-sm mb-4 md:mb-0">
              © 2025 GloBridge. Alle Rechte vorbehalten.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                Impressum
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                Datenschutz
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors">
                AGB
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-amber-400 font-medium italic">
              Wo Transformation wirkt – nicht nur aussieht wie Arbeit.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;