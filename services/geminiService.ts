import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é o "Coach Virtual", um assistente de vendas especializado no "Desafio 7 Dias de Queima de Gordura".
O produto custa 29 euros.
O objetivo é perder até 2kg em 7 dias sem perder massa muscular.
Público: Adultos 20-40 anos.
Tom de voz: Motivador, direto, energético e empático.
Não invente recursos que não existem. O desafio inclui: Plano alimentar, Treinos de 20min em casa, Suporte VIP.
Seu objetivo é tirar dúvidas e convencer o usuário a clicar no botão de compra.
Responda de forma curta e persuasiva (máximo 2-3 frases).
`;

export const sendMessageToGemini = async (message: string, history: { role: string, parts: { text: string }[] }[]): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    // Convert history format if necessary, or just use sendMessage with the string
    // For simplicity in this demo, we are using a chat session concept
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Desculpe, tive um problema ao processar sua resposta. Vamos focar no seu objetivo!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Estou com muita demanda agora! Mas garanto que o desafio vale a pena.";
  }
};