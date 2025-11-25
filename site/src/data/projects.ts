export const projects = [
  {
    name: 'pacli - Secrets Management CLI',
    desc: 'Designed and developed a local-first secure CLI tool for managing secrets with master password protection. Implemented support for multiple secret types with URL shortening feature and SSH key-based authentication.',
    tags: ['CLI', 'Security', 'Encryption'],
    video: '/projects/pacli-demo.mp4',
    link: 'https://github.com/imshakil/pacli',
    status: 'open-source',
    year: '2025',
    featured: true,
    category: 'Security'
  },
  {
    name: 'LogPulse - Log Monitoring Tools',
    desc: 'Developed a log-monitoring system with user authentication, session management, and secure log downloads. Simplified debugging by providing centralized real-time log access for development teams.',
    tags: ['Monitoring', 'Logging', 'DevOps'],
    status: 'open-source',
    link: 'https://github.com/imshakil/logpulse',
    year: '2024',
    featured: true,
    category: 'DevOps'
  },
  {
    name: 'Agama-Hello - Authentication Module',
    desc: 'Integrated hello.coop for OpenID social sign-in using Java, OAuth 2.0 with agama low-code orchestration.',
    tags: ['Authentication', 'OAuth 2.0', 'Java'],
    link: 'https://github.com/GluuFederation/agama-hello',
    status: 'completed',
    year: '2023',
    featured: true,
    category: 'Backend'
  },
  {
    name: "Terraform + Ansible Automation",
    desc: "Provisioned Azure infrastructure using Terraform and automated setup with Ansible.",
    tags: ['Terraform', 'Ansible', 'Azure', 'IaC'],
    link: "https://github.com/imshakil/terraform-ansible-automation",
    status: 'open-source',
    year: '2023',
    category: 'DevOps'
  },
  {
    name: "Dockerized E-commerce App",
    desc: "Multi-container setup using Nginx reverse proxy and Docker Compose.",
    tags: ['Docker', 'Docker Compose', 'Nginx', 'DevOps'],
    link: "https://github.com/imshakil/docker-ecommerce",
    status: 'open-source',
    year: '2023',
    category: 'DevOps'
  }
];

export const featuredProjects = projects.filter(project => project.featured);

export const categories = ['DevOps', 'Backend', 'Security', 'Frontend'];

export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.category === category);
};

export const getProjectsByTag = (tag: string) => {
  return projects.filter(project => project.tags.includes(tag));
};

export const getAllTags = () => {
  const tags = new Set<string>();
  projects.forEach(project => {
    project.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
};
