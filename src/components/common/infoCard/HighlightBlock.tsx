import { Skill } from "@/components/experience/constants";
import { Pill } from "../Pill";
import { StyledLink } from "../StyledLink";
import clsx from "clsx";

interface HighlightBlockProps {
  link: string;
  title: string;
  description: string;
  skills: Skill[];
  className?: string;
}

export const HighlightBlock = ({
  link,
  title,
  description,
  skills,
  className,
}: HighlightBlockProps) => {
  return (
    <div className={clsx(className)}>
      <StyledLink href={link} external showIcon>
        {title}
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
  );
};
