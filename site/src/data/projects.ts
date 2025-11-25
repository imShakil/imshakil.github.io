export const projects = [
  {
    name: "Clouds In Click - Multi-Cloud VM Provisioning",
    desc: "One-click cloud infrastructure provisioning with automated Azure DevOps self-hosted agents, DNS integration, and cost-controlled resource management.",
    readmeFile: "cloudsinclick",
    tags: ["Multi-Cloud", "DevOps", "Terraform"],
    link: "https://github.com/imshakil/cloudsinclick",
    video: "/",
    status: "private",
    year: "2025",
    featured: true,
    category: "Cloud",
  },
  {
    name: "100 Days of DevOps Challenge [KodeKloud]",
    desc: "This repository contains comprehensive solutions and detailed explanations for the 100 Days of DevOps Challenge by KodeKloud. Perfect for beginners and professionals looking to master DevOps tools and practices.",
    readmeFile: "100-days-devops",
    tags: ["Documentation", "Challenge", "KodeKloud"],
    link: "https://github.com/imShakil/100-Days-Of-DevOps-Challenge-KodeKloud",
    video:
      "https://www.youtube.com/watch?v=Fx1D-kxmN40&list=PLfmzDkAxw5KmGshBmSGm2HMvxFsSxuJsJ&index=5",
    status: "open-source",
    year: "2025",
    featured: true,
    category: "Community",
  },
  {
    name: "pacli - Secrets Management CLI",
    desc: "Designed and developed a local-first secure CLI tool for managing secrets with master password protection. Implemented support for multiple secret types with URL shortening feature and SSH key-based authentication.",
    readmeFile: "pacli",
    tags: ["CLI", "Security", "Encryption"],
    video: "/projects/pacli-demo.mp4",
    link: "https://github.com/imshakil/pacli",
    status: "open-source",
    year: "2025",
    featured: true,
    category: "Security",
  },
  {
    name: "LogPulse - Log Monitoring Tools",
    desc: "Developed a log-monitoring system with user authentication, session management, and secure log downloads. Simplified debugging by providing centralized real-time log access for development teams.",
    tags: ["Monitoring", "Logging", "DevOps"],
    status: "open-source",
    link: "https://github.com/imshakil/logpulse",
    year: "2024",
    featured: false,
    category: "DevOps",
  },
  {
    name: "Agama-Hello - Authentication Module",
    desc: "Integrated hello.coop for OpenID social sign-in using Java, OAuth 2.0 with agama low-code orchestration.",
    tags: ["Authentication", "OAuth 2.0", "Java"],
    link: "https://github.com/GluuFederation/agama-hello",
    status: "completed",
    year: "2023",
    featured: false,
    category: "Backend",
  },
  {
    name: "EpicBook App(2-Tier) Docker Deployment With Traefik",
    desc: "dockerized epicbook application and access it with traefik routing.",
    tags: ["Docker", "Traefik", "AWS", "Docker-compose"],
    link: "https://github.com/imShakil/epicbook-docker",
    video: 'https://www.youtube.com/watch?v=HdY3b-iJ7KI&t=2514s',
    status: "open-source",
    year: "2025",
    featured: true,
    category: "DevOps",
  },
  {
    name: "Terraform + Ansible Automation",
    desc: "Provisioned Azure infrastructure using Terraform and automated setup with Ansible.",
    tags: ["Terraform", "Ansible", "Azure", "IaC"],
    link: "https://github.com/imShakil/automation-with-ansible",
    status: "open-source",
    year: "2025",
    category: "DevOps",
  },
  {
    name: "Deploy Book Review App(3-Tier) Using Azure DevOps Pipeline",
    desc: "This project demonstrates deploying a 3-tier book review application to AWS using Infrastructure as Code (IaC) and CI/CD best practices via Azure DevOps.",
    tags: ["AWS", "Cloud", "Azure DevOps", "Nginx"],
    link: "https://github.com/imShakil/book-review-azure-devops",
    status: "open-source",
    year: "2025",
    category: "DevOps",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const categories = ["DevOps", "Backend", "Security", "Frontend", "Cloud", "Community"];

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
