'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm z-50">
      <div className="text-center relative">
        <svg
          className="w-24 h-24 mx-auto mb-4 text-blue-600 dark:text-blue-400 animate-spin-slow"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="50" cy="50" r="40" opacity="0.1" />
          
          <g strokeLinecap="round">
            <circle cx="50" cy="15" r="4" fill="currentColor" />
            <circle cx="85" cy="50" r="4" fill="currentColor" />
            <circle cx="50" cy="85" r="4" fill="currentColor" />
            <circle cx="15" cy="50" r="4" fill="currentColor" />
            
            <path d="M 50 20 Q 70 30 75 50" opacity="0.8" />
            <path d="M 80 50 Q 70 70 50 80" opacity="0.8" />
            <path d="M 50 80 Q 30 70 25 50" opacity="0.8" />
            <path d="M 20 50 Q 30 30 50 20" opacity="0.8" />
          </g>
          
          <circle cx="50" cy="50" r="12" opacity="0.6" />
        </svg>
        
        <img
          src="/logo.png"
          alt="Logo"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10"
        />
        
        <p className="text-gray-600 dark:text-gray-400 mt-4 font-semibold">Loading...</p>
      </div>
    </div>
  );
}
