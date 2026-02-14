import React, { useState, useEffect } from 'react';
import { ArrowRight, Timer } from 'lucide-react';

export const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { minutes: prev.minutes - 1, seconds: 59 };
        return { minutes: 15, seconds: 0 }; // Reset for demo purposes
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-28">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/40 via-slate-900 to-slate-950 -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 animate-pulse">
            <Timer size={16} />
            Oferta encerra em: {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
            Seque <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">2kg de Gordura</span><br />
            em Apenas 7 Dias
          </h1>

          <p className="text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
            Sem passar fome, sem perder músculos. O protocolo definitivo para destravar seu metabolismo e ver resultados visíveis no espelho em uma semana.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <a href="#offer" className="group bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white text-lg font-bold py-4 px-8 rounded-xl shadow-[0_10px_40px_-10px_rgba(234,88,12,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
              QUERO SECAR AGORA
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
            +1.240 pessoas participando agora
          </p>
        </div>
      </div>
      
      {/* Visual Abstract Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </section>
  );
};
