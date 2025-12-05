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
    <main className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      {/* Header */}
      <section className="py-20 px-6 md:px-20 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto space-y-4 slide-in-up">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
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
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">Loading posts...</p>
              </div>
            </div>
          ) : posts.length === 0 ? (
            <div className="bg-gray-100 dark:bg-slate-800/30 border border-gray-200 dark:border-slate-700/50 rounded-lg p-12 text-center">
              <p className="text-gray-600 dark:text-gray-400">No blog posts yet.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block p-6 rounded-xl bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 hover:border-blue-500 dark:hover:border-blue-500/50 transition-all duration-300 card-hover"
                >
                  <div className="space-y-3">
                    <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition inline-flex items-center gap-1 font-semibold pt-2">
                      Read More <span>→</span>
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
