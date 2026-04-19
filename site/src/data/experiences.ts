export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    title: "DevOps Engineer",
    company: "Syftet Limited",
    location: "Dhaka, Bangladesh",
    period: "April 2026 - Present",
    highlights: [
      "As a DevOps Engineer at Syftet Limited, My key role in enhancing the deployment and operations of the Mindstaq application.", 
      "I focus on automating processes to improve team efficiency and streamline workflows.", 
      "I actively promote collaboration across cross-functional teams, ensuring seamless communication and continuous progress."
    ],

  },

  {
    title: 'System Admin & DevOps',
    company: 'FusionPulse Tech',
    location: 'Remote, Dhaka',
    period: 'Oct 2024 - Jul 2025',
    highlights: [
      'Implemented and managed self-hosted GitLab instances, optimizing CI/CD pipelines for streamlined development and deployment processes.',
      'Provided WordPress development services while improving performance through DNS and hosting management.',
      'Secured web infrastructure by configuring SSL/TLS and managing web servers like Nginx and Apache.',
    ],
  },
  {
    title: 'Technical Support Engineer',
    company: 'Gluu Federation',
    location: 'Remote, USA',
    period: 'Sep 2020 - Feb 2025',
    highlights: [
      'Provided Tier 1/2 customer support for community users and enterprise clients implementing Gluu Server for IAM and SSO solutions.',
      'Diagnosed authentication, authorization, and directory integration issues while maintaining strong customer satisfaction levels.',
      'Tested APIs, authentication modules, and documented third-party SSO integration flows.',
    ],
  },
];