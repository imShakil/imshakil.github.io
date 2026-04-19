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
      <div className="w-full">
        <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 border-b border-emerald-500/14 bg-[linear-gradient(180deg,rgba(8,18,13,0.98)_0%,rgba(4,8,6,0.99)_100%)] shadow-[inset_0_-1px_0_rgba(51,243,140,0.06)]">
          <div className="flex items-center gap-4 min-w-0">
            <Link href="/" className="group inline-flex items-center gap-3 min-w-0">
              <div className="flex items-center gap-2 shrink-0">
                <span className="w-3 h-3 rounded-full bg-red-400/90 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]"></span>
                <span className="w-3 h-3 rounded-full bg-amber-300/90 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400/90 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset]"></span>
              </div>
              <div className="min-w-0">
                {/* <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.4em] text-emerald-100/45 hidden sm:block">
                  Terminal
                </p> */}
                <p className="text-sm sm:text-base font-mono text-emerald-100/90 tracking-[0.08em] truncate">
                  {`${profile.name.split(' ')[0].toLowerCase()}@desk.local ~ %`}
                </p>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-stretch gap-1 min-w-0 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2.5 rounded-lg border transition-all duration-300 font-medium text-sm tracking-[0.04em] whitespace-nowrap ${
                  isActive(item.href)
                    ? 'bg-emerald-500/14 text-emerald-100 border-emerald-400/30 shadow-[0_0_0_1px_rgba(51,243,140,0.06),0_10px_24px_rgba(51,243,140,0.08)]'
                    : 'text-emerald-100/55 bg-slate-950/35 border-emerald-500/10 hover:text-emerald-100 hover:bg-emerald-500/8'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-emerald-500/10 rounded-lg transition shrink-0"
            aria-label="Toggle navigation"
          >
            <span className={`w-6 h-0.5 bg-emerald-400 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-emerald-400 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-emerald-400 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {isOpen && (
            <ul className="md:hidden absolute left-0 right-0 top-full flex flex-col gap-2 px-4 pb-4 pt-3 bg-[linear-gradient(180deg,rgba(6,12,9,0.99)_0%,rgba(4,8,6,0.99)_100%)] animate-slideInDown border-b border-emerald-500/14 shadow-[0_18px_30px_rgba(0,0,0,0.35)]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
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
