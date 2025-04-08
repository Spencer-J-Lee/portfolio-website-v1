import { About } from "@/components/About";
import { Experience } from "@/components/experience/Experience";
import { Projects } from "@/components/projects/Projects";
import { Hero } from "@/components/Hero";
import { SECTIONS } from "@/constants/sections";

export default function Home() {
  return (
    <main id={SECTIONS.CONTENT} className="m-auto max-w-screen-xl px-20">
      <Hero />

      <About />

      <Experience />

      <Projects />
    </main>
  );
}
