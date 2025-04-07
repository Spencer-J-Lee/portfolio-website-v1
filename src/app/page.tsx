import { About } from "@/components/about/About";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main id="content" className="m-auto max-w-screen-xl px-20">
      <Hero />

      <About />

      <Experience />

      <Projects />
    </main>
  );
}
