import { SECTIONS } from "@/constants/sections";
import { Section } from "./common/Section";

// TODO add actual copy
export const About = () => {
  return (
    <Section id={SECTIONS.ABOUT} title="About Me">
      <div className="flex flex-col gap-3">
        <p className="text-muted leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquam
          iste nihil consectetur labore architecto, sed ad voluptatum sunt earum
          eaque illum magnam. Nostrum ad soluta impedit quibusdam maxime tempora
          minima repudiandae mollitia iusto sequi consequatur pariatur quia sit
        </p>
        <p className="text-muted leading-relaxed">
          expedita amet, labore facilis optio quae explicabo, nisi reprehenderit
          omnis molestias! Rem inventore consectetur cumque necessitatibus
          laboriosam ullam. Rem numquam minima iusto. Atque molestias incidunt
        </p>
        <p className="text-muted leading-relaxed">
          repellat, omnis expedita officiis quisquam maxime totam? Rerum
          mollitia minus fugiat illum quam nesciunt cumque distinctio quisquam,
          incidunt, dolorem eum corrupti ut perspiciatis quod illo hic!
        </p>
      </div>
    </Section>
  );
};
