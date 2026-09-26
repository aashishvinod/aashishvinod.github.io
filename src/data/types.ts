export type ProjectLink = {
  label: string;
  url: string;
};

export type ProjectLinks = {
  live?: string | null;
  github?: string | null;
  paper?: string | null;
  video?: string | null;
  notebook?: string | null;
  additional?: ProjectLink[];
  accessNote?: string | null;
};

export type ProjectGalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectImages = {
  hero?: string | null;
  thumbnail?: string | null;
  gallery?: ProjectGalleryImage[];
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  status: string;
  year?: string;
  role: string;
  organization?: string;
  category: string[];
  stack: string[];
  featured: boolean;
  homepageOrder?: number;

  links: ProjectLinks;

  problem: string;
  whatIBuilt: string[];
  howItWorks: string[];
  contribution: string[];
  outcomes: string[];

  images: ProjectImages;

  relatedExperience?: string[];
  relatedProjects?: string[];
};

export type ExperienceEntry = {
  id: string;
  organization: string;
  role: string;
  dates: string;
  location?: string;
  summary: string;
  technologies: string[];
  relatedProjects?: string[];
  highlights: string[];
};

export type Publication = {
  slug: string;
  title: string;
  venue: string;
  status: string;
  result?: string;
  models?: string[];
  technologies?: string[];
  relatedProjectSlug?: string;
  paperUrl?: string | null;
};

export type ActiveResearch = {
  slug: string;
  name: string;
  tagline: string;
  status: string;
  stack?: string[];
  summary?: string;
  criteria?: string[];
  relatedProjectSlug?: string;
};

export type Patent = {
  slug: string;
  name: string;
  applicationNumber: string;
  status: string;
  dateLabel: string;
  date: string;
  description: string;
};
