export const profile = {
  name: 'Mobarak Hosen',
  fullName: 'Mobarak Hosen Shakil',
  title: 'Cloud DevOps & IAM Specialist',
  roleLine: 'DevOps Engineer & Cloud Infrastructure Consultant',
  calUrl: 'https://cal.com/mhops.dev/15min?overlayCalendar=true',
  cal15min: 'https://cal.com/mhops.dev/15min?overlayCalendar=true',
  cal30min: 'https://cal.com/mhops.dev/30min?overlayCalendar=true',
  summary:
    'DevOps & Identity (IAM) Consultant helping growing startups and engineering teams eliminate deployment bottlenecks, cut cloud waste, and implement enterprise-grade Single Sign-On (SSO).',
  aboutSummary:
    'With 5+ years of hands-on engineering experience spanning Gluu Federation, FusionPulse Tech, and Syftet, I bridge the gap between engineering and infrastructure. I specialize in two high-impact areas: automating multi-cloud CI/CD pipelines that let teams deploy reliably multiple times a day, and implementing enterprise Identity & Access Management (IAM / SAML 2.0 / OAuth 2.0 / Keycloak) to help B2B SaaS products close enterprise security requirements.',
  aboutTags: ['DevOps & CI/CD', 'Enterprise IAM & SSO', 'Cloud Automation', 'Terraform & Docker'],
  heroBadge: 'Available for Consulting & Projects',
  heroHeadline: 'Automate. Secure. Scale.',
  heroDescription:
    'DevOps & IAM consulting for startups and engineering teams — faster deploys, leaner infra, enterprise SSO.',
  resumeSummary:
    'Detailed overview of my professional experience, infrastructure projects, and engineering achievements.',
  connectSummary:
    'Need help streamlining deployments, cutting AWS/Azure costs, or integrating enterprise SSO? Let’s talk about your current architecture and how I can help.',
  footerSummary:
    'Cloud DevOps & IAM Consultant focused on automated delivery, enterprise identity, and resilient cloud architectures.',
  location: 'Dhaka, Bangladesh',
  email: 'shakilops.dev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/imshakil',
  github: 'https://github.com/imshakil',
  medium: 'https://medium.com/@imshakil',
  youtube: 'https://youtube.com/@ShakilOps',
  pdfUrl: '/resume/Mobarak_Hosen_Resume.pdf',
  pdfName: 'Mobarak_Hosen_Resume.pdf',
  stats: [
    { label: 'Years In Cloud & IAM', value: '5+' },
    { label: 'Production Projects', value: '15+' },
    { label: 'Uptime & Reliability Focus', value: '99.9%' },
    { label: 'Discovery Call Response', value: '< 24h' },
  ],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/imshakil', icon: 'github' as const },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/imshakil', icon: 'linkedin' as const },
    { label: 'Medium', href: 'https://medium.com/@imshakil', icon: 'medium' as const },
    { label: 'YouTube', href: 'https://youtube.com/@ShakilOps', icon: 'youtube' as const },
  ],
  whatsappNumber: '+8801560060877',
  whatsappUrl: 'https://wa.me/8801560060877?text=Hi%20Mobarak,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20DevOps/IAM%20project.',
  telegramUsername: 'imshakil',
  telegramUrl: 'https://t.me/imshakil',
  contactMethods: [
    {
      icon: 'whatsapp' as const,
      title: 'WhatsApp Direct',
      value: 'Instant Chat',
      link: 'https://wa.me/8801560060877?text=Hi%20Mobarak,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20DevOps/IAM%20project.',
      description: 'Fastest response (< 15 min). Perfect for urgent production blockers or project scopes.',
    },
    {
      icon: 'telegram' as const,
      title: 'Telegram Direct',
      value: '@imshakil',
      link: 'https://t.me/imshakil',
      description: 'Confidential direct messaging, async technical discussions, and architecture docs.',
    },
    {
      icon: 'email' as const,
      title: 'Email Direct',
      value: 'shakilops.dev@gmail.com',
      link: 'mailto:shakilops.dev@gmail.com',
      description: 'Send detailed RFPs and project scopes. Typical response under 4 hours.',
    },
    {
      icon: 'linkedin' as const,
      title: 'LinkedIn',
      value: 'Mobarak Hosen',
      link: 'https://www.linkedin.com/in/imshakil',
      description: 'Connect with me for engineering collaborations and professional discussions.',
    },
    {
      icon: 'github' as const,
      title: 'GitHub',
      value: 'imshakil',
      link: 'https://github.com/imshakil',
      description: 'Inspect my open-source security tools, IaC blueprints, and published packages.',
    },
  ],
} as const;

export type Profile = typeof profile;