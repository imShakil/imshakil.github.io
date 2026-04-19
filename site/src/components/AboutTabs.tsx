'use client';

import { useState } from 'react';
import { skillGroups } from '@/data/skills';
import { experiences } from '@/data/experiences';
import { education } from '@/data/education';
import { certifications, certificationsEmptyState } from '@/data/certifications';

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState<'skills' | 'experience' | 'education' | 'certifications'>('skills');

  const tabs = [
    { id: 'skills', label: 'Skills', icon: '🛠️' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' },
  ];

  return (
    <div className="space-y-8 font-mono">
      <div className="terminal-panel p-2 overflow-x-auto">
        <div className="flex flex-wrap gap-1 md:gap-2 border-b border-emerald-500/10 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'skills' | 'experience' | 'education' | 'certifications')}
              className={`px-2 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold transition-all duration-300 flex items-center gap-1 md:gap-2 border-b-2 whitespace-nowrap uppercase tracking-[0.16em] ${
                activeTab === tab.id
                  ? 'border-emerald-400 text-emerald-200 bg-emerald-500/10'
                  : 'border-transparent text-emerald-100/60 hover:text-emerald-100'
              }`}
            >
              <span className="hidden md:inline">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-96">
        {activeTab === 'skills' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-6">
              {skillGroups.map((group) => (
                <div key={group.category} className="terminal-panel p-6">
                  <h3 className="text-lg font-semibold text-emerald-300 mb-3 uppercase tracking-[0.14em]">{group.category}</h3>
                  <ul className="space-y-2 text-emerald-100/75">
                    {group.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-6">
              {experiences.map((experience) => (
                <div key={`${experience.company}-${experience.period}`} className="terminal-panel p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                    <div>
                      <h3 className="text-xl font-semibold text-emerald-100">{experience.title}</h3>
                      <p className="text-emerald-300 font-medium">{experience.company}</p>
                    </div>
                    <span className="text-sm text-emerald-100/60 mt-2 md:mt-0">{experience.period}</span>
                  </div>
                  <p className="text-emerald-100/60 mb-3">{experience.location}</p>
                  <ul className="space-y-2 text-emerald-100/75">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>• {highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-4">
              {education.map((item) => (
                <div key={item.degree} className="terminal-panel p-6">
                  <h3 className="text-lg font-semibold text-emerald-100 mb-2">{item.degree}</h3>
                  <p className="text-emerald-100/60">
                    {item.institution} · {item.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className="space-y-6 animate-fadeIn">
            {certifications.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                {certifications.map((certification) => (
                  <div key={certification.name} className="terminal-panel p-6">
                    <h3 className="text-lg font-semibold text-emerald-100 mb-2">{certification.name}</h3>
                    <p className="text-emerald-100/60">{certification.issuer}</p>
                    {certification.year && <p className="text-emerald-100/40 text-sm mt-2">{certification.year}</p>}
                  </div>
                ))}
              </div>
            ) : (
              <div className="terminal-panel p-6 text-center">
                <p className="text-emerald-100/60">{certificationsEmptyState}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
