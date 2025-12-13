'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HireMe() {
  const pathname = usePathname();
  
  if (pathname === '/contact') return null;

  return (
    <Link
      href="/contact"
      className="fixed bottom-8 right-8 px-6 py-3 bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 rounded-lg font-semibold border border-blue-200 dark:border-blue-500/30 hover:border-blue-400 dark:hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 z-40 animate-pulse flex items-center gap-2"
    >
      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
      Hire Me
    </Link>
  );
}
