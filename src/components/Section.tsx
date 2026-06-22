import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-[1400px] px-6 py-24 md:px-12 md:py-28 ${className}`}
    >
      {(eyebrow || title) && (
        <header className="mb-16 md:mb-24 flex flex-col gap-6">
          {eyebrow && (
            <p className="eyebrow reveal flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-[color:var(--accent)]" />
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="display reveal text-5xl md:text-7xl lg:text-8xl max-w-4xl">
              {title}
            </h2>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
