import { Metadata } from 'next';
import { metadataConfig } from '@/lib/metadata-config';
import ProjectsContent from '@/components/ProjectsContent';

export const metadata: Metadata = metadataConfig.projects();

export default function ProjectsPage() {
  return <ProjectsContent />;
}
