import React, { useEffect, useRef } from "react";
import Icon from "@/components/Icons";
import { INDUSTRIES } from "@/content/site";

const ICONS = {
  Manufacturing: "factory",
  Distribution: "truck",
  "E-commerce": "cart",
  Advertising: "megaphone",
  Construction: "hardhat",
  SaaS: "cloud",
  "IT services": "monitor",
  "Professional services": "cfo",
  "Real estate": "building",
};

// Industry tiles that fade in one after another as they scroll into view.
export default function Industries() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("will-reveal");
    if (!("IntersectionObserver" in window)) {
      el.classList.add("revealed");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.classList.add("revealed");
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <ul className="industries" ref={ref} aria-label="Industries we serve">
      {INDUSTRIES.map((name, i) => (
        <li key={name} style={{ "--i": i }}>
          <span className="ind-icon">
            <Icon name={ICONS[name] || "layers"} />
          </span>
          <span className="ind-name">{name}</span>
        </li>
      ))}
    </ul>
  );
}
