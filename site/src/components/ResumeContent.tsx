'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Footer from './Footer';
import { profile } from '@/data/profile';

export default function ResumeContent() {
  const [pdfUrl, setPdfUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setPdfUrl(profile.pdfUrl);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-400 mb-4"></div>
            <p className="text-xl text-emerald-100/70">Loading resume...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col">
      <section className="py-20 px-6 md:px-20 border-b border-emerald-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="terminal-label">Resume / {profile.name}</p>
              <h1 className="text-5xl md:text-6xl font-bold gradient-text">My Resume</h1>
              <p className="text-xl text-emerald-100/70">{profile.resumeSummary}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={pdfUrl}
                download={profile.pdfName}
                className="terminal-button inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
              <Link href="/about" className="terminal-button terminal-button-secondary">
                View Full Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex-1 py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="terminal-panel overflow-hidden shadow-lg">
            {pdfUrl ? (
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                className="w-full h-screen md:h-[800px] border-0"
                title="Resume PDF"
              />
            ) : (
              <div className="flex items-center justify-center h-96">
                <p className="text-emerald-100/70">Unable to load PDF</p>
              </div>
            )}
          </div>

          <div className="mt-8 terminal-panel p-6 text-center">
            <p className="text-emerald-100/70 mb-4">
              If the PDF viewer doesn&apos;t work, you can download the resume directly:
            </p>
            <a
              href={pdfUrl}
              download={profile.pdfName}
              className="terminal-button inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2m0 0v-8m0 8l-6-4m6 4l6-4" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
