import { MailIcon, LinkedinIcon, InstagramIcon, FacebookIcon, GithubIcon, LaptopIcon, PhoneIcon } from 'lucide-react';
import LenisScroll from '../components/lenis-scroll';
import Navbar from '../components/navbar';
import SectionTitle from '../components/section-title';
import { motion } from 'framer-motion';
import Footer from '../components/footer';
import AIAssistantButton from '../components/ai-assistant-button';

export default function ContactPage() {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <div className="fixed inset-0 -z-20 pointer-events-none" style={{
        background: "radial-gradient(circle at 60% 40%, #000 0%, #003300 30%, #000 100%)"
      }} />
      <main className="px-4">
        <section className="mt-32 flex flex-col items-center min-h-[80vh]">
          <SectionTitle title="Contact Me" description="Let's connect! Send a message or reach out on any platform." />
          <div className="w-full max-w-3xl mx-auto grid md:grid-cols-2 gap-12 mt-12">
            {/* Contact Form */}
            <motion.form
              className="bg-gradient-to-br from-black/80 via-green-950/60 to-green-900/60 border border-green-400/20 rounded-3xl p-10 shadow-2xl backdrop-blur-xl flex flex-col gap-6"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 320, damping: 70 }}
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <input name="name" required className="w-full rounded-lg px-4 py-2 bg-black/60 border border-green-700/30 text-white focus:ring-2 focus:ring-green-400 outline-none" />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <input name="email" type="email" required className="w-full rounded-lg px-4 py-2 bg-black/60 border border-green-700/30 text-white focus:ring-2 focus:ring-green-400 outline-none" />
              </div>
              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <textarea name="message" required rows={4} className="w-full rounded-lg px-4 py-2 bg-black/60 border border-green-700/30 text-white focus:ring-2 focus:ring-green-400 outline-none" />
              </div>
              <button type="submit" className="mt-2 bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-xl transition-all shadow-lg">Send Message</button>
            </motion.form>
            {/* Contact Info & Socials */}
            <motion.div
              className="flex flex-col gap-8 justify-center items-start"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 320, damping: 70 }}
            >
              <div className="flex items-center gap-4 text-white/90">
                <LaptopIcon className="size-8 text-green-400" />
                <span className="font-semibold">jorgensenkervens@nexo-global.shop</span>
              </div>
              <div className="flex items-center gap-4 text-white/90">
                <PhoneIcon className="size-8 text-green-400" />
                <span className="font-semibold">+1 (829) 561-0230</span>
              </div>
              <div className="flex gap-4 mt-2">
                <a href="mailto:jorgensenkervens@nexo-global.shop" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                  <MailIcon className="size-7 text-green-400" />
                </a>
                <a href="https://linkedin.com/in/jokerson" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                  <LinkedinIcon className="size-7 text-green-400" />
                </a>
                <a href="https://instagram.com/jokerson" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                  <InstagramIcon className="size-7 text-green-400" />
                </a>
                <a href="https://facebook.com/jokerson" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                  <FacebookIcon className="size-7 text-green-400" />
                </a>
                <a href="https://github.com/jokerson" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">
                  <GithubIcon className="size-7 text-green-400" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <AIAssistantButton />
    </>
  );
}
