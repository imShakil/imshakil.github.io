import Hero from '@/components/Hero';
import Link from 'next/link';
import { featuredProjects } from '@/data/projects';
import Footer from '@/components/Footer';

export default function Home() {
  const skills = [
    { category: 'Cloud Platforms', items: ['Azure', 'AWS', 'Google Cloud'] },
    { category: 'Containerization', items: ['Docker', 'Kubernetes', 'Docker Compose'] },
    { category: 'Infrastructure as Code', items: ['Terraform', 'Ansible', 'CloudFormation'] },
    { category: 'CI/CD', items: ['GitLab CI', 'GitHub Actions', 'Jenkins'] },
    { category: 'Monitoring', items: ['Prometheus', 'Grafana', 'ELK Stack'] },
    { category: 'Other', items: ['Linux', 'Nginx', 'Python', 'Bash'] },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-slate-900/50 border-y border-gray-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <img
                  src="/me.jpeg"
                  alt="Mobarak Hosen"
                  className="w-80 h-80 rounded-2xl object-cover shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
              </div>
            </div>
            
            {/* About Content */}
            <div className="space-y-6 slide-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">About Me</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-justify">
                I&apos;m a DevOps Engineer and Technical Support Specialist with hands-on experience in Docker, Kubernetes, Terraform, Ansible, and CI/CD automation. I enjoy designing infrastructure-as-code workflows, managing self-hosted GitLab environments, and helping teams deploy faster with confidence.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 text-sm border border-blue-200 dark:border-blue-500/30">DevOps</span>
                <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 text-sm border border-purple-200 dark:border-purple-500/30">Cloud Infrastructure</span>
                <span className="px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-500/20 text-pink-700 dark:text-pink-300 text-sm border border-pink-200 dark:border-pink-500/30">Automation</span>
              </div>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-2"
                >
                  Learn More About Me →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div
                key={skillGroup.category}
                className="group p-6 rounded-xl bg-gray-100 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 hover:border-blue-500 dark:hover:border-blue-500/50 transition-all duration-300 card-hover"
              >
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-gray-200 dark:bg-slate-700/50 text-gray-700 dark:text-slate-300 text-sm hover:bg-blue-100 dark:hover:bg-blue-500/20 hover:text-blue-600 dark:hover:text-blue-300 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-50 dark:bg-slate-900/50 border-y border-gray-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
            <Link
              href="/projects"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors flex items-center gap-2"
            >
              Checkout Projects →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <a
                key={project.name}
                href="/projects"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 hover:border-blue-500 dark:hover:border-blue-500/50 transition-all duration-300 card-hover flex flex-col"
              >
                <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 mb-3 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded text-xs bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Let&apos;s Work Together</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Interested in collaborating or have a project in mind? Let&apos;s connect and discuss how I can help.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:shakilops.dev@gmail.com"
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            <Link
              href="/resume"
              className="px-8 py-3 rounded-lg border border-blue-500/50 text-blue-600 dark:text-blue-400 font-semibold hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-300 hover:border-blue-400"
            >
              View Resume
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
