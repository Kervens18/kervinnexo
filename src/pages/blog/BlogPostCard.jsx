import { Link } from "react-router-dom";

export default function BlogPostCard({ post }) {
  return (
    <div className="bg-white/5 rounded-xl overflow-hidden shadow-lg flex flex-col">
      <img src={post.cover} alt={post.title} className="h-48 w-full object-cover" />
      <div className="p-6 flex-1 flex flex-col">
        <h2 className="text-xl font-bold text-white mb-2">{post.title}</h2>
        <p className="text-white/80 mb-4 flex-1">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="mt-auto text-green-400 font-semibold hover:underline">Read More →</Link>
      </div>
    </div>
  );
}
