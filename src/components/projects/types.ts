import { Skill } from "../experience/constants";

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
