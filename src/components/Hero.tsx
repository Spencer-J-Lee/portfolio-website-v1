import { AnchorButton } from "./common/buttons/AnchorButton";
import { useAnimationDelay } from "./hooks/useAnimationDelay";
import { SocialLinksMobile } from "./socialLinks/SociaLinksMobile";

export const Hero = () => {
  const { delay, toMSStr } = useAnimationDelay();

  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col justify-center pt-20 lg:items-center lg:pt-0"
    >
      <div>
        <h1
          className="font-ibm-plex-mono text-accent animate-fade-up ml-0.5 text-base opacity-0 md:text-xl"
          style={{ animationDelay: toMSStr(delay.hero[1]) }}
        >
          Hi there, my name is
        </h1>

        <h2
          className="animate-fade-up -ml-0.5 mt-3 text-4xl font-bold opacity-0 md:mt-3 md:text-7xl"
          style={{ animationDelay: toMSStr(delay.hero[2]) }}
        >
          Spencer Lee.
        </h2>

        <h3
          className="text-muted animate-fade-up mt-3 text-3xl font-bold opacity-0 md:mt-5 md:text-5xl lg:text-6xl"
          style={{ animationDelay: toMSStr(delay.hero[3]) }}
        >
          I build digital experiences.
        </h3>

        <p
          className="text-muted animate-fade-up ml-0.5 mt-2.5 max-w-[510px] text-sm leading-relaxed opacity-0 md:mt-8 md:text-base"
          style={{ animationDelay: toMSStr(delay.hero[4]) }}
        >
          I'm a software engineer who specializes in creating accessible,
          pixel-perfect interfaces. I'm obsessed with craftsmanship, always
          aiming for that perfect blend of performance, usability, and design.
        </p>

        <AnchorButton
          href="mailto:spenjlee@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-up mt-10 inline-block opacity-0 md:mt-12"
          style={{ animationDelay: toMSStr(delay.hero[5]) }}
        >
          Contact Me
        </AnchorButton>
      </div>

      <SocialLinksMobile />
    </section>
  );
};
