import { AnchorButton } from "./common/button/AnchorButton";
import { Button } from "./common/button/Button";
import { useAnimationDelay } from "./hooks/useAnimationDelay";

export const Hero = () => {
  const { delay, toMSStr } = useAnimationDelay();

  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <div>
        <h1
          className="font-ibm-plex-mono text-accent animate-fade-up ml-0.5 text-xl opacity-0"
          style={{ animationDelay: toMSStr(delay.hero[1]) }}
        >
          Hi there, my name is
        </h1>

        <h2
          className="animate-fade-up -ml-0.5 mt-3 text-7xl font-bold opacity-0"
          style={{ animationDelay: toMSStr(delay.hero[2]) }}
        >
          Spencer Lee.
        </h2>

        <h3
          className="text-muted animate-fade-up mt-5 text-6xl font-bold opacity-0"
          style={{ animationDelay: toMSStr(delay.hero[3]) }}
        >
          I build digital experiences.
        </h3>

        <p
          className="text-muted animate-fade-up ml-0.5 mt-8 max-w-[510px] leading-relaxed opacity-0"
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
          className="animate-fade-up mt-12 inline-block opacity-0"
          style={{ animationDelay: toMSStr(delay.hero[5]) }}
        >
          Contact Me
        </AnchorButton>
      </div>
    </section>
  );
};
