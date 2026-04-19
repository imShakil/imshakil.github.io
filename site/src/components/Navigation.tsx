'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { profile } from '@/data/profile';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/resume', label: 'Resume' },
    { href: '/projects', label: 'Projects' },
    { href: '/activities', label: 'Activities' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isMounted && isScrolled
          ? 'bg-slate-950 border-b border-emerald-500/20 shadow-md shadow-emerald-500/5'
          : 'bg-slate-950/95 backdrop-blur-sm border-b border-emerald-500/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-3 pb-0">
        <div className="terminal-panel overflow-hidden rounded-b-none border-b-0">
          <div className="flex items-center justify-between gap-4 px-4 sm:px-5 pt-4 pb-3 border-b border-emerald-500/10 bg-[linear-gradient(180deg,rgba(12,26,20,0.95)_0%,rgba(6,12,9,0.96)_100%)]">
            <Link href="/" className="group inline-flex items-center gap-3 min-w-0">
              <div className="flex items-center gap-2 shrink-0">
                <span className="w-3 h-3 rounded-full bg-red-400/90 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]"></span>
                <span className="w-3 h-3 rounded-full bg-amber-300/90 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400/90 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]"></span>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.4em] text-emerald-100/45 hidden sm:block">
                  Terminal
                </p>
                <p className="text-sm sm:text-base font-mono text-emerald-100/90 tracking-[0.08em] truncate">
                  {`${profile.name.split(' ')[0].toLowerCase()}@macbook ~ %`}
                </p>
              </div>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-emerald-500/10 rounded-lg transition"
              aria-label="Toggle navigation"
            >
              <span className={`w-6 h-0.5 bg-emerald-400 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-emerald-400 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-emerald-400 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>

          <div className="hidden md:flex items-stretch gap-1 px-3 pt-3 bg-[linear-gradient(180deg,rgba(6,12,9,0.96)_0%,rgba(4,8,6,0.98)_100%)]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2.5 rounded-t-xl border border-b-0 transition-all duration-300 font-medium text-sm tracking-[0.04em] ${
                  isActive(item.href)
                    ? 'z-10 bg-emerald-500/12 text-emerald-100 border-emerald-400/30 shadow-[0_-8px_20px_rgba(51,243,140,0.08)]'
                    : 'text-emerald-100/55 bg-slate-950/55 border-emerald-500/10 hover:text-emerald-100 hover:bg-emerald-500/8'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex-1 border-b border-emerald-500/10"></div>
          </div>

          {isOpen && (
            <ul className="md:hidden flex flex-col gap-2 px-3 pb-4 pt-3 bg-[linear-gradient(180deg,rgba(6,12,9,0.96)_0%,rgba(4,8,6,0.98)_100%)] animate-slideInDown border-t border-emerald-500/10">
              {navItems.map((item) => (
                <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                    isActive(item.href)
                      ? 'bg-emerald-500/15 text-emerald-100 border border-emerald-400/20'
                      : 'text-emerald-100/70 hover:text-emerald-100 hover:bg-emerald-500/10 border border-transparent'
                  }`}
                >
                  {item.label}
                </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
