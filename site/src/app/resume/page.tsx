import { Metadata } from 'next';
import { metadataConfig } from '@/lib/metadata-config';
import ResumeContent from '@/components/ResumeContent';

export const metadata: Metadata = metadataConfig.resume();

export default function ResumePage() {
  return <ResumeContent />;
}
