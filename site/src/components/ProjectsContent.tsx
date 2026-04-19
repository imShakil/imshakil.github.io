'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { projects, featuredProjects, categories, getAllTags } from '@/data/projects';
import Footer from '@/components/Footer';
import FeaturedCarousel from '@/components/FeaturedCarousel';

const getProjectSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
};

export default function ProjectsContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const allTags = getAllTags();

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = 
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.desc.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !selectedCategory || project.category === selectedCategory;
      
      const matchesTags = selectedTags.size === 0 || 
        project.tags.some(tag => selectedTags.has(tag));
      
      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [searchQuery, selectedCategory, selectedTags]);

  const toggleTag = (tag: string) => {
    const newTags = new Set(selectedTags);
    if (newTags.has(tag)) {
      newTags.delete(tag);
    } else {
      newTags.add(tag);
    }
    setSelectedTags(newTags);
  };

  const stats = {
    total: projects.length,
    openSource: projects.filter(p => p.status === 'open-source').length,
    working: projects.filter(p => p.status === 'working').length,
    private: projects.filter(p => p.status === 'private').length,
  };

  const getProjectLink = (project: typeof projects[0]) => {
    const isPrivateOrFeatured = project.status === 'private' || project.featured;
    if (isPrivateOrFeatured) {
      return `/projects/${getProjectSlug(project.name)}`;
    }
    return project.link;
  };

  return (
    <main className="min-h-screen flex flex-col">
      <section className="py-20 px-6 md:px-20 border-b border-emerald-500/20">
        <div className="max-w-6xl mx-auto space-y-4 slide-in-up">
          <p className="terminal-label">Project Console</p>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">Projects</h1>
          <p className="text-xl text-emerald-100/70">
            A collection of my DevOps, infrastructure, and development projects showcasing my expertise.
          </p>
        </div>
      </section>

      <section className="flex-1 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-emerald-100">Featured Highlights</h2>
            <FeaturedCarousel
              projects={featuredProjects}
            />
          </div>

          <div className="border-t border-emerald-500/20 my-16"></div>
          
          <div className="mb-12 space-y-6 terminal-panel overflow-hidden">
            <div className="px-5 py-3 border-b border-emerald-500/20 bg-black/20 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-300/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400/80"></span>
              </div>
              <p className="text-xs text-emerald-200/70 font-mono uppercase tracking-[0.2em]">projects-index.sh</p>
            </div>

            <div className="p-6 md:p-8 space-y-6">
            <h2 className="text-3xl font-bold text-emerald-100">All Projects</h2>
            <div className="mb-16 flex flex-wrap gap-4">
              <div className="flex-1 min-w-[180px] p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 text-center">
                <div className="text-3xl font-bold text-emerald-300 font-mono">{stats.total}</div>
                <div className="text-xs text-emerald-200/70 mt-1 uppercase tracking-[0.15em]">Total Projects</div>
              </div>
              <div className="flex-1 min-w-[180px] p-5 rounded-xl border border-green-500/20 bg-green-500/5 text-center">
                <div className="text-3xl font-bold text-green-300 font-mono">{stats.openSource}</div>
                <div className="text-xs text-green-200/70 mt-1 uppercase tracking-[0.15em]">Open Source</div>
              </div>
              <div className="flex-1 min-w-[180px] p-5 rounded-xl border border-amber-500/20 bg-amber-500/5 text-center">
                <div className="text-3xl font-bold text-amber-300 font-mono">{stats.working}</div>
                <div className="text-xs text-amber-200/70 mt-1 uppercase tracking-[0.15em]">Working</div>
              </div>
              <div className="flex-1 min-w-[180px] p-5 rounded-xl border border-orange-500/20 bg-orange-500/5 text-center">
                <div className="text-3xl font-bold text-orange-300 font-mono">{stats.private}</div>
                <div className="text-xs text-orange-200/70 mt-1 uppercase tracking-[0.15em]">Private</div>
              </div>
            </div>

            <div className="relative">
              <p className="text-xs font-mono uppercase tracking-[0.18em] text-emerald-300 mb-2">&gt; search</p>
              <input
                type="text"
                placeholder="Search projects by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="terminal-input pr-11 font-mono"
              />
              <svg className="absolute right-3 top-9 w-5 h-5 text-emerald-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.18em] text-emerald-300 mb-3">&gt; categories</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition font-mono ${
                    selectedCategory === null
                      ? 'bg-emerald-500/20 text-emerald-100 border border-emerald-400/40'
                      : 'bg-emerald-500/5 text-emerald-100/70 border border-emerald-500/20 hover:bg-emerald-500/10'
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition font-mono ${
                      selectedCategory === category
                        ? 'bg-emerald-500/20 text-emerald-100 border border-emerald-400/40'
                        : 'bg-emerald-500/5 text-emerald-100/70 border border-emerald-500/20 hover:bg-emerald-500/10'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.18em] text-emerald-300 mb-3">&gt; technologies</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded text-xs font-medium transition font-mono ${
                      selectedTags.has(tag)
                        ? 'bg-emerald-500/20 text-emerald-100 border border-emerald-400/40'
                        : 'bg-emerald-500/5 text-emerald-100/70 border border-emerald-500/20 hover:bg-emerald-500/10'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {(searchQuery || selectedCategory || selectedTags.size > 0) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                  setSelectedTags(new Set());
                }}
                className="text-sm text-emerald-300 hover:text-emerald-200 hover:underline font-mono"
              >
                $ clear_filters
              </button>
            )}
            </div>
          </div>

          <div className="space-y-4">
            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredProjects.map((project) => {
                  const isPrivateOrFeatured = project.status === 'private' || project.featured;
                  const href = getProjectLink(project);
                  
                  return isPrivateOrFeatured ? (
                    <Link
                      key={project.name}
                      href={href}
                      className="group p-6 terminal-panel hover:border-emerald-400/40 transition-all duration-300 card-hover flex flex-col"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-emerald-200 group-hover:text-emerald-100 transition-colors flex-1">
                          {project.name}
                        </h3>
                        <span className="text-xs text-emerald-100/50 ml-2 font-mono">{project.year}</span>
                      </div>
                      
                      <div className="mb-2">
                        <span className="inline-block px-2 py-1 rounded text-xs bg-emerald-500/10 text-emerald-200 border border-emerald-500/20 font-mono uppercase tracking-[0.12em]">
                          {project.category}
                        </span>
                      </div>
                      
                      <p className="text-emerald-100/70 mb-4 flex-1 leading-relaxed">
                        {project.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded text-xs bg-emerald-500/10 text-emerald-100/80 border border-emerald-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-emerald-300 group-hover:text-emerald-200 transition-colors font-semibold font-mono uppercase tracking-[0.12em] text-xs">
                        $ view_project
                      </div>
                    </Link>
                  ) : (
                    <a
                      key={project.name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-6 terminal-panel hover:border-emerald-400/40 transition-all duration-300 card-hover flex flex-col"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-emerald-200 group-hover:text-emerald-100 transition-colors flex-1">
                          {project.name}
                        </h3>
                        <span className="text-xs text-emerald-100/50 ml-2 font-mono">{project.year}</span>
                      </div>
                      
                      <div className="mb-2">
                        <span className="inline-block px-2 py-1 rounded text-xs bg-emerald-500/10 text-emerald-200 border border-emerald-500/20 font-mono uppercase tracking-[0.12em]">
                          {project.category}
                        </span>
                      </div>
                      
                      <p className="text-emerald-100/70 mb-4 flex-1 leading-relaxed">
                        {project.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded text-xs bg-emerald-500/10 text-emerald-100/80 border border-emerald-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-emerald-300 group-hover:text-emerald-200 transition-colors font-semibold font-mono uppercase tracking-[0.12em] text-xs">
                        $ open_repo
                      </div>
                    </a>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-emerald-100/70 text-lg font-mono">[warn] no projects found matching filters.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                    setSelectedTags(new Set());
                  }}
                  className="mt-4 text-emerald-300 hover:text-emerald-200 hover:underline font-mono"
                >
                  $ reset_filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
