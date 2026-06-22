import { useEffect, useRef, useState } from "react";

/**
 * Scroll-controlled hero video.
 * The outer wrapper is 250vh tall; the inner stage is sticky and full-viewport.
 * Scroll progress within the wrapper maps directly to video.currentTime.
 */
export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const targetTimeRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    const wrap = wrapRef.current;
    if (!video || !wrap) return;

    video.pause();

    const onMeta = () => setReady(true);
    video.addEventListener("loadedmetadata", onMeta);
    if (video.readyState >= 1) setReady(true);

    const tick = () => {
      const v = videoRef.current;
      if (v && Number.isFinite(targetTimeRef.current)) {
        // Smooth toward target time
        const diff = targetTimeRef.current - v.currentTime;
        if (Math.abs(diff) > 0.01) {
          try {
            v.currentTime = v.currentTime + diff * 0.18;
          } catch {
            /* ignore seek errors during buffering */
          }
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      const v = videoRef.current;
      if (!v || !v.duration || !Number.isFinite(v.duration)) return;
      const rect = wrap.getBoundingClientRect();
      const total = wrap.offsetHeight - window.innerHeight;
      const progress = Math.min(1, Math.max(0, -rect.top / total));
      targetTimeRef.current = progress * v.duration;
    };

    rafRef.current = requestAnimationFrame(tick);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="top"
      ref={wrapRef}
      className="relative w-full"
      style={{ height: "250vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Video layer */}
        <video
          ref={videoRef}
          src="/hero.mp4"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"
            }`}
        />


        {/* Overlay content intentionally left empty */}

        <style>{`
          @keyframes scrollLine {
            0% { transform: translateY(-100%); }
            60% { transform: translateY(120%); }
            100% { transform: translateY(120%); }
          }
        `}</style>
      </div>
    </section>
  );
}
