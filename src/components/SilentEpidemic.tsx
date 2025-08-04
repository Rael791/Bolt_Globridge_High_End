import React, { useState, useEffect, useRef } from 'react';
import { TrendingDown, Users, AlertTriangle } from 'lucide-react';

const statements = [
  "78% der Führungskräfte fühlen sich von der Geschwindigkeit der Veränderung überfordert.",
  "Kulturelle Missverständnisse kosten Unternehmen durchschnittlich 2,3 Millionen Euro pro Jahr.",
  "67% aller Change-Projekte scheitern nicht an der Technik, sondern am Menschen.",
  "Die Hälfte aller internationalen Geschäftsbeziehungen bricht in den ersten zwei Jahren ab."
];

const SilentEpidemic: React.FC = () => {
  const [currentStatement, setCurrentStatement] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setCurrentStatement((prev) => (prev + 1) % statements.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-stone-100 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Die stille Epidemie
          </h2>
          <p className={`text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Während KPIs steigen, sinkt die menschliche Verbindung. Während Prozesse optimiert werden, 
            verlieren wir den Kontakt zu dem, was wirklich bewegt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className={`text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <TrendingDown className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-stone-800 mb-2">Vertrauen sinkt</h3>
            <p className="text-stone-600">Teams werden fragmentiert, Silos entstehen, echte Kommunikation wird seltener.</p>
          </div>

          <div className={`text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Users className="w-12 h-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-stone-800 mb-2">Kulturen prallen aufeinander</h3>
            <p className="text-stone-600">Missverständnisse werden zu Konflikten, Potentiale bleiben ungenutzt.</p>
          </div>

          <div className={`text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <AlertTriangle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-stone-800 mb-2">Change ermüdet</h3>
            <p className="text-stone-600">Projekte scheitern, Widerstand wächst, Energie verpufft in Struktur statt Wirkung.</p>
          </div>
        </div>

        {/* Statement Slider */}
        <div className="bg-gradient-to-r from-stone-800 to-stone-700 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <div className="h-24 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed max-w-4xl transition-opacity duration-500">
              {statements[currentStatement]}
            </p>
          </div>
          <div className="flex justify-center mt-6 space-x-2">
            {statements.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentStatement ? 'bg-amber-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SilentEpidemic;