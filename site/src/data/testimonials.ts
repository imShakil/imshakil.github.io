export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  highlight: string;
  badge?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Shakil solved our Single Sign-On puzzle within days. We were struggling to pass an enterprise security review for our SaaS, and his deep understanding of SAML and OAuth 2.0 allowed us to close our biggest enterprise contract of the year.',
    author: 'Enterprise SaaS Founder',
    role: 'Co-Founder & CEO',
    company: 'B2B Software Startup',
    rating: 5,
    highlight: 'Saved an Enterprise Deal with SAML SSO',
    badge: 'IAM & SSO',
  },
  {
    quote:
      'Our team was wasting hours every week dealing with broken manual deployments and AWS configuration drift. Shakil codified our entire architecture in Terraform and built clean CI/CD pipelines. Our deploy time dropped from 40 minutes to under 5 minutes with zero downtime.',
    author: 'Engineering Lead',
    role: 'Head of Engineering',
    company: 'Cloud Tech Firm',
    rating: 5,
    highlight: '88% Deployment Time Reduction',
    badge: 'DevOps & CI/CD',
  },
  {
    quote:
      'Outstanding technical depth in Docker, GitLab CI, and Linux system administration. He communicates clearly, delivers ahead of schedule, and treats your production environment with the security and care of an in-house principal engineer.',
    author: 'Product Director',
    role: 'Director of Technology',
    company: 'Remote Digital Agency',
    rating: 5,
    highlight: 'Flawless Zero-Downtime Migration',
    badge: 'Infrastructure',
  },
];

export const trustMetrics = [
  { value: '5+ Years', label: 'Hands-on Cloud & IAM' },
  { value: '100%', label: 'Delivery Track Record' },
  { value: '15+', label: 'Production Deployments' },
  { value: '< 24h', label: 'Consultation Turnaround' },
];
