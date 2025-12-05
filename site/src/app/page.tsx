import { Metadata } from 'next';
import { metadataConfig } from '@/lib/metadata-config';
import Hero from '@/components/Hero';
import Link from 'next/link';
import { featuredProjects } from '@/data/projects';
import Footer from '@/components/Footer';
import AboutMe from '@/components/About';

interface Project {
  name: string;
  desc: string;
  link: string;
  video?: string;
  tags: string[];
  status: string;
  year: string;
  featured?: boolean;
  category: string;
  readmeFile?: string;
  longDesc?: string;
}

export const metadata: Metadata = metadataConfig.home();

const getProjectSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
};

const getYoutubeId = (videoUrl: string): string | null => {
  const match = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : null;
};

const getProjectThumbnail = (project: Project): string => {
  if (project.link?.includes('github.com')) {
    return `https://opengraph.githubassets.com/1/${project.link.replace("https://github.com/", "")}`;
  }

  if (project.video) {
    const id = getYoutubeId(project.video);
    if (id) return `https://img.youtube.com/vi/${id}/sddefault.jpg`;
  }

  return "";
};

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
      <AboutMe />
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
              See All Projects →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 3).map((project) => (
              <Link
                key={project.name}
                href={`/projects/${getProjectSlug(project.name)}`}
                className="group rounded-xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700/50 hover:border-blue-500 dark:hover:border-blue-500/50 transition-all duration-300 card-hover overflow-hidden flex flex-col"
              >
                <div className="relative h-40 bg-gray-300 dark:bg-slate-700 overflow-hidden">
                  <img
                    src={getProjectThumbnail(project)}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 mb-3 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1 text-sm">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded text-xs bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
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
