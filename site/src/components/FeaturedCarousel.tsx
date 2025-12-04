'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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

interface FeaturedCarouselProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const getYoutubeId = (videoUrl: string): string | null => {
  const match = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : null;
};

const getProjectThumbnail = (project: Project): string => {
  if (project.video) {
    const id = getYoutubeId(project.video);
    if (id) return `https://img.youtube.com/vi/${id}/sddefault.jpg`;
  }

  if (project.link?.includes('github.com')) {
    return `https://opengraph.githubassets.com/1/${project.link.replace("https://github.com/", "")}`;
  }

  return "";
};

const getYoutubeFallbacks = (videoUrl: string): string[] => {
  const id = getYoutubeId(videoUrl);
  return id ? [
    `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
    `https://img.youtube.com/vi/${id}/default.jpg`
  ] : [];
};

const getProjectSlug = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
};


export default function FeaturedCarousel({ projects, onProjectClick }: FeaturedCarouselProps) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [fallbackIndex, setFallbackIndex] = useState<Record<string, number>>({});

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlay || projects.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + itemsPerPage) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, projects.length, itemsPerPage]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - itemsPerPage + projects.length) % projects.length);
    setIsAutoPlay(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + itemsPerPage) % projects.length);
    setIsAutoPlay(false);
  };

  if (projects.length === 0) return null;

  const getVisibleProjects = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
      visible.push(projects[(currentIndex + i) % projects.length]);
    }
    return visible;
  };

  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const currentPage = Math.floor(currentIndex / itemsPerPage) + 1;
  const visibleProjects = getVisibleProjects();

  return (
    <div className="relative w-full">
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, idx) => (
            <div
              key={`${project.name}-${idx}`}
              className={`${idx === 0 ? 'block' : 'hidden md:block'} ${idx === 2 ? 'hidden lg:block' : ''} h-full`}
            >
              <div
                onClick={() => router.push(`/projects/${getProjectSlug(project.name)}`)}
                className="group w-full h-full rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-slate-800/50 dark:to-slate-900/50 border border-gray-200 dark:border-slate-700/50 hover:border-purple-500 dark:hover:border-purple-500/50 transition-all duration-300 card-hover overflow-hidden flex flex-col text-left cursor-pointer"
              >
                {/* Project Image/Video */}
                <div className="relative h-40 md:h-48 bg-gray-300 dark:bg-slate-700 overflow-hidden">
                  <img
                    src={(() => {
                      if (project.video) {
                        const fallbacks = getYoutubeFallbacks(project.video);
                        const idx = fallbackIndex[project.name] || 0;
                        return fallbacks[idx] || getProjectThumbnail(project);
                      }
                      return getProjectThumbnail(project);
                    })()}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    onError={() => {
                      if (project.video) {
                        const fallbacks = getYoutubeFallbacks(project.video);
                        const currentIdx = fallbackIndex[project.name] || 0;
                        if (currentIdx < fallbacks.length - 1) {
                          setFallbackIndex(prev => ({
                            ...prev,
                            [project.name]: currentIdx + 1
                          }));
                        }
                      }
                    }}
                  />
                  {project.video && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition">
                      <div className="bg-white/90 rounded-full p-3">
                        <svg className="w-8 h-8 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-4 md:p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg md:text-xl font-semibold text-purple-600 dark:text-purple-400 flex-1">
                      {project.name}
                    </h3>
                  </div>

                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20">
                      {project.category}
                    </span>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-200 dark:bg-gray-500/10 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-500/20">
                      {project.year}
                    </span>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${
                        project.status === 'open-source'
                          ? 'bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-300 border-green-200 dark:border-green-500/20'
                          : project.status === 'private'
                            ? 'bg-orange-100 dark:bg-orange-500/10 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-500/20'
                            : 'bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/20'
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-400 mb-3 text-sm leading-relaxed line-clamp-2">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags?.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded text-xs bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
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
                        onClick={(e) => e.stopPropagation()}
                        className="px-3 py-1 text-xs bg-red-600 hover:bg-red-700 text-white rounded transition flex items-center gap-1"
                      >
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Watch Video
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-lg bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 transition"
          aria-label="Previous project"
        >
          <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * itemsPerPage)}
              className={`h-2 rounded-full transition-all ${
                index === currentPage - 1
                  ? 'bg-purple-600 w-8'
                  : 'bg-gray-300 dark:bg-slate-600 w-2 hover:bg-gray-400 dark:hover:bg-slate-500'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-lg bg-gray-200 dark:bg-slate-700 hover:bg-gray-300 dark:hover:bg-slate-600 transition"
          aria-label="Next project"
        >
          <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
        {currentPage} / {totalPages}
      </div>
    </div>
  );
}
