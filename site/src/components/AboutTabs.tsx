'use client';

import { useState } from 'react';

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState<'skills' | 'experience' | 'education' | 'certifications'>('skills');

  const tabs = [
    { id: 'skills', label: 'Skills', icon: '🛠️' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'certifications', label: 'Certifications', icon: '🏆' },
  ];

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-1 md:gap-2 border-b border-gray-200 dark:border-slate-700 overflow-x-auto">
         {tabs.map((tab) => (
           <button
             key={tab.id}
             onClick={() => setActiveTab(tab.id as 'skills' | 'experience' | 'education' | 'certifications')}
             className={`px-2 md:px-6 py-2 md:py-3 text-sm md:text-base font-semibold transition-all duration-300 flex items-center gap-1 md:gap-2 border-b-2 whitespace-nowrap ${
               activeTab === tab.id
                 ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                 : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-300'
             }`}
           >
             <span className="hidden md:inline">{tab.icon}</span>
             {tab.label}
           </button>
         ))}
       </div>

      {/* Tab Content */}
      <div className="min-h-96">
        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">DevOps & Infrastructure</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Linux Administration</li>
                  <li>• Docker & Containerization</li>
                  <li>• Kubernetes Orchestration</li>
                  <li>• Terraform (Infrastructure as Code)</li>
                  <li>• Nginx & Web Servers</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">CI/CD & Automation</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• GitHub Actions</li>
                  <li>• GitLab CI/CD</li>
                  <li>• Jenkins</li>
                  <li>• Pipeline Optimization</li>
                  <li>• Workflow Automation</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Cloud & IAM</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• AWS & Google Cloud</li>
                  <li>• Identity & Access Management</li>
                  <li>• SAML, OAuth2, OpenID Connect</li>
                  <li>• Gluu, Keycloak, WSO2</li>
                  <li>• SSL/TLS & Security</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">Programming & Tools</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Python & Bash Scripting</li>
                  <li>• C++ Programming</li>
                  <li>• Git & Version Control</li>
                  <li>• DNS & Mail Server Management</li>
                  <li>• Monitoring & Logging</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-6">
              <div className="p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">System Admin & DevOps</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">FusionPulse Tech</p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Oct 2024 - Jul 2025</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">Remote, Dhaka</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Implemented and managed self-hosted GitLab instances, optimized CI/CD pipelines for streamlined development and deployment processes</li>
                  <li>• Provided WordPress development services, ensuring optimal performance through DNS and hosting management</li>
                  <li>• Secured web infrastructure by configuring SSL/TLS and managing web servers like Nginx and Apache</li>
                </ul>
              </div>

              <div className="p-6 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500/50 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Technical Support Engineer</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Gluu Federation</p>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">Sep 2020 - Feb 2025</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">Remote, USA</p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li>• Provided Tier 1/2 customer supports for community users and enterprise clients implementing Gluu Server for IAM and SSO solutions</li>
                  <li>• Collaborated closely with customers to diagnose and resolve authentication, authorization, and directory integration challenges, maintaining over 90% customer satisfaction by adhering to SLO</li>
                  <li>• Tested APIs, authentication modules, and documented third-party SSO integration</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-200 dark:border-blue-500/30">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Masters of Engineering in Information and Communication Technology (ICT)</h3>
                <p className="text-gray-700 dark:text-gray-300">Islamic University, Bangladesh · Kushtia, Bangladesh</p>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10 border border-blue-200 dark:border-blue-500/30">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Bachelor of Science in Information and Communication Technology (ICT)</h3>
                <p className="text-gray-700 dark:text-gray-300">Islamic University, Bangladesh · Kushtia, Bangladesh</p>
              </div>
            </div>
          </div>
        )}

        {/* Certifications Tab */}
        {activeTab === 'certifications' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 rounded-lg bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Certifications coming soon. Stay tuned for updates!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
