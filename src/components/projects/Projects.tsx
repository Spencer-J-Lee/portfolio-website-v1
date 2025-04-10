import { Section } from "../common/Section";
import { projectData } from "./data";
import { SECTIONS } from "@/constants/sections";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
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
