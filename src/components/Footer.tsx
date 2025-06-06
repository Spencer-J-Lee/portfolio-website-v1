import { StyledLink } from "./common/StyledLink";

export const Footer = () => {
  const genExternalLink = (text: string, href: string) => {
    return (
      <StyledLink href={href} external>
        {text}
      </StyledLink>
    );
  };

  const links = {
    next: genExternalLink("Next.js", "https://nextjs.org/"),
    tailwind: genExternalLink("Tailwind CSS", "https://tailwindcss.com/"),
    particles: genExternalLink("tsParticles", "https://particles.js.org/"),
    vercel: genExternalLink("Vercel", "https://vercel.com/"),
  };

  return (
    <footer className="text-muted lg:mt-30 relative m-auto mt-20 max-w-80 max-w-screen-xl px-5 pb-10 text-center text-sm lg:px-20 lg:pb-20">
      Built with {links.next}, {links.tailwind}, and {links.particles}. Deployed
      with {links.vercel}.
    </footer>
  );
};
