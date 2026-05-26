export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Cloud Infrastructure & GRC',
    items: ['Azure', 'AWS', 'Google Cloud', 'Scrut.io'],
  },
  {
    category: 'Identity & Access Management',
    items: ['SAML', 'OAuth 2.0', 'OpenID Connect', 'Single Sign-On', 'Keycloak', 'Gluu Flex', 'Okta', 'WSO2', 'LDAP', 'RBAC'],
  },
  {
    category: 'Containers & Orchestration',
    items: ['Docker', 'Kubernetes', 'Docker Compose', 'ArgoCD'],
  },
  {
    category: 'Infrastructure Automation',
    items: ['Terraform', 'Ansible', 'CloudFormation'],
  },
  {
    category: 'CI/CD Pipeline',
    items: ['GitLab CI', 'GitHub Actions', 'Azure DevOps', 'Jenkins'],
  },
  {
    category: 'Systems, Observability & Monitoring',
    items: ['Linux', 'Nginx', 'Python', 'Bash', 'Prometheus', 'Grafana', 'ELK Stack'],
  },
];
