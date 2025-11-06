'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Footer from '@/components/Footer';
import MarkdownRenderer from '@/components/MarkdownRenderer';

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`/blog/${slug}.md`);
        if (!response.ok) {
          throw new Error('Blog post not found');
        }
        const text = await response.text();
        setContent(text);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400">Loading...</p>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center gap-6">
          <p className="text-xl text-red-600 dark:text-red-400">Error: {error}</p>
          <Link
            href="/blog"
            className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-all duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      {/* Header */}
      <section className="py-12 px-6 md:px-20 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-6"
          >
            <span>←</span> Back to Blog
          </Link>
        </div>
      </section>

      {/* Content */}
      <article className="flex-1 max-w-4xl mx-auto px-6 py-20 w-full">
        <div className="prose prose-invert max-w-none">
          <MarkdownRenderer content={content} />
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-700/50">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:border-blue-500 dark:hover:border-blue-500/50 transition-all duration-300"
          >
            <span>←</span> Back to All Posts
          </Link>
        </div>
      </article>

      {/* Footer */}
      <Footer />
    </main>
  );
}
