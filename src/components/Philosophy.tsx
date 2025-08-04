import React, { useState, useEffect, useRef } from 'react';
import { Brain, Users, Lightbulb, Heart } from 'lucide-react';

const Philosophy: React.FC = () => {
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
    <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Unsere Philosophie: Mind'Up
          </h2>
          <p className={`text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Macht flüstert. Wirkung spricht für sich.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-2xl">
              <h3 className="text-3xl font-serif font-bold text-stone-800 mb-4">Mind</h3>
              <p className="text-lg text-stone-700 leading-relaxed">
                Wir verstehen die Psychologie hinter Veränderung. Neuroplastizität, 
                Systemtheorie und interkulturelle Intelligenz bilden das Fundament 
                unserer Arbeit. Wir denken nicht nur über den Tellerrand – wir 
                verstehen, warum er überhaupt da ist.
              </p>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-8 rounded-2xl">
              <h3 className="text-3xl font-serif font-bold text-stone-800 mb-4">Up</h3>
              <p className="text-lg text-stone-700 leading-relaxed">
                Transformation ist kein Buzzword, sondern eine Haltung. Wir heben 
                Menschen, Teams und Organisationen auf die nächste Ebene – nachhaltig, 
                authentisch und mit messbarem Impact. Nicht lauter, sondern klarer.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Heart, title: "Empathie", description: "Wir verstehen, bevor wir verstanden werden wollen." },
            { icon: Brain, title: "Tiefe", description: "Oberflächliche Lösungen sind teurer als durchdachte Strategien." },
            { icon: Users, title: "Haltung", description: "Unsere Werte sind nicht verhandelbar – unsere Methoden schon." },
            { icon: Lightbulb, title: "Klarheit", description: "Komplexität reduzieren, ohne zu simplifizieren." }
          ].map((value, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${900 + index * 200}ms` }}
            >
              <value.icon className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-stone-800 mb-2">{value.title}</h4>
              <p className="text-stone-600 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;