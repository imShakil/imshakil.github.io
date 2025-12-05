import { Metadata } from 'next';
import { metadataConfig } from '@/lib/metadata-config';
import BlogContent from '@/components/BlogContent';

export const metadata: Metadata = metadataConfig.blog();

export default function BlogPage() {
  return <BlogContent />;
}
