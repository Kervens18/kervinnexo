import { Mail, Smartphone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="w-full flex flex-col items-center gap-8 mt-32 mb-24">
      <div className="flex-1 max-w-3xl mx-auto">
        <div className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-black via-green-950/80 to-green-900/80 p-10 md:p-16 shadow-2xl backdrop-blur-xl">
          <h2 className="text-5xl md:text-6xl font-extrabold text-green-400 text-center tracking-tight mb-6">GET IN TOUCH</h2>
          <p className="text-xl md:text-2xl text-green-200 mb-8 text-center">Ready to start your project or have a question? Reach out and let’s build something amazing together.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="mailto:jorgensenkervens@nexo-global.shop" className="flex items-center gap-3 text-green-400 hover:text-green-300 text-lg font-semibold transition">
              <Mail className="size-7" /> jorgensenkervens@nexo-global.shop
            </a>
            <a href="tel:+18295610230" className="flex items-center gap-3 text-green-400 hover:text-green-300 text-lg font-semibold transition">
              <Smartphone className="size-7" /> +1 (829) 561-0230
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
