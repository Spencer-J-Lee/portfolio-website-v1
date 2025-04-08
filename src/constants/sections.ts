export const SECTIONS = {
  HOME: "",
  ABOUT: "about",
  EXPERIENCE: "experience",
  PROJECTS: "projects",
  CONTENT: "content",
} as const;

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];
