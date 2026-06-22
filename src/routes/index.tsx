import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Exploring } from "@/components/Exploring";
import { Github } from "@/components/Github";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { useReveal } from "@/lib/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wania Zanib — AI/ML Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Wania Zanib, an AI/ML Engineer building intelligent systems, agentic workflows, and ambitious side projects.",
      },
      { property: "og:title", content: "Wania Zanib — AI/ML Engineer" },
      {
        property: "og:description",
        content:
          "Selected work in LLMs, agentic AI, deep learning, and full-stack product engineering.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <main className="bg-[color:var(--bg)] text-[color:var(--text)]">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Exploring />
      <Github />
      <Resume />
      <Contact />
    </main>
  );
}
