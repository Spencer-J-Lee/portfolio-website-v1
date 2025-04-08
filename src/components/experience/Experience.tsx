import { SECTIONS } from "@/constants/sections";
import { Pill } from "../common/Pill";
import { Section } from "../common/Section";
import { StyledLink } from "../common/StyledLink";
import { experienceData } from "./data";

export const Experience = () => {
  return (
    <Section id={SECTIONS.EXPERIENCE} title="Experience">
      <ul className="flex flex-col justify-between gap-10">
        {experienceData.map(
          ({ title, company, description, dateStr, link, skills }) => (
            <li key={title + company}>
              <div className="relative grid grid-cols-[1fr_6fr] gap-8">
                <div className="text-muted/70 mt-0.5 text-right text-sm tracking-wider">
                  {dateStr}
                </div>

                <div>
                  <StyledLink href={link} external>
                    {`${title} - ${company}`}
                    <span className="absolute -bottom-4 -left-4 -right-4 -top-3 rounded transition-colors hover:bg-slate-500/10" />
                  </StyledLink>

                  <p className="text-muted mt-2 text-sm leading-relaxed">
                    {description}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-2.5">
                    {skills.map((skill) => (
                      <li key={skill}>
                        <Pill text={skill} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ),
        )}
      </ul>
    </Section>
  );
};
