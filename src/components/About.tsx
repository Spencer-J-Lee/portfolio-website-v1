import { SECTIONS } from "@/constants/sections";

import { Section } from "./common/Section";

export const About = () => {
  return (
    <Section id={SECTIONS.ABOUT} title="About Me">
      <div className="text-muted flex flex-col gap-3 leading-relaxed">
        <p>
          Hello! {`I'm`} a developer based in San Francisco with 4+ years of
          experience building for the web.
        </p>
        <p>
          With a background in composing music and sound for video games, I
          bring a deep appreciation for creativity and design to my engineering
          work. This perspective has helped me bridge the gap between
          engineering, product, and design as {`I've`} had first-hand experience
          wrestling with the kind of creativity that drives these roles.
        </p>
        <p>
          That said, I believe great design truly shines when paired with
          robust, thoughtful engineering. When developing systems and
          components, I always aim to create an intuitive and extensible
          developer experience. My favorite work involves performant and
          polished interfaces that delight users, drive measurable business
          results, and are enjoyable to work with under the hood.
        </p>
      </div>
    </Section>
  );
};
