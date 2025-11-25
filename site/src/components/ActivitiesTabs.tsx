'use client';

import { useState } from 'react';
import { RSSItem } from '@/lib/rss-parser';

interface ActivitiesTabsProps {
  mediumPosts: RSSItem[];
  youtubeVideos: RSSItem[];
}

export default function ActivitiesTabs({ mediumPosts, youtubeVideos }: ActivitiesTabsProps) {
  const [activeTab, setActiveTab] = useState<'blog' | 'youtube' | 'github' | 'linkedin'>('blog');
  const [linkedInSubTab, setLinkedInSubTab] = useState<'profile' | 'newsletter'>('profile');

  const tabs = [
    {
      id: 'blog',
      label: 'Blog',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.59 0-1.07-2.15-1.07-5.05V6.3c0-2.9.48-5.05 1.07-5.05.66 0 1.19 2.58 1.19 5.75z" />
        </svg>
      )
    },
    {
      id: 'youtube',
      label: 'YouTube',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.251 1.574 4.251 4.963v5.908zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.957.77-1.715 1.958-1.715 1.187 0 1.927.758 1.927 1.715 0 .953-.74 1.715-1.97 1.715zm1.946 11.597H3.392V9.806h3.891v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      )
    },
    {
      id: 'github',
      label: 'GitHub Stats',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    },
  ];

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-1 md:gap-2 border-b border-gray-200 dark:border-slate-700 overflow-x-auto">
         {tabs.map((tab) => (
           <button
             key={tab.id}
             onClick={() => setActiveTab(tab.id as 'blog' | 'youtube' | 'github' | 'linkedin')}
             className={`px-2 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold transition-all duration-300 flex items-center gap-1 md:gap-2 border-b-2 whitespace-nowrap ${
               activeTab === tab.id
                 ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                 : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
             }`}
           >
             <span className="hidden md:inline w-5 h-5 flex-shrink-0">{tab.icon}</span>
             {tab.label}
           </button>
         ))}
       </div>

      {/* Tab Content */}
      <div className="min-h-96">
        {/* Blog Tab */}
        {activeTab === 'blog' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-10 h-10 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.59 0-1.07-2.15-1.07-5.05V6.3c0-2.9.48-5.05 1.07-5.05.66 0 1.19 2.58 1.19 5.75z" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">Latest from Medium</h2>
            </div>

            {mediumPosts.length === 0 ? (
              <div className="bg-gray-100 dark:bg-slate-800/30 border border-gray-200 dark:border-slate-700/50 rounded-lg p-12 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4">No posts found yet</p>
                <a
                  href="https://medium.com/@imshakil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Follow me on Medium →
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mediumPosts.map((post, index) => (
                  <a
                    key={index}
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col h-full bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 hover:border-blue-500 dark:hover:border-blue-500/50 rounded-xl overflow-hidden transition-all duration-300 card-hover"
                  >
                    {post.image && (
                      <div className="relative w-full h-48 bg-gray-300 dark:bg-slate-700 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition line-clamp-2 mb-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                        {new Date(post.pubDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                      <p className="text-gray-700 dark:text-gray-400 text-sm line-clamp-3 flex-1 mb-4">
                        {post.description}
                      </p>
                      <div className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition inline-flex items-center gap-2 font-semibold">
                        Read More
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.59 0-1.07-2.15-1.07-5.05V6.3c0-2.9.48-5.05 1.07-5.05.66 0 1.19 2.58 1.19 5.75z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* Follow on Medium Button */}
            <div className="mt-8 text-center">
              <a
                href="https://medium.com/@imshakil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg transition-all duration-300 hover:scale-105 font-semibold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.59 0-1.07-2.15-1.07-5.05V6.3c0-2.9.48-5.05 1.07-5.05.66 0 1.19 2.58 1.19 5.75z" />
                </svg>
                Follow me on Medium
              </a>
            </div>
          </div>
        )}

        {/* YouTube Tab */}
        {activeTab === 'youtube' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-10 h-10 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 dark:text-red-400">Latest from YouTube</h2>
            </div>

            {youtubeVideos.length === 0 ? (
              <div className="bg-gray-100 dark:bg-slate-800/30 border border-gray-200 dark:border-slate-700/50 rounded-lg p-12 text-center">
                <p className="text-gray-600 dark:text-gray-400 mb-4">No videos found yet</p>
                <a
                  href="https://youtube.com/@shakilops"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Subscribe to YouTube →
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {youtubeVideos.map((video, index) => (
                  <a
                    key={index}
                    href={video.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col h-full bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 hover:border-red-500 dark:hover:border-red-500/50 rounded-xl overflow-hidden transition-all duration-300 card-hover"
                  >
                    {video.image && (
                      <div className="relative w-full h-48 bg-gray-300 dark:bg-slate-700 overflow-hidden">
                        <img
                          src={video.image}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition">
                          <div className="text-white text-5xl">▶</div>
                        </div>
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 transition line-clamp-2 mb-2">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                        {new Date(video.pubDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                      <p className="text-gray-700 dark:text-gray-400 text-sm line-clamp-3 flex-1 mb-4">
                        {video.description}
                      </p>
                      <div className="text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300 transition inline-flex items-center gap-2 font-semibold">
                        Watch Video
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}

            {/* Subscribe to YouTube Button */}
            <div className="mt-8 text-center">
              <a
                href="https://youtube.com/@shakilops"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-all duration-300 hover:scale-105 font-semibold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Subscribe to YouTube
              </a>
            </div>
          </div>
        )}

        {/* LinkedIn Tab */}
        {activeTab === 'linkedin' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-10 h-10 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.251 1.574 4.251 4.963v5.908zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.957.77-1.715 1.958-1.715 1.187 0 1.927.758 1.927 1.715 0 .953-.74 1.715-1.97 1.715zm1.946 11.597H3.392V9.806h3.891v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">LinkedIn</h2>
            </div>

            {/* LinkedIn Sub-tabs */}
             <div className="flex gap-1 md:gap-2 border-b border-gray-200 dark:border-slate-700 mb-6 overflow-x-auto">
               <button
                 onClick={() => setLinkedInSubTab('profile')}
                 className={`px-2 md:px-4 py-2 text-sm md:text-base font-semibold transition-all duration-300 border-b-2 whitespace-nowrap ${
                   linkedInSubTab === 'profile'
                     ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                     : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                 }`}
               >
                 Profile Posts
               </button>
               <button
                 onClick={() => setLinkedInSubTab('newsletter')}
                 className={`px-2 md:px-4 py-2 text-sm md:text-base font-semibold transition-all duration-300 border-b-2 whitespace-nowrap ${
                   linkedInSubTab === 'newsletter'
                     ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                     : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
                 }`}
               >
                 Newsletter
               </button>
             </div>

            {/* LinkedIn Profile Posts */}
            {linkedInSubTab === 'profile' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500 dark:hover:border-blue-500/50 transition-all">
                  <iframe
                    src="https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25626109"
                    width="100%"
                    height="800"
                    frameBorder="0"
                    scrolling="no"
                    className="w-full"
                  ></iframe>
                </div>
                <div className="mt-6 text-center">
                  <a
                    href="https://www.linkedin.com/in/imshakil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.251 1.574 4.251 4.963v5.908zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.957.77-1.715 1.958-1.715 1.187 0 1.927.758 1.927 1.715 0 .953-.74 1.715-1.97 1.715zm1.946 11.597H3.392V9.806h3.891v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    </svg>
                    Visit LinkedIn Profile
                  </a>
                </div>
              </div>
            )}

            {/* LinkedIn Newsletter */}
            {linkedInSubTab === 'newsletter' && (
              <div className="space-y-6 animate-fadeIn">
                <div className="bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 rounded-xl overflow-hidden hover:border-blue-500 dark:hover:border-blue-500/50 transition-all">
                  <iframe
                    src="https://widgets.sociablekit.com/linkedin-newsletter/iframe/25626120"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    className="w-full"
                  ></iframe>
                </div>
                <div className="mt-6 text-center">
                  <a
                    href="https://www.linkedin.com/newsletters/7356903021034819584/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Subscribe to Newsletter
                  </a>
                </div>
              </div>
            )}
          </div>
        )}

        {/* GitHub Stats Tab */}
        {activeTab === 'github' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">GitHub Activity</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* GitHub Stats */}
              <div className="bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-500/50 transition-all">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">GitHub Stats</h3>
                <img
                  src="https://github-readme-stats.vercel.app/api?username=imShakil&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true"
                  alt="GitHub Stats"
                  className="w-full rounded-lg"
                />
              </div>

              {/* Top Languages */}
              <div className="bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-500/50 transition-all">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Languages</h3>
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=imShakil&layout=compact&langs_count=8&theme=tokyonight&hide=html,css,lua,c,makefile,json,xml&hide_progress=true"
                  alt="Top Languages"
                  className="w-full rounded-lg"
                />
              </div>

              {/* Contribution Graph */}
              <div className="md:col-span-2 bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-500/50 transition-all">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contribution Activity</h3>
                <img
                  src="https://github-readme-activity-graph.vercel.app/graph?username=imShakil&theme=tokyo-night&bg_color=1a1b27&color=70a5fd&line=bf91f3&point=38bdae&area=true&hide_border=true"
                  alt="Contribution Graph"
                  className="w-full rounded-lg"
                />
              </div>

              {/* Streak Stats */}
              <div className="md:col-span-2 bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-500/50 transition-all">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Streak Statistics</h3>
                <img
                  src="https://github-readme-streak-stats.herokuapp.com/?user=imShakil&theme=tokyonight&hide_border=true"
                  alt="Streak Stats"
                  className="w-full rounded-lg"
                />
              </div>

              {/* WakaTime Stats */}
              <div className="md:col-span-2 bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 rounded-xl p-6 hover:border-blue-500 dark:hover:border-blue-500/50 transition-all">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">WakaTime Stats</h3>
                <img
                  src="https://github-readme-stats.vercel.app/api/wakatime?username=imshakil&theme=tokyonight"
                  alt="WakaTime Stats"
                  className="w-full rounded-lg"
                />
              </div>
            </div>

            {/* Follow on GitHub Button */}
            <div className="mt-8 text-center">
              <a
                href="https://github.com/imShakil"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-lg transition-all duration-300 hover:scale-105 font-semibold"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Follow me on GitHub
              </a>
            </div>
          </div>
        )}
      </div>
     </div>
   );
 }
