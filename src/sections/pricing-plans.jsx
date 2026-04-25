// ...import unique conservé plus bas si nécessaire...

import { useState } from "react";

const TABS = ["ABOUT", "EXPERIENCE", "EDUCATION", "SKILLS"];

export default function PricingPlans() {
    const [active, setActive] = useState("ABOUT");
    return (
        <section className="mt-32 flex flex-col items-center justify-center min-h-[60vh]">
            <div className="flex flex-col items-center w-full">
                <div className="text-5xl md:text-6xl font-bold text-center text-white mb-6 mt-2">
                    <span className="inline-block text-lime-400 text-6xl mb-4">✴</span><br />
                    I'm Jorgensen Kervens J, I'm a Brand & Webflow Designer,Developer, Currently residing in the Santiago de los cabarrelos Street Ensanchez espaillat, Kervens operates globally and is ready to take on any design challenge.
                </div>
                <div className="flex flex-wrap gap-4 justify-center mt-8 mb-12">
                    {TABS.map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActive(tab)}
                            className={`px-10 py-4 rounded-md text-lg font-semibold border-2 transition-all duration-200 ${active === tab ? "bg-lime-400 text-black border-lime-400 shadow-[0_2px_8px_0_rgba(198,255,26,0.2)]" : "bg-black/80 text-white border-black"}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="w-full max-w-3xl min-h-[200px] bg-black/60 rounded-xl p-8 shadow-lg">
                    {active === "ABOUT" && (
                        <div className="flex flex-col items-center text-center">
                            <img src="/assets/profile-photo.png" alt="Jorgensen Kervens Jarbatte" className="w-40 h-40 rounded-full object-cover mb-6" />
                            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-lime-400 tracking-tight">About</h2>
                            <p className="text-white/90 leading-relaxed text-lg mb-4">
                                Jorgensen Kervens Jarbatte, born on June 20, 2000, is a forward-thinking designer, developer, and digital strategist redefining how modern businesses operate in the digital space. With a multidisciplinary skill set that spans design, web development, systems analysis, and website management, he stands at the intersection of creativity, technology, and innovation.
                            </p>
                            <p className="text-white/90 leading-relaxed text-lg mb-4">
                                From an early stage, Jorgensen demonstrated a deep interest in digital systems and visual creation, which evolved into a professional pursuit of excellence in information technology. Today, he is recognized for building high-performance digital experiences that are not only visually compelling but also technically robust and strategically aligned with business goals.
                            </p>
                            <p className="text-white/90 leading-relaxed text-lg mb-4">
                                <span className="font-semibold text-lime-400">As a designer:</span> Jorgensen crafts bold, modern, and impactful visual identities that elevate brands and capture attention in competitive markets. His design philosophy is rooted in clarity, precision, and emotional engagement—ensuring every visual element serves a purpose.
                            </p>
                            <p className="text-white/90 leading-relaxed text-lg mb-4">
                                <span className="font-semibold text-lime-400">As a developer:</span> he engineers scalable, fast, and secure websites using modern technologies and best practices. His work emphasizes performance optimization, seamless user experience, and clean architecture, making every platform both powerful and reliable.
                            </p>
                            <p className="text-white/90 leading-relaxed text-lg mb-4">
                                <span className="font-semibold text-lime-400">As a digital analyst:</span> he goes beyond surface-level execution. Jorgensen studies systems, user behavior, and performance metrics to identify opportunities, solve complex problems, and implement intelligent solutions that drive measurable growth.
                            </p>
                            <p className="text-white/90 leading-relaxed text-lg mb-4">
                                <span className="font-semibold text-lime-400">In website management and IT operations:</span> he ensures stability, efficiency, and continuous improvement. From infrastructure to user interface, every detail is handled with precision and professionalism.
                            </p>
                            <p className="text-white/90 leading-relaxed text-lg mb-4">
                                What sets Jorgensen apart is his ability to combine technical expertise with creative vision. He does not simply build websites—he builds digital ecosystems designed to scale, perform, and dominate.
                            </p>
                            <p className="text-white/90 leading-relaxed text-lg mb-4">
                                Driven by ambition, discipline, and a relentless pursuit of excellence, Jorgensen Kervens Jarbatte is committed to pushing boundaries, embracing innovation, and delivering elite digital solutions for businesses ready to stand out and lead.
                            </p>
                            <div className="mt-6 text-gray-300 text-base">
                                <strong>Based in:</strong> Santiago, Dominican Republic<br/>
                                <strong>Languages:</strong> French, English, Spanish, creole
                            </div>
                        </div>
                    )}
                    {active === "EXPERIENCE" && (
                        <div>
                            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-lime-400 tracking-tight">Professional Experience</h2>
                            <div className="space-y-6">
                                <div>
                                    <div className="font-semibold text-white">Freelance Brand & Web Designer</div>
                                    <div className="text-gray-400 text-sm">2021 - Present</div>
                                    <div className="text-gray-200">Design and development of custom websites, branding, and digital solutions for international clients. Focus on UI/UX, performance, and business strategy.</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-white">Webflow Expert & Consultant</div>
                                    <div className="text-gray-400 text-sm">2022 - Present</div>
                                    <div className="text-gray-200">Building and optimizing Webflow sites, advanced animations, and CMS integrations for agencies and startups.</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-white">Digital Project Manager</div>
                                    <div className="text-gray-400 text-sm">2020 - 2021</div>
                                    <div className="text-gray-200">Led digital transformation projects, managed teams, and delivered high-impact solutions for SMEs.</div>
                                </div>
                            </div>
                        </div>
                    )}
                    {active === "EDUCATION" && (
                        <div>
                            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-lime-400 tracking-tight">Education</h2>
                            <div className="space-y-6">
                                <div>
                                    <div className="font-semibold text-white">BSc in Computer Science</div>
                                    <div className="text-gray-400 text-sm">2018 - 2024</div>
                                    <div className="text-gray-200">Software engineering, web development, systems analysis, and project management.</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-white">Webflow Designer Certification</div>
                                    <div className="text-gray-400 text-sm">2023</div>
                                    <div className="text-gray-200">Interface design, animation, and UX/UI best practices.</div>
                                </div>
                                <div>
                                    <div className="font-semibold text-white">Continuous Training</div>
                                    <div className="text-gray-400 text-sm">UI/UX & React</div>
                                    <div className="text-gray-200">Tech watch, advanced skills in modern frameworks.</div>
                                </div>
                            </div>
                        </div>
                    )}
                    {active === "SKILLS" && (
                        <div>
                            <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-lime-400 tracking-tight">Portfolio professionnel</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <a href="https://globaldor.com/" target="_blank" rel="noopener noreferrer" className="block bg-white/10 rounded-lg p-5 hover:bg-lime-400/20 transition border border-lime-400/30 shadow-lg">
                                    <img src="/assets/globaldor-home.png" alt="GlobalDor Screenshot" className="h-28 w-full object-cover mb-4 mx-auto rounded" />
                                    <div className="text-center font-bold text-white text-lg">GlobalDor</div>
                                    <div className="text-center text-gray-300 text-base">Plateforme de branding, web design & solutions digitales</div>
                                </a>
                                <a href="https://github.com/Kervens18/portfolio" target="_blank" rel="noopener noreferrer" className="block bg-white/10 rounded-lg p-5 hover:bg-lime-400/20 transition border border-lime-400/30 shadow-lg">
                                    <img src="/assets/company-logo-4.svg" alt="Portfolio" className="h-16 mb-4 mx-auto" />
                                    <div className="text-center font-bold text-white text-lg">Portfolio Personnel</div>
                                    <div className="text-center text-gray-300 text-base">Sélection de projets React, UI/UX, Webflow, branding</div>
                                </a>
                                <a href="https://veluxoshop.com/" target="_blank" rel="noopener noreferrer" className="block bg-white/10 rounded-lg p-5 hover:bg-lime-400/20 transition border border-lime-400/30 shadow-lg">
                                    <img src="/assets/veluxoshop-home.png" alt="VeluxoShop Screenshot" className="h-28 w-full object-cover mb-4 mx-auto rounded" />
                                    <div className="text-center font-bold text-white text-lg">VeluxoShop</div>
                                    <div className="text-center text-gray-300 text-base">Modern e-commerce platform for fashion and lifestyle products.</div>
                                </a>
                                <a href="https://themewagon.github.io/eflyer/" target="_blank" rel="noopener noreferrer" className="block bg-white/10 rounded-lg p-5 border border-lime-400/30 shadow-lg flex flex-col items-center hover:bg-lime-400/20 transition">
                                    <img src="/assets/eflyer-home.png" alt="eFlyer Screenshot" className="h-28 w-full object-cover mb-4 mx-auto rounded" />
                                    <div className="text-center font-bold text-white text-lg mb-1">eFlyer</div>
                                    <div className="text-center text-gray-300 text-base">Responsive e-commerce template for modern online stores.</div>
                                </a>
                            </div>
                            <div className="mt-8 text-center text-gray-400 text-sm">Pour plus de réalisations : <a href="https://github.com/Kervens18" target="_blank" rel="noopener noreferrer" className="underline hover:text-lime-400">Voir mon GitHub</a></div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}