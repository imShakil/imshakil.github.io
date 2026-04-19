'use client';

import { useEffect, useState } from 'react';
import { getProjectDemoLink, getProjectGithubLink, projects, type Project } from '@/data/projects';
import Footer from '@/components/Footer';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { loadProjectReadme } from '@/lib/readme-loader';
import Link from 'next/link';

const getProjectSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
};

export default function ProjectContent({ slug }: { slug: string }) {
  const [project, setProject] = useState<Project | null>(null);
  const [readmeContent, setReadmeContent] = useState<string | null>(null);
  const [isLoadingReadme, setIsLoadingReadme] = useState(false);

  useEffect(() => {
    const found = projects.find((p) => getProjectSlug(p.name) === slug);
    setProject(found || null);

    if (found?.readmeFile) {
      setIsLoadingReadme(true);
      loadProjectReadme(found.readmeFile)
        .then((content) => {
          setReadmeContent(content);
          setIsLoadingReadme(false);
        })
        .catch((error) => {
          console.error('Error loading readme:', error);
          setIsLoadingReadme(false);
        });
    }
  }, [slug]);

  if (!project) {
    return (
      <main className="min-h-screen flex flex-col">
        <section className="flex-1 py-20 px-6 md:px-20 flex items-center justify-center">
          <div className="text-center terminal-panel p-10">
            <h1 className="text-4xl font-bold text-emerald-100 mb-4">Project not found</h1>
            <Link href="/projects" className="text-emerald-300 hover:underline font-mono">
              $ back_to_projects
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  const githubLink = getProjectGithubLink(project);
  const demoLink = getProjectDemoLink(project);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open-source':
        return 'bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-300 border-green-200 dark:border-green-500/20';
      case 'working':
        return 'bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-500/20';
      case 'upcoming':
        return 'bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/20';
      case 'private':
        return 'bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-500/20';
      case 'completed':
        return 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/20';
      default:
        return 'bg-emerald-500/10 text-emerald-100/70 border-emerald-500/20';
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <section className="py-16 px-6 md:px-20 border-b border-emerald-500/20">
        <div className="max-w-4xl mx-auto">
          <p className="terminal-label mb-3">Project Details</p>
          <Link href="/projects" className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 mb-6 transition font-mono uppercase tracking-[0.12em] text-xs">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            $ back_to_projects
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-emerald-100">{project.name}</h1>
          <p className="text-emerald-100/70">{project.category} • {project.year}</p>
        </div>
      </section>

      <section className="flex-1 py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-200 border border-emerald-500/20 font-mono uppercase tracking-[0.12em]">
              {project.category}
            </span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/5 text-emerald-100/70 border border-emerald-500/20 font-mono">
              {project.year}
            </span>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>

          <div>
            {project.video && project.video !== '/' && (
              <div>
                <div className="relative w-full terminal-panel rounded-lg overflow-hidden aspect-video">
                  {project.video.includes('youtube') ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={project.video.replace('watch?v=', 'embed/').split('&')[0]}
                      title={`${project.name} Demo`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <video width="100%" height="100%" controls className="w-full h-full">
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </div>
            )}
            {readmeContent ? (
              <MarkdownRenderer content={readmeContent} projectReadmeFile={project.readmeFile} />
            ) : isLoadingReadme ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-400"></div>
              </div>
            ) : project.longDesc ? (
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <MarkdownRenderer content={project.longDesc} projectReadmeFile={project.readmeFile} />
              </div>
            ) : (
              <p className="text-emerald-100/75 leading-relaxed whitespace-pre-wrap text-lg">
                {project.desc}
              </p>
            )}
          </div>

          {project.tags && project.tags.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-emerald-100 mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-emerald-500/10 text-emerald-100/80 border border-emerald-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-8 border-t border-emerald-500/20">
            {demoLink && (
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 terminal-button font-mono uppercase tracking-[0.12em] text-xs inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3h7v7m0-7L10 14m-4 0H3v7h7" />
                </svg>
                $ open_demo
              </a>
            )}
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 terminal-button terminal-button-secondary font-mono uppercase tracking-[0.12em] text-xs inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                $ open_repo
              </a>
            )}
            <Link
              href="/projects"
              className="flex-1 terminal-button terminal-button-secondary font-mono uppercase tracking-[0.12em] text-xs text-center"
            >
              $ back
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
