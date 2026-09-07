'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import SocialProofSection from '@/components/SocialProofSection';
import { featuredProjects } from '@/data/projects';
import Footer from '@/components/Footer';
import { profile } from '@/data/profile';

export default function Home() {

  return (
    <main className="min-h-screen">
      <Hero />

      {/* Services & Packages Section */}
      <ServicesSection />

      {/* Case Studies — Teaser List */}
      <section id="case-studies" className="py-20 px-6 md:px-20 border-y border-emerald-500/20 bg-slate-950/40">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
            <div className="terminal-divider flex-1 mr-8">
              <span className="terminal-section-prefix">$</span> case_studies --verified-outcomes
            </div>
            <Link
              href="/projects"
              className="text-emerald-300 hover:text-emerald-200 transition-colors flex items-center gap-2 font-mono uppercase tracking-[0.16em] text-sm shrink-0"
            >
              View All →
            </Link>
          </div>

          <div className="divide-y divide-emerald-500/15">
            {featuredProjects.map((project) => (
              <Link
                key={project.name}
                href={`/projects/${project.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                className="group flex items-start justify-between gap-6 py-6 hover:bg-emerald-500/5 -mx-4 px-4 rounded-lg transition-colors"
              >
                <div className="flex items-start gap-4 min-w-0">
                  <span className="shrink-0 mt-0.5 px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded bg-emerald-500/10 text-emerald-300 border border-emerald-400/20">
                    {project.category}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-emerald-100 group-hover:text-emerald-300 transition-colors truncate">
                      {project.name}
                    </h3>
                    {project.impact && (
                      <p className="text-xs text-emerald-100/50 mt-0.5 font-mono line-clamp-1">
                        {project.impact}
                      </p>
                    )}
                  </div>
                </div>
                <span className="shrink-0 text-emerald-500/40 group-hover:text-emerald-300 group-hover:translate-x-1 transition-all text-lg mt-0.5">
                  →
                </span>
              </Link>
            ))}
          </div>

          <div className="pt-8 border-t border-emerald-500/15 mt-2">
            <Link
              href="/projects"
              className="terminal-button terminal-button-secondary inline-flex items-center gap-2 text-sm"
            >
              Full Architecture & Case Studies →
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <SocialProofSection />

      {/* Final Call to Action */}
      <section className="py-24 px-6 md:px-20 border-t border-emerald-500/20 bg-gradient-to-b from-transparent to-black/60">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="terminal-divider mb-8 justify-center">
            <span className="terminal-section-prefix">$</span> schedule_consultation --open-calendar
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-100">
              Ready to Eliminate Bottlenecks &amp; Scale?
            </h2>
            <p className="text-lg text-emerald-100/75 max-w-2xl mx-auto leading-relaxed">
              Whether you need to enable SAML Single Sign-On for enterprise clients, automate CI/CD pipelines, or cut cloud waste, let&apos;s map out a clear solution.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href={profile.cal15min}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-button flex items-center justify-center gap-2"
            >
              <span>Book Free 15-Min Discovery Call</span>
              <span className="text-emerald-300 font-mono text-xs">→</span>
            </a>
            <Link href="/contact" className="terminal-button terminal-button-secondary">
              Send Project Scope &amp; Inquiry
            </Link>
          </div>
          <p className="text-xs font-mono text-emerald-200/50 pt-2">
            Direct 1-on-1 with Mobarak Hosen · No sales reps · Actionable engineering insights
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
