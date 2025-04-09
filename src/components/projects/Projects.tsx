import { Section } from "../common/Section";
import { projectData } from "./data";
import { SECTIONS } from "@/constants/sections";
import { ProjectCard } from "../common/infoCard/ProjectCard";

export const Projects = () => {
  return (
    <Section id={SECTIONS.PROJECTS} title="Projects">
      <ul className="mt-10 flex flex-col justify-between gap-10">
        {projectData.map((data) => (
          <li key={data.title}>
            <ProjectCard data={data} />
          </li>
        ))}
      </ul>
    </Section>
  );
};
