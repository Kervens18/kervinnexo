import { BotIcon, BrainIcon, ZapIcon, SparklesIcon, PaletteIcon, ImageIcon, BadgePercentIcon, FilmIcon, InstagramIcon } from "lucide-react";
import { motion } from "framer-motion";

const cardMotion = {
    whileHover: {
        scale: 1.11,
        y: -18,
        rotate: -2,
        boxShadow: "0 16px 64px 0 rgba(16,255,16,0.30), 0 0 0 6px rgba(16,255,16,0.13)",
        transition: { type: "spring", stiffness: 420, damping: 28 },
    },
    whileTap: { scale: 0.97, y: 2, rotate: 0 },
};

const iconMotion = {
    whileHover: { scale: 1.32, rotate: 10, filter: "drop-shadow(0 0 18px #22ff22)" },
    whileTap: { scale: 1.13, rotate: 0 },
};

export default function Features() {
    return (
        <section className="mt-32 flex flex-col items-center relative">
            {/* Subtle floating sparkles background */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 0.18, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 1.2, type: "spring" }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 z-0"
            >
                <SparklesIcon className="size-40 text-green-400/70 blur-sm" />
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black text-white text-center mb-4 tracking-tight drop-shadow-[0_2px_24px_rgba(16,255,16,0.12)] z-10">
                Powerful Features for Your Success
            </h2>
            <p className="text-center text-xl text-white/80 mb-14 max-w-2xl z-10">
                Everything you need to launch, manage, and grow your digital business.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-5xl z-10">
                {/* AI Agent */}
                <motion.div
                    className="relative bg-gradient-to-br from-black/80 via-green-950/60 to-green-900/60 border border-green-400/20 rounded-3xl p-10 flex flex-col items-start gap-5 shadow-2xl backdrop-blur-xl overflow-hidden group"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0, type: "spring", stiffness: 320, damping: 70 }}
                    whileHover={cardMotion.whileHover}
                    whileTap={cardMotion.whileTap}
                >
                    <motion.div whileHover={iconMotion.whileHover} whileTap={iconMotion.whileTap} className="inline-block">
                        <BotIcon className="text-green-400 size-12 mb-3 drop-shadow-[0_0_16px_#22ff22]" />
                    </motion.div>
                    <div className="font-extrabold text-2xl text-white mb-1 tracking-tight">AI Agent</div>
                    <div className="text-white/90 text-lg">A smart assistant to guide, automate, and answer your users 24/7.</div>
                    <div className="absolute -right-8 -bottom-8 opacity-30 group-hover:opacity-60 transition-all duration-500">
                        <SparklesIcon className="size-24 text-green-400/40 blur" />
                    </div>
                </motion.div>
                {/* Memory System */}
                <motion.div
                    className="relative bg-gradient-to-br from-black/80 via-green-950/60 to-green-900/60 border border-green-400/20 rounded-3xl p-10 flex flex-col items-start gap-5 shadow-2xl backdrop-blur-xl overflow-hidden group"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 320, damping: 70 }}
                    whileHover={cardMotion.whileHover}
                    whileTap={cardMotion.whileTap}
                >
                    <motion.div whileHover={iconMotion.whileHover} whileTap={iconMotion.whileTap} className="inline-block">
                        <BrainIcon className="text-green-400 size-12 mb-3 drop-shadow-[0_0_16px_#22ff22]" />
                    </motion.div>
                    <div className="font-extrabold text-2xl text-white mb-1 tracking-tight">Memory System</div>
                    <div className="text-white/90 text-lg">Keeps track of user preferences and history for a personalized experience.</div>
                    <div className="absolute -left-8 -top-8 opacity-30 group-hover:opacity-60 transition-all duration-500">
                        <SparklesIcon className="size-20 text-green-400/40 blur" />
                    </div>
                </motion.div>
                {/* Real-Time Updates */}
                <motion.div
                    className="relative bg-gradient-to-br from-black/80 via-green-950/60 to-green-900/60 border border-green-400/20 rounded-3xl p-10 flex flex-col items-start gap-5 shadow-2xl backdrop-blur-xl overflow-hidden group col-span-1 md:col-span-2 lg:col-span-1"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70 }}
                    whileHover={cardMotion.whileHover}
                    whileTap={cardMotion.whileTap}
                >
                    <motion.div whileHover={iconMotion.whileHover} whileTap={iconMotion.whileTap} className="inline-block">
                        <ZapIcon className="text-green-400 size-12 mb-3 drop-shadow-[0_0_16px_#22ff22]" />
                    </motion.div>
                    <div className="font-extrabold text-2xl text-white mb-1 tracking-tight">Real-Time Updates</div>
                    <div className="text-white/90 text-lg">Instant notifications, live data, and seamless user interactions.</div>
                    <div className="absolute right-8 top-8 opacity-30 group-hover:opacity-60 transition-all duration-500">
                        <SparklesIcon className="size-16 text-green-400/40 blur" />
                    </div>
                </motion.div>
                {/* Logo Design */}
                <motion.div
                    className="relative bg-gradient-to-br from-black/80 via-green-950/60 to-green-900/60 border border-green-400/20 rounded-3xl p-10 flex flex-col items-start gap-5 shadow-2xl backdrop-blur-xl overflow-hidden group"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 320, damping: 70 }}
                    whileHover={cardMotion.whileHover}
                    whileTap={cardMotion.whileTap}
                >
                    <motion.div whileHover={iconMotion.whileHover} whileTap={iconMotion.whileTap} className="inline-block">
                        <PaletteIcon className="text-green-400 size-12 mb-3 drop-shadow-[0_0_16px_#22ff22]" />
                    </motion.div>
                    <div className="font-extrabold text-2xl text-white mb-1 tracking-tight">Logo Design</div>
                    <div className="text-white/90 text-lg">Unique, professional logos tailored to your brand and audience. Delivered in all formats with full copyright.</div>
                    <div className="absolute left-8 bottom-8 opacity-30 group-hover:opacity-60 transition-all duration-500">
                        <SparklesIcon className="size-16 text-green-400/40 blur" />
                    </div>
                </motion.div>
                {/* Flyers & Posters */}
                <motion.div
                    className="relative bg-gradient-to-br from-black/80 via-green-950/60 to-green-900/60 border border-green-400/20 rounded-3xl p-10 flex flex-col items-start gap-5 shadow-2xl backdrop-blur-xl overflow-hidden group"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 320, damping: 70 }}
                    whileHover={cardMotion.whileHover}
                    whileTap={cardMotion.whileTap}
                >
                    <motion.div whileHover={iconMotion.whileHover} whileTap={iconMotion.whileTap} className="inline-block">
                        <ImageIcon className="text-green-400 size-12 mb-3 drop-shadow-[0_0_16px_#22ff22]" />
                    </motion.div>
                    <div className="font-extrabold text-2xl text-white mb-1 tracking-tight">Flyers & Posters</div>
                    <div className="text-white/90 text-lg">Eye-catching flyers, posters, and banners for events, marketing, and social media. Print and digital ready.</div>
                    <div className="absolute right-8 bottom-8 opacity-30 group-hover:opacity-60 transition-all duration-500">
                        <SparklesIcon className="size-16 text-green-400/40 blur" />
                    </div>
                </motion.div>
                {/* Business Cards */}
                <motion.div
                    className="relative bg-gradient-to-br from-black/80 via-green-950/60 to-green-900/60 border border-green-400/20 rounded-3xl p-10 flex flex-col items-start gap-5 shadow-2xl backdrop-blur-xl overflow-hidden group"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 320, damping: 70 }}
                    whileHover={cardMotion.whileHover}
                    whileTap={cardMotion.whileTap}
                >
                    <motion.div whileHover={iconMotion.whileHover} whileTap={iconMotion.whileTap} className="inline-block">
                        <BadgePercentIcon className="text-green-400 size-12 mb-3 drop-shadow-[0_0_16px_#22ff22]" />
                    </motion.div>
                    <div className="font-extrabold text-2xl text-white mb-1 tracking-tight">Business Cards</div>
                    <div className="text-white/90 text-lg">Premium business card designs that make a lasting impression. Custom layouts, QR codes, and more.</div>
                    <div className="absolute left-8 top-8 opacity-30 group-hover:opacity-60 transition-all duration-500">
                        <SparklesIcon className="size-16 text-green-400/40 blur" />
                    </div>
                </motion.div>
                {/* Animation & Video */}
                <motion.div
                    className="relative bg-gradient-to-br from-black/80 via-green-950/60 to-green-900/60 border border-green-400/20 rounded-3xl p-10 flex flex-col items-start gap-5 shadow-2xl backdrop-blur-xl overflow-hidden group"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 320, damping: 70 }}
                    whileHover={cardMotion.whileHover}
                    whileTap={cardMotion.whileTap}
                >
                    <motion.div whileHover={iconMotion.whileHover} whileTap={iconMotion.whileTap} className="inline-block">
                        <FilmIcon className="text-green-400 size-12 mb-3 drop-shadow-[0_0_16px_#22ff22]" />
                    </motion.div>
                    <div className="font-extrabold text-2xl text-white mb-1 tracking-tight">Animation & Video</div>
                    <div className="text-white/90 text-lg">Animated logos, intro/outro videos, and motion graphics for a dynamic brand presence.</div>
                    <div className="absolute right-8 top-8 opacity-30 group-hover:opacity-60 transition-all duration-500">
                        <SparklesIcon className="size-16 text-green-400/40 blur" />
                    </div>
                </motion.div>
                {/* Social Media Kits */}
                <motion.div
                    className="relative bg-gradient-to-br from-black/80 via-green-950/60 to-green-900/60 border border-green-400/20 rounded-3xl p-10 flex flex-col items-start gap-5 shadow-2xl backdrop-blur-xl overflow-hidden group"
                    initial={{ y: 150, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 320, damping: 70 }}
                    whileHover={cardMotion.whileHover}
                    whileTap={cardMotion.whileTap}
                >
                    <motion.div whileHover={iconMotion.whileHover} whileTap={iconMotion.whileTap} className="inline-block">
                        <InstagramIcon className="text-green-400 size-12 mb-3 drop-shadow-[0_0_16px_#22ff22]" />
                    </motion.div>
                    <div className="font-extrabold text-2xl text-white mb-1 tracking-tight">Social Media Kits</div>
                    <div className="text-white/90 text-lg">Complete kits for Instagram, Facebook, and more: profile, cover, story templates, and highlight icons.</div>
                    <div className="absolute left-8 bottom-8 opacity-30 group-hover:opacity-60 transition-all duration-500">
                        <SparklesIcon className="size-16 text-green-400/40 blur" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
