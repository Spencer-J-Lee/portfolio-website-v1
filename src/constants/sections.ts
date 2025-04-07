export const SECTIONS = {
  HOME: "",
  ABOUT: "about",
  EXPERIENCE: "experience",
  PROJECTS: "projects",
  CONTACT: "contact",
} as const;

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];
