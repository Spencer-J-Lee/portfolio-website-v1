import { COMPANIES, SKILLS } from "./constants";
import { ExperienceData } from "./types";

export const experienceData: ExperienceData[] = [
  {
    role: "Software Engineer",
    company: COMPANIES.MOOV,
    // TODO add actual copy
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur cupiditate fuga ipsam tempore eaque dolore rerum ratione, nobis unde et, qui assumenda nulla aut deleniti dignissimos dicta ipsum fugiat provident, necessitatibus dolorum facere?",
    dateStr: "2022 — 2024",
    link: "https://moov.co/search?search_flow_type=text",
    skills: [
      SKILLS.JAVASCRIPT,
      SKILLS.TYPESCRIPT,
      SKILLS.REACT,
      SKILLS.NEXTJS,
      SKILLS.REDUX,
      SKILLS.EMBERJS,
      SKILLS.GOLANG,
      SKILLS.POSTGRESQL,
      SKILLS.JEST,
      SKILLS.REACT_TESTING_LIBRARY,
      SKILLS.TAILWINDCSS,
      SKILLS.BOOTSTRAP,
      SKILLS.MATERIAL_UI,
      SKILLS.CONTENTFUL,
      SKILLS.STORYBOOK,
      SKILLS.LOOKER,
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "Moov Technologies Inc.",
    // TODO add actual copy
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur cupiditate fuga ipsam tempore eaque dolore rerum ratione, nobis unde et, qui assumenda nulla aut deleniti dignissimos dicta ipsum fugiat provident, necessitatibus dolorum facere?",
    dateStr: "2020 — 2022",
    link: "https://moov.co/sell",
    skills: [
      SKILLS.JAVASCRIPT,
      SKILLS.TYPESCRIPT,
      SKILLS.REACT,
      SKILLS.NEXTJS,
      SKILLS.REDUX,
      SKILLS.EMBERJS,
      SKILLS.GOLANG,
      SKILLS.POSTGRESQL,
      SKILLS.JEST,
      SKILLS.REACT_TESTING_LIBRARY,
      SKILLS.TAILWINDCSS,
      SKILLS.BOOTSTRAP,
      SKILLS.MATERIAL_UI,
      SKILLS.CONTENTFUL,
      SKILLS.METABASE,
    ],
  },
  {
    role: "Intern Software Engineer",
    company: "Moov Technologies Inc.",
    // TODO add actual copy
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias aspernatur cupiditate fuga ipsam tempore eaque dolore rerum ratione, nobis unde et, qui assumenda nulla aut deleniti dignissimos dicta ipsum fugiat provident, necessitatibus dolorum facere?",
    dateStr: "2020",
    link: "https://www.moov.co",
    skills: [
      SKILLS.JAVASCRIPT,
      SKILLS.REACT,
      SKILLS.NEXTJS,
      SKILLS.REDUX,
      SKILLS.EMBERJS,
      SKILLS.GOLANG,
      SKILLS.POSTGRESQL,
      SKILLS.SASS,
      SKILLS.STYLED_COMPONENTS,
    ],
  },
];
