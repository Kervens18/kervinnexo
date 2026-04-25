import { useEffect, useRef } from "react";

export default function TrustedCompanies() {
    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;
        let animationId;
        let start = null;
        const speed = 60; // pixels per second

        function step(timestamp) {
            if (!start) start = timestamp;
            const elapsed = (timestamp - start) / 1000;
            el.scrollLeft = (elapsed * speed) % (el.scrollWidth / 2);
            animationId = requestAnimationFrame(step);
        }
        animationId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <section
            className="w-full py-6 overflow-hidden"
            style={{
                background: "radial-gradient(circle at 60% 40%, #000 0%, #003300 30%, #000 100%)"
            }}
        >
            <div
                ref={scrollRef}
                className="whitespace-nowrap overflow-x-scroll no-scrollbar"
                style={{ scrollBehavior: "auto" }}
            >
                <span className="text-3xl font-bold text-white mx-4">
                    Website Design &amp; Logo✴ Business Branding✴ Mobile Application✴ Website Design &amp; Logo✴ Business Branding✴ Mobile Application✴
                </span>
            </div>
            <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none !important; }
                .no-scrollbar { -ms-overflow-style: none !important; scrollbar-width: none !important; }
            `}</style>
        </section>
    );
}