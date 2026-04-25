import { Bot } from "lucide-react";
import { useState } from "react";
import AIChatWindow from "./ai-chat-window";

export default function AIAssistantButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 bg-lime-400 hover:bg-lime-500 text-black rounded-full shadow-xl p-4 flex items-center justify-center transition-all border-2 border-black/20"
        aria-label="Open AI Assistant"
        style={{ boxShadow: "0 4px 24px 0 rgba(198,255,26,0.25)" }}
      >
        <Bot className="w-7 h-7" />
      </button>
      <AIChatWindow open={open} onClose={() => setOpen(false)} />
    </>
  );
}
