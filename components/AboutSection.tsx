"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [translateY, setTranslateY] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [count40, setCount40] = useState(0);

  // 1. Intersection Observer for viewport trigger (resets when out of view, re-animates on return)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // 2. Count-up animation for "40%" stat
  useEffect(() => {
    if (!isInView) {
      setCount40(0);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrame: number;
    const duration = 1600; // 1.6s smooth count-up
    const target = 40;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Cubic ease-out for natural slowing effect
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easedProgress * target);
      setCount40(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView]);

  // 3. Lenis-compatible RAF parallax scroll effect for Globe image (gentle, slow motion)
  useEffect(() => {
    let animationFrameId: number;

    const updateParallax = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        
        // Active visual window: spans smoothly as the section scrolls through view
        const windowHeight = typeof window !== "undefined" ? window.innerHeight : 900;
        const startPoint = windowHeight * 0.95;
        const endPoint = -350;
        const totalDist = startPoint - endPoint;

        const rawFraction = (startPoint - rect.top) / totalDist;
        const progress = Math.min(Math.max(rawFraction, 0), 1);

        // Gentle and slow parallax: moves softly across only ~130px throughout the entire scroll
        const shift = (1 - progress) * 130; 
        setTranslateY(shift);
      }
      animationFrameId = requestAnimationFrame(updateParallax);
    };

    animationFrameId = requestAnimationFrame(updateParallax);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[#f2f2f4] text-zinc-900 py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      <div className="max-w-[1520px] w-full mx-auto">
        {/* Top Header & Badge */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-200/90 border border-zinc-300/80 text-xs font-semibold text-zinc-700 tracking-wide mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FD3A25]" />
            About Us
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-[54px] font-bold tracking-tight text-zinc-900 max-w-4xl leading-[1.12] font-[family-name:var(--font-urbanist)]">
            Engineering Intelligent Automation and Software for Modern Businesses
          </h2>
        </div>

        {/* Bento Grid Layout (7 cols Left / 5 cols Right Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-7 items-stretch">
          {/* Left Dark Globe Card (7 cols - Larger Width) */}
          <div className="lg:col-span-7 rounded-[32px] bg-[#0c0c0e] text-white p-8 sm:p-10 md:p-12 flex flex-col justify-between relative overflow-hidden min-h-[580px] sm:min-h-[620px] shadow-xl">
            {/* Top Badge, Headline & CTA Button */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-white/90 mb-6 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#FD3A25] animate-pulse" />
                Available for worldwide project
              </div>

              {/* Exact typography matching Image 3: 32px Urbanist font & #FD3A25 red accent */}
              <h3 className="text-[32px] sm:text-[36px] font-bold tracking-tight text-white leading-snug font-[family-name:var(--font-urbanist)]">
                Based in <span className="text-[#FD3A25]">Pune, India</span>
              </h3>

              {/* Capsule CTA Button - Exact 3D Popping Out Effect matching screenshot */}
              <a
                href="#contact"
                className="mt-6 px-8 py-3 rounded-full bg-gradient-to-b from-[#2a2a2e] to-[#121215] text-white text-xs sm:text-sm font-semibold tracking-wide border border-white/25 shadow-[0_12px_24px_-4px_rgba(0,0,0,0.8),0_4px_8px_-2px_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 hover:from-[#323238] hover:to-[#18181c]"
              >
                Start a Project
              </a>
            </div>

            {/* Moving Globe + Aura Container - Perfectly positioned and visible on mobile, tablet, and desktop */}
            <div
              className="absolute -bottom-[260px] sm:-bottom-[380px] md:-bottom-[480px] lg:-bottom-[560px] left-1/2 w-[165%] sm:w-[145%] md:w-[130%] lg:w-[125%] max-w-[1000px] aspect-square pointer-events-none z-0"
              style={{
                transform: `translate3d(-50%, ${translateY}px, 0)`,
                transition: "transform 0.12s linear",
                willChange: "transform",
              }}
            >
              {/* Soft Radiant White Aura Layers around the dome */}
              <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[110%] h-[50%] bg-white/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />
              <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[85%] h-[35%] bg-white/35 rounded-full blur-[50px] sm:blur-[65px] pointer-events-none" />

              <Image
                src="/images/globe.png"
                alt="Dotted Globe Horizon"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{
                  filter: "drop-shadow(0 -10px 35px rgba(255, 255, 255, 0.45))",
                }}
                priority
              />
            </div>
          </div>

          {/* Right Cards Stack (5 cols - 3 Detail Cards) */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 justify-between">
            {/* Box 1: Tech + Marketing + Ops */}
            <div className="rounded-[28px] sm:rounded-[32px] bg-[#f0f0f3] border border-white border-b-zinc-300/80 p-6 sm:p-7 md:p-8 flex flex-col justify-center shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.05),0_12px_28px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-lg">
              <h4 className="text-2xl sm:text-[28px] md:text-[30px] font-bold tracking-tight text-zinc-900 font-[family-name:var(--font-urbanist)] leading-tight">
                Tech + Marketing + Ops
              </h4>
              <p className="text-sm sm:text-base font-semibold text-zinc-800 mt-1 mb-2 font-[family-name:var(--font-urbanist)]">
                One integrated team extension
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed font-[family-name:var(--font-urbanist)]">
                Get development, performance marketing, creative execution, CRO, and operational support from one flexible team
              </p>
            </div>

            {/* Box 2: 40% Faster Execution Potential */}
            <div className="rounded-[28px] sm:rounded-[32px] bg-[#f0f0f3] border border-white border-b-zinc-300/80 p-6 sm:p-7 md:p-8 flex flex-col justify-center shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.05),0_12px_28px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-lg">
              <div className="text-4xl sm:text-5xl md:text-[52px] font-bold tracking-tight text-zinc-900 font-[family-name:var(--font-urbanist)] leading-none mb-1">
                {count40}%
              </div>
              <p className="text-sm sm:text-base font-semibold text-zinc-800 mt-1 mb-2 font-[family-name:var(--font-urbanist)]">
                Faster Execution Potential
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed font-[family-name:var(--font-urbanist)]">
                AI-assisted workflows can help reduce manual effort in planning, content, development, reporting, and repetitive execution tasks.
              </p>
            </div>

            {/* Box 3: 1:1 Dedicated Business Support */}
            <div className="rounded-[28px] sm:rounded-[32px] bg-[#f0f0f3] border border-white border-b-zinc-300/80 p-6 sm:p-7 md:p-8 flex flex-col justify-center shadow-[inset_0_-4px_0_0_rgba(0,0,0,0.05),0_12px_28px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:shadow-lg">
              <div className="text-4xl sm:text-5xl md:text-[52px] font-bold tracking-tight text-zinc-900 font-[family-name:var(--font-urbanist)] leading-none mb-1">
                1:1
              </div>
              <p className="text-sm sm:text-base font-semibold text-zinc-800 mt-1 mb-2 font-[family-name:var(--font-urbanist)]">
                Dedicated Business Support
              </p>
              <p className="text-xs sm:text-sm text-zinc-600 font-normal leading-relaxed font-[family-name:var(--font-urbanist)]">
                We work closely with each client to understand their process, identify gaps, and provide the right mix of tech, marketing, and operational support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
