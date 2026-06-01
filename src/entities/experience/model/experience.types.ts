export type ExperienceKind = "architecture" | "product" | "devops" | "legacy";

export type ExperienceItem = {
  id: string;
  company: string;
  team?: string;
  period: string;
  title: string;
  kind: ExperienceKind;
  techStack: string[];
  summary: string;
  highlights: string[];
  roles?: string[];
  responsibilities?: string[];
  achievements?: string[];
  challenges?: string[];
  badgeLabel?: string;
  isSpotlight?: boolean;
  image?: string;
  imageAlt?: string;
  gallery?: { src: string; alt?: string }[];
  links?: { label: string; href: string }[];
  isRecent?: boolean;
  isCondensed?: boolean;
};
