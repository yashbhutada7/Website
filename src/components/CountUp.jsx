import React, { useEffect, useRef, useState } from "react";

// Counts from 0 up to `to` over `duration` ms when it scrolls into view.
// With `repeatEvery` (ms) it replays on that cycle while it stays visible.
// The pre-rendered HTML shows the final number, so search engines and
// visitors without JavaScript always see the real figure.
export default function CountUp({ to, suffix = "", duration = 3000, repeatEvery = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    setShown(0);
    let raf = 0;
    let timer = 0;
    let visible = false;

    const run = () => {
      cancelAnimationFrame(raf);
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / duration);
        setShown(Math.round((1 - Math.pow(1 - t, 3)) * to));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const schedule = () => {
      clearInterval(timer);
      if (repeatEvery) timer = setInterval(() => visible && run(), repeatEvery);
    };

    if (!("IntersectionObserver" in window)) {
      visible = true;
      run();
      schedule();
      return () => {
        cancelAnimationFrame(raf);
        clearInterval(timer);
      };
    }
    let started = false;
    const io = new IntersectionObserver(
      (entries) => {
        visible = entries.some((e) => e.isIntersecting);
        if (visible && !started) {
          started = true;
          run();
          schedule();
        }
        if (!repeatEvery && started) io.disconnect();
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      clearInterval(timer);
    };
  }, [to, duration, repeatEvery]);

  return (
    <span ref={ref}>
      <span className="sr-only">
        {to}
        {suffix}
      </span>
      <span aria-hidden="true">
        {shown === null ? to : shown}
        {suffix}
      </span>
    </span>
  );
}
