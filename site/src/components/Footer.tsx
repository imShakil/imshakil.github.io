'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/imShakil', icon: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/imshakil', icon: 'linkedin' },
    { label: 'Medium', href: 'https://medium.com/@imShakil', icon: 'medium' },
    { label: 'Youtube', href: 'https://youtube.com/@ShakilOps', icon: 'youtube' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="sm:col-span-2 md:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Mobarak Hosen</h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-left sm:text-justify">
              DevOps Engineer passionate about cloud infrastructure, automation, and building scalable systems. 
              Always learning and sharing knowledge with the community.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:flex-col sm:space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-blue-400 hover:underline transition-all duration-200">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-blue-400 hover:underline transition-all duration-200">About</Link></li>
              <li><Link href="/projects" className="text-gray-300 hover:text-blue-400 hover:underline transition-all duration-200">Projects</Link></li>
              <li><Link href="/activities" className="text-gray-300 hover:text-blue-400 hover:underline transition-all duration-200">Activities</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 hover:underline transition-all duration-200">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 sm:flex-col sm:space-y-2">
              <li>
                <a href="mailto:contact@imshakil.me" className="text-gray-300 hover:text-blue-400 transition-all duration-200 flex items-center gap-2 hover:bg-slate-800/50 rounded px-2 py-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </a>
              </li>
              <li>
                <a href="/resume" className="text-gray-300 hover:text-blue-400 transition-all duration-200 flex items-center gap-2 hover:bg-slate-800/50 rounded px-2 py-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 sm:gap-6 py-8 border-t border-slate-700">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-lg bg-slate-800 text-gray-300 hover:text-blue-400 hover:bg-slate-700 transition-all duration-300 hover:scale-110"
              title={link.label}
            >
              {link.icon === 'github' && (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              )}
              {link.icon === 'linkedin' && (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.251 1.574 4.251 4.963v5.908zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.957.77-1.715 1.958-1.715 1.187 0 1.927.758 1.927 1.715 0 .953-.74 1.715-1.97 1.715zm1.946 11.597H3.392V9.806h3.891v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              )}
              {link.icon === 'medium' && (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.59 0-1.07-2.15-1.07-5.75s.48-5.75 1.07-5.75c.66 0 1.19 2.58 1.19 5.75z" />
                </svg>
              )}
              {link.icon === 'youtube' && (
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Copyright & Tech Stack */}
        <div className="text-center pt-8 border-t border-slate-700 space-y-2">
          <p className="text-gray-300 text-sm sm:text-base">
            © {currentYear} Mobarak Hosen · Made with ❤️
          </p>
          <p className="text-xs sm:text-sm text-gray-400">
            Powered by Next.js, Tailwind CSS, and AI
          </p>
          <p className="text-xs sm:text-sm text-gray-400">
            Deployed on GitHub Pages{currentDate && ` · Last updated ${currentDate}`}
          </p>
        </div>
      </div>
    </footer>
  );
}
