export type Project = {
  name: string;
  desc: string;
  tags: string[];
  link?: string;
  github?: string;
  demo?: string;
  thumbnail?: string;
  readmeFile?: string;
  video?: string;
  status: 'open-source' | 'private' | 'completed' | 'working' | 'upcoming';
  year: string;
  featured?: boolean;
  category: string;
  longDesc?: string;
  problem?: string;
  solution?: string;
  impact?: string;
};

const isGithubUrl = (url?: string): boolean => Boolean(url && url.includes('github.com'));

const getYoutubeId = (videoUrl: string): string | null => {
  const match = videoUrl.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
  return match ? match[1] : null;
};

export const getProjectGithubLink = (project: Project): string | undefined => {
  if (project.github) return project.github;
  if (isGithubUrl(project.link)) return project.link;
  return undefined;
};

export const getProjectDemoLink = (project: Project): string | undefined => {
  if (project.demo) return project.demo;
  if (project.link && !isGithubUrl(project.link)) return project.link;
  return undefined;
};

export const getProjectThumbnail = (project: Project): string => {
  if (project.thumbnail) return project.thumbnail;

  if (project.video) {
    const id = getYoutubeId(project.video);
    if (id) return `https://img.youtube.com/vi/${id}/sddefault.jpg`;
  }

  const githubLink = getProjectGithubLink(project);
  if (githubLink) {
    return `https://opengraph.githubassets.com/1/${githubLink.replace('https://github.com/', '')}`;
  }

  return '';
};

export const projects: Project[] = [
  {
    name: "Dawrix - Intelligent IAM & Security Gateway",
    desc: "Centralized identity and authorization broker that enforces strict security boundaries and injects credentials for microservices and AI agent workloads.",
    thumbnail: "/projects/dawrix-banner.svg",
    tags: ["IAM", "OAuth 2.0", "Security", "Zero-Trust"],
    link: "https://mhosen.com/dwarix",
    github: "https://github.com/imshakil/dwarix",
    status: "working",
    year: "2025",
    featured: true,
    category: "Security",
    problem: "Microservices and autonomous services frequently leak credentials or lack centralized role-based authorization controls.",
    solution: "Architected a zero-trust IAM gateway brokering OpenID tokens, enforcing fine-grained policies, and rotating secrets dynamically.",
    impact: "Zero credential leaks, centralized audit visibility, and compliance-ready access logs across all connected services."
  },
  {
    name: "Clouds In Click - Multi-Cloud VM Provisioning",
    desc: "Automated multi-cloud VM provisioning platform with self-hosted CI/CD agents, DNS orchestration, and cost-controlled resource scheduling.",
    readmeFile: "cloudsinclick",
    thumbnail: "/projects/cloudsinclick-banner.svg",
    tags: ["Terraform", "Multi-Cloud", "Azure DevOps", "IaC"],
    link: "https://github.com/imshakil/cloudsinclick",
    video: "https://www.youtube.com/watch?v=JsYfNg90alc",
    status: "private",
    year: "2025",
    featured: true,
    category: "Cloud",
    problem: "Provisioning isolated multi-cloud environments for developers was manual, taking hours and causing cloud budget overruns.",
    solution: "Codified infrastructure with modular Terraform, automated Azure DevOps agent registration, and integrated scheduled teardowns.",
    impact: "Cut environment provisioning from 2 hours to under 3 minutes while cutting idle compute costs by 35%."
  },
  {
    name: "pacli - Local-First Secrets Management CLI",
    desc: "Published open-source CLI and PyPI package for managing credentials, SSH keys, and API tokens with client-side encryption and zero cloud dependencies.",
    readmeFile: "pacli",
    thumbnail: "/projects/pacli-banner.svg",
    tags: ["Python", "Security", "Cryptography", "PyPI", "CI/CD"],
    link: "https://github.com/imshakil/pacli",
    status: "open-source",
    year: "2025",
    featured: true,
    category: "Security",
    problem: "Developers frequently leak plain-text credentials and API keys in shell histories and environment files without portable, encrypted storage.",
    solution: "Built and published an encrypted CLI on PyPI with AES encryption, master password protection, automated Bandit security scans, and GitHub Actions CI/CD releases.",
    impact: "Active PyPI package (pip install pacli-tool) with automated security auditing and cross-platform release automation."
  },
  {
    name: "EpicBook App - Zero-Downtime Docker & Traefik",
    desc: "Production containerization and reverse proxy architecture with automated SSL/TLS certificates and rolling release capabilities.",
    readmeFile: "epicbook-app",
    tags: ["Docker", "Traefik", "AWS", "Nginx"],
    link: "https://github.com/imShakil/epicbook-docker",
    video: 'https://www.youtube.com/watch?v=HdY3b-iJ7KI',
    status: "open-source",
    year: "2025",
    featured: false,
    category: "DevOps",
  },
  {
    name: "LogPulse - Centralized Log Monitoring Tool",
    desc: "Developed a log-monitoring system with user authentication, session management, and secure log streaming.",
    tags: ["Monitoring", "Logging", "DevOps"],
    status: "open-source",
    link: "https://github.com/imshakil/logpulse",
    year: "2024",
    featured: false,
    category: "DevOps",
  },
  {
    name: "Agama-Hello - OAuth 2.0 Authentication Module",
    desc: "Integrated hello.coop for OpenID social sign-in using Java, OAuth 2.0 with agama low-code orchestration.",
    tags: ["Authentication", "OAuth 2.0", "Java"],
    link: "https://github.com/GluuFederation/agama-hello",
    status: "completed",
    year: "2023",
    featured: false,
    category: "Security",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const openSourceProjects = projects.filter((project) => !project.featured);

export const categories = ["Cloud", "Security", "DevOps"];

export const getProjectsByCategory = (category: string) => {
  return projects.filter((project) => project.category === category);
};

export const getProjectsByTag = (tag: string) => {
  return projects.filter((project) => project.tags.includes(tag));
};

export const getAllTags = () => {
  const tags = new Set<string>();
  projects.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
};
