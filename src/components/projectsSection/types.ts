import { Skill } from "../experienceSection/constants";

export interface ProjectData {
  image: {
    src: string;
    alt: string;
  };
  link: string;
  title: string;
  description: string;
  skills: Skill[];
}
