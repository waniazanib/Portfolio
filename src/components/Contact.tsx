import { useState } from "react";
import { Section } from "./Section";

const CONTACTS = [
  { label: "Email", value: "zanibwania@gmail.com", href: "mailto:zanibwania@gmail.com" },
  { label: "GitHub", value: "github.com/waniazanib", href: "https://github.com/waniazanib" },
  { label: "LinkedIn", value: "linkedin.com/in/wania-zanib", href: "https://www.linkedin.com/in/wania-zanib" },
];

type Status = "idle" | "sending" | "ok" | "error";
// Replace YOUR_ACCESS_KEY with your real Web3Forms access key to enable delivery.
const WEB3FORMS_ACCESS_KEY = "e9cdc290-763f-4a7a-8b34-27cc8b8128cd";
const FORM_ENDPOINT = "https://api.web3forms.com/submit";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.message || "Request failed");
      }
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }
  return (
    <Section id="contact">
      <div className="grid gap-16 md:grid-cols-[1fr_1fr] md:gap-24">
        {/* Left: invitation + direct channels */}
        <div className="flex flex-col gap-12 order-2 md:order-1">
          <h2 className="display reveal text-5xl md:text-7xl">
            Let&rsquo;s build
            <br />
            <span className="text-[color:var(--accent)]">something.</span>
          </h2>
          <p className="reveal text-[color:var(--muted)] max-w-md leading-relaxed" data-delay={1}>
            Interested in AI, machine learning, agentic systems or automation?
            I&rsquo;d love to hear from you — for collaborations, or just a good conversation.
          </p>

          <ul className="reveal flex flex-col" data-delay={2}>
            {CONTACTS.map((c) => (
              <li key={c.label} className="border-t border-[color:var(--border)] last:border-b">
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="group flex items-center justify-between gap-6 py-6 transition-colors"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                    {c.label}
                  </span>
                  <span className="display text-xl md:text-2xl text-[color:var(--text)] group-hover:text-[color:var(--accent)] transition-colors">
                    {c.value} <span aria-hidden>↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: form */}
        <form
          onSubmit={onSubmit}
          className="reveal order-1 md:order-2 flex flex-col gap-3 border border-[color:var(--border)] bg-[color:var(--surface)] p-8 md:p-10 h-[85vh] max-h-[650px]"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)]">
              Send a message
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--accent)]">
              ● Available
            </span>
          </div>

          <Field name="name" label="Name" type="text" autoComplete="name" required />
          <Field name="email" label="Email" type="email" autoComplete="email" required />
          <Field name="subject" label="Subject" type="text" required />
          <Field name="message" label="Message" textarea required />

          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-2 rounded-full bg-[color:var(--accent)] px-6 py-3 font-mono text-xs uppercase tracking-[0.18em] text-[color:var(--bg)] transition-colors hover:bg-[color:var(--accent-hover)] disabled:opacity-60"
          >
            {status === "sending" ? "Sending…" : "Send message →"}
          </button>

          <div aria-live="polite" className="min-h-[1.5rem] font-mono text-xs">
            {status === "ok" && (
              <p className="text-[color:var(--accent)]">
                Thank you for reaching out. I&rsquo;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400">
                Couldn&rsquo;t send: {error}. Email me directly at zanibwania@gmail.com.
              </p>
            )}
          </div>
        </form>
      </div>


    </Section>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea = false,
  required,
  autoComplete,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
  autoComplete?: string;
}) {
  const base =
    "w-full bg-transparent border-b border-[color:var(--border)] py-3 text-[color:var(--text)] placeholder:text-[color:var(--muted)]/40 focus:border-[color:var(--accent)] outline-none transition-colors";
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)]">
        {label}
        {required && <span className="ml-1 text-[color:var(--accent)]">*</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={4}
          maxLength={2000}
          className={base + " resize-none"}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          maxLength={255}
          className={base}
        />
      )}
    </label>
  );
}
