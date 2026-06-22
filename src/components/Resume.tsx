import { Section } from "./Section";

export function Resume() {
  const url = "/Wania_Zanib_Resume.pdf"; // replace with hosted PDF when available
  return (
    <Section id="resume">
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-end">
        <h2 className="display reveal text-6xl md:text-8xl">
          Resume.
        </h2>
        <div className="reveal flex flex-col gap-8" data-delay={1}>
          <p className="text-[color:var(--muted)] leading-relaxed max-w-md">
            The latest version of my resume — current education, projects, and
            the technical stack I work in day to day.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={url}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full bg-[color:var(--accent)] px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--bg)] transition-colors hover:bg-[color:var(--accent-hover)]"
            >
              View resume →
            </a>
            <a
              href={url}
              download
              className="rounded-full border border-[color:var(--border)] px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--text)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
            >
              Download PDF ↓
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
