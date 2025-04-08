import { SECTIONS } from "@/constants/sections";
import { Section } from "../common/Section";
import { experienceData } from "./data";
import { JobBlock } from "./JobBlock";

export const Experience = () => {
  return (
    <Section id={SECTIONS.EXPERIENCE} title="Experience">
      <ul className="mt-10 flex flex-col justify-between gap-10">
        {experienceData.map((data) => (
          <li key={data.title + data.company}>
            <JobBlock data={data} />
          </li>
        ))}
      </ul>
    </Section>
  );
};
