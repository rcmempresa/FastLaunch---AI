import React from 'react';
import { Flame, Zap, ShieldCheck, Clock, Utensils, Award } from 'lucide-react';
import { Benefit } from '../types';

export const Benefits: React.FC = () => {
  const benefits: Benefit[] = [
    {
      id: 1,
      title: "Adeus, Inchaço",
      description: "Sinta suas roupas mais largas já no terceiro dia com nosso protocolo anti-inflamatório.",
      icon: <Flame className="w-8 h-8 text-orange-500" />
    },
    {
      id: 2,
      title: "100% Massa Magra",
      description: "Focado em queimar gordura pura, preservando seus músculos duramente conquistados.",
      icon: <ShieldCheck className="w-8 h-8 text-orange-500" />
    },
    {
      id: 3,
      title: "Treinos de 20 Min",
      description: "Sem academia? Sem problemas. Treinos intensos para fazer na sala de casa.",
      icon: <Clock className="w-8 h-8 text-orange-500" />
    },
    {
      id: 4,
      title: "Cardápio Flexível",
      description: "Coma comida de verdade. Nada de shakes caros ou ingredientes que você não encontra.",
      icon: <Utensils className="w-8 h-8 text-orange-500" />
    },
    {
      id: 5,
      title: "Metabolismo Acelerado",
      description: "Técnicas comprovadas para manter seu corpo queimando calorias mesmo em repouso.",
      icon: <Zap className="w-8 h-8 text-orange-500" />
    },
    {
      id: 6,
      title: "Resultados Visíveis",
      description: "Em 7 dias você se olhará no espelho e verá a definição muscular aparecendo.",
      icon: <Award className="w-8 h-8 text-orange-500" />
    }
  ];

  return (
    <section className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Por que funciona tão rápido?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Não é mágica, é fisiologia aplicada. Combinamos déficit calórico estratégico com estímulo metabólico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-colors">
              <div className="bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-slate-700">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
