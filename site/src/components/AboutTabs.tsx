'use client';

import { useState } from 'react';
import { skillGroups } from '@/data/skills';
import { experiences } from '@/data/experiences';
import { education } from '@/data/education';

const engineeringPrinciples = [
  {
    title: 'Zero-Trust Identity & Access (IAM)',
    desc: 'Least-privilege authorization by default. Centralized token brokering with OpenID/OAuth2, dynamic secret rotation, and strict zero-trust boundaries for microservices and cloud workloads.',
    tags: ['OAuth 2.0', 'OIDC', 'Zero-Trust', 'Secret Rotation'],
  },
  {
    title: '100% Infrastructure as Code (IaC)',
    desc: 'Every cloud component—VPCs, clusters, IAM roles, and firewall policies—is version-controlled via Terraform. Zero manual, undocumented console changes.',
    tags: ['Terraform', 'OpenTofu', 'GitOps', 'Multi-Cloud'],
  },
  {
    title: 'Automated CI/CD & Zero-Downtime Releases',
    desc: 'Shipping fast requires strict safety guardrails: automated linting, security vulnerability checks, container packaging, and rolling zero-downtime deployments with instant rollbacks.',
    tags: ['GitHub Actions', 'Azure DevOps', 'Docker', 'Traefik'],
  },
  {
    title: 'Production Observability & Telemetry',
    desc: 'Reliability is measured by how fast issues are detected and resolved. Structured logging, proactive alert thresholds, and health checks ensure zero silent failures.',
    tags: ['Structured Logs', 'Health Checks', 'Audit Trails', 'Uptime'],
  },
];

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState<'experience' | 'skills' | 'principles' | 'education'>('experience');

  const tabs = [
    { id: 'experience', label: 'Track Record', icon: '💼' },
    { id: 'skills', label: 'Tech Stack', icon: '🛠️' },
    { id: 'principles', label: 'Engineering Standards', icon: '⚡' },
    { id: 'education', label: 'Education', icon: '🎓' },
  ];

  return (
    <div className="space-y-8 font-mono">
      <div className="terminal-panel p-2 overflow-x-auto">
        <div className="flex flex-wrap gap-1 md:gap-2 border-b border-emerald-500/10 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'experience' | 'skills' | 'principles' | 'education')}
              className={`px-3 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 md:gap-2 border-b-2 whitespace-nowrap uppercase tracking-[0.14em] ${
                activeTab === tab.id
                  ? 'border-emerald-400 text-emerald-200 bg-emerald-500/10'
                  : 'border-transparent text-emerald-100/60 hover:text-emerald-100'
              }`}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-96">
        {activeTab === 'experience' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-6">
              {experiences.map((experience) => (
                <div key={`${experience.company}-${experience.period}`} className="terminal-panel p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-emerald-100">{experience.title}</h3>
                      <p className="text-emerald-300 font-medium text-sm">{experience.company}</p>
                    </div>
                    <span className="text-xs font-mono text-emerald-100/60 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
                      {experience.period}
                    </span>
                  </div>
                  <p className="text-xs text-emerald-100/50 mb-4">{experience.location}</p>
                  <ul className="space-y-2 text-sm text-emerald-100/75">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <span className="text-emerald-400 shrink-0">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-6">
              {skillGroups.map((group) => (
                <div key={group.category} className="terminal-panel p-6">
                  <h3 className="text-sm font-bold text-emerald-300 mb-4 uppercase tracking-[0.16em] flex items-center gap-2">
                    <span className="text-emerald-400">$</span> {group.category}
                  </h3>
                  <ul className="space-y-2 text-sm text-emerald-100/80">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/60"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'principles' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-6">
              {engineeringPrinciples.map((p) => (
                <div key={p.title} className="terminal-panel p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-emerald-100 mb-2">{p.title}</h3>
                    <p className="text-xs text-emerald-100/70 leading-relaxed mb-4">{p.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-emerald-500/15">
                    {p.tags.map((tag) => (
                      <span key={tag} className="terminal-chip text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>
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
                  <h3 className="text-base font-bold text-emerald-100 mb-1">{item.degree}</h3>
                  <p className="text-xs text-emerald-100/60">
                    {item.institution} · {item.location}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
