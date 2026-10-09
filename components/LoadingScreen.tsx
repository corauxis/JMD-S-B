"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface LoadingScreenProps {
  onComplete?: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textShineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scroll while loading
    document.body.style.overflow = "hidden";

    if (!containerRef.current || !textShineRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Cinematic Zoom-In transition into the website
          const exitTl = gsap.timeline({
            onComplete: () => {
              document.body.style.overflow = "";
              setIsVisible(false);
              if (onComplete) onComplete();
            },
          });

          // Text zooms in rapidly towards the viewer (zoom-through effect)
          exitTl.to(
            textShineRef.current,
            {
              scale: 4.5,
              opacity: 0,
              filter: "blur(18px)",
              duration: 0.85,
              ease: "expo.in",
            },
            0
          );

          // Background overlay fades smoothly
          exitTl.to(
            containerRef.current,
            {
              opacity: 0,
              duration: 0.85,
              ease: "power2.inOut",
            },
            0.15
          );
        },
      });

      // 1.0s Initial Hold Delay as requested
      tl.to({}, { duration: 1.0 });

      // Snappy Pure White Light Sweep Moving Across "JMD SOLUTIONS AND BEYOND"
      tl.fromTo(
        textShineRef.current,
        {
          backgroundPosition: "200% 0",
          filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.2))",
          scale: 1,
          opacity: 1,
        },
        {
          backgroundPosition: "-200% 0",
          filter:
            "drop-shadow(0 0 40px rgba(255, 255, 255, 0.95)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.8))",
          duration: 1.2,
          ease: "power2.inOut",
        }
      );

      // Brief hold before zoom
      tl.to({}, { duration: 0.2 });
    }, containerRef);

    return () => {
      document.body.style.overflow = "";
      ctx.revert();
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[99999] bg-[#000000] flex flex-col items-center justify-center select-none will-change-transform pointer-events-auto"
    >
      <div className="flex items-center justify-center w-full h-full px-6">
        <div
          ref={textShineRef}
          className="text-center font-black tracking-[-0.03em] uppercase will-change-[background-position,filter,transform] font-[family-name:var(--font-urbanist)] text-[clamp(26px,5.5vw,84px)] leading-tight select-none max-w-5xl"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.45) 30%, #ffffff 50%, rgba(255, 255, 255, 0.45) 70%, rgba(255, 255, 255, 0.15) 100%)",
            backgroundSize: "200% 100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          JMD SOLUTIONS AND BEYOND
        </div>
      </div>
    </div>
  );
}
