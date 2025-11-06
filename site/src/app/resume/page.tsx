'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function ResumePage() {
  const [pdfUrl, setPdfUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set the PDF URL
    setPdfUrl('/resume/Mobarak_Hosen_Resume.pdf');
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400">Loading resume...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      {/* Header */}
      <section className="py-20 px-6 md:px-20 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold gradient-text">My Resume</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Comprehensive overview of my professional experience, skills, and achievements.
              </p>
            </div>

            {/* Download Button */}
            <div className="flex flex-wrap gap-4">
              <a
                href={pdfUrl}
                download="Mobarak_Hosen_Resume.pdf"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
              <Link
                href="/about"
                className="px-6 py-3 rounded-lg border border-blue-500/50 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-300 hover:border-blue-400"
              >
                View Full Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-100 dark:bg-slate-900 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-800 shadow-lg">
            {pdfUrl ? (
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                className="w-full h-screen md:h-[800px] border-0"
                title="Resume PDF"
              />
            ) : (
              <div className="flex items-center justify-center h-96">
                <p className="text-gray-600 dark:text-gray-400">Unable to load PDF</p>
              </div>
            )}
          </div>

          {/* Alternative Download Link */}
          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 rounded-lg text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If the PDF viewer doesn't work, you can download the resume directly:
            </p>
            <a
              href={pdfUrl}
              download="Mobarak_Hosen_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2m0 0v-8m0 8l-6-4m6 4l6-4" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
