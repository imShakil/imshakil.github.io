import { Metadata } from 'next';
import { createProjectMetadata } from '@/lib/metadata';
import { projects } from '@/data/projects';
import ProjectContent from '@/components/ProjectContent';

const getProjectSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: getProjectSlug(project.name),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return createProjectMetadata(slug);
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProjectContent slug={slug} />;
}
