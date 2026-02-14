import React from 'react';
import { FaqItem } from '../types';

export const Faq: React.FC = () => {
  const faqs: FaqItem[] = [
    {
      question: "Preciso ir para a academia?",
      answer: "Não! O desafio foi desenhado com treinos de alta intensidade usando apenas o peso do corpo, para fazer na sala da sua casa."
    },
    {
      question: "Sou iniciante, consigo fazer?",
      answer: "Sim. Os treinos possuem adaptações para iniciantes, intermediários e avançados. Você vai no seu ritmo."
    },
    {
      question: "Vou passar fome?",
      answer: "Definitivamente não. O foco é comer os nutrientes certos para saciar e acelerar o metabolismo, não cortar calorias drasticamente."
    },
    {
      question: "E se eu não gostar?",
      answer: "Você tem 7 dias de garantia. Se não gostar, basta enviar um e-mail e devolvemos seus 29 euros."
    }
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Perguntas Frequentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
              <p className="text-slate-400">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
