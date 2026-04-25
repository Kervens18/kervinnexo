import AIAssistantButton from "./components/ai-assistant-button";
import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroSection from "./sections/hero-section";
import FaqSection from "./sections/faq-section";
import TrustedCompanies from "./sections/trusted-companies";
import Features from "./sections/features";
import WorkflowSteps from "./sections/workflow-steps";
import Testimonials from "./sections/testimonials";
import PricingPlans from "./sections/pricing-plans";
import StepsSection from "./sections/steps-section";
import { Routes, Route } from "react-router-dom";
import BlogIndex from "./pages/blog/index";
import BlogPost from "./pages/blog/BlogPost";
import FAQPage from "./pages/faq";
import ContactPage from "./pages/contact";
import ContactSection from "./sections/contact-section";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <LenisScroll />
                    <Navbar />
                    <div className="fixed inset-0 overflow-hidden -z-20 pointer-events-none">
                        <div className="absolute rounded-full top-80 left-2/5 -translate-x-1/2 size-130 bg-[#D10A8A] blur-[100px]" />
                        <div className="absolute rounded-full top-80 right-0 -translate-x-1/2 size-130 bg-[#2E08CF] blur-[100px]" />
                        <div className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 size-130 bg-[#F26A06] blur-[100px]" />
                    </div>
                    <main className='px-4'>
                        <section id="home"><HeroSection /></section>
                        <section id="trusted"><TrustedCompanies /></section>
                        <section id="features"><Features /></section>
                        <section id="workflow"><WorkflowSteps /></section>
                        <section id="testimonials"><Testimonials /></section>
                        <section id="faq"><FaqSection /></section>
                        <section id="steps"><StepsSection /></section>
                        <section id="pricing"><PricingPlans /></section>
                        {/* <section id="cta"><CallToAction /></section> */}
                        <section id="contact"><ContactSection /></section>
                    </main>
                    <Footer />
                    <AIAssistantButton />
                </>
            } />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    );
}