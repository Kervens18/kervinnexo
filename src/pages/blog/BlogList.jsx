import BlogPostCard from "./BlogPostCard";
import posts from "./posts";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import StepsSection from "../../sections/steps-section";
import { motion } from "framer-motion";

export default function BlogList() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex flex-col justify-start items-stretch">
        {/* Green/black radial gradient background for blog page, matching home */}
        <div className="fixed inset-0 -z-20 pointer-events-none" style={{
          background: "radial-gradient(circle at 60% 40%, #000 0%, #003300 30%, #000 100%)"
        }} />
        <div className="flex-1 w-full pt-8 pb-20 px-4 relative">
          {/* Animated water droplets background */}
          <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.22 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            <motion.div
              className="absolute rounded-full bg-green-400/40 blur-2xl"
              style={{ width: 120, height: 120, left: -180, top: 10 }}
              animate={{ y: [0, 18, -12, 0], opacity: [0.18, 0.28, 0.18, 0.22] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute rounded-full bg-green-300/30 blur-2xl"
              style={{ width: 80, height: 80, left: 180, top: 30 }}
              animate={{ y: [0, -14, 10, 0], opacity: [0.16, 0.26, 0.16, 0.22] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute rounded-full bg-green-500/30 blur-3xl"
              style={{ width: 60, height: 60, left: 0, top: 60 }}
              animate={{ y: [0, 10, -8, 0], opacity: [0.14, 0.24, 0.14, 0.20] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </motion.div>
          <motion.h1
            className="relative text-4xl md:text-5xl font-extrabold text-white mb-10 text-center z-10"
            initial={{ y: -60, opacity: 0, scale: 0.85 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 320, damping: 40 }}
          >
            Nexo Global Blog
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map(post => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
          <StepsSection />
        </div>
      </div>
      <Footer />
    </>
  );
}
