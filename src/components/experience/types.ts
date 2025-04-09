import { Skill } from "./constants";

export interface ExperienceData {
  title: string;
  company: string;
  description: string;
  dateStr: string;
  link: string;
  skills: Skill[];
}
