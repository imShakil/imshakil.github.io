'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

export default function BlogContent() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="py-20 px-6 md:px-20 border-b border-emerald-500/20">
        <div className="max-w-4xl mx-auto space-y-4 slide-in-up">
          <p className="terminal-label">Blog Console</p>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">Blog</h1>
          <p className="text-xl text-emerald-100/70">
            Thoughts on DevOps, Cloud Infrastructure, and Software Engineering
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400 mb-4"></div>
                <p className="text-emerald-100/70 font-mono">$ loading_posts...</p>
              </div>
            </div>
          ) : posts.length === 0 ? (
            <div className="terminal-panel rounded-lg p-12 text-center">
              <p className="text-emerald-100/70 font-mono">[warn] no blog posts yet.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block p-6 terminal-panel hover:border-emerald-400/40 transition-all duration-300 card-hover"
                >
                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-emerald-200 group-hover:text-emerald-100 transition">
                      {post.title}
                    </h2>
                    <p className="text-sm text-emerald-100/50 font-mono">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <p className="text-emerald-100/70 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="text-emerald-300 group-hover:text-emerald-200 transition inline-flex items-center gap-1 font-semibold pt-2 font-mono uppercase tracking-[0.12em] text-xs">
                      $ read_more <span>→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
