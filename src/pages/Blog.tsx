import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'The Future of Spatial Audio: What to Expect in 2024',
      excerpt: 'Dive deep into the technological advancements that are reshaping how we experience sound.',
      image: 'https://images.unsplash.com/photo-1516280440503-a50f8e74921b?auto=format&fit=crop&q=80&w=800',
      date: 'Oct 12, 2023',
      author: 'Sarah Jenkins',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'How to Choose the Perfect Headphones for Your Lifestyle',
      excerpt: 'A comprehensive guide to finding the right audio gear based on your daily activities.',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
      date: 'Sep 28, 2023',
      author: 'David Chen',
      category: 'Guides'
    },
    {
      id: 3,
      title: 'Behind the Design: The Making of Aura Sonic Pro',
      excerpt: 'An exclusive look at the engineering and design process behind our flagship headphones.',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=800',
      date: 'Sep 15, 2023',
      author: 'Elena Rodriguez',
      category: 'Inside Vexo'
    }
  ];

  return (
    <div className="container mx-auto px-6 max-w-7xl py-24 min-h-[80vh]">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-display font-bold mb-4">Vexo <span className="text-primary">Journal</span></h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          Insights, news, and stories from the world of premium audio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-surface-light rounded-3xl overflow-hidden border border-white/5 group hover:border-primary/30 transition-colors">
            <Link to={`/blog/${post.id}`} className="block relative aspect-[4/3] overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                {post.category}
              </div>
            </Link>
            <div className="p-8">
              <div className="flex items-center gap-4 text-xs text-text-muted mb-4">
                <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
              </div>
              <Link to={`/blog/${post.id}`}>
                <h2 className="text-2xl font-display font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
              </Link>
              <p className="text-gray-400 mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors">
                Read Article <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
