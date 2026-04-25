import Navbar from "../components/navbar";
import Footer from "../components/footer";
import FaqSection from "../sections/faq-section";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex flex-col justify-start items-stretch">
        {/* Green/black radial gradient background for FAQ page, matching home */}
        <div className="fixed inset-0 -z-20 pointer-events-none" style={{
          background: "radial-gradient(circle at 60% 40%, #000 0%, #003300 30%, #000 100%)"
        }} />
        <div className="flex-1 w-full pt-8 pb-20 px-4">
          <FaqSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
