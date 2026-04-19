'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HireMe() {
  const pathname = usePathname();
  
  if (pathname === '/contact') return null;

  return (
    <Link
      href="/contact"
      className="fixed bottom-8 right-8 px-6 py-3 terminal-panel text-emerald-200 rounded-lg font-semibold border border-emerald-500/30 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 z-40 animate-pulse flex items-center gap-2 font-mono uppercase tracking-[0.12em]"
    >
      <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
      $ hire_me
    </Link>
  );
}
