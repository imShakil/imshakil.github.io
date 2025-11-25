'use client';
import Link from 'next/link';

interface AboutMeProps {
  showLink?: boolean;
}

export default function AboutMe({ showLink = true }: AboutMeProps) {
    
    return (

    <section className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-slate-900/50 border-y border-gray-200 dark:border-slate-800">
    <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center md:items-center">
        {/* Profile Image */}
        <div className="flex justify-center order-2 md:order-1">
            <div className="relative">
            <img
                src="/me.jpeg"
                alt="Mobarak Hosen"
                className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
            </div>
        </div>
        
        {/* About Content */}
        <div className="space-y-6 slide-in-up order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-center md:text-left">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center md:text-justify">
            I&apos;m a DevOps Engineer and Technical Support Specialist with hands-on experience in Docker, Kubernetes, Terraform, Ansible, and CI/CD automation. I enjoy designing infrastructure-as-code workflows, managing self-hosted GitLab environments, and helping teams deploy faster with confidence.
            </p>
            <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 text-sm border border-blue-200 dark:border-blue-500/30">DevOps</span>
            <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 text-sm border border-purple-200 dark:border-purple-500/30">Cloud Infrastructure</span>
            <span className="px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-500/20 text-pink-700 dark:text-pink-300 text-sm border border-pink-200 dark:border-pink-500/30">Automation</span>
            </div>
            {showLink && (
              <div className="pt-4 flex justify-center md:justify-start">
              <Link
                  href="/about"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-2"
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
