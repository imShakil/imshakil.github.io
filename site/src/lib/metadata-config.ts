import { createMetadata } from './metadata';

export const metadataConfig = {
  home: () => createMetadata(
    'Mobarak Hosen - DevOps Engineer',
    'DevOps engineer specializing in cloud infrastructure, CI/CD, and automation. Explore my projects and expertise.',
    '/'
  ),
  about: () => createMetadata(
    'About Me - Mobarak Hosen',
    'Learn more about my background, experience, and journey in DevOps and cloud infrastructure.',
    '/about'
  ),
  projects: () => createMetadata(
    'Projects - Mobarak Hosen',
    'Explore my portfolio of DevOps, cloud infrastructure, and development projects.',
    '/projects'
  ),
  contact: () => createMetadata(
    'Contact - Mobarak Hosen',
    'Get in touch with me for collaborations, questions, or opportunities.',
    '/contact'
  ),
  resume: () => createMetadata(
    'Resume - Mobarak Hosen',
    'Download my professional resume showcasing my DevOps and cloud infrastructure expertise.',
    '/resume'
  ),
  activities: () => createMetadata(
    'Activities - Mobarak Hosen',
    'Latest content from my blog, YouTube channel, GitHub, and professional profiles.',
    '/activities'
  ),
  blog: () => createMetadata(
    'Blog - Mobarak Hosen',
    'Thoughts on DevOps, Cloud Infrastructure, and Software Engineering.',
    '/blog'
  ),
};
