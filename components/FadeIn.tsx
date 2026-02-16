"use client";

import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  className = "",
}: FadeInProps) {
  return (
    <div
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(20px)",
        animation: "fadeInUp 0.6s ease forwards",
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
