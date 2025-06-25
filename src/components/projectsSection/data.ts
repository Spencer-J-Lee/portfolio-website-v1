import { ASSET_PATHS } from "@/constants/assetPaths";
import { ProjectData } from "./types";
import { SKILLS } from "../experienceSection/constants";

export const projectData: ProjectData[] = [
  {
    image: {
      src: ASSET_PATHS.PROJECT_COMPOSERS_JOURNAL,
      alt: "Snapshot of composer's journal application.",
    },
    link: "https://github.com/Spencer-J-Lee/composers-journal",
    title: "Composer's Journal",
    description:
      "A music-focused journaling platform supporting rich text, embedded YouTube videos, and interactive music notation, enabling composers to document and revisit creative ideas.",
    skills: [
      SKILLS.JAVASCRIPT,
      SKILLS.TYPESCRIPT,
      SKILLS.REACT,
      SKILLS.NEXTJS,
      SKILLS.TAILWINDCSS,
      SKILLS.TIPTAP,
      SKILLS.TANSTACK_QUERY,
      SKILLS.SUPABASE,
      SKILLS.DRIZZLE,
    ],
  },
  {
    image: {
      src: ASSET_PATHS.PROJECT_PORTFOLIO_WEBSITE,
      alt: "Snapshot of personal portfolio website.",
    },
    link: "https://www.spencerjlee.com/",
    title: "Personal Portfolio Website",
    description:
      "Personal portfolio website used to showcase projects and technical skills.",
    skills: [
      SKILLS.JAVASCRIPT,
      SKILLS.TYPESCRIPT,
      SKILLS.REACT,
      SKILLS.NEXTJS,
      SKILLS.TAILWINDCSS,
      SKILLS.TS_PARTICLES,
    ],
  },
];
