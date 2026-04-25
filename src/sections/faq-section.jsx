import SectionTitle from '../components/section-title';
import { ChevronDownIcon, ShieldCheckIcon } from 'lucide-react';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function FaqSection() {
    const [isOpen, setIsOpen] = useState(false);
    const data = [
        {
            question: 'Do I need coding or design experience to use Nexo Global?',
            answer: `Platforms like Nexo Global are built to handle the technical side for you.
They provide:
- Funnels (landing pages)
- CRM systems
- Automations (emails, WhatsApp, follow-ups)
- Ads & tracking setup
The goal is to give you a ready-to-use system, not make you build it yourself.`,
        },
        {
            question: 'What is Nexo Global and how does it help developers and designers?',
            answer: `Nexo Global is a digital platform that provides tools, systems, and infrastructure to build, launch, and manage online businesses, apps, and websites more efficiently.

How it helps developers:
- Speeds up development by offering pre-built systems (funnels, CRM, automation)
- Reduces time spent on backend setup and integrations
- Allows focus on core functionality and customization
- Supports scalable architectures for growing projects

How it helps designers:
- Provides structured frameworks to design modern, conversion-focused interfaces
- Makes it easier to customize layouts and user experiences
- Aligns design with marketing and user engagement goals
- Reduces technical barriers when implementing designs

Overall value:
Nexo Global acts as a bridge between design, development, and business, helping professionals launch projects faster, automate workflows, and deliver better digital experiences.`,
        },
        {
            question: 'Can I use Nexo Global features in my existing project?',
            answer: 'Yes, components can be integrated into HTML, React, Next.js, Vue, and other projects using Tailwind CSS.',
        },
        {
            question: 'How customizable are the generated components?',
            answer: 'Components are highly customizable with Tailwind utility classes, theming, and structural adjustments.',
        },
        {
            question: 'Does Nexo Global support team collaboration?',
            answer: "There's no clear documentation on built-in collaboration features. Check their support for team options.",
        },
        {
            question: 'Can I try Nexo Global before purchasing a plan?',
            answer: 'Yes, you can try Nexo Global with full access to features.',
        },
        // Developer & Designer Questions
        {
            question: 'Can you create a custom logo for my brand?',
            answer: 'Absolutely! I design unique, professional logos tailored to your brand identity and target audience. You will receive all formats (SVG, PNG, PDF) and full copyright rights.',
        },
        {
            question: 'Do you design flyers, posters, or business cards?',
            answer: 'Yes, I offer graphic design services for flyers, posters, business cards, banners, and all marketing materials. Designs are print-ready and optimized for both digital and physical use.',
        },
        {
            question: 'What information do you need to start a logo or flyer project?',
            answer: 'For logos: your business name, slogan, preferred colors, style inspirations, and target audience. For flyers: event details, images, text, and any branding guidelines. The more details, the better the result!',
        },
        {
            question: 'Can you redesign or modernize my existing logo or website?',
            answer: 'Yes, I can refresh your current logo, website, or any graphic asset to match modern trends and your evolving brand image.',
        },
        {
            question: 'How long does it take to deliver a logo, flyer, or website?',
            answer: 'Logo: 2-4 days. Flyer: 1-2 days. Website: 7-14 days depending on complexity. Rush delivery is possible—just ask!',
        },
        {
            question: 'What is included in the website design service?',
            answer: 'You get a fully responsive, modern website with custom design, animations, SEO optimization, and integration with your preferred tools (CRM, newsletter, analytics, etc).',
        },
        {
            question: 'Can you help with e-commerce, booking, or portfolio sites?',
            answer: 'Yes, I build e-commerce stores, booking platforms, portfolios, and any custom web application you need. All solutions are scalable and easy to manage.',
        },
        {
            question: 'Do you provide source files and copyrights for designs?',
            answer: 'Yes, you receive all source files (Figma, PSD, AI, etc) and full copyright ownership for every project delivered.',
        },
        {
            question: 'Can you animate logos or create social media kits?',
            answer: 'Of course! I can create animated logos, intro/outro videos, and complete social media kits (profile, cover, story templates, etc).',
        },
        {
            question: 'How do I get started with my project?',
            answer: 'Contact me with your project details. We will discuss your needs, goals, and timeline. You will receive a clear quote and project plan before we start.',
        },
        {
            question: 'What technologies do you use for development and design?',
            answer: 'For development: React, Next.js, Vite, Tailwind CSS, Node.js, and more. For design: Figma, Adobe XD, Photoshop, Illustrator, and After Effects.',
        },
        {
            question: 'Can you maintain or update my website after launch?',
            answer: 'Yes, I offer ongoing maintenance, updates, and support packages to keep your website secure and up-to-date.',
        },
        {
            question: 'How do payments and revisions work?',
            answer: 'You pay in milestones (deposit, delivery, final files). All packages include several free revisions to ensure you are 100% satisfied.',
        },
        {
            question: 'Can you work with international clients and in multiple languages?',
            answer: 'Yes, I work with clients worldwide and can deliver projects in English, French, and other languages as needed.',
        },
        {
            question: 'What if I need something not listed here?',
            answer: 'Just ask! I handle custom requests for any digital, design, or development need. Let’s discuss your project!',
        },
    ];

    return (
        <section className='mt-32'>
            <SectionTitle title="Frequently Asked Questions" description="Everything you need to know about Nexo Global. Premium support, transparent answers, and expert guidance." />
            <div className='flex flex-col items-center mb-10'>
                <div className="flex items-center gap-3 mb-6">
                    <ShieldCheckIcon className="text-green-400 size-8" />
                    <span className="text-lg font-semibold text-green-300 tracking-wide uppercase">Trusted by Professionals</span>
                </div>
            </div>
            <div className='mx-auto mt-8 space-y-6 w-full max-w-2xl'>
                {data.map((item, index) => (
                    <motion.div key={index}
                        className={`relative rounded-2xl border border-green-700/30 bg-gradient-to-br from-black/80 via-green-950/60 to-green-900/60 shadow-xl backdrop-blur-lg transition-all duration-300 ${isOpen === index ? 'ring-2 ring-green-400/40' : ''}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <button
                            className='flex w-full items-center justify-between gap-4 p-6 font-semibold text-lg text-white hover:bg-green-900/20 rounded-2xl transition focus:outline-none'
                            onClick={() => setIsOpen(isOpen === index ? null : index)}
                            aria-expanded={isOpen === index}
                        >
                            <span>{item.question}</span>
                            <ChevronDownIcon className={`size-6 transition-all shrink-0 duration-400 ${isOpen === index ? 'rotate-180 text-green-400' : 'text-green-300'}`} />
                        </button>
                        <div className={`px-6 text-base text-white/90 transition-all duration-400 overflow-hidden ${isOpen === index ? 'pt-2 pb-6 max-h-96' : 'max-h-0'}`}
                            style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.01em' }}>
                            {item.answer}
                        </div>
                        {isOpen === index && <div className="absolute right-6 top-6 w-3 h-3 bg-green-400 rounded-full shadow-lg animate-pulse" />}
                    </motion.div>
                ))}
            </div>
        </section>
    );
}