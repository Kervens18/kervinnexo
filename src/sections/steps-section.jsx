export default function StepsSection() {
  return (
    <section className="mt-32 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
        GET IN TOUCH
      </h2>
      <div className="w-full max-w-5xl mx-auto">
        <p className="text-2xl md:text-3xl text-white mb-8">Hello, I’m Jorgensen Kervens, Website & User Interface Designer based in DR</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 bg-black/80 p-6 text-2xl flex items-center justify-between text-white hover:bg-green-950 transition">Facebook <span aria-hidden>→</span></a>
          <a href="https://www.instagram.com/keleshop0/" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 bg-black/80 p-6 text-2xl flex items-center justify-between text-white hover:bg-green-950 transition">Instagram <span aria-hidden>→</span></a>
          <a href="https://wa.me/18295610230" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 bg-black/80 p-6 text-2xl flex items-center justify-between text-white hover:bg-green-950 transition">WhatsApp <span aria-hidden>→</span></a>
          <a href="https://github.com/Kervens18" target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 bg-black/80 p-6 text-2xl flex items-center justify-between text-white hover:bg-green-950 transition">GitHub <span aria-hidden>→</span></a>
        </div>
      </div>
    </section>
  );
}
