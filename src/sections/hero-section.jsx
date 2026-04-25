import { PlayCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
    return (
        <div className="relative min-h-[80vh] flex flex-col md:flex-row items-center justify-center">
            {/* Background gradient */}
            <div className="fixed inset-0 -z-20 pointer-events-none" style={{
                background: "radial-gradient(circle at 60% 40%, #000 0%, #003300 30%, #000 100%)"
            }} />
            {/* Left text */}
            <div className="flex-1 flex flex-col items-center justify-center">
                <motion.div className="flex items-center gap-3 mt-32"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <span className="text-green-400 font-medium">Digital Solutions for Ambitious Brands</span>
                    <button className="btn glass py-1 px-3 text-xs border-green-400 text-green-400 hover:bg-green-400/20">
                        Launch your project
                    </button>
                </motion.div>
                <motion.h1 className="text-center text-4xl md:text-6xl mt-4 font-bold tracking-tight max-w-3xl"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    Build Your Dream Website or App<br />With a Professional Touch
                </motion.h1>
                <motion.p className="text-center text-green-200 text-lg max-w-xl mt-6"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    We design, develop, and launch high-impact digital platforms for entrepreneurs, businesses, and creators.
                </motion.p>

                <motion.div className="flex flex-col md:flex-row max-md:w-full items-center gap-4 md:gap-6 mt-8"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <Link to="/contact" className="btn max-md:w-full glass py-3 text-base font-semibold border-green-400 text-green-400 hover:bg-green-400/20 text-center">
                        Open Your Store
                    </Link>
                    <button className="btn max-md:w-full glass flex items-center justify-center gap-2 py-3 text-base font-semibold border-green-400 text-green-400 hover:bg-green-400/20">
                        <PlayCircleIcon className="size-5" />
                        Watch Demo
                    </button>
                </motion.div>
            </div>
            {/* Right image */}
            <motion.div
                className="flex-1 flex items-center justify-center mt-10 md:mt-0"
            >
                <motion.img
                    src="/assets/profile-photo.png"
                    alt="Jorgensen Kervens Jarbatte"
                    className="max-h-[600px] md:max-h-[700px] w-auto shadow-[0_8px_32px_0_rgba(0,128,0,0.35)] bg-transparent object-contain"
                    style={{ background: 'none' }}
                    animate={{
                        scale: [1, 1.06, 1.03, 1],
                        rotate: [0, 2, -2, 0],
                        filter: [
                            "drop-shadow(0 0 0px #22ff22)",
                            "drop-shadow(0 0 24px #22ff22)",
                            "drop-shadow(0 0 12px #22ff22)",
                            "drop-shadow(0 0 0px #22ff22)"
                        ]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>
        </div>
    );
}