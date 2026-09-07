'use client';

import { services } from '@/data/services';
import { profile } from '@/data/profile';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-6 md:px-20 border-t border-emerald-500/20 bg-slate-950/40">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="terminal-divider justify-center mb-4">
            <span className="terminal-section-prefix">$</span> services --list-packages
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-100">
            How I Help Engineering Teams & SaaS Founders
          </h2>
          <p className="text-emerald-100/70 text-base md:text-lg">
            Stop losing hours to fragile manual deployments or missing enterprise deals due to security blocks.
            Choose a dedicated consulting package or tailored sprint.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="terminal-panel p-6 md:p-8 flex flex-col justify-between hover:border-emerald-400/50 transition-all duration-300 relative group"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 text-xs font-mono uppercase tracking-[0.14em] rounded bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
                    {service.badge}
                  </span>
                  <span className="text-xs font-mono text-emerald-200/60 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {service.timeline}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-emerald-100 mb-2 group-hover:text-emerald-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-emerald-100/80 text-sm mb-5 leading-relaxed font-medium">
                  {service.tagline}
                </p>

                {/* Pain Point Callout */}
                <div className="p-3.5 rounded bg-black/40 border border-emerald-500/15 mb-6 text-xs text-emerald-200/75 leading-relaxed">
                  <span className="text-emerald-400 font-mono font-bold mr-1.5">[The Problem Solved]</span>
                  {service.painPoint}
                </div>

                {/* Key Deliverables */}
                <div className="space-y-2.5 mb-6">
                  <p className="text-xs font-mono uppercase tracking-[0.16em] text-emerald-300">
                    &gt; deliverables:
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="text-sm text-emerald-100/70 flex items-start gap-2.5">
                        <span className="text-emerald-400 shrink-0 mt-0.5 font-mono">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-emerald-500/15 mb-6">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="terminal-chip text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Row */}
                <div className="flex items-center gap-3">
                  <a
                    href={profile.cal30min}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal-button text-xs md:text-sm flex-1 text-center py-2.5 flex items-center justify-center gap-1.5"
                  >
                    <span>$ book_sprint</span>
                    <span className="text-[10px] font-mono text-emerald-300">--30min</span>
                  </a>
                  <Link
                    href="/contact"
                    className="terminal-button terminal-button-secondary text-xs md:text-sm py-2.5 px-4"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 md:p-8 terminal-panel text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <h4 className="text-lg font-bold text-emerald-100">Have a custom or urgent infrastructure need?</h4>
            <p className="text-sm text-emerald-100/70">
              I also work on monthly DevOps retainers and rapid emergency incident resolution.
            </p>
          </div>
          <a
            href={profile.cal15min}
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-button shrink-0 whitespace-nowrap"
          >
            Schedule 15-Min Call →
          </a>
        </div>
      </div>
    </section>
  );
}
