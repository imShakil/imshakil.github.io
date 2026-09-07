'use client';

import { testimonials, trustMetrics } from '@/data/testimonials';
import { profile } from '@/data/profile';

export default function SocialProofSection() {
  return (
    <section className="py-20 px-6 md:px-20 border-t border-emerald-500/20 bg-slate-950/60">
      <div className="max-w-6xl mx-auto space-y-16">
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

        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="terminal-divider justify-center mb-4">
            <span className="terminal-section-prefix">$</span> cat client_reviews.log
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-100">
            Trusted by Founders & Engineering Leaders
          </h2>
          <p className="text-emerald-100/70 text-base md:text-lg">
            Direct feedback on delivering zero-downtime releases, robust SAML Single Sign-On, and resilient cloud architectures.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={`${t.author}-${t.company}`}
              className="terminal-panel p-6 flex flex-col justify-between hover:border-emerald-400/40 transition-all duration-300 relative group"
            >
              <div>
                {/* Highlight Badge & 5 Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-300 gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <svg key={`${t.author}-star-${i}`} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {t.badge && (
                    <span className="text-[10px] font-mono uppercase tracking-[0.14em] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-400/20">
                      {t.badge}
                    </span>
                  )}
                </div>

                <div className="mb-3 text-xs font-mono text-emerald-300 font-semibold tracking-wide">
                  &gt; {t.highlight}
                </div>

                <p className="text-emerald-100/80 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-emerald-500/15 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-emerald-200">{t.author}</h4>
                  <p className="text-xs text-emerald-100/50">
                    {t.role} · {t.company}
                  </p>
                </div>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="text-center pt-4">
          <a
            href={profile.cal15min}
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-button inline-flex items-center gap-2"
          >
            <span>$ schedule_discovery_call</span>
            <span className="text-emerald-300 font-mono text-xs">--free-15-min</span>
          </a>
        </div>
      </div>
    </section>
  );
}
