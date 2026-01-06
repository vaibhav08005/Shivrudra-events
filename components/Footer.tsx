import React from 'react';
import { Instagram, Linkedin, Youtube, Mail, Phone, Facebook } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { translations } from '../translations';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = translations.footer;
  const nav = translations.nav;

  return (
    <footer className="bg-black pt-16 pb-8">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo */}
          <div>
            <h2 className="font-display text-2xl uppercase text-white font-bold tracking-tight">
              S<span className="text-brand-accent">E</span>
            </h2>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-6">{t.sitemap[language]}</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-brand-accent text-sm transition-colors">{nav.home[language]}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-brand-accent text-sm transition-colors">{nav.about[language]}</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-accent text-sm transition-colors">{nav.services[language]}</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-brand-accent text-sm transition-colors">{nav.gallery[language]}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-brand-accent text-sm transition-colors">{nav.contact[language]}</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-6">{t.social[language]}</h3>
            <ul className="space-y-3">
              <li>
                <a href="instagram.com/shivrudraeventsphotography" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent text-sm transition-colors flex items-center gap-2">
                  <Instagram size={16} /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/people/Shiv-Rudra/100072801386176/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent text-sm transition-colors flex items-center gap-2">
                  <Facebook size={16} /> Facebook
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@shivrudra_events_photography" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent text-sm transition-colors flex items-center gap-2">
                  <Youtube size={16} /> YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-6">{t.contact[language]}</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@shivrudraevents.com" className="text-gray-400 hover:text-brand-accent text-sm transition-colors flex items-center gap-2">
                  <Mail size={16} /> hello@shivrudraevents.com
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="text-gray-400 hover:text-brand-accent text-sm transition-colors flex items-center gap-2">
                  <Phone size={16} /> +91 98765 43210
                </a>
              </li>
              <li className="pt-4">
                <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors block">{t.privacy[language]}</a>
                <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors block mt-1">{t.terms[language]}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Large Brand Name */}
        <div className="border-t border-white/5 pt-12 overflow-hidden">
          <h1 className="font-display text-[15vw] font-black text-center uppercase leading-[0.8] tracking-tighter bg-gradient-to-b from-brand-accent to-[#8a6d1a] bg-clip-text text-transparent opacity-90">
            SHIVRUDRA
          </h1>
        </div>

        {/* Copyright */}
        <div className="text-center mt-4">
          <p className="text-gray-600 text-xs">
            © 2024 <span className="text-brand-accent font-semibold tracking-wider">Shivrudraevents</span>. {t.copyright[language]} {t.love[language]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;