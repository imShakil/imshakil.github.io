import { createMetadata } from './metadata';
import { profile } from '@/data/profile';

export const metadataConfig = {
  home: () => createMetadata(`${profile.name} - ${profile.title}`, profile.summary, '/'),
  about: () => createMetadata(`About Me - ${profile.name}`, profile.aboutSummary, '/about'),
  projects: () => createMetadata(`Case Studies - ${profile.name}`, 'Explore DevOps, cloud infrastructure, and enterprise IAM case studies with proven business outcomes.', '/projects'),
  contact: () => createMetadata(`Contact - ${profile.name}`, profile.connectSummary, '/contact'),
  resume: () => createMetadata(`Resume - ${profile.name}`, profile.resumeSummary, '/resume'),
  activities: () => createMetadata(`Insights & Content - ${profile.name}`, 'Technical articles, architecture videos, and cloud engineering deep dives.', '/activities'),
};
