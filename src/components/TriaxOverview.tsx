import React, { useState, useEffect, useRef } from 'react';
import { Settings, Users, User, RotateCcw } from 'lucide-react';

const TriaxOverview: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState(0);
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
        setRotation(prev => prev + 1);
      }, 50);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section id="triax" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-stone-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-orange-50/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            TRIAX® – Unsere Methodik
          </h2>
          <p className={`text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Ein wissenschaftlich fundierter Ansatz, der Struktur, Kultur und Mensch 
            systematisch vereint – für Veränderungen, die funktionieren.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Interactive TRIAX Visualization */}
          <div className={`flex justify-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <div className="relative w-80 h-80">
              {/* Central Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                  <RotateCcw 
                    className="w-12 h-12 text-white"
                    style={{ transform: `rotate(${rotation}deg)` }}
                  />
                </div>
              </div>

              {/* Rotating Axes */}
              <div 
                className="absolute inset-0 transition-transform duration-75 ease-linear"
                style={{ transform: `rotate(${rotation * 0.5}deg)` }}
              >
                {/* Struktur Axis */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-center mt-2 font-bold text-blue-700">Struktur</p>
                </div>

                {/* Kultur Axis */}
                <div className="absolute bottom-8 right-8">
                  <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-center mt-2 font-bold text-green-700">Kultur</p>
                </div>

                {/* Mensch Axis */}
                <div className="absolute bottom-8 left-8">
                  <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-center mt-2 font-bold text-purple-700">Mensch</p>
                </div>
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgb(245, 158, 11)" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <line x1="50%" y1="20%" x2="50%" y2="50%" stroke="url(#connectionGradient)" strokeWidth="3" />
                <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="url(#connectionGradient)" strokeWidth="3" />
                <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="url(#connectionGradient)" strokeWidth="3" />
              </svg>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-8">
            <div className={`transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="bg-blue-100 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-blue-800 mb-3 flex items-center">
                  <Settings className="w-6 h-6 mr-2" />
                  Struktur
                </h3>
                <p className="text-blue-700">
                  Prozesse, Systeme und Frameworks bilden das Rückgrat jeder Organisation. 
                  Wir optimieren nicht nur – wir schaffen resiliente Strukturen.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="bg-green-100 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-green-800 mb-3 flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Kultur
                </h3>
                <p className="text-green-700">
                  Werte, Normen und ungeschriebene Gesetze bestimmen den Erfolg. 
                  Wir machen Kultur sichtbar, messbar und gestaltbar.
                </p>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-1100 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="bg-purple-100 p-6 rounded-xl">
                <h3 className="text-2xl font-bold text-purple-800 mb-3 flex items-center">
                  <User className="w-6 h-6 mr-2" />
                  Mensch
                </h3>
                <p className="text-purple-700">
                  Im Zentrum steht der Mensch mit seinen Bedürfnissen, Ängsten und Potentialen. 
                  Wir entwickeln Menschen zu Gestaltern des Wandels.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            So funktioniert nachhaltige Transformation
          </button>
        </div>
      </div>
    </section>
  );
};

export default TriaxOverview;