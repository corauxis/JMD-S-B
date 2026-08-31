"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface ToolCard {
  id: string;
  number: string;
  name: string;
  category: string;
  subtitle: string;
  icon: string;
  rotationClass: string;
  accentBorder: string;
  glowColor: string;
}

const toolsDeck: ToolCard[] = [
  {
    id: "python",
    number: "01",
    name: "Python",
    category: "CORE AI",
    subtitle: "AI & Logic Pipelines",
    icon: "/images/tools/python.png",
    rotationClass: "-rotate-[6deg] hover:-rotate-0",
    accentBorder: "hover:border-[#FD3A25]/70 hover:shadow-[0_0_35px_rgba(253,58,37,0.35),0_24px_50px_rgba(0,0,0,0.85)]",
    glowColor: "bg-[#FD3A25] shadow-[0_0_30px_10px_rgba(253,58,37,0.6)]",
  },
  {
    id: "postgres",
    number: "02",
    name: "PostgreSQL",
    category: "DATABASE",
    subtitle: "Scalable Data Storage",
    icon: "/images/tools/postgres.png",
    rotationClass: "-rotate-[3deg] hover:-rotate-0",
    accentBorder: "hover:border-[#38BDF8]/70 hover:shadow-[0_0_35px_rgba(56,189,248,0.35),0_24px_50px_rgba(0,0,0,0.85)]",
    glowColor: "bg-[#38BDF8] shadow-[0_0_30px_10px_rgba(56,189,248,0.6)]",
  },
  {
    id: "fastapi",
    number: "03",
    name: "FastAPI",
    category: "API ENGINE",
    subtitle: "High-Speed Async APIs",
    icon: "/images/tools/fastapi.png",
    rotationClass: "-rotate-[1deg] hover:-rotate-0",
    accentBorder: "hover:border-[#10B981]/70 hover:shadow-[0_0_35px_rgba(16,185,129,0.35),0_24px_50px_rgba(0,0,0,0.85)]",
    glowColor: "bg-[#10B981] shadow-[0_0_30px_10px_rgba(16,185,129,0.6)]",
  },
  {
    id: "vector-db",
    number: "04",
    name: "Vector DB",
    category: "VECTOR AI",
    subtitle: "Embeddings & RAG Search",
    icon: "/images/tools/vector-db.svg",
    rotationClass: "rotate-[2deg] hover:-rotate-0",
    accentBorder: "hover:border-[#F43F5E]/70 hover:shadow-[0_0_35px_rgba(244,63,94,0.35),0_24px_50px_rgba(0,0,0,0.85)]",
    glowColor: "bg-[#F43F5E] shadow-[0_0_30px_10px_rgba(244,63,94,0.6)]",
  },
  {
    id: "react",
    number: "05",
    name: "React",
    category: "FRONTEND",
    subtitle: "Modern Web Interfaces",
    icon: "/images/tools/react.svg",
    rotationClass: "rotate-[4deg] hover:-rotate-0",
    accentBorder: "hover:border-[#00D8FF]/70 hover:shadow-[0_0_35px_rgba(0,216,255,0.35),0_24px_50px_rgba(0,0,0,0.85)]",
    glowColor: "bg-[#00D8FF] shadow-[0_0_30px_10px_rgba(0,216,255,0.6)]",
  },
  {
    id: "flutter",
    number: "06",
    name: "Flutter",
    category: "MOBILE APP",
    subtitle: "Cross-Platform Apps",
    icon: "/images/tools/flutter.svg",
    rotationClass: "rotate-[7deg] hover:-rotate-0",
    accentBorder: "hover:border-[#38BDF8]/70 hover:shadow-[0_0_35px_rgba(56,189,248,0.35),0_24px_50px_rgba(0,0,0,0.85)]",
    glowColor: "bg-[#38BDF8] shadow-[0_0_30px_10px_rgba(56,189,248,0.6)]",
  },
];

export default function ToolsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [squeezeProgress, setSqueezeProgress] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  const handleMobileScroll = () => {
    if (!mobileScrollRef.current) return;
    const { scrollLeft, clientWidth } = mobileScrollRef.current;
    const cardWidth = 260;
    const idx = Math.round(scrollLeft / cardWidth);
    setActiveMobileIndex(Math.min(Math.max(idx, 0), toolsDeck.length - 1));
  };

  const scrollToCard = (index: number) => {
    if (!mobileScrollRef.current) return;
    const cardWidth = 260;
    mobileScrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("sc-revealed");
          el.classList.remove("sc-hidden");
        } else {
          el.classList.remove("sc-revealed");
          el.classList.add("sc-hidden");
        }
      },
      { threshold: 0.12 }
    );

    el.classList.add("sc-hidden");
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Continuous RAF scroll tracker for container squeeze animation (Kora.framer.media style)
  useEffect(() => {
    let animationFrameId: number;
    let currentSqueeze = 0;

    const updateSqueeze = () => {
      if (window.innerWidth < 640) {
        setSqueezeProgress(0);
        return;
      }
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const windowHeight = typeof window !== "undefined" ? window.innerHeight : 900;

        // Starts squeezing smoothly as you scroll toward the bottom of the tools container
        const triggerPoint = windowHeight * 1.08;
        const squeezeDistance = windowHeight * 0.90;

        const current = triggerPoint - rect.bottom;
        const target = Math.min(Math.max(current / squeezeDistance, 0), 1);

        // Smooth Lenis-synced inertia lerp
        currentSqueeze += (target - currentSqueeze) * 0.12;
        if (Math.abs(target - currentSqueeze) < 0.001) {
          currentSqueeze = target;
        }

        setSqueezeProgress(currentSqueeze);
      }
      animationFrameId = requestAnimationFrame(updateSqueeze);
    };

    animationFrameId = requestAnimationFrame(updateSqueeze);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white text-zinc-900 py-6 sm:py-10 md:py-14 px-3 sm:px-6 md:px-8 lg:px-12 overflow-hidden"
    >
      <div
        ref={cardRef}
        className="max-w-[1720px] w-full mx-auto relative rounded-[28px] sm:rounded-[44px] md:rounded-[56px] bg-[#0c0c0e] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] min-h-[640px] md:min-h-[720px] px-6 sm:px-10 md:px-14 lg:px-16 py-12 sm:py-16 md:py-20 text-white flex items-center overflow-hidden"
        style={{
          transform: `scale(${1 - squeezeProgress * 0.07}) translateY(${squeezeProgress * 24}px)`,
          transformOrigin: "center center",
          opacity: 1 - squeezeProgress * 0.12,
          transition: "transform 0.08s linear, opacity 0.1s ease-out",
          willChange: "transform, opacity",
        }}
      >
        {/* ========================================================
            BRAND COLOR GLOW AMBIENCE (#FD3A25 Coral / Orange-Red Aura)
           ======================================================== */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute right-[8%] top-[10%] h-[500px] w-[500px] rounded-full bg-[#FD3A25]/12 blur-[140px]" />
          <div className="absolute bottom-0 right-[5%] h-[420px] w-[560px] rounded-full bg-[#FD3A25]/8 blur-[160px]" />
          <div className="absolute left-[5%] top-[30%] h-[350px] w-[350px] rounded-full bg-[#FD3A25]/6 blur-[130px]" />
        </div>

        {/* ========================================================
            3D PERSPECTIVE GRID FLOOR (Warm Coral Tinted)
           ======================================================== */}
        <div
          className="pointer-events-none absolute -bottom-[32%] -left-[15%] -right-[15%] h-[60%] opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(253,58,37,.14) 1px, transparent 1px),
              linear-gradient(90deg, rgba(253,58,37,.14) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            transform: "perspective(600px) rotateX(60deg)",
            maskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          }}
        />

        {/* ========================================================
            MAIN CONTENT (Left Text & Right Fanned 3D Card Deck)
           ======================================================== */}
        <div className="relative z-10 flex w-full flex-col justify-between gap-12 lg:flex-row lg:items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="w-full lg:w-[40%] flex flex-col items-start">
            {/* Badge matching website style */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FD3A25]/25 bg-[#FD3A25]/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white/90 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#FD3A25] shadow-[0_0_10px_#FD3A25] animate-pulse" />
              TOOLS &amp; TECH
            </div>

            {/* Heading with #FD3A25 accent */}
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.06] tracking-tight font-[family-name:var(--font-urbanist)] text-white">
              We work with
              <br />
              <span className="text-[#FD3A25]">
                powerful
              </span>{" "}
              AI tools
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-[480px] text-sm sm:text-base leading-relaxed text-zinc-400 font-medium font-[family-name:var(--font-urbanist)]">
              We design, build, and evaluate with a modern AI stack—LLMs, vector
              search, orchestration, and observability—so your features are fast,
              reliable, and secure.
            </p>

            {/* CTA Button matching 3D capsule website button */}
            <a
              href="#contact"
              className="mt-8 px-8 py-3.5 rounded-full bg-gradient-to-b from-[#2a2a2e] to-[#121215] text-white text-xs sm:text-sm font-semibold tracking-wide border border-white/25 shadow-[0_12px_24px_-4px_rgba(0,0,0,0.8),0_4px_8px_-2px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 hover:from-[#323238] hover:to-[#18181c] inline-flex items-center gap-2.5 group"
            >
              <span>Get Started</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* ================= RIGHT COLUMN: RESPONSIVE CARDS (Mobile Swipe Carousel & Desktop 3D Fanned Deck) ================= */}
          <div className="flex flex-col w-full lg:w-[60%] py-4 lg:py-6">
            {/* Scrollable Track: Horizontal snap carousel on mobile, 3D fanned deck on desktop */}
            <div
              ref={mobileScrollRef}
              onScroll={handleMobileScroll}
              className="flex w-full items-center justify-start lg:justify-end overflow-x-auto lg:overflow-visible py-4 lg:py-6 px-1 lg:px-6 snap-x snap-mandatory lg:snap-none scrollbar-none"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollSnapType: "x mandatory",
              }}
            >
              <div className="flex items-center justify-start lg:justify-center lg:[perspective:1000px] min-w-max lg:min-w-0 gap-4 sm:gap-5 lg:gap-0 pr-6 lg:pr-0">
                {toolsDeck.map((tool, index) => {
                  const isHovered = hoveredIdx === index;
                  const isAnyHovered = hoveredIdx !== null;

                  return (
                    <div
                      key={tool.id}
                      onMouseEnter={() => setHoveredIdx(index)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className={`
                        group
                        relative
                        flex
                        h-[310px]
                        w-[240px]
                        xs:w-[255px]
                        sm:w-[270px]
                        lg:h-[345px]
                        lg:w-[218px]
                        shrink-0
                        snap-center
                        flex-col
                        justify-between
                        rounded-[24px]
                        border
                        border-white/12
                        bg-gradient-to-b
                        from-[#1a1a20]/95
                        via-[#121216]/95
                        to-[#0b0b0e]/98
                        p-6
                        backdrop-blur-xl
                        shadow-[0_20px_40px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.15)]
                        transition-all
                        duration-300
                        ease-out
                        cursor-pointer
                        select-none
                        lg:-ml-18
                        lg:first:ml-0
                        lg:${tool.rotationClass}
                        ${tool.accentBorder}
                      `}
                      style={{
                        zIndex: isHovered ? 50 : index + 1,
                        transform: isHovered
                          ? "translateY(-24px) scale(1.04) rotate(0deg)"
                          : isAnyHovered
                          ? "scale(0.97)"
                          : undefined,
                        animation: !isAnyHovered
                          ? `deckWaveFloat 4.6s ease-in-out ${index * 0.3}s infinite`
                          : "none",
                      }}
                    >
                      {/* Top Edge White Sheen */}
                      <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

                      {/* Card Top: Category Chip & Monospace Card Number */}
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 bg-white/[0.06] px-2.5 py-0.5 rounded-full border border-white/5 uppercase">
                          {tool.category}
                        </span>
                        <span className="text-xs font-mono font-semibold text-zinc-500 group-hover:text-zinc-300 transition-colors">
                          {tool.number}
                        </span>
                      </div>

                      {/* Card Center: Large Glowing Tool Icon Container */}
                      <div className="flex items-center justify-center my-auto py-3">
                        <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center p-4 shadow-[0_10px_24px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.12)] group-hover:scale-110 group-hover:border-white/25 transition-all duration-300">
                          <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
                            <Image
                              src={tool.icon}
                              alt={tool.name}
                              width={54}
                              height={54}
                              className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Card Bottom: Tool Name & Descriptive Role */}
                      <div className="flex flex-col items-start w-full pt-3 border-t border-white/[0.07]">
                        <h4 className="text-lg font-bold text-white tracking-tight leading-snug font-[family-name:var(--font-urbanist)] group-hover:text-[#FD3A25] transition-colors">
                          {tool.name}
                        </h4>
                        <p className="text-xs text-zinc-400 font-medium leading-tight mt-0.5 font-[family-name:var(--font-urbanist)]">
                          {tool.subtitle}
                        </p>
                      </div>

                      {/* Ground Reflection Accent Line */}
                      <span
                        className={`
                          absolute
                          -bottom-1
                          left-[15%]
                          right-[15%]
                          h-[3px]
                          rounded-full
                          opacity-0
                          group-hover:opacity-100
                          blur-[2px]
                          transition-all
                          duration-300
                          ${tool.glowColor}
                        `}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile Carousel Navigation & Dot Indicators */}
            <div className="flex lg:hidden items-center justify-between w-full pt-4 px-2">
              {/* Swipe hint */}
              <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-1">
                <span>←</span> Swipe to explore <span>→</span>
              </span>

              {/* Interactive Dots */}
              <div className="flex items-center gap-1.5">
                {toolsDeck.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => scrollToCard(idx)}
                    aria-label={`Go to tool ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeMobileIndex === idx
                        ? "w-6 bg-[#FD3A25] shadow-[0_0_8px_#FD3A25]"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Gentle Deck Wave Floating Animation */}
      <style jsx>{`
        @keyframes deckWaveFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }
      `}</style>
    </section>
  );
}
