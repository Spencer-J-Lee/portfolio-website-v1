import Image from "next/image";
import { Pill } from "../common/Pill";
import { Section } from "../common/Section";
import { projectData } from "./data";
import { SECTIONS } from "@/constants/sections";

export const Projects = () => {
  return (
    <Section id={SECTIONS.PROJECTS} title="Projects">
      <ul>
        {projectData.map(({ image, link, title, description, skills }) => (
          <li key={title}>
            <div className="flex justify-between gap-4">
              <div>
                <Image
                  src={image.src}
                  alt={image.alt}
                  style={{
                    objectFit: "cover",
                  }}
                  width={300}
                  height={200}
                />
              </div>
              <div>
                <a href={link}>{title}</a>
                <p>{description}</p>
                <ul>
                  {skills.map((skill) => (
                    <li key={skill}>
                      <Pill text={skill} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};
