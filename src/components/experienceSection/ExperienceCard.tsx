import { ExperienceData } from "@/components/experienceSection/types";
import { HighlightBlock } from "../common/infoCard/HighlightBlock";
import { CardWrapper } from "../common/infoCard/CardWrapper";

interface ExperienceCardProps {
  data: ExperienceData;
}

export const ExperienceCard = ({ data }: ExperienceCardProps) => {
  const { dateStr, role, company, ...otherData } = data;

  return (
    <CardWrapper>
      <div className="text-muted/70 z-10 mt-0.5 text-xs font-medium tracking-wider lg:text-right lg:text-sm">
        {dateStr}
      </div>

      <HighlightBlock
        className="z-10"
        title={`${role} ◇ ${company}`}
        {...otherData}
      />
    </CardWrapper>
  );
};
