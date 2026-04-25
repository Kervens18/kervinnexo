import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
    const ref = useRef([]);
    const data = [
        {
            review: "Working with GlobalDor was a fantastic experience. The team is professional, creative, and always delivers on time!",
            name: "Sarah Williams",
            about: "Marketing Director, TechFlow",
            rating: 5,
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200',
        },
        {
            review: "Our new website is modern, fast, and has helped us attract more clients. Highly recommended!",
            name: "Carlos Mendez",
            about: "CEO, NowShop",
            rating: 5,
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200',
        },
        {
            review: "Excellent communication and support throughout the project. The results exceeded our expectations.",
            name: "Emily Chen",
            about: "Founder, StartUpX",
            rating: 5,
            image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60',
        },
        {
            review: "The automation tools they implemented saved us hours every week. Thank you!",
            name: "Jean Dupont",
            about: "Operations Manager, BizSolutions",
            rating: 5,
            image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60',
        },
        {
            review: "Creative, reliable, and always available for support. I recommend them to anyone serious about their online presence.",
            name: "Ana Silva",
            about: "Freelancer",
            rating: 5,
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop',
        },
        {
            review: "From branding to launch, everything was smooth and professional. Great job!",
            name: "David Smith",
            about: "Entrepreneur",
            rating: 5,
            image: 'https://images.unsplash.com/photo-1308214751196-bcfd4ca60f91?q=80&w=200',
        },
    ];
    return (
        <section className="mt-32 flex flex-col items-center">
            <SectionTitle
                title="What Our Clients Say"
                description="Real feedback from real clients. Discover why businesses trust GlobalDor for their digital projects."
            />
            <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {data.map((item, index) => (
                    <motion.div key={index} className='w-full max-w-88 space-y-5 rounded-lg glass p-5 hover:-translate-y-1'
                        initial={{ y: 150, opacity: 0 }}
                        ref={(el) => (ref.current[index] = el)}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                        onAnimationComplete={() => {
                            const card = ref.current[index];
                            if (card) {
                                card.classList.add("transition", "duration-300");
                            }
                        }}
                    >
                        <div className='flex items-center justify-between'>
                            <p className="font-medium">{item.about}</p>
                            <img className='size-10 rounded-full' src={item.image} alt={item.name} />
                        </div>
                        <p className='line-clamp-3'>“{item.review}”</p>
                        <p className='text-gray-300'>
                            - {item.name}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}