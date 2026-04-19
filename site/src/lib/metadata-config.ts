import { createMetadata } from './metadata';
import { profile } from '@/data/profile';

export const metadataConfig = {
  home: () => createMetadata(`${profile.name} - ${profile.title}`, profile.summary, '/'),
  about: () => createMetadata(`About Me - ${profile.name}`, profile.aboutSummary, '/about'),
  projects: () => createMetadata(`Projects - ${profile.name}`, 'Explore my portfolio of DevOps, cloud infrastructure, and development projects.', '/projects'),
  contact: () => createMetadata(`Contact - ${profile.name}`, profile.connectSummary, '/contact'),
  resume: () => createMetadata(`Resume - ${profile.name}`, profile.resumeSummary, '/resume'),
  activities: () => createMetadata(`Activities - ${profile.name}`, 'Latest content from my blog, YouTube channel, GitHub, and professional profiles.', '/activities'),
  blog: () => createMetadata(`Blog - ${profile.name}`, 'Thoughts on DevOps, Cloud Infrastructure, and Software Engineering.', '/blog'),
};
