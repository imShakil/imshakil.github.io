import { projects } from '@/data/projects';

const getProjectSlug = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: getProjectSlug(project.name),
  }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
