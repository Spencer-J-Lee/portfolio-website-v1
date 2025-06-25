import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ExperienceData } from "@/components/experienceSection/types";

import { CardWrapper } from "../common/infoCard/CardWrapper";
import { HighlightBlock } from "../common/infoCard/HighlightBlock";

interface ExperienceCardProps {
  data: ExperienceData;
}

export const ExperienceCard = ({ data }: ExperienceCardProps) => {
  const { dateStr, role, company, ...otherData } = data;

  return (
    <CardWrapper variant="experience">
      <div className="text-muted/70 z-10 mt-0.5 text-xs font-medium tracking-wider lg:text-right lg:text-sm">
        {dateStr}
      </div>

      <HighlightBlock
        className="z-10"
        title={
          <>
            {role} • {company.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="inline-block">
              {company.split(" ").slice(-1)}
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                size="xs"
                className="ml-2"
              />
            </span>
          </>
        }
        {...otherData}
      />
    </CardWrapper>
  );
};
