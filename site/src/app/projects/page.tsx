'use client';

import { projects } from '@/data/projects';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
  const featuredProjects = [
    {
      name: 'pacli - Secrets Management CLI',
      desc: 'Designed and developed a local-first secure CLI tool for managing secrets with master password protection. Implemented support for multiple secret types with URL shortening feature and SSH key-based authentication.',
      tags: ['CLI', 'Security', 'Encryption']
    },
    {
      name: 'LogPulse - Log Monitoring Tools',
      desc: 'Developed a log-monitoring system with user authentication, session management, and secure log downloads. Simplified debugging by providing centralized real-time log access for development teams.',
      tags: ['Monitoring', 'Logging', 'DevOps']
    },
    {
      name: 'Agama-Hello - Authentication Module',
      desc: 'Integrated hello.coop for OpenID social sign-in using Java, OAuth 2.0 with agama low-code orchestration.',
      tags: ['Authentication', 'OAuth 2.0', 'Java']
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      {/* Header */}
      <section className="py-20 px-6 md:px-20 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto space-y-4 slide-in-up">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A collection of my DevOps, infrastructure, and development projects showcasing my expertise.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Projects Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">All Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 rounded-xl bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 hover:border-blue-500 dark:hover:border-blue-500/50 transition-all duration-300 card-hover flex flex-col"
                >
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 mb-3 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 mb-4 flex-1 leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors font-semibold">
                    View Project →
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Highlights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <div
                  key={project.name}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-slate-800/50 dark:to-slate-900/50 border border-gray-200 dark:border-slate-700/50 hover:border-purple-500 dark:hover:border-purple-500/50 transition-all duration-300 card-hover"
                >
                  <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-3">
                    {project.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded text-xs bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
