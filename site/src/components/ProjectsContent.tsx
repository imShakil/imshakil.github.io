'use client';

import Link from 'next/link';
import { featuredProjects, openSourceProjects, getProjectThumbnail } from '@/data/projects';
import { profile } from '@/data/profile';
import Footer from '@/components/Footer';

const getProjectSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
};

export default function ProjectsContent() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <section className="py-20 px-6 md:px-20 border-b border-emerald-500/20">
        <div className="max-w-6xl mx-auto space-y-4 slide-in-up">
          <p className="terminal-label">$ production_systems --verified-architecture</p>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">Production Systems & Case Studies</h1>
          <p className="text-xl text-emerald-100/70 max-w-3xl leading-relaxed">
            Production-grade infrastructure platforms, zero-trust security gateways, and developer tools engineered and maintained by Mobarak Hosen.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs text-emerald-300">
              <span className="text-emerald-400 font-bold mr-2">✓</span> Production Hardened
            </div>
            <div className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs text-emerald-300">
              <span className="text-emerald-400 font-bold mr-2">✓</span> Zero-Trust Security
            </div>
            <div className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 font-mono text-xs text-emerald-300">
              <span className="text-emerald-400 font-bold mr-2">✓</span> Infrastructure as Code
            </div>
          </div>
        </div>
      </section>

      {/* Featured Production Case Studies */}
      <section className="flex-1 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="terminal-divider mb-12">
            <span className="terminal-section-prefix">$</span> production_systems --verified-outcomes
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {featuredProjects.map((project) => {
              const slug = getProjectSlug(project.name);

              return (
                <div
                  key={project.name}
                  className="group terminal-panel overflow-hidden flex flex-col hover:border-emerald-400/50 transition-all duration-300"
                >
                  <div className="relative h-52 bg-gray-900 overflow-hidden border-b border-emerald-500/20">
                    <img
                      src={getProjectThumbnail(project)}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded bg-black/80 text-emerald-300 border border-emerald-400/30">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-1 justify-between space-y-6">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h2 className="text-2xl font-bold text-emerald-100 group-hover:text-emerald-300 transition-colors">
                          {project.name}
                        </h2>
                        <span className="text-xs font-mono text-emerald-100/50 shrink-0 mt-1">{project.year}</span>
                      </div>

                      <p className="text-emerald-100/70 text-sm leading-relaxed mb-6">
                        {project.desc}
                      </p>

                      {/* Structured Outcome Callout */}
                      <div className="rounded-lg bg-black/50 border border-emerald-500/25 p-4 space-y-2.5 text-xs text-emerald-100/80 mb-6">
                        {project.problem && (
                          <div>
                            <span className="text-red-300/90 font-mono font-bold uppercase tracking-wider block">
                              [The Challenge]
                            </span>
                            <span className="text-emerald-100/70">{project.problem}</span>
                          </div>
                        )}
                        {project.solution && (
                          <div>
                            <span className="text-cyan-300/90 font-mono font-bold uppercase tracking-wider block">
                              [The Architecture]
                            </span>
                            <span className="text-emerald-100/70">{project.solution}</span>
                          </div>
                        )}
                        {project.impact && (
                          <div className="pt-1 border-t border-emerald-500/15">
                            <span className="text-emerald-400 font-mono font-bold uppercase tracking-wider block">
                              [Quantifiable Impact]
                            </span>
                            <span className="text-emerald-200 font-semibold">{project.impact}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="terminal-chip text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-emerald-500/15">
                      <Link
                        href={`/projects/${slug}`}
                        className="terminal-button w-full justify-center text-center font-mono uppercase tracking-[0.14em] text-xs inline-flex items-center gap-2"
                      >
                        $ view_architecture --details →
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Open Source Tool */}
          <div className="border-t border-emerald-500/20 pt-16 mb-20">
            <div className="terminal-divider mb-8">
              <span className="terminal-section-prefix">$</span> open_source --published-tools
            </div>
            <p className="text-emerald-100/70 text-sm mb-8 max-w-2xl">
              Published open-source security tooling for the developer community.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {openSourceProjects.map((item) => (
                <div key={item.name} className="terminal-panel p-6 flex flex-col justify-between hover:border-emerald-400/40 transition">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {item.category}
                      </span>
                      <span className="text-xs font-mono text-emerald-100/40">{item.year}</span>
                    </div>

                    <h3 className="text-lg font-bold text-emerald-100 mb-2">{item.name}</h3>
                    <p className="text-xs text-emerald-100/70 leading-relaxed mb-4">{item.desc}</p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded text-[10px] bg-slate-900 text-emerald-300/80 border border-emerald-500/20 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-300 hover:text-emerald-200 font-mono flex items-center gap-1 uppercase tracking-wider"
                      >
                        View on GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation CTA */}
          <div className="terminal-panel p-8 md:p-12 text-center relative overflow-hidden bg-gradient-to-b from-slate-900/90 to-slate-950">
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="terminal-label inline-block">$ schedule_consultation</span>
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-100">
                Need Similar Architecture Built For Your Team?
              </h2>
              <p className="text-emerald-100/70 text-sm md:text-base leading-relaxed">
                Whether you need enterprise Single Sign-On (SSO) integrated, Terraform pipelines deployed, or an infrastructure cost audit, let&apos;s map out your roadmap.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href={profile.cal15min}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-button w-full sm:w-auto inline-flex items-center justify-center gap-2 font-mono uppercase tracking-[0.14em] text-xs"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Book 15-Min Intro Call
                </a>
                <a
                  href={profile.cal30min}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="terminal-button terminal-button-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 font-mono uppercase tracking-[0.14em] text-xs"
                >
                  Book 30-Min Architecture Sprint
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
