import React from 'react';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Faq } from './components/Faq';
import { AICoach } from './components/AICoach';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-orange-500 selection:text-white">
      {/* Navigation (Simple) */}
      <nav className="fixed w-full z-40 top-0 left-0 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-2xl font-black italic tracking-tighter text-white">
            CHALLENGE<span className="text-orange-500">7D</span>
          </div>
          <a href="#offer" className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-6 rounded-lg text-sm transition-colors">
            Entrar Agora
          </a>
        </div>
      </nav>

      <main>
        <Hero />
        <Benefits />
        <Testimonials />
        
        {/* Story/Transition Section */}
        <section className="py-20 bg-white text-slate-900">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Pare de andar em círculos</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Você tenta dietas malucas, corta carboidratos, se mata na esteira... e a balança não move. 
              O problema não é sua força de vontade, é a <strong>estratégia</strong>. 
              Nosso corpo é uma máquina de adaptação. Se você não der o estímulo certo, ele vai estocar gordura para sobreviver.
            </p>
            <p className="text-xl font-bold text-orange-600">
              O Challenge 7D é o "reset" que seu metabolismo precisa.
            </p>
          </div>
        </section>

        <Pricing />
        <Faq />
      </main>

      <footer className="bg-slate-950 py-12 border-t border-slate-900 text-center text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Challenge 7D. Todos os direitos reservados.</p>
        <p className="mt-2">Este site não faz parte do site do Facebook ou Facebook Inc.</p>
      </footer>

      <AICoach />
    </div>
  );
}

export default App;
