import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../types';

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Ricardo M.",
      role: "Empresário, 34 anos",
      content: "Eu não tinha tempo pra nada. Os treinos de 20 minutos salvaram minha rotina. Perdi 2.3kg na balança, mas parece que foram 5kg no espelho!",
      image: "https://picsum.photos/seed/men1/100/100",
      loss: "-2.3kg"
    },
    {
      id: 2,
      name: "Ana Clara",
      role: "Advogada, 28 anos",
      content: "Sempre desistia das dietas porque passava fome. Nesse desafio eu comi bem e desinchei muito. A calça 38 voltou a fechar!",
      image: "https://picsum.photos/seed/women2/100/100",
      loss: "-1.9kg"
    },
    {
      id: 3,
      name: "Felipe Costa",
      role: "Engenheiro, 39 anos",
      content: "Precisava de um choque de realidade. Em uma semana recuperei a motivação que não tinha há anos. Vale cada centavo.",
      image: "https://picsum.photos/seed/men3/100/100",
      loss: "-2.5kg"
    }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-4">
          Resultados Reais de Pessoas Reais
        </h2>
        <p className="text-center text-slate-400 mb-12">
          Junte-se a centenas de homens e mulheres que transformaram o corpo em tempo recorde.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 relative">
              <div className="flex gap-1 text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-300 mb-6 italic">"{t.content}"</p>
              
              <div className="flex items-center gap-4 border-t border-slate-800 pt-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-orange-500" />
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto bg-green-900/30 text-green-400 text-xs font-bold px-3 py-1 rounded-full border border-green-500/20">
                  {t.loss}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
