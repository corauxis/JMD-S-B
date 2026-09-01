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
    rotationClass: "rotate-[0deg] hover:-rotate-0",
    accentBorder: "hover:border-[#10B981]/70 hover:shadow-[0_0_35px_rgba(16,185,129,0.35),0_24px_50px_rgba(0,0,0,0.85)]",
    glowColor: "bg-[#10B981] shadow-[0_0_30px_10px_rgba(16,185,129,0.6)]",
  },
  {
    id: "react",
    number: "04",
    name: "React",
    category: "FRONTEND",
    subtitle: "Modern Web Interfaces",
    icon: "/images/tools/react.svg",
    rotationClass: "rotate-[3deg] hover:-rotate-0",
    accentBorder: "hover:border-[#00D8FF]/70 hover:shadow-[0_0_35px_rgba(0,216,255,0.35),0_24px_50px_rgba(0,0,0,0.85)]",
    glowColor: "bg-[#00D8FF] shadow-[0_0_30px_10px_rgba(0,216,255,0.6)]",
  },
  {
    id: "flutter",
    number: "05",
    name: "Flutter",
    category: "MOBILE APP",
    subtitle: "Cross-Platform Apps",
    icon: "/images/tools/flutter.svg",
    rotationClass: "rotate-[6deg] hover:-rotate-0",
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
    const { scrollLeft } = mobileScrollRef.current;
    const cardStep = 152;
    const idx = Math.round(scrollLeft / cardStep);
    setActiveMobileIndex(Math.min(Math.max(idx, 0), toolsDeck.length - 1));
  };

  const scrollToCard = (index: number) => {
    if (!mobileScrollRef.current) return;
    const cardStep = 152;
    mobileScrollRef.current.scrollTo({
      left: index * cardStep,
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

  // Smooth scroll tracker for container squeeze scaling animation
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

        const triggerPoint = windowHeight * 1.05;
        const squeezeDistance = windowHeight * 0.95;

        const current = triggerPoint - rect.bottom;
        const target = Math.min(Math.max(current / squeezeDistance, 0), 1);

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
      className="relative bg-[#f2f2f4] text-zinc-900 py-10 sm:py-14 md:py-16 px-3 sm:px-6 md:px-8 overflow-hidden"
    >
      <div
        ref={cardRef}
        className="max-w-[1520px] w-full mx-auto relative rounded-[28px] sm:rounded-[44px] md:rounded-[52px] bg-[#0c0c0e] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] min-h-[560px] md:min-h-[680px] px-5 sm:px-10 md:px-12 lg:px-16 py-10 sm:py-14 md:py-16 text-white flex items-center overflow-hidden"
        style={{
          transform: `scale(${1 - squeezeProgress * 0.06}) translateY(${squeezeProgress * 20}px)`,
          transformOrigin: "center center",
          transition: "transform 0.08s linear",
          willChange: "transform",
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
        <div className="relative z-10 flex w-full flex-col justify-between items-stretch lg:flex-row lg:items-center gap-8 lg:gap-12">

          {/* ================= LEFT COLUMN ================= */}
          <div className="w-full lg:w-[35%] xl:w-[34%] shrink-0 flex flex-col items-start">
            {/* Badge matching website style */}
            <div className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-[#FD3A25]/25 bg-[#FD3A25]/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white/90 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-[#FD3A25] shadow-[0_0_10px_#FD3A25] animate-pulse" />
              TOOLS &amp; TECH
            </div>

            {/* Heading with #FD3A25 accent */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-bold leading-[1.08] tracking-tight font-[family-name:var(--font-urbanist)] text-white">
              We work with
              <br />
              the{" "}
              <span className="text-[#FD3A25]">
                modern tech stack
              </span>
            </h2>

            {/* Description */}
            <p className="mt-4 sm:mt-5 max-w-[420px] text-xs sm:text-sm lg:text-sm xl:text-[15px] leading-relaxed text-zinc-400 font-medium font-[family-name:var(--font-urbanist)]">
              We engineer full-scale digital systems with a modern tech stack—high-performance backend logic, robust databases, scalable APIs, and cross-platform web &amp; mobile interfaces—built for speed, reliability, and scale.
            </p>

            {/* CTA Button matching 3D capsule website button */}
            <a
              href="#contact"
              className="mt-6 sm:mt-7 px-7 py-3 rounded-full bg-gradient-to-b from-[#2a2a2e] to-[#121215] text-white text-xs sm:text-sm font-semibold tracking-wide border border-white/25 shadow-[0_12px_24px_-4px_rgba(0,0,0,0.8),0_4px_8px_-2px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 hover:from-[#323238] hover:to-[#18181c] inline-flex items-center gap-2.5 group"
            >
              <span>Get Started</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* ================= RIGHT COLUMN: RESPONSIVE CARDS (Mobile Normal Scroll & Desktop 3D Fanned Deck) ================= */}
          <div className="flex flex-col flex-1 w-full items-start lg:items-end justify-center py-2 sm:py-4 lg:py-6 overflow-visible">
            {/* Scrollable Track: Compact horizontal scroll on mobile, 3D fanned deck on desktop */}
            <div
              ref={mobileScrollRef}
              onScroll={handleMobileScroll}
              className="flex w-full items-center justify-start lg:justify-end overflow-x-auto lg:overflow-visible py-2 sm:py-4 lg:py-6 px-1 lg:px-0 snap-x snap-mandatory lg:snap-none scrollbar-none"
              style={{
                WebkitOverflowScrolling: "touch",
                scrollSnapType: "x mandatory",
              }}
            >
              <div className="flex items-center justify-start lg:justify-end lg:ml-auto lg:[perspective:1000px] min-w-max lg:min-w-0 gap-3 sm:gap-3.5 lg:gap-0 pr-4 sm:pr-6 lg:pr-0">
                {toolsDeck.map((tool, index) => {
                  const isHovered = hoveredIdx === index;
                  const isAnyHovered = hoveredIdx !== null;

                  return (
                    <div
                      key={tool.id}
                      suppressHydrationWarning
                      onMouseEnter={() => {
                        if (typeof window !== "undefined" && window.innerWidth >= 1024) {
                          setHoveredIdx(index);
                        }
                      }}
                      onMouseLeave={() => {
                        if (typeof window !== "undefined" && window.innerWidth >= 1024) {
                          setHoveredIdx(null);
                        }
                      }}
                      className={`
                        group
                        relative
                        flex
                        h-[210px]
                        w-[140px]
                        xs:h-[220px]
                        xs:w-[148px]
                        sm:h-[235px]
                        sm:w-[160px]
                        lg:h-[265px]
                        lg:w-[145px]
                        xl:h-[280px]
                        xl:w-[158px]
                        2xl:h-[300px]
                        2xl:w-[172px]
                        shrink-0
                        snap-start
                        flex-col
                        justify-between
                        rounded-[16px]
                        xs:rounded-[18px]
                        sm:rounded-[20px]
                        lg:rounded-[22px]
                        border
                        border-white/12
                        bg-gradient-to-b
                        from-[#1a1a20]/95
                        via-[#121216]/95
                        to-[#0b0b0e]/98
                        p-3
                        xs:p-3.5
                        sm:p-4
                        lg:p-3.5
                        xl:p-4
                        backdrop-blur-xl
                        shadow-[0_12px_28px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)]
                        transition-all
                        duration-300
                        ease-out
                        cursor-pointer
                        select-none
                        lg:-ml-7
                        xl:-ml-9
                        2xl:-ml-11
                        lg:first:ml-0
                        lg:${tool.rotationClass}
                        ${tool.accentBorder}
                        lg:hover:-translate-y-4
                        lg:hover:scale-105
                        lg:hover:rotate-0
                        lg:hover:z-50
                      `}
                      style={{
                        zIndex: isHovered ? 50 : index + 1,
                      }}
                    >
                      {/* Top Edge White Sheen */}
                      <div className="absolute inset-x-2.5 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />

                      {/* Card Top: Category Chip & Monospace Card Number */}
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[8px] xs:text-[9px] font-mono font-bold tracking-wider text-zinc-400 bg-white/[0.06] px-1.5 xs:px-2 py-0.5 rounded-full border border-white/5 uppercase">
                          {tool.category}
                        </span>
                        <span className="text-[10px] xs:text-[11px] font-mono font-semibold text-zinc-500 group-hover:text-zinc-300 transition-colors">
                          {tool.number}
                        </span>
                      </div>

                      {/* Card Center: Tool Icon Container */}
                      <div className="flex items-center justify-center my-auto py-1.5 xs:py-2">
                        <div className="w-11 h-11 xs:w-12 xs:h-12 sm:w-14 sm:h-14 lg:w-13 lg:h-13 xl:w-15 xl:h-15 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center p-2.5 xs:p-3 shadow-[0_6px_16px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.12)] lg:group-hover:scale-110 lg:group-hover:border-white/25 transition-all duration-300">
                          <div className="relative w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 lg:w-8 lg:h-8 xl:w-9 xl:h-9 flex items-center justify-center">
                            <Image
                              src={tool.icon}
                              alt={tool.name}
                              width={38}
                              height={38}
                              className="w-full h-full object-contain filter drop-shadow-[0_4px_8px_rgba(255,255,255,0.15)]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Card Bottom: Tool Name & Descriptive Role */}
                      <div className="flex flex-col items-start w-full pt-2 xs:pt-2.5 border-t border-white/[0.07]">
                        <h4 className="text-xs xs:text-[13px] sm:text-sm lg:text-[14px] xl:text-[15px] font-bold text-white tracking-tight leading-snug font-[family-name:var(--font-urbanist)] group-hover:text-[#FD3A25] transition-colors">
                          {tool.name}
                        </h4>
                        <p className="text-[9px] xs:text-[9.5px] sm:text-xs lg:text-[10px] xl:text-[11px] text-zinc-400 font-medium leading-tight mt-0.5 font-[family-name:var(--font-urbanist)] truncate w-full">
                          {tool.subtitle}
                        </p>
                      </div>

                      {/* Ground Reflection Accent Line (Desktop only) */}
                      <span
                        className={`
                          hidden
                          lg:block
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
            <div className="flex lg:hidden items-center justify-between w-full pt-3 px-1">
              {/* Swipe hint */}
              <span className="text-[10px] xs:text-[11px] font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-1">
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
                    className={`h-1.5 rounded-full transition-all duration-300 ${activeMobileIndex === idx
                        ? "w-5 bg-[#FD3A25] shadow-[0_0_8px_#FD3A25]"
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
