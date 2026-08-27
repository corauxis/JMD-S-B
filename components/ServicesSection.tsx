"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "ai-tech-services",
    num: "(01)",
    title: "AI Based Tech Services",
    description: "Intelligent systems and AI integrations that automate repetitive tasks, simplify business processes, and leverage actionable data insights to accelerate growth at lower costs.",
    tags: [
      "AI Automation",
      "AI Integration & Development",
      "Process Simplification",
      "Data-Driven Growth Insights",
      "Virtual Assistance",
    ],
    image: "/images/services/strategy.png",
  },
  {
    id: "software-development",
    num: "(02)",
    title: "Software & Technology Services",
    description: "Custom software, mobile apps, modern web platforms, and deep API integrations engineered to streamline repetitive workflows and keep your business running on autopilot.",
    tags: [
      "Custom Software & App Development",
      "Website & Platform Development",
      "Custom API Integration",
      "Scalable Solutions",
    ],
    image: "/images/services/service_ux.png",
  },
  {
    id: "creative-growth-marketing",
    num: "(03)",
    title: "Creative & Growth Marketing Services",
    description: "AI-assisted performance marketing, conversion rate optimization (CRO), graphic design, and product reels production across Meta & Google to drive measurable conversions.",
    tags: [
      "Performance Marketing (Meta & Google)",
      "Graphic Design & Brand Creatives",
      "Product & Reels Shoot Production",
      "CRO (Conversion Rate Optimisation)",
    ],
    image: "/images/services/service_agent.png",
  },
  {
    id: "team-extension",
    num: "(04)",
    title: "Flexible Team Extension Services",
    description: "Extend your internal team on demand with reliable tech, software engineering, and growth marketing specialists tailored to your business needs for rapid execution.",
    tags: [
      "Dedicated Tech & Marketing Experts",
      "Full-Stack Team Extension",
      "On-Demand Resource Scaling",
      "1:1 Dedicated Business Support",
    ],
    image: "/images/services/service_data.png",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  // Dynamic Lenis-compatible RAF scroll-linked slide up animation
  useEffect(() => {
    let animationFrameId: number;

    const updateScrollMotion = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Animate visibly as the user scrolls into and through the section
        const startPoint = windowHeight * 0.95;
        const endPoint = windowHeight * 0.1;
        const totalDist = startPoint - endPoint;

        const rawFraction = (startPoint - rect.top) / totalDist;
        const progress = Math.min(Math.max(rawFraction, 0), 1);
        setScrollProgress(progress);
      }
      animationFrameId = requestAnimationFrame(updateScrollMotion);
    };

    animationFrameId = requestAnimationFrame(updateScrollMotion);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-[#f2f2f4] text-zinc-900 py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 overflow-hidden"
    >
      <div className="max-w-[1760px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 lg:gap-20 items-start">
          {/* Left Column (Sticky Overview + Dynamic 3D Product Card) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full lg:sticky lg:top-24">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-200/90 border border-zinc-300/80 text-xs font-semibold text-zinc-700 tracking-wide mb-6 shadow-sm w-fit">
                <span className="w-2 h-2 rounded-full bg-[#FD3A25]" />
                Services
              </div>

              {/* Headline */}
              <h2 className="text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight text-zinc-900 leading-[1.06] font-[family-name:var(--font-urbanist)]">
                End-to-End<br className="hidden sm:inline" /> AI & Tech Services
              </h2>

              {/* Subdescription */}
              <p className="mt-7 text-base sm:text-lg text-zinc-600 font-medium leading-relaxed max-w-md font-[family-name:var(--font-urbanist)]">
                We build intelligent automation, custom software, autonomous AI agents, and performance growth solutions engineered to streamline operations and drive measurable ROI.
              </p>
            </div>

            {/* Dynamic 3D Product Preview Card with visible smooth slide-up */}
            <div
              className="mt-20 sm:mt-24 md:mt-32 w-full max-w-[460px] aspect-[16/10] rounded-[32px] overflow-hidden bg-[#f0f0f3] border border-white border-b-zinc-300/80 shadow-[inset_0_-6px_0_0_rgba(0,0,0,0.06),0_16px_36px_rgba(0,0,0,0.11),0_4px_12px_rgba(0,0,0,0.06)] relative will-change-transform"
              style={{
                transform: `translate3d(0, ${(1 - scrollProgress) * 90}px, 0)`,
              }}
            >
              {servicesData.map((item, idx) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-all duration-500 ease-out ${
                    activeIdx === idx
                      ? "opacity-100 scale-100 pointer-events-auto"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Interactive Dual-State Accordion with visible cascading slide-up) */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            {servicesData.map((item, idx) => {
              const isActive = activeIdx === idx;
              // Distinct visible cascading slide-up offset (starts 70px to 190px down, slides up as you scroll)
              const translateYOffset = (1 - scrollProgress) * (70 + idx * 40);

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIdx(idx)}
                  className={`transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer select-none rounded-[32px] will-change-transform ${
                    isActive
                      ? "bg-[#0c0c0e] text-white p-8 sm:p-10 md:p-12 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)] border border-zinc-800/80"
                      : "bg-[#f0f0f3] text-zinc-900 p-7 sm:p-8 md:p-9 border border-white border-b-zinc-300/80 shadow-[inset_0_-6px_0_0_rgba(0,0,0,0.06),0_16px_36px_rgba(0,0,0,0.11),0_4px_12px_rgba(0,0,0,0.06)] hover:bg-[#eaeae0]/70"
                  }`}
                  style={{
                    transform: `translate3d(0, ${translateYOffset}px, 0)`,
                  }}
                >
                  {/* Header Row */}
                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className={`font-bold tracking-tight font-[family-name:var(--font-urbanist)] transition-colors duration-400 ${
                        isActive
                          ? "text-2xl sm:text-3xl md:text-[36px] text-white leading-snug"
                          : "text-xl sm:text-2xl md:text-[28px] text-zinc-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <span className="text-xs sm:text-sm md:text-base font-mono text-zinc-500 font-medium shrink-0">
                      {item.num}
                    </span>
                  </div>

                  {/* Smooth Collapsible Accordion Body */}
                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100 mt-4 pt-1"
                        : "grid-rows-[0fr] opacity-0 mt-0 pt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-xl font-[family-name:var(--font-urbanist)]">
                        {item.description}
                      </p>

                      {/* Tag Chips */}
                      <div className="flex flex-wrap gap-2.5 sm:gap-3 mt-6 sm:mt-8 pb-1">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 rounded-full bg-[#1c1c20] border border-white/10 text-xs sm:text-[13px] text-zinc-300 font-medium tracking-wide shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
