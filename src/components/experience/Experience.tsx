import { Pill } from "../common/Pill";
import { Section } from "../common/Section";
import { StyledLink } from "../common/StyledLink";
import { experienceData } from "./data";

export const Experience = () => {
  return (
    <Section id="experience" title="Experience">
      <ul>
        {experienceData.map(
          ({ title, company, description, dateStr, link, skills }) => (
            <li key={title + company}>
              <div className="grid grid-cols-[1fr_4fr] gap-10">
                <div className="">{dateStr}</div>
                <div className="">
                  <StyledLink
                    href={link}
                    external
                  >{`${title} - ${company}`}</StyledLink>
                  <p>{description}</p>
                  <ul className="flex flex-wrap gap-2.5">
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
