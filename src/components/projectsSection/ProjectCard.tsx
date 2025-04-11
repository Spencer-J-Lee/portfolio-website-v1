import { HighlightBlock } from "../common/infoCard/HighlightBlock";
import Image from "next/image";
import { ProjectData } from "@/components/projectsSection/types";
import { CardWrapper } from "../common/infoCard/CardWrapper";

interface ProjectCardProps {
  data: ProjectData;
}

export const ProjectCard = ({ data }: ProjectCardProps) => {
  const { image, ...otherData } = data;

  return (
    <CardWrapper>
      <div className="z-10">
        <Image
          src={image.src}
          alt={image.alt}
          style={{ objectFit: "cover" }}
          width={124}
          height={100}
        />
      </div>

      <HighlightBlock className="z-10" {...otherData} />
    </CardWrapper>
  );
};
