'use client';

import Link from 'next/link';
import { profile } from '@/data/profile';
import { getTerminalPresence } from '@/lib/presence';

interface AboutMeProps {
  showLink?: boolean;
}

export default function AboutMe({ showLink = true }: AboutMeProps) {
  const terminalPresence = getTerminalPresence();

  return (
    <section className="py-20 px-6 md:px-20 terminal-panel border-y border-emerald-500/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center md:items-center">
          <div className="flex justify-center order-1 md:order-2">
            <div className="relative">
              <img
                src="/me.jpeg"
                alt={profile.name}
                className="w-80 h-80 rounded-2xl object-cover shadow-2xl border border-emerald-500/20"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-cyan-400/20"></div>
            </div>
          </div>

          <div className="space-y-6 slide-in-up order-2 md:order-1">
            <p className="terminal-label text-center md:text-left inline-flex items-center justify-center md:justify-start gap-2">
              <span className={`w-2 h-2 rounded-full ${terminalPresence.isOnline ? 'bg-emerald-400' : 'bg-red-400'}`}></span>
              {terminalPresence.label}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-100 text-center md:text-left">About Me</h2>
            <p className="text-lg text-emerald-100/75 leading-relaxed text-center md:text-justify">
              {profile.aboutSummary}
            </p>
            <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
              {profile.aboutTags.map((tag) => (
                <span key={tag} className="terminal-chip">
                  {tag}
                </span>
              ))}
            </div>
            {showLink && (
              <div className="pt-4 flex justify-center md:justify-start">
                <Link
                  href="/about"
                  className="text-emerald-300 hover:text-emerald-200 transition-colors flex items-center gap-2 font-mono uppercase tracking-[0.16em]"
                >
                  Learn More About Me →
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
