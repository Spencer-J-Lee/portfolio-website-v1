import { AnchorButton } from "./common/buttons/AnchorButton";
import { Fade } from "./common/fades/Fade";
import { SocialLinksMobile } from "./socialLinks/SociaLinksMobile";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col justify-center pt-20 lg:items-center lg:pt-0"
    >
      <div>
        <Fade direction="up" index={10}>
          <h1 className="font-ibm-plex-mono text-accent ml-0.5 text-base md:text-xl">
            Hi there, my name is
          </h1>
        </Fade>

        <Fade direction="up" index={11}>
          <h2 className="-ml-0.5 mt-3 text-4xl font-bold md:mt-3 md:text-7xl">
            Spencer Lee.
          </h2>
        </Fade>

        <Fade direction="up" index={12}>
          <h3 className="text-muted mt-3 text-3xl font-bold md:mt-5 md:text-5xl lg:text-6xl">
            I build things for the web.
          </h3>
        </Fade>

        <Fade direction="up" index={13}>
          <p className="text-muted ml-0.5 mt-2.5 max-w-[680px] text-sm leading-relaxed md:mt-8 md:text-base">
            {`I'm`} a frontend engineer who specializes in developing
            performant, customer-centric features for web applications. {`I'm`}{" "}
            always aiming for that perfect blend of performance, usability, and
            design that not only delights users but drives measurable business
            results.
          </p>
        </Fade>

        <Fade direction="up" index={14}>
          <AnchorButton
            href="mailto:spenjlee@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block md:mt-12"
          >
            Contact Me
          </AnchorButton>
        </Fade>
      </div>

      <SocialLinksMobile />
    </section>
  );
};
