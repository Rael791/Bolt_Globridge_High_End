import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    headline: "Transformation ist kein Projekt. Es ist eine Sprache.",
    subheadline: "Wir sprechen sie fließend – zwischen Menschen, Märkten und Maschinen.",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
  },
  {
    headline: "TRIAX® – Unser exklusives System für ganzheitliche Transformation.",
    subheadline: "Ein wissenschaftlich fundierter Ansatz, der Struktur, Kultur und Mensch systematisch vereint – für Veränderungen, die funktionieren.",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
  },
  {
    headline: "Interkulturelle Intelligenz – der stille Wettbewerbsvorteil.",
    subheadline: "Wir bauen Brücken, wo andere an Grenzen stoßen.",
    image: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg"
  },
  {
    headline: "Scrum4Sales – Agilität, die verkauft.",
    subheadline: "Vertrieb neu gedacht: kooperativ, adaptiv, erfolgreich.",
    image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg"
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 to-stone-900/30 z-10"></div>
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              {slides[currentSlide].headline}
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 mb-8 leading-relaxed max-w-3xl">
              {slides[currentSlide].subheadline}
            </p>
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Wirkung spüren
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;