import { Section } from "./Section";

type Project = {
  index: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  tech: string[];
  github: string;
  demo?: string;
  year: string;
};

const PROJECTS: Project[] = [
  {
    index: "01",
    year: "2025",
    title: "VoiceGuard",
    tagline: "Audio classification pipeline · PyTorch · ONNX",
    problem:
      "The rapid rise of highly realistic AI-generated synthetic media has made distinguishing between genuine human voices and deepfakes incredibly difficult, compromising biometric and communication security.",
    solution:
      "Engineered an audio feature-engineering pipeline that captures distinct acoustic anomalies, trained a robust PyTorch classifier optimized to withstand synthetic variance, and exported the final model to ONNX for lightweight, real-time threat detection.",
    tech: ["Python", "PyTorch", "ONNX", "NumPy", "Pandas", "Audio Processing"],
    github: "https://github.com/waniazanib/VoiceGuard",
  },
  {
    index: "02",
    year: "2026",
    title: "JobGuard",
    tagline: "raudulent posting classification • Scikit-learn • XGBoost",
    problem:
      "The rise of sophisticated online job scams risks user data and financial security, yet detecting them requires parsing a complex mix of deceptive text and manipulated metadata.",
    solution:
      "Built an integrated data pipeline that extracts linguistic features alongside categorical indicators, resolved the heavy class imbalance using ensemble learning, and tuned classification thresholds to minimize false negatives.",
    tech: ["Python", "Scikit-learn", "XGBoost", "NLTK", "Pandas", "NumPy"],
    github: "https://github.com/waniazanib/Fake_Job_Detector",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      title={
        <>
          Projects
        </>
      }
    >
      <div className="flex flex-col gap-4 md:gap-12">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="reveal group grid gap-8 border border-[color:var(--border)] bg-[color:var(--surface)] p-2 transition-all duration-500 hover:border-[color:var(--accent)]/40 md:gap-12 md:p-6">


      {/* Content */}
      <div className="flex flex-col gap-4 ">
        <div>
          <h3 className="display text-4xl md:text-5xl">{p.title}</h3>
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]">
            {p.tagline}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Field label="Problem" body={p.problem} />
          <Field label="Approach" body={p.solution} />
        </div>

        <ul className="flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-[color:var(--border)] px-3 py-1 font-mono text-[11px] text-[color:var(--muted)]"
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-2 flex flex-wrap items-center gap-6">
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--text)] hover:text-[color:var(--accent)]"
          >
            View on GitHub ↗
          </a>
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--accent)]"
            >
              Live demo ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Field({ label, body }: { label: string; body: string }) {
  return (
    <div className="grid gap-2 md:grid-cols-[110px_1fr] md:gap-6">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)] pt-1">
        {label}
      </span>
      <p className="text-[color:var(--text)]/90 leading-relaxed">{body}</p>
    </div>
  );
}

/** Lightweight typographic / geometric "cover art" — no stock illustrations. */
function ProjectArt({ index, title }: { index: string; title: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_0%_0%,rgba(216,181,106,0.10),transparent_60%)]" />
      <svg
        viewBox="0 0 400 300"
        className="absolute inset-0 h-full w-full text-[color:var(--border)]"
        aria-hidden="true"
      >
        <defs>
          <pattern id={`grid-${index}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill={`url(#grid-${index})`} />
      </svg>
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="font-display text-[14vw] leading-none text-[color:var(--text)]/8 md:text-[88px]">
          {title.split(" ")[0]}
        </div>
      </div>
    </div>
  );
}
