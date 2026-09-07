'use client';

import { useState, useEffect, useRef } from 'react';
import { profile } from '@/data/profile';

export default function HireMe() {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={popoverRef} className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 font-mono">
      {/* Expanded Terminal Chat Popover */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-3rem)] sm:w-96 terminal-panel rounded-xl overflow-hidden shadow-2xl shadow-emerald-500/15 border border-emerald-500/40 bg-slate-950/98 backdrop-blur-xl animate-fadeIn">
          {/* Popover Header Bar */}
          <div className="px-4 py-3 border-b border-emerald-500/20 bg-black/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-300/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
              <span className="text-xs text-emerald-200/80 font-mono uppercase tracking-[0.16em] ml-2">
                direct-dispatch.sh
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-emerald-100/50 hover:text-emerald-300 transition text-sm p-1"
              aria-label="Close chat menu"
            >
              ✕
            </button>
          </div>

          {/* Popover Content */}
          <div className="p-5 space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-bold uppercase tracking-wider">Mobarak Hosen · Online</span>
              </div>
              <p className="text-xs text-emerald-100/70 leading-relaxed">
                Got a production blocker or scoping an IAM/DevOps project? Connect directly via your preferred channel:
              </p>
            </div>

            {/* Channels List */}
            <div className="space-y-2.5 pt-1">
              {/* WhatsApp Direct */}
              <a
                href={profile.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between p-3 rounded-lg border border-emerald-500/25 bg-emerald-500/5 hover:bg-emerald-500/15 hover:border-emerald-400/60 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-emerald-500/20 text-emerald-300 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-100 group-hover:text-emerald-300 transition">
                      WhatsApp Direct
                    </div>
                    <div className="text-[11px] text-emerald-100/60">Instant response · &lt; 15m</div>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 font-mono group-hover:translate-x-0.5 transition-transform">
                  ↗
                </span>
              </a>

              {/* Telegram Direct */}
              <a
                href={profile.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between p-3 rounded-lg border border-cyan-500/25 bg-cyan-500/5 hover:bg-cyan-500/15 hover:border-cyan-400/60 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-cyan-500/20 text-cyan-300 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.923z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-100 group-hover:text-cyan-200 transition">
                      Telegram Messenger
                    </div>
                    <div className="text-[11px] text-emerald-100/60">Confidential & async chat</div>
                  </div>
                </div>
                <span className="text-xs text-cyan-400 font-mono group-hover:translate-x-0.5 transition-transform">
                  ↗
                </span>
              </a>

              {/* Cal.com 15-Min Discovery Call */}
              <a
                href={profile.cal15min}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between p-3 rounded-lg border border-emerald-500/25 bg-black/40 hover:bg-emerald-500/10 hover:border-emerald-400/50 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-300 group-hover:scale-110 transition-transform">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-100 group-hover:text-emerald-200 transition">
                      15-Min Intro Call
                    </div>
                    <div className="text-[11px] text-emerald-100/60">Live calendar screen-share</div>
                  </div>
                </div>
                <span className="text-xs text-emerald-400 font-mono group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </a>
            </div>

            <div className="pt-2 border-t border-emerald-500/15 text-[10px] text-center text-emerald-100/40">
              Direct access · Zero junior delegation · No sales reps
            </div>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-4 sm:px-5 py-3 terminal-panel text-emerald-200 rounded-xl font-semibold border border-emerald-500/40 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 flex items-center gap-2.5 uppercase tracking-[0.12em] text-xs sm:text-sm bg-slate-950/95 backdrop-blur-md group"
        aria-label="Toggle real-time dispatch chat"
      >
        <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shrink-0"></span>
        <span>{isOpen ? '$ close_chat' : '$ chat_direct'}</span>
        <span className="text-emerald-400/80 text-[11px] hidden sm:inline font-mono">
          {isOpen ? '[esc]' : '--online'}
        </span>
      </button>
    </div>
  );
}
