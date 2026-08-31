"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  FileText,
  BarChart3,
  Car,
  Scale,
  Briefcase,
  Landmark,
  Target,
  TrendingUp,
  Megaphone,
  Home,
  ClipboardList,
  Building2,
} from "lucide-react";

interface ProjectItem {
  title: string;
  description: string;
  deliverables: string;
  industry: string;
  image: string;
  descIcon: typeof FileText;
  delivIcon: typeof BarChart3;
  industryIcon: typeof Car;
}

const projects: ProjectItem[] = [
  {
    title: "AI-Driven Dealership Excellence",
    description:
      "Automated workflows pulling vehicle telemetry and service history; reducing manual entry time by 45%.",
    deliverables: "Predictive analytics dashboard, AI service scheduling, parts inventory forecasting.",
    industry: "Automotive / Fleet Optimization",
    image: "/images/showcase/dealership.png",
    descIcon: FileText,
    delivIcon: BarChart3,
    industryIcon: Car,
  },
  {
    title: "LegalRobe Lawyer Management Software",
    description:
      "All-in-one platform to manage cases, clients, documents, hearings, and billing; streamlining legal operations and boosting productivity.",
    deliverables: "Case management, document automation, hearing scheduler, billing & invoicing, client portal, reports & analytics.",
    industry: "Legal / Law Firms",
    image: "/images/showcase/legalrobe.png",
    descIcon: Scale,
    delivIcon: Briefcase,
    industryIcon: Landmark,
  },
  {
    title: "M-Auxis Digital Marketing Platform",
    description:
      "A complete digital marketing platform to strategize, execute, and optimize campaigns across channels, driving measurable results and growth.",
    deliverables: "Campaign management, performance analytics, audience insights, social media management, email marketing, reports & competitor tracking.",
    industry: "Marketing / Advertising / Agencies / Brands",
    image: "/images/showcase/mauxis.png",
    descIcon: Target,
    delivIcon: TrendingUp,
    industryIcon: Megaphone,
  },
  {
    title: "PG Management System",
    description:
      "Smart solution to manage your PG business effortlessly - from room bookings and rent collection to maintenance and member management.",
    deliverables: "Room & occupancy management, rent collection, expense tracking, maintenance requests, notices & member communication.",
    industry: "Real Estate / Hospitality / PG & Hostel Management",
    image: "/images/showcase/pg_management.png",
    descIcon: Home,
    delivIcon: ClipboardList,
    industryIcon: Building2,
  },
];

function useRevealOnScroll(ref: React.RefObject<HTMLElement | null>, prefix: string) {
  const prefixRef = useRef(prefix);
  prefixRef.current = prefix;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const p = prefixRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const px = prefixRef.current;
        if (entry.isIntersecting) {
          el.classList.add(px + "-revealed");
          el.classList.remove(px + "-hidden");
        } else {
          el.classList.remove(px + "-revealed");
          el.classList.add(px + "-hidden");
        }
      },
      { threshold: 0.15 }
    );

    // Set initial hidden class
    el.classList.add(p + "-hidden");
    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);
}

function ProjectCard({ project, idx }: { project: (typeof projects)[0]; idx: number }) {
  const dotsRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useRevealOnScroll(dotsRef as React.RefObject<HTMLElement>, "sc-dots");
  useRevealOnScroll(metaRef as React.RefObject<HTMLElement>, "sc-meta");

  return (
    <div className="group rounded-[28px] bg-[#f0f0f3] overflow-hidden cursor-pointer border border-white border-b-zinc-300/80 shadow-[inset_0_-6px_0_0_rgba(0,0,0,0.06),0_16px_36px_rgba(0,0,0,0.11),0_4px_12px_rgba(0,0,0,0.06)] transition-shadow duration-500">
      {/* Project Image */}
      <div className="px-4 md:px-6 pt-4 md:pt-6">
        <div
          className="relative w-full overflow-hidden rounded-[20px] max-h-[460px] md:max-h-[500px]"
          style={{ aspectRatio: "2.35/1" }}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, 1760px"
            priority={idx === 0}
          />
          {/* Gloss sweep overlay */}
          <div
            aria-hidden="true"
            className="sc-gloss pointer-events-none absolute inset-0 rounded-[20px]"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="px-4 md:px-8 pb-6 md:pb-8 mt-5">
        {/* Dot Indicators — animate first */}
        <div ref={dotsRef} className="sc-dots-hidden flex items-center gap-2 mb-4">
          {projects.map((_, dotIdx) => (
            <span
              key={dotIdx}
              className="inline-block w-2 h-2 rounded-full transition-colors"
              style={{ backgroundColor: dotIdx === idx ? "#FD3A25" : "#C0C0C2" }}
            />
          ))}
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-zinc-300/80 mb-6" />

        {/* Metadata Grid — animate after dots */}
        <div
          ref={metaRef}
          className="sc-meta-hidden grid grid-cols-1 lg:grid-cols-12 gap-y-6 gap-x-8 xl:gap-x-12 items-start"
        >
          {/* Title (Left Column) */}
          <div className="lg:col-span-4 xl:col-span-3.5 pr-2">
            <h3 className="text-2xl sm:text-3xl md:text-[32px] font-bold text-zinc-900 tracking-tight leading-[1.12] font-[family-name:var(--font-urbanist)]">
              {project.title}
            </h3>
          </div>

          {/* 3 Detail Columns (Description, Deliverables, Industry) */}
          <div className="lg:col-span-8 xl:col-span-8.5 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 items-start">
            {/* Description */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#18181c] border border-white/10 flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5">
                <project.descIcon className="w-4 h-4 text-zinc-300" />
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#FD3A25] mb-1 font-[family-name:var(--font-urbanist)]">
                  Description
                </p>
                <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed font-[family-name:var(--font-urbanist)]">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Deliverables */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#18181c] border border-white/10 flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5">
                <project.delivIcon className="w-4 h-4 text-zinc-300" />
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#FD3A25] mb-1 font-[family-name:var(--font-urbanist)]">
                  Deliverables
                </p>
                <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed font-[family-name:var(--font-urbanist)]">
                  {project.deliverables}
                </p>
              </div>
            </div>

            {/* Industry */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-[#18181c] border border-white/10 flex items-center justify-center text-white shrink-0 shadow-sm mt-0.5">
                <project.industryIcon className="w-4 h-4 text-zinc-300" />
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.14em] text-[#FD3A25] mb-1 font-[family-name:var(--font-urbanist)]">
                  Industry
                </p>
                <p className="text-xs sm:text-sm text-zinc-700 font-medium leading-relaxed font-[family-name:var(--font-urbanist)]">
                  {project.industry}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ShowcaseSection() {
  const badgeRef = useRef<HTMLDivElement>(null);
  useRevealOnScroll(badgeRef as React.RefObject<HTMLElement>, "sc");

  return (
    <section
      id="showcase"
      className="relative bg-[#f2f2f4] text-zinc-900 py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-[1520px] w-full mx-auto">
        {/* Header Badge */}
        <div ref={badgeRef} className="sc-hidden flex justify-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FD3A25]" />
            Featured Works
          </div>
        </div>

        {/* Project Cards */}
        <div className="flex flex-col gap-5">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
