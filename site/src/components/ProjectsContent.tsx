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
    <main className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      <section className="py-20 px-6 md:px-20 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto space-y-4 slide-in-up">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A collection of my DevOps, infrastructure, and development projects showcasing my expertise.
          </p>
        </div>
      </section>

      <section className="flex-1 py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Featured Highlights</h2>
            <FeaturedCarousel
              projects={featuredProjects}
            />
          </div>

          <div className="border-t border-gray-200 dark:border-slate-700 my-16"></div>
          
          <div className="mb-12 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">All Projects</h2>
            <div className="mb-16 flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px] p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-500/10 dark:to-blue-600/10 border border-blue-200 dark:border-blue-500/20 text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stats.total}</div>
                <div className="text-sm text-blue-700 dark:text-blue-300 mt-1">Total Projects</div>
              </div>
              <div className="flex-1 min-w-[200px] p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-500/10 dark:to-green-600/10 border border-green-200 dark:border-green-500/20 text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">{stats.openSource}</div>
                <div className="text-sm text-green-700 dark:text-green-300 mt-1">Open Source</div>
              </div>
              <div className="flex-1 min-w-[200px] p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-500/10 dark:to-orange-600/10 border border-orange-200 dark:border-orange-500/20 text-center">
                <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">{stats.private}</div>
                <div className="text-sm text-orange-700 dark:text-orange-300 mt-1">Private</div>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search projects by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <svg className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Categories</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedCategory === null
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600'
                  }`}
                >
                  All
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded text-xs font-medium transition ${
                      selectedTags.has(tag)
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-600'
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
                className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
              >
                Clear all filters
              </button>
            )}
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
                      className="group p-6 rounded-xl bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 hover:border-blue-500 dark:hover:border-blue-500/50 transition-all duration-300 card-hover flex flex-col"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors flex-1">
                          {project.name}
                        </h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{project.year}</span>
                      </div>
                      
                      <div className="mb-2">
                        <span className="inline-block px-2 py-1 rounded text-xs bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20">
                          {project.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-400 mb-4 flex-1 leading-relaxed">
                        {project.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded text-xs bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors font-semibold">
                        View Project →
                      </div>
                    </Link>
                  ) : (
                    <a
                      key={project.name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-6 rounded-xl bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 hover:border-blue-500 dark:hover:border-blue-500/50 transition-all duration-300 card-hover flex flex-col"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors flex-1">
                          {project.name}
                        </h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{project.year}</span>
                      </div>
                      
                      <div className="mb-2">
                        <span className="inline-block px-2 py-1 rounded text-xs bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20">
                          {project.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-400 mb-4 flex-1 leading-relaxed">
                        {project.desc}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded text-xs bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors font-semibold">
                        View on GitHub →
                      </div>
                    </a>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 text-lg">No projects found matching your filters.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory(null);
                    setSelectedTags(new Set());
                  }}
                  className="mt-4 text-purple-600 dark:text-purple-400 hover:underline"
                >
                  Clear filters and try again
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
