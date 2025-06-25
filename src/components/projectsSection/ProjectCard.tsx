import Image from "next/image";

import { ProjectData } from "@/components/projectsSection/types";

import { CardWrapper } from "../common/infoCard/CardWrapper";
import { HighlightBlock } from "../common/infoCard/HighlightBlock";

interface ProjectCardProps {
  data: ProjectData;
}

export const ProjectCard = ({ data }: ProjectCardProps) => {
  const { image, ...otherData } = data;

  return (
    <CardWrapper variant="project">
      <div className="z-10">
        <Image
          src={image.src}
          alt={image.alt}
          style={{ objectFit: "cover" }}
          width={200}
          height={100}
          className="border-border rounded-sm border-2"
        />
      </div>

      <HighlightBlock className="z-10" {...otherData} />
    </CardWrapper>
  );
};
