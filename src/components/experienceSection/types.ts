import { Skill } from "./constants";

export interface ExperienceData {
  role: string;
  company: string;
  description: string;
  dateStr: string;
  link: string;
  skills: Skill[];
}
