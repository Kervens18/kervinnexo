import { MenuIcon, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Features', href: '#features' },
        { name: 'Workflow', href: '#workflow' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '/contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <motion.nav className={`sticky top-0 z-50 flex w-full items-center justify-between px-0 py-3.5 md:px-0 lg:px-0 transition-colors ${isScrolled ? 'bg-black/90 backdrop-blur-lg' : 'bg-gradient-to-r from-black via-green-900 to-black'}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >

                <a href='/' className="flex items-center pl-0 md:pl-0 ml-0">
                    <span className="text-white font-bold text-lg tracking-tight">Nexo Global</span>
                </a>

                <div className='hidden items-center md:flex gap-10'>
                    {links.map((link) => (
                        <a key={link.name} href={link.href} className='transition text-white font-medium hover:text-green-400 px-2'>
                            {link.name}
                        </a>
                    ))}
                    <a href='/blog' className='ml-4 px-7 py-2 rounded-full border border-white/30 text-white font-semibold transition hover:bg-white/10' style={{background: 'none'}}>
                        Blog
                    </a>
                </div>

                <button onClick={() => setIsOpen(true)} className='transition active:scale-90 md:hidden'>
                    <MenuIcon className='size-6.5' />
                </button>
            </motion.nav>

            <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black/90 text-lg font-medium backdrop-blur-2xl transition duration-300 md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                {links.map((link) => (
                    <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className='text-white font-medium hover:text-green-400 px-2'>
                        {link.name}
                    </a>
                ))}

                <a href='/blog' className='ml-4 px-7 py-2 rounded-full border border-white/30 text-white font-semibold transition hover:bg-white/10' style={{background: 'none'}} onClick={() => setIsOpen(false)}>
                    Blog
                </a>

                <button onClick={() => setIsOpen(false)} className='rounded-md p-2 glass'>
                    <XIcon />
                </button>
            </div >
        </>
    );
}
