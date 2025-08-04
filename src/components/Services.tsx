import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Shuffle, Target, Users, Globe, Truck, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Shuffle,
    title: "Change ohne Schablone",
    subtitle: "Individuelle Transformation",
    description: "Jede Organisation ist einzigartig. Wir entwickeln maßgeschneiderte Change-Strategien, die zur DNA Ihres Unternehmens passen.",
    highlights: ["Situationsanalyse", "Maßgeschneiderte Roadmap", "Nachhaltige Implementierung"],
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
  },
  {
    icon: Target,
    title: "Leadership Coaching",
    subtitle: "Führung neu denken",
    description: "Vom Manager zum Leader, vom Kontrolleur zum Enabler. Wir entwickeln Führungspersönlichkeiten für die Zukunft.",
    highlights: ["Executive Coaching", "Führungskräfteentwicklung", "360° Feedback"],
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg"
  },
  {
    icon: TrendingUp,
    title: "Scrum4Sales",
    subtitle: "Agile Sales",
    description: "Vertrieb neu gedacht: kooperativ, adaptiv, erfolgreich. Scrum-Prinzipien revolutionieren traditionelle Verkaufsstrukturen.",
    highlights: ["Agile Vertriebsprozesse", "Team-basierter Verkauf", "+35% Umsatzsteigerung"],
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
  },
  {
    icon: Globe,
    title: "Interkulturelle Intelligenz",
    subtitle: "Brücken bauen",
    description: "Wir bauen Brücken zwischen Kulturen, Märkten und Denkweisen. Diversity wird zu Ihrer Stärke.",
    highlights: ["Cultural Intelligence", "Internationale Teams", "Marktexpansion"],
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
  },
  {
    icon: Truck,
    title: "Delivery mit Resilienz",
    subtitle: "Antifragile Systeme",
    description: "Teams und Prozesse, die aus Krisen gestärkt hervorgehen. Wir schaffen nicht nur Resilienz, sondern Antifragilität.",
    highlights: ["Resiliente Teams", "Krisenmanagement", "Kontinuierliche Verbesserung"],
    image: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg"
  },
  {
    icon: Users,
    title: "Expansion & Country Management",
    subtitle: "Internationale Märkte",
    description: "Von Deutschland in die Welt: Wir begleiten Ihre internationale Expansion mit kultureller Sensibilität und strategischer Klarheit.",
    highlights: ["Marktanalyse", "Lokalisierung", "Cultural Adaptation"],
    image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg"
  }
];

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gradient-to-b from-stone-100 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Unsere Wirkfelder
          </h2>
          <p className={`text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Transformation funktioniert nicht nach Schema F. Jede Herausforderung braucht 
            ihren eigenen Ansatz – wissenschaftlich fundiert, menschlich durchdacht.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${500 + index * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <service.icon className="w-12 h-12 text-white drop-shadow-lg" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-stone-800 mb-2">{service.title}</h3>
                <p className="text-amber-600 font-semibold mb-3">{service.subtitle}</p>
                <p className="text-stone-600 leading-relaxed mb-4">{service.description}</p>

                {/* Highlights */}
                <div className={`space-y-2 mb-4 transition-all duration-300 ${
                  hoveredIndex === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  {service.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center text-sm text-stone-600">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                      {highlight}
                    </div>
                  ))}
                </div>

                <button className="flex items-center text-amber-600 font-semibold hover:text-amber-700 transition-colors group">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Erstberatung vereinbaren
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;