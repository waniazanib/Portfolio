import { Section } from "./Section";

const ITEMS = [
  { t: "Multi-Agent Systems", d: "Coordinating specialised agents that plan, critique, and act together." },
  { t: "Agentic AI", d: "Tool-using LLM agents with memory, planning, and self-correction loops." },
  { t: "MCP", d: "Model Context Protocol — composable tool servers for AI clients." },
  { t: "AI Product Engineering", d: "Shipping AI features users trust: latency, evals, guardrails." },
  { t: "RAG Architectures", d: "Hybrid retrieval, reranking, and structured grounding for accuracy." },
  { t: "AI Evaluation", d: "Offline + online eval harnesses, golden sets, and behavioural tests." },
];

export function Exploring() {
  return (
    <Section
      id="exploring"
      title={
        <>
          What I&rsquo;m
          <br />
          <span className="text-[color:var(--muted)]">exploring now.</span>
        </>
      }
    >
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[color:var(--border)]">
        {ITEMS.map((it, i) => (
          <li
            key={it.t}
            className="reveal group flex flex-col gap-4 bg-[color:var(--bg)] p-2 transition-colors duration-500 hover:bg-[color:var(--surface)] border-b border-r border-[color:var(--border)]"
            data-delay={(i % 4) + 1}
          >
            <div className="flex items-center justify-between">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                In progress
              </span>
            </div>
            <h3 className="display text-2xl">{it.t}</h3>
            <p className="text-sm text-[color:var(--muted)] leading-relaxed">{it.d}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
