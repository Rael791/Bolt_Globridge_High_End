import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Calendar, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-stone-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-50/50 to-orange-50/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-serif font-bold text-stone-800 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Transformation beginnt mit einem Gespräch
          </h2>
          <p className={`text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Lassen Sie uns über Ihre Herausforderungen sprechen. Ehrlich, direkt und 
            mit dem Fokus auf das, was wirklich bewegt.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Kontakt aufnehmen</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      E-Mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="ihre@email.de"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    placeholder="Ihr Unternehmen"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Erzählen Sie uns von Ihrer Herausforderung..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Nachricht senden
                  <Send className="w-5 h-5 ml-2" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information & Image */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-8">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg" 
                alt="Business Meeting"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Ehrlicher Dialog</h3>
                <p className="text-white/90">Wo Transformation wirklich beginnt</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                <Mail className="w-6 h-6 text-amber-600 mr-4" />
                <div>
                  <p className="font-semibold text-stone-800">E-Mail</p>
                  <p className="text-stone-600">kontakt@globridge.de</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                <Phone className="w-6 h-6 text-amber-600 mr-4" />
                <div>
                  <p className="font-semibold text-stone-800">Telefon</p>
                  <p className="text-stone-600">+49 (0) 123 456 789</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                <MapPin className="w-6 h-6 text-amber-600 mr-4" />
                <div>
                  <p className="font-semibold text-stone-800">Standorte</p>
                  <p className="text-stone-600">Deutschland • MENA Region</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
                <Calendar className="w-6 h-6 text-amber-600 mr-4" />
                <div>
                  <p className="font-semibold text-stone-800">Direkttermin</p>
                  <button className="text-amber-600 hover:text-amber-700 font-medium">
                    Jetzt buchen →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;