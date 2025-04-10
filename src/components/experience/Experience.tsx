import { SECTIONS } from "@/constants/sections";
import { Section } from "../common/Section";
import { experienceData } from "./data";
import { ExperienceCard } from "./ExperienceCard";

export const Experience = () => {
  return (
    <Section id={SECTIONS.EXPERIENCE} title="Experience">
      <ul className="mt-2.5 flex flex-col justify-between gap-10 lg:mt-10">
        {experienceData.map((data) => (
          <li key={data.title + data.company}>
            <ExperienceCard data={data} />
          </li>
        ))}
      </ul>
    </Section>
  );
};
