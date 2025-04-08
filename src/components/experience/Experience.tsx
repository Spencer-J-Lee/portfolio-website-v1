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
              <a
                href={link}
                className="hover:bg-background-hover group grid grid-cols-[1fr_6fr] gap-8 rounded px-4 pb-4 pt-3 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-muted/70 mt-0.5 text-right text-sm tracking-wider">
                  {dateStr}
                </div>

                <div>
                  <StyledLink
                    href={link}
                    external
                    className="group-hover:text-accent"
                  >
                    {`${title} - ${company}`}
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
              </a>
            </li>
          ),
        )}
      </ul>
    </Section>
  );
};
