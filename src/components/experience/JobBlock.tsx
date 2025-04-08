import { Pill } from "../common/Pill";
import { StyledLink } from "../common/StyledLink";
import { ExperienceData } from "./types";

interface JobBlockProps {
  data: ExperienceData;
}

export const JobBlock = ({ data }: JobBlockProps) => {
  const { link, dateStr, title, company, description, skills } = data;

  return (
    <div className="group relative grid grid-cols-[1fr_6fr] gap-8">
      <div className="group-hover:bg-background-hover absolute -inset-4 rounded transition-colors" />

      <div className="text-muted/70 z-10 mt-0.5 text-right text-sm tracking-wider">
        {dateStr}
      </div>

      <div className="z-10">
        <StyledLink href={link} external>
          {`${title} - ${company}`}
          <span className="absolute -inset-4 block" />
        </StyledLink>

        <p className="text-muted mt-2 text-sm leading-relaxed">{description}</p>

        <ul className="mt-4 flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <li key={skill}>
              <Pill text={skill} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
