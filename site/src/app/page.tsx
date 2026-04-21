'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { featuredProjects, getProjectThumbnail } from '@/data/projects';
import Footer from '@/components/Footer';
import AboutMe from '@/components/About';
import { profile } from '@/data/profile';
import { skillGroups } from '@/data/skills';

const getProjectSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
};

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen">
      <Hero />

      <AboutMe />

      <section className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="terminal-divider mb-12">
            <span className="terminal-section-prefix">$</span> skills --list
          </div>
          <p className="text-center text-emerald-100/70 max-w-2xl mx-auto mb-16">{profile.summary}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((skillGroup) => (
              <div key={skillGroup.category} className="terminal-panel group p-6">
                <h3 className="text-lg font-semibold text-emerald-300 mb-4 uppercase tracking-[0.14em]">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="terminal-chip text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20 terminal-panel border-y border-emerald-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div className="terminal-divider flex-1 mr-8">
              <span className="terminal-section-prefix">$</span> projects --featured
            </div>
            <Link
              href="/projects"
              className="text-emerald-300 hover:text-emerald-200 transition-colors flex items-center gap-2 font-mono uppercase tracking-[0.16em]"
            >
              See All Projects →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 3).map((project) => (
              <div
                key={project.name}
                onClick={() => router.push(`/projects/${getProjectSlug(project.name)}`)}
                onKeyDown={(e) => e.key === 'Enter' && router.push(`/projects/${getProjectSlug(project.name)}`)}
                role="link"
                tabIndex={0}
                className="group terminal-panel overflow-hidden flex flex-col cursor-pointer"
              >
                <div className="relative h-40 bg-gray-300 dark:bg-slate-700 overflow-hidden">
                  <img
                    src={getProjectThumbnail(project)}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-emerald-300 group-hover:text-emerald-200 transition-colors">
                      {project.name}
                    </h3>
                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="ml-2 shrink-0 p-1.5 rounded bg-red-500/20 hover:bg-red-500/30 text-red-200 border border-red-400/30 transition flex items-center"
                        title="Watch video"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-emerald-100/70 mb-4 flex-1 text-sm">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="terminal-chip text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="px-3 py-1.5 text-xs bg-emerald-500/20 text-emerald-100 rounded border border-emerald-400/30 font-mono uppercase tracking-[0.12em] mt-auto w-fit">
                    $ details
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="terminal-divider mb-8 justify-center">
            <span className="terminal-section-prefix">$</span> connect --open-to-work
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-100">Let&apos;s Work Together</h2>
            <p className="text-lg text-emerald-100/70">{profile.connectSummary}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`mailto:${profile.email}`} className="terminal-button">
              Get In Touch
            </a>
            <Link href="/resume" className="terminal-button terminal-button-secondary">
              View Resume
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
