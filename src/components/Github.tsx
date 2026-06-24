import { Section } from "./Section";

const REPOS = [
  { name: "Langchain-Chatbot", lang: "Python", desc: "Agentic RAG chatbot built with LangChain " },
  { name: "Moodfit", lang: "Python", desc: "Poetry-to-outfit multi-modal semantic search engine." },
  { name: "Insights", lang: "TypeScript", desc: "Instant product analysis and community sentiment retrieval" },
  { name: "DormMate", lang: "TypeScript", desc: "Supabase-backed REST API for student living utilities." },
];

export function Github() {
  return (
    <Section
      id="github"
      title={
        <>
          From the
          <br />
          <span className="text-[color:var(--muted)]">commit log.</span>
        </>
      }
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-xl text-[color:var(--muted)]">
            A selection of repositories. The full archive lives on GitHub —
            including experiments, course work, and works-in-progress.
          </p>
          <a
            href="https://github.com/waniazanib"
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]"
          >
            github.com/waniazanib ↗
          </a>
        </div>

        <ul className="grid gap-px bg-[color:var(--border)] border border-[color:var(--border)] md:grid-cols-2">
          {REPOS.map((r, i) => (
            <li key={r.name} className="bg-[color:var(--bg)]">
              <a
                href={`https://github.com/waniazanib/${r.name}`}
                target="_blank"
                rel="noreferrer noopener"
                className="reveal group flex h-full flex-col gap-5 p-8 transition-colors duration-500 hover:bg-[color:var(--surface)]"
                data-delay={(i % 4) + 1}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                    repo / {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--accent)]">
                    {r.lang}
                  </span>
                </div>
                <h3 className="display text-3xl group-hover:text-[color:var(--accent)] transition-colors">
                  {r.name}
                </h3>
                <p className="text-[color:var(--muted)] leading-relaxed">{r.desc}</p>
                <span className="mt-auto font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--text)] group-hover:text-[color:var(--accent)]">
                  Open repository ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
