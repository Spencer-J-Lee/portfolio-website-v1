import { HighlightBlock } from "./HighlightBlock";
import Image from "next/image";
import { ProjectData } from "@/components/projects/types";
import { CardWrapper } from "./CardWrapper";

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
