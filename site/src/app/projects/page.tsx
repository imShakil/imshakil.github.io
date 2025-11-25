'use client';

import { useState, useMemo } from 'react';
import { projects, featuredProjects, categories, getAllTags } from '@/data/projects';
import Footer from '@/components/Footer';
import ProjectModal from '@/components/ProjectModal';

interface Project {
  name: string;
  desc: string;
  link: string;
  video?: string;
  tags?: string[];
  status: string;
  year: string;
  featured?: boolean;
  category: string;
  readmeFile?: string;
  longDesc?: string;
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const allTags = getAllTags();

  // Filter projects based on search and filters
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

  // Calculate statistics
  const stats = {
    total: projects.length,
    openSource: projects.filter(p => p.status === 'open-source').length,
    private: projects.filter(p => p.status === 'private').length,
  };

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
         
          {/* Featured Projects */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Featured Highlights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <button
                  key={project.name}
                  onClick={() => {
                    setSelectedProject(project);
                    setIsModalOpen(true);
                  }}
                  className="group rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-slate-800/50 dark:to-slate-900/50 border border-gray-200 dark:border-slate-700/50 hover:border-purple-500 dark:hover:border-purple-500/50 transition-all duration-300 card-hover overflow-hidden flex flex-col text-left cursor-pointer"
                >
                  {/* Project Image/Video */}
                  {(project.link) && (
                    <div className="relative h-48 bg-gray-300 dark:bg-slate-700 overflow-hidden">
                      <img
                        src={`https://opengraph.githubassets.com/1/${project.link?.replace('https://github.com/', '')}`}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                      {project.video && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition">
                          <div className="bg-white/90 rounded-full p-3">
                            <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="p-6 flex flex-col flex-1">
                    {/* Header with status */}
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-purple-600 dark:text-purple-400 flex-1">
                        {project.name}
                      </h3>
                     
                    </div>
                    
                    {/* Category Badge */}
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20">
                        {project.category}
                      </span>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-500/10 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-500/20">
                        {project.year}
                      </span>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${
                          project.status === 'open-source'
                            ? 'bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-300 border-green-200 dark:border-green-500/20'
                            : project.status === 'private'
                            ? 'bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-500/20'
                            : 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/20'
                        }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
                      {project.desc}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded text-xs bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Links */}
                    <div className="flex gap-2 mt-auto">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 text-xs bg-gray-800 hover:bg-gray-900 text-white rounded transition"
                        >
                          Source Code
                        </a>
                      )}
                      {project.video && (
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 text-xs bg-red-600 hover:bg-red-700 text-white rounded transition flex items-center gap-1"
                        >
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                          Watch Video
                        </a>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-200 dark:border-slate-700 my-16"></div>
          
          {/* Search and Filters */}
          <div className="mb-12 space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">All Projects</h2>
             {/* Statistics */}
              <div className="mb-16 grid md:grid-cols-4 gap-4">
                <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-500/10 dark:to-blue-600/10 border border-blue-200 dark:border-blue-500/20">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stats.total}</div>
                  <div className="text-sm text-blue-700 dark:text-blue-300 mt-1">Total Projects</div>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-500/10 dark:to-green-600/10 border border-green-200 dark:border-green-500/20">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">{stats.openSource}</div>
                  <div className="text-sm text-green-700 dark:text-green-300 mt-1">Open Source</div>
                </div>
                <div className="p-6 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-500/10 dark:to-orange-600/10 border border-orange-200 dark:border-orange-500/20">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">{stats.private}</div>
                  <div className="text-sm text-orange-700 dark:text-orange-300 mt-1">Private</div>
                </div>
              </div>

            {/* Search Bar */}
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

            {/* Category Filter */}
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

            {/* Tag Filter */}
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

            {/* Clear Filters */}
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

          {/* Projects Grid */}
          <div className="space-y-4">
            {filteredProjects.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                  <a
                    key={project.name}
                    href={project.link}
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
                    
                    {/* Category Badge */}
                    <div className="mb-2">
                      <span className="inline-block px-2 py-1 rounded text-xs bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-400 mb-4 flex-1 leading-relaxed">
                      {project.desc}
                    </p>
                    
                    {/* Tags */}
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
                  </a>
                ))}
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

      {/* Footer */}
      <Footer />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
