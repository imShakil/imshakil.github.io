export const profile = {
  name: 'Mobarak Hosen',
  fullName: 'Mobarak Hosen Shakil',
  title: 'IAM & Cloud DevOps Engineer',
  roleLine: 'DevOps Engineer & Cloud Infrastructure Specialist',
  summary:
    'A Cloud and DevOps engineer, bridging Development and Operations, with expertise in managing cloud infrastructure, automating CI/CD pipelines, and delivering reliable, scalable software solutions.',
  aboutSummary:
    'My professional career began as a technical support engineer, where I developed the ability to solve complex problems under pressure with customer satisfaction as a promise. At Gluu, I developed in identity and access management (IAM), with hands-on experience in authentication protocols such as SAML, OAuth2, and OpenID Connect. At FusionPulse Tech, I sharpened my system administration, cloud infrastructure management, and automated deployment abilities while managing self-hosted GitLab, deploying CI/CD pipelines, setting up custom mail servers, and Dockerizing client applications.',
  aboutTags: ['DevOps', 'Cloud Infrastructure', 'Automation'],
  heroBadge: 'Terminal online',
  heroHeadline: 'Booting Mobarak Hosen profile',
  heroDescription:
    'I automate cloud infrastructure, design CI/CD pipelines, and build scalable systems with a DevOps-first mindset.',
  resumeSummary:
    'Comprehensive overview of my professional experience, skills, and achievements.',
  connectSummary:
    'If you’re looking for someone who can bring technical depth, problem-solving, and a DevOps mindset to your team, let’s connect and discuss how I can contribute to your success.',
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
    { label: 'Response', value: '4h' },
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