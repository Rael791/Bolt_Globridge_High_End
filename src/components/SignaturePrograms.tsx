import React, { useState, useEffect, useRef } from 'react';
import { Package, TrendingUp, Zap, Eye, ArrowRight } from 'lucide-react';

const programs = [
  {
    icon: Package,
    title: "Culture Clash SOS",
    subtitle: "Notfallpaket für kulturelle Konflikte",
    description: "Wenn kulturelle Unterschiede zu Blockaden werden, sorgen wir für schnelle Klarheit und nachhaltige Lösungen.",
    duration: "4 Wochen Intensiv-Programm",
    roi: "+40% Teamproduktivität",
    features: ["Konfliktanalyse", "Mediation", "Cultural Bridge Building", "Nachhaltige Integration"],
    color: "from-red-500 to-orange-500"
  },
  {
    icon: TrendingUp,
    title: "Sales Retune",
    subtitle: "Vertrieb agil transformieren",
    description: "Scrum4Sales in der Praxis: Ihr Vertrieb wird kooperativ, adaptiv und messbar erfolgreicher.",
    duration: "6 Wochen Transformation",
    roi: "+35% Umsatzsteigerung",
    features: ["Agile Sales Framework", "Team Coaching", "KPI Dashboard", "Kontinuierliche Optimierung"],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Delivery Wake-Up",
    subtitle: "Projektlieferung optimieren",
    description: "Teams, die liefern statt diskutieren. Wir wecken schlafende Potentiale und schaffen Delivery-Excellence.",
    duration: "8 Wochen Intensivbegleitung",
    roi: "-50% Projektverzögerungen",
    features: ["Delivery Assessment", "Team Enablement", "Process Optimization", "Performance Tracking"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Eye,
    title: "Decision Mirror",
    subtitle: "Führungsentscheidungen reflektieren",
    description: "Ein psychologisch fundierter Ansatz für bessere Entscheidungen. Wir spiegeln, was Sie nicht sehen.",
    duration: "12 Wochen Executive Coaching",
    roi: "+60% Entscheidungsqualität",
    features: ["360° Leadership Assessment", "Cognitive Bias Training", "Decision Framework", "Peer Learning"],
    color: "from-purple-500 to-indigo-500"
  }
];

const SignaturePrograms: React.FC = () => {
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
    <section id="programs" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Signature Programme
          </h2>
          <p className={`text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Manchmal braucht es schnelle, präzise Interventionen. Unsere SOS-Pakete liefern 
            messbare Ergebnisse in kurzer Zeit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${500 + index * 200}ms` }}
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-r ${program.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <program.icon className="w-12 h-12 mb-4" />
                    <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                    <p className="text-white/90">{program.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-2xl font-bold">{program.roi}</p>
                      <p className="text-sm">ROI</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-stone-600 leading-relaxed mb-4">
                  {program.description}
                </p>

                <div className="flex items-center justify-between mb-6">
                  <span className="text-amber-600 font-semibold">{program.duration}</span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-stone-600">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center group">
                  Jetzt buchen
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Visualization */}
        <div className={`mt-16 bg-gradient-to-r from-stone-800 to-stone-700 rounded-2xl p-8 text-white transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-bold text-center mb-8">Messbare Ergebnisse</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">40%</div>
              <p className="text-stone-300">Höhere Teamproduktivität</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">35%</div>
              <p className="text-stone-300">Umsatzsteigerung</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50%</div>
              <p className="text-stone-300">Weniger Verzögerungen</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">60%</div>
              <p className="text-stone-300">Bessere Entscheidungen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignaturePrograms;