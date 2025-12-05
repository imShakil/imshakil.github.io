import { Metadata } from 'next';
import { metadataConfig } from '@/lib/metadata-config';
import ContactContent from '@/components/ContactContent';

export const metadata: Metadata = metadataConfig.contact();

export default function Contact() {
  return <ContactContent />;
}
