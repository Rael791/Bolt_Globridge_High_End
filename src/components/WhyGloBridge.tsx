import React, { useState, useEffect, useRef } from 'react';
import { Compass, Grid as Bridge, Users, Zap, Shield } from 'lucide-react';

const reasons = [
  {
    icon: Compass,
    title: "Klarheit in Komplexität",
    description: "Wir navigieren durch Veränderungsprozesse mit wissenschaftlicher Präzision und menschlicher Intuition.",
    details: "Unsere TRIAX®-Methodik bringt Struktur in chaotische Transformationsprozesse."
  },
  {
    icon: Bridge,
    title: "Kulturen verbinden",
    description: "Interkulturelle Intelligenz ist unser Kern. Wir bauen Brücken, wo andere Mauern sehen.",
    details: "15+ Jahre Erfahrung in internationalen Märkten von Deutschland bis in den arabischen Raum."
  },
  {
    icon: Users,
    title: "Führung neu denken",
    description: "Leadership bedeutet nicht Kontrolle, sondern Befähigung. Wir entwickeln Führungskräfte zu Enablers.",
    details: "Psychologisch fundierte Coaching-Ansätze für nachhaltigen Führungswandel."
  },
  {
    icon: Zap,
    title: "Vertrieb neu gestalten",
    description: "Scrum4Sales revolutioniert traditionelle Verkaufsstrukturen durch agile Prinzipien.",
    details: "35%+ Umsatzsteigerung durch kooperative, adaptive Vertriebsansätze."
  },
  {
    icon: Shield,
    title: "Resilienz entfalten",
    description: "Wir stärken nicht nur gegen Krisen, sondern schaffen antifragile Organisationen.",
    details: "Teams, die aus Herausforderungen gestärkt hervorgehen und kontinuierlich wachsen."
  }
];

const WhyGloBridge: React.FC = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-50/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Warum GloBridge?
          </h2>
          <p className={`text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Weil Transformation mehr ist als ein Projekt. Es ist die Kunst, Menschen, 
            Kulturen und Systeme in Einklang zu bringen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${500 + index * 200}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-orange-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <reason.icon className="w-12 h-12 text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-stone-800 mb-4 group-hover:text-amber-700 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-stone-600 leading-relaxed mb-4">
                  {reason.description}
                </p>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  hoveredIndex === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="pt-4 border-t border-amber-200">
                    <p className="text-sm text-amber-800 font-medium">
                      {reason.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-stone-600 mb-6">
            Bereit für Transformation, die wirkt?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Mehr über unsere Haltung
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyGloBridge;