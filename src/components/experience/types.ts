import { SKILLS } from "./constants";

export interface ExperienceData {
  title: string;
  company: string;
  description: string;
  dateStr: string;
  link: string;
  skills: (typeof SKILLS)[keyof typeof SKILLS][];
}
