'use client';

import Footer from '@/components/Footer';
import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 flex flex-col">
      {/* Header */}
      <section className="py-20 px-6 md:px-20 border-b border-gray-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto space-y-4 slide-in-up">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Technical Support Engineer and aspiring DevOps professional with strong expertise in system administration, cloud operations, and automation.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Introduction */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Who I Am</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a Technical Support Engineer and aspiring DevOps professional with strong expertise in system administration, cloud operations, and automation. I specialize in deployments, CI/CD pipelines, monitoring, and authentication protocols (SAML, OAuth2, OpenID Connect) while ensuring security and scalability across cloud and on-prem environments.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I advocate for Infrastructure as Code (IaC) and focus on building reliable, automated, and fault-tolerant systems. My experience spans Linux servers, containerized applications (Docker, Kubernetes), mail servers, Nginx, SSL/TLS, DNS management, and workflow automation to enhance performance and streamline operations.
            </p>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Expertise</h2>
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

          {/* Experience */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Professional Experience</h2>
            
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

          {/* Education */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h2>
            
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

          {/* Connect */}
          <div className="space-y-6 p-8 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 dark:border-blue-500/30">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I'm always interested in discussing DevOps, cloud infrastructure, and automation. Feel free to reach out!
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/imshakil"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all duration-300 inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.736 0-9.646h3.554v1.348c.42-.648 1.36-1.573 3.322-1.573 2.429 0 4.251 1.574 4.251 4.963v5.908zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.957.77-1.715 1.958-1.715 1.187 0 1.927.758 1.927 1.715 0 .953-.74 1.715-1.97 1.715zm1.946 11.597H3.392V9.806h3.891v10.646zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:shakilops.dev@gmail.com"
                className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all duration-300 inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
              <a
                href="https://github.com/imshakil"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-900 text-white font-semibold transition-all duration-300 inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
