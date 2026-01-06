import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CameraShowcase from './components/CameraShowcase';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="font-sans text-brand-dark antialiased bg-brand-dark selection:bg-brand-accent selection:text-black">
        <Navbar />
        <main>
          <Hero />
          <CameraShowcase />
          <Services />
          <Gallery />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;