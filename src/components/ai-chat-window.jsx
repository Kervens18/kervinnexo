import { Bot, Send } from "lucide-react";
import { useState, useRef } from "react";

// OpenAI API key supprimée pour sécurité
// Utilisez une variable d'environnement côté serveur ou une solution sécurisée pour injecter la clé
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || "";

const SYSTEM_PROMPT = `You are a helpful, friendly, and professional AI assistant for a web agency. You answer in the user's language (English, French, Spanish, or Portuguese). If the user asks about the site, services, portfolio, or contact, answer with real information. If you don't know, say so politely.`;

export default function AIChatWindow({ open, onClose }) {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! 👋 How can I help you? (You can write in English, Français, Español, Português)" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages(msgs => [...msgs, userMsg]);
    setLoading(true);
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Ne pas exposer la clé côté client en production !
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
            userMsg
          ]
        })
      });
      const data = await response.json();
      const aiMsg = data.choices?.[0]?.message?.content || "Sorry, I couldn't get a response.";
      setMessages(msgs => [...msgs, { role: "assistant", content: aiMsg }]);
    } catch (e) {
      setMessages(msgs => [...msgs, { role: "assistant", content: "Erreur lors de la connexion à l'API." }]);
    }
    setLoading(false);
    setInput("");
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    open && (
      <div className="fixed bottom-4 right-4 bg-white shadow-lg rounded-lg w-80 z-50 flex flex-col">
        <div className="flex items-center justify-between p-2 border-b">
          <span className="flex items-center gap-2 font-bold"><Bot size={18} /> AI Assistant</span>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-700">✕</button>
        </div>
        <div className="flex-1 overflow-y-auto p-2" style={{ maxHeight: 300 }}>
          {messages.map((msg, i) => (
            <div key={i} className={`my-1 p-2 rounded ${msg.role === "assistant" ? "bg-gray-100 text-gray-800" : "bg-blue-100 text-blue-800 ml-8"}`}>
              {msg.content}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form className="flex border-t" onSubmit={e => { e.preventDefault(); sendMessage(); }}>
          <input
            className="flex-1 p-2 outline-none"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Votre message..."
            disabled={loading}
          />
          <button type="submit" className="p-2 text-blue-600 hover:text-blue-800" disabled={loading || !input.trim()}>
            <Send size={18} />
          </button>
        </form>
      </div>
    )
  );
}
import { Bot, Send } from "lucide-react";
import { useState, useRef } from "react";

// OpenAI API key supprimée pour sécurité
// Utilisez une variable d'environnement côté serveur ou une solution sécurisée pour injecter la clé
const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY || "";

const SYSTEM_PROMPT = `You are a helpful, friendly, and professional AI assistant for a web agency. You answer in the user's language (English, French, Spanish, or Portuguese). If the user asks about the site, services, portfolio, or contact, answer with real information. If you don't know, say so politely.`;

export default function AIChatWindow({ open, onClose }) {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! 👋 How can I help you? (You can write in English, Français, Español, Português)" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages(msgs => [...msgs, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Ne pas exposer la clé côté client en production !
          "Authorization": `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
            userMsg
          ],
          max_tokens: 512,
        }),
      });
      const data = await res.json();
      const aiMsg = data.choices?.[0]?.message?.content || "Sorry, I couldn't answer right now.";
      setMessages(msgs => [...msgs, { role: "assistant", content: aiMsg }]);
    } catch (e) {
      setMessages(msgs => [...msgs, { role: "assistant", content: "Sorry, there was a problem with the AI service." }]);
    }
    setLoading(false);
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return open ? (
    <div className="fixed bottom-24 right-6 z-50 w-80 max-w-full bg-black/95 border border-lime-400 rounded-xl shadow-2xl flex flex-col animate-fade-in">
      <div className="flex items-center gap-2 p-4 border-b border-lime-400">
        <Bot className="w-5 h-5 text-lime-400" />
        <span className="font-bold text-lime-400">AI Assistant</span>
        <button onClick={onClose} className="ml-auto text-gray-400 hover:text-lime-400 text-xs">Close</button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: 320 }}>
        {messages.map((msg, i) => (
          <div key={i} className={`text-sm rounded-lg px-3 py-2 ${msg.role === "assistant" ? "bg-white/10 text-white" : "bg-lime-400/20 text-lime-300 text-right ml-8"}`}>{msg.content}</div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        className="flex items-center gap-2 p-3 border-t border-lime-400"
        onSubmit={e => { e.preventDefault(); sendMessage(); }}
      >
        <input
          className="flex-1 bg-black/80 text-white rounded-lg px-3 py-2 outline-none border border-lime-400/30 focus:border-lime-400"
          placeholder="Type your question..."
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={loading}
        />
        <button type="submit" className="p-2 rounded-full bg-lime-400 hover:bg-lime-500 text-black" disabled={loading || !input.trim()}>
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  ) : null;
}
