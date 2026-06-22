import { Section } from "./Section";

const CARDS = [
  {
    n: "",
    title: "What I Do",
    body: "I design and engineer AI systems — from data pipelines and deep learning models to LLM-powered products. I care about systems that actually ship.",
  },
  {
    n: "",
    title: "What I Build",
    body: "Agentic workflows with LangChain, RAG retrieval stacks, audio & vision classifiers in PyTorch, and full-stack interfaces around them.",
  },
  
];

export function About() {
  return (
    <Section
      id="about"
      title={
        <>
          AI / ML Engineer
        </>
      }
    >
      <div className="grid gap-px bg-[color:var(--border)] md:grid-cols-2 border border-[color:var(--border)]">
        {CARDS.map((c, i) => (
          <article
            key={c.n}
            className="reveal group relative flex flex-col gap-8 bg-[color:var(--bg)] p-8 md:p-10 transition-colors duration-500 hover:bg-[color:var(--surface)]"
            data-delay={i}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] tracking-[0.22em] text-[color:var(--muted)]">
                {c.n}
              </span>
              <span className="block h-px w-10 bg-[color:var(--border)] transition-all duration-500 group-hover:w-16 group-hover:bg-[color:var(--accent)]" />
            </div>
            <h3 className="display text-3xl md:text-4xl">{c.title}</h3>
            <p className="text-[color:var(--muted)] leading-relaxed">{c.body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
