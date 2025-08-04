import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SilentEpidemic from './components/SilentEpidemic';
import Philosophy from './components/Philosophy';
import WhyGloBridge from './components/WhyGloBridge';
import TriaxOverview from './components/TriaxOverview';
import Services from './components/Services';
import SignaturePrograms from './components/SignaturePrograms';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50/30">
      <Header />
      <main>
        <HeroSection />
        <SilentEpidemic />
        <Philosophy />
        <WhyGloBridge />
        <TriaxOverview />
        <Services />
        <SignaturePrograms />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;