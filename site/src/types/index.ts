export interface Project {
  name: string;
  desc: string;
  link: string;
  tags?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export interface Resume {
  content: string;
}

export interface About {
  content: string;
}
