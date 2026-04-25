import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon, FacebookIcon, PhoneCallIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
    const location = useLocation();
    const isHome = location.pathname === "/";

    function scrollToSection(id) {
        if (isHome) {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    }

    function navLink(id, label) {
        if (isHome) {
            return (
                <a href={`#${id}`} onClick={e => { e.preventDefault(); scrollToSection(id); }} className="hover:text-lime-400 transition">&rsaquo; {label}</a>
            );
        } else {
            return (
                <Link to={`/#${id}`} className="hover:text-lime-400 transition">&rsaquo; {label}</Link>
            );
        }
    }

    return (
        <motion.footer className="w-full pt-16 mt-40 glass border-0 px-4 md:px-16 lg:px-24" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 w-full pb-10">
                <div>
                    <h3 className="font-bold text-lg mb-4">Lets talk about</h3>
                    <p className="text-gray-300 mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <a href="/blog" className="bg-lime-200 text-black px-5 py-2 rounded font-semibold flex items-center gap-2" target="_blank" rel="noopener noreferrer">Learn More <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' className='size-5'><path strokeLinecap='round' strokeLinejoin='round' d='M13.5 6H18m0 0v4.5M18 6l-7.5 7.5M19.5 19.5h-15v-15h7.5'/></svg></a>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Links</h3>
                    <ul className="space-y-2 text-gray-200">
                        <li>{navLink("home", "Home")}</li>
                        <li>{navLink("about", "About")}</li>
                        <li>{navLink("services", "Services")}</li>
                        <li>{navLink("projects", "Projects")}</li>
                        <li>{navLink("contact", "Contact")}</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Services</h3>
                    <ul className="space-y-2 text-gray-200">
                        <li>&rsaquo; Web Design</li>
                        <li>&rsaquo; Web Development</li>
                        <li>&rsaquo; Business Strategy</li>
                        <li>&rsaquo; Data Analysis</li>
                        <li>&rsaquo; Graphic Design</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-4">Have a Questions?</h3>
                    <ul className="space-y-3 text-gray-200">
                        <li className="flex items-center gap-2"><MapPinIcon className="size-4" /> Ensanchez espaillat ,Santiago RD</li>
                        <li className="flex items-center gap-2"><PhoneIcon className="size-4" /> +1 (829) 561-0230</li>
                        <li className="flex items-center gap-2"><MailIcon className="size-4" /> jorgensenkervens@nexo-global.shop</li>
                    </ul>
                    <div className="flex gap-3 mt-4">
                        <a href="https://x.com/JarbatteKe77147" target="_blank" rel="noopener noreferrer" className="bg-white/10 rounded-full p-2 hover:bg-lime-400 hover:text-black transition"><TwitterIcon className="size-5" /></a>
                        <a href="https://facebook.com/profile.php?id=61586377145463#" target="_blank" rel="noopener noreferrer" className="bg-white/10 rounded-full p-2 hover:bg-lime-400 hover:text-black transition"><FacebookIcon className="size-5" /></a>
                        <a href="https://wa.me/18295610230" target="_blank" rel="noopener noreferrer" className="bg-white/10 rounded-full p-2 hover:bg-lime-400 hover:text-black transition"><PhoneCallIcon className="size-5" /></a>
                        <a href="https://www.linkedin.com/in/jorgensen-kervens-jarbatte-2942a0237/" target="_blank" rel="noopener noreferrer" className="bg-white/10 rounded-full p-2 hover:bg-lime-400 hover:text-black transition"><LinkedinIcon className="size-5" /></a>
                        <a href="https://github.com/Kervens18" target="_blank" rel="noopener noreferrer" className="bg-white/10 rounded-full p-2 hover:bg-lime-400 hover:text-black transition"><GithubIcon className="size-5" /></a>
                    </div>
                </div>
            </div>
            <hr className="w-full border-white/20 mt-6" />
            <div className="flex flex-col md:flex-row items-center w-full justify-between gap-4 py-4 text-gray-300">
                <p>Copyright ©2026 All rights reserved | This template is made with <span className="text-lime-400">♥</span> by Nexo Global</p>
            </div>
        </motion.footer>
    );
}