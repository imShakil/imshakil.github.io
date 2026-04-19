import { Metadata } from 'next';
import { metadataConfig } from '@/lib/metadata-config';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { featuredProjects, getProjectThumbnail } from '@/data/projects';
import Footer from '@/components/Footer';
import AboutMe from '@/components/About';
import { profile } from '@/data/profile';
import { skillGroups } from '@/data/skills';

export const metadata: Metadata = metadataConfig.home();

const getProjectSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      <AboutMe />

      <section className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-emerald-100">Skills & Expertise</h2>
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
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-100">Featured Projects</h2>
            <Link
              href="/projects"
              className="text-emerald-300 hover:text-emerald-200 transition-colors flex items-center gap-2 font-mono uppercase tracking-[0.16em]"
            >
              See All Projects →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 3).map((project) => (
              <Link
                key={project.name}
                href={`/projects/${getProjectSlug(project.name)}`}
                className="group terminal-panel overflow-hidden flex flex-col"
              >
                <div className="relative h-40 bg-gray-300 dark:bg-slate-700 overflow-hidden">
                  <img
                    src={getProjectThumbnail(project)}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-emerald-300 group-hover:text-emerald-200 mb-3 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-emerald-100/70 mb-4 flex-1 text-sm">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="terminal-chip text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
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
