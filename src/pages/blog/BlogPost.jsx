import { useParams } from "react-router-dom";
import posts from "./posts";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { marked } from "marked";
import { motion } from "framer-motion";

export default function BlogPost() {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);
  if (!post) return <div className="text-white p-10">Post not found.</div>;
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex flex-col justify-start items-stretch">
        {/* Animated green/black gradient background with water droplets */}
        <div className="fixed inset-0 -z-20 pointer-events-none" style={{ background: "radial-gradient(circle at 60% 40%, #000 0%, #003300 30%, #000 100%)" }} />
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
        <main className="flex-1 w-full pt-8 pb-20 px-4 flex flex-col items-center">
          <motion.div
            className="w-full max-w-3xl bg-gradient-to-br from-black/80 via-green-950/60 to-green-900/60 border border-green-400/20 rounded-3xl p-8 md:p-14 shadow-2xl backdrop-blur-xl mt-8"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 320, damping: 40 }}
          >
            <motion.h1
              className="text-3xl md:text-5xl font-extrabold text-green-300 mb-4 text-center"
              initial={{ y: -40, opacity: 0, scale: 0.92 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 320, damping: 40 }}
            >
              {post.title}
            </motion.h1>
            <div className="text-green-400 mb-6 text-center font-semibold">{post.date}</div>
            <div className="prose-premium" dangerouslySetInnerHTML={{ __html: marked.parse(post.content) }} />
          </motion.div>
        </main>
      </div>
      <Footer />
    </>
  );
}
