import { ExperienceData } from "@/components/experience/types";
import { HighlightBlock } from "../common/infoCard/HighlightBlock";
import { CardWrapper } from "../common/infoCard/CardWrapper";

interface ExperienceCardProps {
  data: ExperienceData;
}

export const ExperienceCard = ({ data }: ExperienceCardProps) => {
  const { dateStr, ...otherData } = data;

  return (
    <CardWrapper>
      <div className="text-muted/70 z-10 mt-0.5 text-right text-sm tracking-wider">
        {dateStr}
      </div>

      {/* TODO fix missing company */}
      <HighlightBlock className="z-10" {...otherData} />
    </CardWrapper>
  );
};
