export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Cloud Platforms',
    items: ['Azure', 'AWS', 'Google Cloud'],
  },
  {
    category: 'Containerization',
    items: ['Docker', 'Kubernetes', 'Docker Compose'],
  },
  {
    category: 'Infrastructure as Code',
    items: ['Terraform', 'Ansible', 'CloudFormation'],
  },
  {
    category: 'CI/CD',
    items: ['GitLab CI', 'GitHub Actions', 'Jenkins'],
  },
  {
    category: 'Monitoring',
    items: ['Prometheus', 'Grafana', 'ELK Stack'],
  },
  {
    category: 'System Tooling',
    items: ['Linux', 'Nginx', 'Python', 'Bash'],
  },
];