'use client';

import { trustMetrics } from '@/data/testimonials';
import { profile } from '@/data/profile';

export default function SocialProofSection() {
  return (
    <section className="py-20 px-6 md:px-20 border-t border-emerald-500/20 bg-slate-950/60">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Label */}
        <div className="terminal-divider justify-center">
          <span className="terminal-section-prefix">$</span> verified_track_record --metrics
        </div>

        {/* Trust Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trustMetrics.map((metric) => (
            <div
              key={metric.label}
              className="terminal-panel p-5 text-center flex flex-col justify-center border-emerald-500/20 hover:border-emerald-400/40 transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold font-mono text-emerald-300 mb-1">
                {metric.value}
              </div>
              <div className="text-xs md:text-sm text-emerald-100/60 font-mono tracking-wide">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* LinkedIn Proof */}
        <div className="text-center space-y-3">
          <p className="text-sm text-emerald-100/60 font-mono">
            Verified client recommendations available on LinkedIn
          </p>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition font-mono text-sm underline underline-offset-4"
          >
            View LinkedIn Recommendations ↗
          </a>
        </div>
      </div>
    </section>
  );
}
