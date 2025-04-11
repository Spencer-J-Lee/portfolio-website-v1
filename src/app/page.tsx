import { About } from "@/components/About";
import { Experience } from "@/components/experienceSection/Experience";
import { Projects } from "@/components/projectsSection/Projects";
import { Hero } from "@/components/Hero";
import { SECTIONS } from "@/constants/sections";

export default function Home() {
  return (
    <main
      id={SECTIONS.CONTENT}
      className="m-auto max-w-screen-xl px-5 lg:px-28"
    >
      <Hero />

      <div className="flex flex-col gap-20 lg:gap-40">
        <About />
        <Experience />
        <Projects />
      </div>
    </main>
  );
}
