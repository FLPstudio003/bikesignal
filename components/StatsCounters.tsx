"use client";

import { useEffect, useRef, useState } from "react";

function Counter({
  end,
  suffix = "",
  startAnimation,
}: {
  end: number;
  suffix?: string;
  startAnimation: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, startAnimation]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounters() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // spustí sa len raz
        }
      },
      { threshold: 0.4 } // musí byť 40% sekcie viditeľných
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-6 bg-black overflow-hidden"
    >
      {/* Glow background */}
      <div className="absolute -top-32 -left-32 w-[100px] h-[100px] bg-yellow-400/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[100px] h-[100px] bg-red-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid gap-12 md:grid-cols-4 text-center">
        <div className="space-y-3">
          <div className="text-4xl md:text-5xl font-bold text-[#008000]">
            <Counter end={1200} suffix="+" startAnimation={isVisible} />
          </div>
          <div className="text-white/60 text-sm tracking-wide">
            Servisovaných bicyklov
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-4xl md:text-5xl font-bold text-yellow-400">
            <Counter end={98} suffix="%" startAnimation={isVisible} />
          </div>
          <div className="text-white/60 text-sm tracking-wide">
            Spokojnosť zákazníkov
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-4xl md:text-5xl font-bold text-orange-500">
            <Counter end={48} suffix="h" startAnimation={isVisible} />
          </div>
          <div className="text-white/60 text-sm tracking-wide">
            Priemerný čas servisu
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-4xl md:text-5xl font-bold text-red-600">
            <Counter end={5} suffix="★" startAnimation={isVisible} />
          </div>
          <div className="text-white/60 text-sm tracking-wide">
            Hodnotenie zákazníkmi
          </div>
        </div>
      </div>
    </section>
  );
}
