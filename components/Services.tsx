import React from 'react';
import { Camera, Heart, Briefcase, Video } from 'lucide-react';
import { Service } from '../types';
import { useLanguage } from './LanguageContext';
import { translations } from '../translations';

const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = translations.services;

  const services: Service[] = [
    {
      id: 1,
      title: t.wedding.title[language],
      description: t.wedding.description[language],
      price: t.wedding.price[language],
      icon: <Heart className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 2,
      title: t.portrait.title[language],
      description: t.portrait.description[language],
      price: t.portrait.price[language],
      icon: <Camera className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop'
    },
    {
      id: 3,
      title: t.product.title[language],
      description: t.product.description[language],
      price: t.product.price[language],
      icon: <Briefcase className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop'
    },
    {
      id: 4,
      title: t.cinematography.title[language],
      description: t.cinematography.description[language],
      price: t.cinematography.price[language],
      icon: <Video className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?q=80&w=1976&auto=format&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-32 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="font-display text-5xl md:text-8xl uppercase text-white mb-6">{t.heading[language]}</h2>
          <div className="h-1 w-24 bg-brand-accent"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative h-[400px] overflow-hidden border border-white/10 bg-brand-gray transition-all hover:-translate-y-2"
            >
              {/* Image Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-20"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-4 text-brand-accent transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl uppercase text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                  {service.description}
                </p>
                <div className="flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-brand-accent font-bold text-sm">{service.price}</span>
                  <span className="text-white text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">{t.readMore[language]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;