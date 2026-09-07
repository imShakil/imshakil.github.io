'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import SocialProofSection from '@/components/SocialProofSection';
import { featuredProjects, getProjectThumbnail } from '@/data/projects';
import Footer from '@/components/Footer';
import { profile } from '@/data/profile';
import { skillGroups } from '@/data/skills';

const getProjectSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
};

export default function Home() {

  return (
    <main className="min-h-screen">
      <Hero />

      {/* Services & Packages Section */}
      <ServicesSection />

      {/* Production Case Studies */}
      <section id="case-studies" className="py-20 px-6 md:px-20 terminal-panel border-y border-emerald-500/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16">
            <div className="terminal-divider flex-1 mr-8">
              <span className="terminal-section-prefix">$</span> production_systems --verified-architecture
            </div>
            <Link
              href="/projects"
              className="text-emerald-300 hover:text-emerald-200 transition-colors flex items-center gap-2 font-mono uppercase tracking-[0.16em] text-sm shrink-0"
            >
              Explore Case Studies →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.name}
                href={`/projects/${getProjectSlug(project.name)}`}
                className="group terminal-panel overflow-hidden flex flex-col hover:border-emerald-400/50 transition-all duration-300 focus:outline-none focus:border-emerald-400"
              >
                <div className="relative h-48 bg-gray-900 overflow-hidden border-b border-emerald-500/20">
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

                <div className="p-6 md:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-3 gap-2">
                      <h3 className="text-xl font-bold text-emerald-100 group-hover:text-emerald-300 transition-colors">
                        {project.name}
                      </h3>
                      {project.video && (
                        <span
                          className="shrink-0 p-1.5 rounded bg-red-500/20 text-red-200 border border-red-400/30 flex items-center"
                          title="Video walkthrough included"
                        >
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      )}
                    </div>

                    <p className="text-emerald-100/70 mb-5 text-sm leading-relaxed">{project.desc}</p>

                    {/* Impact / Solution Metric Callout */}
                    {project.impact && (
                      <div className="p-3.5 rounded bg-black/40 border border-emerald-500/20 mb-5 text-xs text-emerald-200/80">
                        <span className="text-emerald-400 font-mono font-bold block mb-1">
                          [Key Business Outcome]
                        </span>
                        {project.impact}
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="terminal-chip text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-emerald-500/15">
                      <span className="text-xs text-emerald-300 font-mono uppercase tracking-wider flex items-center gap-1">
                        View Architecture & Code →
                      </span>
                      <span className="text-xs font-mono text-emerald-100/40">{project.year}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Trust Section */}
      <SocialProofSection />

      {/* Technical Capabilities & Stack */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="terminal-divider mb-12">
            <span className="terminal-section-prefix">$</span> stack --inspect-tooling
          </div>
          <p className="text-center text-emerald-100/70 max-w-2xl mx-auto mb-16">{profile.summary}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((skillGroup) => (
              <div key={skillGroup.category} className="terminal-panel group p-6 hover:border-emerald-400/40 transition-colors">
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


      {/* High-Converting Final Call to Action */}
      <section className="py-24 px-6 md:px-20 border-t border-emerald-500/20 bg-gradient-to-b from-transparent to-black/60">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="terminal-divider mb-8 justify-center">
            <span className="terminal-section-prefix">$</span> schedule_consultation --open-calendar
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-100">
              Ready to Eliminate Bottlenecks & Scale?
            </h2>
            <p className="text-lg text-emerald-100/75 max-w-2xl mx-auto leading-relaxed">
              Whether you need to enable SAML Single Sign-On for enterprise clients, automate CI/CD pipelines, or cut cloud waste, let&apos;s map out a clear solution.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href={profile.cal15min}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-button flex items-center justify-center gap-2"
            >
              <span>Book Free 15-Min Discovery Call</span>
              <span className="text-emerald-300 font-mono text-xs">→</span>
            </a>
            <Link href="/contact" className="terminal-button terminal-button-secondary">
              Send Project Scope & Inquiry
            </Link>
          </div>
          <p className="text-xs font-mono text-emerald-200/50 pt-2">
            Direct 1-on-1 with Mobarak Hosen · No sales reps · Actionable engineering insights
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
