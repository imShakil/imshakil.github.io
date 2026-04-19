export type Certification = {
  name: string;
  issuer: string;
  year?: string;
};

export const certifications: Certification[] = [];

export const certificationsEmptyState = 'No certifications listed yet.';