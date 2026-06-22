import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#exploring", label: "Exploring" },
  { href: "#github", label: "GitHub" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      // Reveal nav once the hero (250vh) is mostly scrolled past
      const heroEnd = window.innerHeight * 2.4;
      setVisible(y > heroEnd);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((x): x is HTMLElement => !!x);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      aria-hidden={!visible}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "-translate-y-full opacity-0 pointer-events-none"
      } ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--bg)]/75 border-b border-[color:var(--border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <a
          href="#top"
          className="flex items-center gap-3 text-[color:var(--text)]"
          aria-label="Wania Zanib — home"
        >
          <span className="font-mono text-xs text-[color:var(--accent)]">/wz</span>
          <span className="hidden font-display text-sm tracking-tight md:inline">
            Wania&nbsp;Zanib
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                  active === l.href.slice(1)
                    ? "text-[color:var(--accent)]"
                    : "text-[color:var(--muted)] hover:text-[color:var(--text)]"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-[color:var(--border)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--text)] transition-colors hover:border-[color:var(--accent)] hover:text-[color:var(--accent)] md:inline-block"
        >
          Get in touch
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)]"
        >
          <span className="relative block h-2.5 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-[color:var(--text)] transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`}
            />
            <span
              className={`absolute left-0 bottom-0 h-px w-full bg-[color:var(--text)] transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden border-t border-[color:var(--border)] bg-[color:var(--bg)] transition-[max-height,opacity] duration-500 ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-6">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-2xl tracking-tight text-[color:var(--text)] hover:text-[color:var(--accent)]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
