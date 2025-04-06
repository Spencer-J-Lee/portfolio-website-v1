import { Header } from "@/components/header";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="m-auto flex max-w-screen-xl justify-between gap-10">
      <Header />

      <main id="content">
        <About />

        <Experience />

        <Projects />
      </main>
    </div>
  );
}
