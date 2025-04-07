export const Hero = () => {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col items-center justify-center"
    >
      <div>
        <h1 className={`font-ibm-plex-mono text-accent ml-0.5 text-xl`}>
          Hi there, my name is
        </h1>
        <h2 className="-ml-0.5 mt-3 text-7xl font-bold">Spencer Lee.</h2>
        <h3 className="text-muted mt-5 text-6xl font-bold">
          I build digital experiences.
        </h3>
        <p className="text-muted ml-0.5 mt-8 max-w-[510px] leading-relaxed">
          I'm a software engineer who specializes in creating accessible,
          pixel-perfect interfaces. I'm obsessed with craftsmanship, always
          aiming for that perfect blend of performance, usability, and design.
        </p>
      </div>
    </section>
  );
};
