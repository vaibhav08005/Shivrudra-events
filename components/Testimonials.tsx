import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';
import { useLanguage } from './LanguageContext';
import { translations } from '../translations';

const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const t = translations.testimonials;

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: t.clients.client1.name[language],
      role: t.clients.client1.role[language],
      quote: t.clients.client1.quote[language],
      rating: 5
    },
    {
      id: 2,
      name: t.clients.client2.name[language],
      role: t.clients.client2.role[language],
      quote: t.clients.client2.quote[language],
      rating: 5
    },
    {
      id: 3,
      name: t.clients.client3.name[language],
      role: t.clients.client3.role[language],
      quote: t.clients.client3.quote[language],
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-brand-gray border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center font-display text-4xl uppercase text-white mb-16">{t.heading[language]}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-brand-dark p-8 border border-white/5 relative hover:border-brand-accent/50 transition-colors">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="text-gray-400 italic mb-8 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <h4 className="text-white font-bold uppercase tracking-wide">{testimonial.name}</h4>
                <span className="text-xs text-brand-accent uppercase tracking-widest">{testimonial.role}</span>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="font-display text-8xl text-white">"</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;