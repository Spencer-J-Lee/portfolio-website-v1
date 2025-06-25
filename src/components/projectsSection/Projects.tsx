import { SECTIONS } from "@/constants/sections";

import { projectData } from "./data";
import { ProjectCard } from "./ProjectCard";
import { Section } from "../common/Section";

export const Projects = () => {
  if (projectData.length === 0) {
    return null;
  }

  return (
    <Section id={SECTIONS.PROJECTS} title="Projects">
      <ul className="gap-15 mt-2.5 flex flex-col justify-between lg:mt-10 lg:gap-10">
        {projectData.map((data) => (
          <li key={data.title}>
            <ProjectCard data={data} />
          </li>
        ))}
      </ul>
    </Section>
  );
};
