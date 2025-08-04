import React, { useState, useEffect, useRef } from 'react';
import { Quote, TrendingUp, Users, Globe } from 'lucide-react';

const cases = [
  {
    icon: TrendingUp,
    title: "Deutsche Expansion in den Arabischen Raum",
    client: "Technologie-Unternehmen",
    challenge: "Ein deutscher Mittelständler wollte in Saudi-Arabien Fuß fassen, scheiterte aber an kulturellen Missverständnissen und stockenden Verhandlungen.",
    solution: "Durch unser interkulturelles Intelligence-Programm entwickelten wir eine kulturell angepasste Go-to-Market-Strategie und schulten das Team in arabischer Geschäftskultur.",
    results: [
      { metric: "+150%", description: "Vertragsabschlüsse im ersten Jahr" },
      { metric: "85%", description: "Erfolgsrate bei Erstgesprächen" },
      { metric: "6 Monate", description: "Schneller als geplant profitabel" }
    ],
    testimonial: "GloBridge hat uns nicht nur geholfen, den Markt zu verstehen – sie haben uns geholfen, als Partner wahrgenommen zu werden.",
    author: "CEO, Technologie-Unternehmen",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
  },
  {
    icon: Users,
    title: "Scrum4Sales Transformation",
    client: "Software-Vertrieb",
    challenge: "Traditionelle Vertriebsstrukturen führten zu Silos, langen Entscheidungswegen und sinkender Kundenzufriedenheit.",
    solution: "Implementierung von Scrum4Sales: agile Vertriebsteams, kurze Iterationen und datengetriebene Entscheidungen revolutionierten den Verkaufsprozess.",
    results: [
      { metric: "+35%", description: "Umsatzsteigerung in 6 Monaten" },
      { metric: "-40%", description: "Verkaufszyklus-Verkürzung" },
      { metric: "92%", description: "Kundenzufriedenheit (vorher: 67%)" }
    ],
    testimonial: "Scrum4Sales hat unseren Vertrieb von einem Kostenfaktor zu einem Wachstumsmotor gemacht.",
    author: "Vertriebsleiter, Software-Unternehmen",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
  },
  {
    icon: Globe,
    title: "Kulturelle Integration nach Merger",
    client: "Internationale Fusion",
    challenge: "Nach einer Fusion zwischen einem deutschen und britischen Unternehmen entstanden kulturelle Konflikte, die die Synergien bedrohten.",
    solution: "TRIAX®-Ansatz zur systematischen Kulturintegration: Struktur-Harmonisierung, Kultur-Mapping und individuelle Entwicklungspläne für Führungskräfte.",
    results: [
      { metric: "+60%", description: "Mitarbeiterzufriedenheit" },
      { metric: "-70%", description: "Konflikte zwischen Teams" },
      { metric: "18 Monate", description: "Erfolgreiche Vollintegration" }
    ],
    testimonial: "Aus zwei Unternehmen wurde ein Team. GloBridge hat das Unmögliche möglich gemacht.",
    author: "HR Director, Fusioniertes Unternehmen",
    image: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg"
  }
];

const CaseStudies: React.FC = () => {
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
    <section id="cases" ref={sectionRef} className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Erfolgsgeschichten
          </h2>
          <p className={`text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Transformation wird an Ergebnissen gemessen. Hier sind drei Geschichten, 
            die zeigen, was möglich ist, wenn Menschen, Kultur und Struktur zusammenwirken.
          </p>
        </div>

        <div className="space-y-16">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${500 + index * 300}ms` }}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent"></div>
                    <div className="absolute top-6 left-6">
                      <caseStudy.icon className="w-12 h-12 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="text-3xl font-bold text-stone-800 mb-4">{caseStudy.title}</h3>
                  <p className="text-amber-600 font-semibold mb-6">{caseStudy.client}</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-stone-800 mb-2">Herausforderung</h4>
                      <p className="text-stone-600 leading-relaxed">{caseStudy.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-stone-800 mb-2">Unsere Lösung</h4>
                      <p className="text-stone-600 leading-relaxed">{caseStudy.solution}</p>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 my-8">
                      {caseStudy.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-xl">
                          <div className="text-2xl font-bold text-amber-600 mb-1">{result.metric}</div>
                          <div className="text-sm text-stone-600">{result.description}</div>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-500">
                      <Quote className="w-8 h-8 text-amber-500 mb-4" />
                      <p className="text-stone-700 italic mb-4 text-lg leading-relaxed">
                        "{caseStudy.testimonial}"
                      </p>
                      <p className="text-stone-600 font-semibold">— {caseStudy.author}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-stone-600 mb-6">
            Ihre Erfolgsgeschichte beginnt mit einem Gespräch.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Jetzt Kontakt aufnehmen
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;