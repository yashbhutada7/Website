import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";

// The carousel measures the browser window, so it can't be pre-rendered at
// build time. Until the page loads in the browser we show the first slide,
// with the other slides' text still in the HTML for search engines.
export default function ClientCarousel({ children, className, ...props }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className={className}>
        {React.Children.map(children, (child, i) => (
          <div style={i === 0 ? undefined : { display: "none" }}>{child}</div>
        ))}
      </div>
    );
  }
  return (
    <Carousel className={className} {...props}>
      {children}
    </Carousel>
  );
}
