import { Section } from "../common/Section";
import { projectData } from "./data";
import { SECTIONS } from "@/constants/sections";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <Section id={SECTIONS.PROJECTS} title="Projects">
      <ul className="mt-2.5 flex flex-col justify-between gap-10 lg:mt-10">
        {projectData.map((data) => (
          <li key={data.title}>
            <ProjectCard data={data} />
          </li>
        ))}
      </ul>
    </Section>
  );
};
