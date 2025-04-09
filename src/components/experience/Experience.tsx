import { SECTIONS } from "@/constants/sections";
import { Section } from "../common/Section";
import { experienceData } from "./data";
import { ExperienceCard } from "../common/infoCard/ExperienceCard";

export const Experience = () => {
  return (
    <Section id={SECTIONS.EXPERIENCE} title="Experience">
      <ul className="mt-10 flex flex-col justify-between gap-10">
        {experienceData.map((data) => (
          <li key={data.title + data.company}>
            <ExperienceCard data={data} />
          </li>
        ))}
      </ul>
    </Section>
  );
};
