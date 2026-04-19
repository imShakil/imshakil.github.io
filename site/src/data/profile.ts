export const profile = {
  name: 'Mobarak Hosen',
  fullName: 'Mobarak Hosen Shakil',
  title: 'DevOps Engineer',
  roleLine: 'DevOps Engineer & Cloud Infrastructure Specialist',
  summary:
    'I automate cloud infrastructure, design CI/CD pipelines, and build scalable systems.',
  aboutSummary:
    'I am a DevOps Engineer and Technical Support Specialist with hands-on experience in Docker, Kubernetes, Terraform, Ansible, and CI/CD automation. I enjoy designing infrastructure-as-code workflows, managing self-hosted GitLab environments, and helping teams deploy faster with confidence.',
  aboutTags: ['DevOps', 'Cloud Infrastructure', 'Automation'],
  heroBadge: 'Terminal online',
  heroHeadline: 'Booting Mobarak Hosen profile',
  heroDescription:
    'I automate cloud infrastructure, design CI/CD pipelines, and build scalable systems with a DevOps-first mindset.',
  resumeSummary:
    'Comprehensive overview of my professional experience, skills, and achievements.',
  connectSummary:
    'I am always interested in discussing DevOps, cloud infrastructure, and automation. Feel free to reach out.',
  footerSummary:
    'DevOps engineer focused on cloud infrastructure, automation, and reliable delivery systems.',
  location: 'Dhaka, Bangladesh',
  email: 'shakilops.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/imshakil',
  github: 'https://github.com/imshakil',
  medium: 'https://medium.com/@imshakil',
  youtube: 'https://youtube.com/@ShakilOps',
  pdfUrl: '/resume/Mobarak_Hosen_Resume.pdf',
  pdfName: 'Mobarak_Hosen_Resume.pdf',
  stats: [
    { label: 'Projects', value: '15+' },
    { label: 'Years Exp', value: '5+' },
    { label: 'Response', value: '24h' },
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/imshakil', icon: 'github' as const },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/imshakil', icon: 'linkedin' as const },
    { label: 'Medium', href: 'https://medium.com/@imshakil', icon: 'medium' as const },
    { label: 'YouTube', href: 'https://youtube.com/@ShakilOps', icon: 'youtube' as const },
  ],
  contactMethods: [
    {
      icon: 'email' as const,
      title: 'Email',
      value: 'shakilops.dev@gmail.com',
      link: 'mailto:shakilops.dev@gmail.com',
      description: 'Send me a message and I will reply as soon as possible.',
    },
    {
      icon: 'linkedin' as const,
      title: 'LinkedIn',
      value: 'Mobarak Hosen',
      link: 'https://www.linkedin.com/in/imshakil',
      description: 'Connect with me on LinkedIn for professional updates.',
    },
    {
      icon: 'github' as const,
      title: 'GitHub',
      value: 'imshakil',
      link: 'https://github.com/imshakil',
      description: 'Review projects and contributions from my GitHub profile.',
    },
  ],
} as const;

export type Profile = typeof profile;