import { Section } from "./Section";

const GROUPS: { label: string; items: string[] }[] = [
  {
    label: "AI / Machine Learning",
    items: ["Python", "PyTorch", "ResNet", "TensorFlow", "Scikit-Learn", "ONNX", "NumPy", "Pandas", "NLP"],
  },
  {
    label: "LLMs & Agentic AI",
    items: ["LangChain", "RAG", "Prompt Engineering", "Hugging Face", "Vector Databases", "Fine-tuning", "Quantization"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      title={
        <>
          The stack
          <br />
          <span className="text-[color:var(--muted)]">behind the work.</span>
        </>
      }
    >
      <div className="flex flex-col">
        {GROUPS.map((g, i) => (
          <div
            key={g.label}
            className="reveal grid gap-6 border-t border-[color:var(--border)] py-10 md:grid-cols-[280px_1fr] md:gap-12 md:py-14 last:border-b"
            data-delay={(i % 4) + 1}
          >
            <div className="flex items-start gap-4">
              <h3 className="display text-2xl md:text-3xl">{g.label}</h3>
            </div>
            <ul className="flex flex-wrap gap-2 md:gap-3 md:justify-end">
              {g.items.map((it) => (
                <li
                  key={it}
                  className="rounded-full border border-[color:var(--border)] px-4 py-2 font-mono text-xs text-[color:var(--text)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                >
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
