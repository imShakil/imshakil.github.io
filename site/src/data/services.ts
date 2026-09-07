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
    badge: 'Enterprise Enabler',
    title: 'Enterprise IAM & Single Sign-On (SSO)',
    tagline: 'Enable SAML & OAuth2 SSO to close lucrative enterprise SaaS deals without security headaches.',
    painPoint:
      'Enterprise customers want your software, but their IT department blocks the deal until you support Okta, Azure AD, or Keycloak SAML/OIDC Single Sign-On.',
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
    badge: 'Cost & Scalability',
    title: 'Cloud Infrastructure & IaC Automation',
    tagline: 'Replace fragile manual cloud setups with bulletproof Terraform code that cuts monthly bills.',
    painPoint:
      'Your cloud architecture was created manually through the console, bills are creeping up unexpectedly, and nobody feels safe modifying production.',
    deliverables: [
      'Declarative Infrastructure as Code (IaC) written in clean Terraform',
      'Multi-environment parity (Dev, Staging, Production)',
      'Cloud cost audit & waste reduction (often saving 20-40% on AWS/Azure)',
      'VPC networking, secrets management, and automated backup strategies',
    ],
    technologies: ['Terraform', 'AWS', 'Azure', 'GCP', 'Ansible', 'Linux'],
    timeline: '1 – 4 Weeks',
    featured: true,
  },
  {
    id: 'cicd-automation',
    badge: 'Ship 10x Faster',
    title: 'End-to-End CI/CD Pipeline Automation',
    tagline: 'Eliminate manual deployments and turn code commits into fast, zero-downtime releases.',
    painPoint:
      'Developers spend hours babysitting manual deployments via SSH, builds fail intermittently, and releases create panic and downtime.',
    deliverables: [
      'Push-to-deploy pipelines with GitHub Actions, GitLab CI, or Azure DevOps',
      'Optimized Docker multi-stage builds with layer caching for ultra-fast builds',
      'Automated automated test triggers, linting, and vulnerability scanning',
      'Zero-downtime rolling or blue/green deployments to VPS or Kubernetes',
    ],
    technologies: ['GitHub Actions', 'GitLab CI', 'Docker', 'Kubernetes', 'Traefik', 'ArgoCD'],
    timeline: '1 – 2 Weeks',
    featured: true,
  },
  {
    id: 'devops-audit',
    badge: 'Rapid Diagnostic',
    title: '48-Hour Cloud & DevOps Architecture Audit',
    tagline: 'A fast, high-impact diagnostic to pinpoint security risks, cost leaks, and deployment bottlenecks.',
    painPoint:
      'You are unsure if your architecture is secure, why your cloud bill is spiking, or whether your infrastructure can handle the next traffic spike.',
    deliverables: [
      'Comprehensive security & least-privilege IAM review',
      'Infrastructure bottleneck & single-point-of-failure analysis',
      'Cost optimization breakdown with immediate quick-win savings',
      'Prioritized executive summary & technical step-by-step roadmap',
    ],
    technologies: ['AWS', 'Azure', 'Security Best Practices', 'IaC Analysis', 'Monitoring'],
    timeline: '48 Hours',
    featured: false,
  },
];
