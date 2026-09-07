export type ServicePackage = {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  painPoint: string;
  deliverables: string[];
  technologies: string[];
  timeline: string;
  featured?: boolean;
};

export const services: ServicePackage[] = [
  {
    id: 'iam-sso',
    badge: 'IAM & SSO',
    title: 'Enterprise IAM & Single Sign-On',
    tagline: 'SAML & OAuth2 SSO so your SaaS passes enterprise security reviews and closes bigger deals.',
    painPoint:
      'Enterprise prospects block the deal until you support Okta, Azure AD, or Keycloak SAML/OIDC.',
    deliverables: [
      'Multi-tenant SAML 2.0 & OpenID Connect (OIDC) implementation',
      'Integration with Okta, Azure AD, Google Workspace, or Keycloak',
      'Role-Based Access Control (RBAC) & directory sync (SCIM/LDAP)',
      'Security review, audit logging, and enterprise handoff documentation',
    ],
    technologies: ['SAML 2.0', 'OAuth 2.0', 'OpenID Connect', 'Keycloak', 'Okta', 'Azure AD'],
    timeline: '1 – 3 Weeks',
    featured: true,
  },
  {
    id: 'cloud-iac',
    badge: 'Cloud IaC',
    title: 'Cloud Infrastructure & IaC Automation',
    tagline: 'Replace manual cloud setups with clean Terraform code that reduces cost and eliminates config drift.',
    painPoint:
      'Console-built infrastructure means unpredictable bills and nobody feels safe touching production.',
    deliverables: [
      'Declarative Infrastructure as Code (IaC) in Terraform',
      'Multi-environment parity (Dev, Staging, Production)',
      'Cloud cost audit & waste reduction (typically 20–40% savings)',
      'VPC networking, secrets management, and automated backups',
    ],
    technologies: ['Terraform', 'AWS', 'Azure', 'GCP', 'Ansible', 'Linux'],
    timeline: '1 – 4 Weeks',
    featured: true,
  },
  {
    id: 'cicd-automation',
    badge: 'CI/CD',
    title: 'CI/CD Pipeline Automation',
    tagline: 'Push-to-deploy pipelines that eliminate SSH babysitting and ship code with zero downtime.',
    painPoint:
      'Manual deployments via SSH eat hours, builds fail unpredictably, and every release is a risk.',
    deliverables: [
      'Push-to-deploy pipelines with GitHub Actions, GitLab CI, or Azure DevOps',
      'Optimized Docker multi-stage builds with layer caching',
      'Automated test triggers, linting, and vulnerability scanning',
      'Zero-downtime rolling or blue/green deployments to VPS or Kubernetes',
    ],
    technologies: ['GitHub Actions', 'GitLab CI', 'Docker', 'Kubernetes', 'Traefik', 'ArgoCD'],
    timeline: '1 – 2 Weeks',
    featured: true,
  },
  {
    id: 'devops-audit',
    badge: 'Audit',
    title: '48-Hour Cloud & DevOps Audit',
    tagline: 'A focused diagnostic that surfaces security gaps, cost leaks, and deployment bottlenecks — fast.',
    painPoint:
      'Unsure if your architecture is secure, why your cloud bill is spiking, or whether infra can scale.',
    deliverables: [
      'Security & least-privilege IAM review',
      'Infrastructure bottleneck & single-point-of-failure analysis',
      'Cost optimization breakdown with quick-win savings',
      'Prioritized executive summary & step-by-step remediation roadmap',
    ],
    technologies: ['AWS', 'Azure', 'Security Best Practices', 'IaC Analysis', 'Monitoring'],
    timeline: '48 Hours',
    featured: false,
  },
];
