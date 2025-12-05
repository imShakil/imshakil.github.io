import { Metadata } from 'next';
import { projects } from '@/data/projects';

const baseUrl = 'https://mhosen.com';

const getProjectSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
};

const getYouTubeImageUrl = (videoUrl?: string) => {
  if (!videoUrl?.includes('youtube')) return null;
  const videoId = videoUrl.split('v=')[1]?.split('&')[0];
  return videoId ? `https://img.youtube.com/vi/${videoId}/sddefault.jpg` : null;
};

export function createMetadata(
  title: string,
  description: string,
  path: string,
  image?: string
): Metadata {
  const url = `${baseUrl}${path}`;
  const ogImage = image?.startsWith('http') ? image : `${baseUrl}${image || '/logo.png'}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export function createProjectMetadata(slug: string): Metadata {
  const project = projects.find(p => getProjectSlug(p.name) === slug);

  if (!project) {
    return createMetadata('Project not found', 'This project does not exist', `/projects/${slug}`);
  }

  const image = getYouTubeImageUrl(project.video) || '/logo.png';

  return createMetadata(
    project.name,
    project.desc,
    `/projects/${slug}`,
    image
  );
}
