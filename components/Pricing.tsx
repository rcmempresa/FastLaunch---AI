import React from 'react';
import { Check, Shield, ArrowRight } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="offer" className="py-24 bg-gradient-to-b from-slate-900 to-orange-950/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-slate-900 border-2 border-orange-500 rounded-3xl overflow-hidden shadow-[0_0_50px_-12px_rgba(234,88,12,0.3)] relative">
          
          {/* Badge */}
          <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-wider">
            75% OFF HOJE
          </div>

          <div className="p-8 md:p-12 text-center border-b border-slate-800">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Comece a Secar Agora</h2>
            <p className="text-slate-400">Acesso completo ao Desafio 7 Dias de Queima</p>
            
            <div className="mt-8 flex justify-center items-end gap-2">
              <span className="text-slate-500 text-2xl line-through decoration-red-500">€117</span>
              <span className="text-6xl font-black text-white leading-none">€29</span>
            </div>
            <p className="text-green-400 text-sm font-semibold mt-2">Pagamento único. Acesso vitalício.</p>
          </div>

          <div className="p-8 md:p-12 bg-slate-800/30">
            <ul className="space-y-4 mb-8 text-left max-w-md mx-auto">
              {[
                "Plano Alimentar de 7 Dias",
                "Lista de Compras Econômica",
                "7 Treinos em Vídeo (Home Workout)",
                "Guia de Suplementação (Opcional)",
                "BÔNUS: Manual do Jejum Intermitente",
                "BÔNUS: Acesso à Comunidade VIP"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-200">
                  <div className="bg-orange-500/20 p-1 rounded-full">
                    <Check size={16} className="text-orange-500" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold text-xl py-5 rounded-xl shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-3">
              SIM! QUERO PERDER 2KG AGORA
              <ArrowRight size={24} />
            </button>
            
            <p className="mt-4 text-xs text-slate-500 text-center">
              Acesso imediato enviado para o seu e-mail após a confirmação.
            </p>
          </div>
        </div>

        {/* Guarantee */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-6 p-6 bg-slate-800/50 rounded-xl border border-slate-700">
          <div className="bg-slate-900 p-4 rounded-full border border-slate-700">
            <Shield size={40} className="text-green-500" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white mb-1">Garantia Blindada de 7 Dias</h3>
            <p className="text-slate-400 text-sm">
              Se você seguir o plano e não ver diferença no espelho, nós devolvemos 100% do seu dinheiro. Sem perguntas, sem letras miúdas. O risco é todo nosso.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};