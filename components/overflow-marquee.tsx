"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type OverflowMarqueeProps = {
  text: string;
};

type MarqueeStyle = CSSProperties & {
  "--marquee-duration": string;
  "--marquee-offset": string;
};

export function OverflowMarquee({ text }: OverflowMarqueeProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLSpanElement>(null);
  const [style, setStyle] = useState<MarqueeStyle>();

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let cancelled = false;
    const update = () => {
      if (cancelled) return;
      const overflow = Math.ceil(content.scrollWidth - container.clientWidth);
      setStyle(
        overflow > 0
          ? {
              "--marquee-duration": `${Math.max(6, overflow / 24 + 4)}s`,
              "--marquee-offset": `-${overflow}px`,
            }
          : undefined,
      );
    };

    const frame = requestAnimationFrame(update);
    const observer =
      typeof ResizeObserver === "undefined"
        ? undefined
        : new ResizeObserver(update);
    observer?.observe(container);
    observer?.observe(content);
    window.addEventListener("resize", update);
    void document.fonts?.ready.then(update);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [text]);

  return (
    <span
      ref={containerRef}
      className="block w-full overflow-hidden"
      title={text}
    >
      <span
        ref={contentRef}
        className={`inline-block whitespace-nowrap ${style ? "booth-marquee-text" : ""}`}
        style={style}
      >
        {text}
      </span>
    </span>
  );
}
