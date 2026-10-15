"use client";

import { useState, useEffect, useRef } from "react";

const categoryOptions = [
  "AI Strategy & Mapping",
  "AI UX & Product Design",
  "LLM / Agent Development",
  "Data Engineering & Pipelines",
  "End-to-End AI Solution",
  "Art Direction / Branding",
  "General Inquiry / Other",
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [circleProgress, setCircleProgress] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    category: "",
    email: "",
    message: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const loadTimeRef = useRef(0);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{
    type: "success" | "error" | "";
    text: string;
  }>({ type: "", text: "" });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    loadTimeRef.current = Date.now();
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close custom dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Continuous RAF scroll tracker for booming circle expansion in middle (Synced with Lenis physics)
  useEffect(() => {
    let animationFrameId: number;
    let currentProgress = 0;

    const updateCircle = () => {
      if (window.innerWidth < 640) {
        setCircleProgress(1);
        return;
      }
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        const windowHeight = typeof window !== "undefined" ? window.innerHeight : 900;

        // Starts smoothly as you approach the bottom of Tools
        const startPoint = windowHeight * 0.95;
        // Increased scroll distance to slow down the expansion rate by a little
        const distanceToFull = windowHeight * 1.35;

        const current = startPoint - rect.top;
        const targetProgress = Math.min(Math.max(current / distanceToFull, 0), 1);

        // Silky smooth inertia interpolation synced with Lenis
        currentProgress += (targetProgress - currentProgress) * 0.09;
        if (Math.abs(targetProgress - currentProgress) < 0.001) {
          currentProgress = targetProgress;
        }

        setCircleProgress(currentProgress);
      }
      animationFrameId = requestAnimationFrame(updateCircle);
    };

    animationFrameId = requestAnimationFrame(updateCircle);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMsg({ type: "", text: "" });

    // Anti-spam honeypot
    if (honeypot) {
      return;
    }

    // Minimum message length check (at least 15 characters)
    if (formData.message.trim().length < 15) {
      setStatusMsg({
        type: "error",
        text: "Please write at least 15 characters in your message.",
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          hp_field: honeypot,
          loadTime: loadTimeRef.current,
        }),
      });

      const data = await res.json();

      if (res.ok && !data.error) {
        setStatusMsg({
          type: "success",
          text: "Message sent successfully to contact@corauxis.com! We will get back to you within 24 hours.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          category: "",
          email: "",
          message: "",
        });
      } else {
        setStatusMsg({
          type: "error",
          text: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setStatusMsg({
        type: "error",
        text: "Network error. You can also reach out directly to contact@corauxis.com",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="relative z-30 bg-[#f2f2f4] text-white pt-10 sm:pt-20 md:pt-28 pb-10 sm:pb-16 md:pb-24 px-3 sm:px-8 md:px-12 lg:px-16 overflow-x-clip select-none"
    >
      {/* ========================================================
          EXPANDING BOOMING CIRCLE (Emerges from bottom-up, extends 1400px up, strictly clipped at footer bottom with 0px overflow)
         ======================================================== */}
      <div
        className="hidden sm:block absolute inset-x-0 pointer-events-none z-20 overflow-hidden"
        style={{
          top: "-1400px",
          height: "calc(100% + 1400px)",
        }}
      >
        <div
          className="absolute left-1/2 w-[1400px] sm:w-[1800px] md:w-[2200px] lg:w-[2700px] aspect-square rounded-full pointer-events-none shrink-0"
          style={{
            top: "calc(1400px + 50%)",
            transform: `translate(-50%, -50%) translate3d(0, ${(1 - circleProgress) * 280 - 60}px, 0) scale(${0.72 + circleProgress * 1.25})`,
            opacity: circleProgress <= 0.01 ? 0 : Math.min(circleProgress * 2.2, 1),
            transformOrigin: "center center",
            transition: "transform 0.1s linear, opacity 0.15s ease-out",
            willChange: "transform, opacity",
          }}
        >
          {/* Radiant Red/Coral Booming Horizon Dome */}
          <div className="w-full h-full rounded-full bg-gradient-to-t from-[#FD3A25] via-[#ff4a34] to-[#FD3A25] opacity-98 shadow-[0_-40px_160px_rgba(253,58,37,0.6),0_-15px_70px_rgba(255,255,255,0.2)]" />

          {/* Soft Radial Ambient Lighting Aura */}
          <div className="absolute -top-[12%] left-1/2 -translate-x-1/2 w-[95%] h-[50%] bg-[#ff7a6b]/45 rounded-full blur-[90px] sm:blur-[140px]" />
        </div>
      </div>

      {/* ========================================================
          INNER FLOATING FOOTER BOX (Scales on Desktop, Static on Mobile)
         ======================================================== */}
      <div
        className="relative z-30 max-w-[1520px] w-full mx-auto rounded-[24px] sm:rounded-[44px] md:rounded-[56px] bg-[#0d0d10] border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] p-5 sm:p-8 md:p-12 lg:p-14 overflow-hidden"
        style={
          !isMobile
            ? {
              transform: `translate3d(0, ${(1 - circleProgress) * 75}px, 0) scale(${0.84 + circleProgress * 0.16})`,
              transformOrigin: "center top",
              transition: "transform 0.08s linear",
              willChange: "transform",
            }
            : undefined
        }
      >

        {/* ========================================================
            TOP SECTION: Contact Form Block (2 Columns)
           ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">

          {/* Left Column: Dark box with Minimalist Stepped Icon */}
          <div className="lg:col-span-5 hidden sm:flex items-center justify-center rounded-[28px] bg-[#141418] border border-white/5 min-h-[380px] lg:min-h-[500px] p-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
            <div className="relative w-16 h-16 flex items-center justify-center">
              {/* Stepped pixel icon */}
              <div className="relative w-12 h-12">
                <span className="absolute top-0 right-0 w-6 h-6 bg-white rounded-[3px]" />
                <span className="absolute bottom-0 left-0 w-3.5 h-3.5 bg-white rounded-[2px]" />
                <span className="absolute bottom-3.5 left-3.5 w-3.5 h-3.5 bg-white rounded-[2px]" />
              </div>
            </div>
          </div>

          {/* Right Column: Get In Touch Form */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2 sm:py-4">
            <div>
              {/* Heading with Closing Quotation */}
              <h2 className="text-4xl sm:text-5xl md:text-[64px] font-bold text-white tracking-tight leading-[1.08] font-[family-name:var(--font-urbanist)]">
                Get In Touch”
              </h2>

              {/* Subheading */}
              <p className="mt-3 text-sm sm:text-base text-zinc-400 font-medium leading-relaxed font-[family-name:var(--font-urbanist)]">
                Let&apos;s build something great together! Audit and entire structure in next 24hrs.
              </p>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="mt-10 sm:mt-12 flex flex-col gap-8">

              {/* Anti-Spam Honeypot Field (Hidden from humans) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company_hp">Do not fill this field</label>
                <input
                  type="text"
                  id="company_hp"
                  name="company_hp"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-10">
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2 font-[family-name:var(--font-urbanist)]">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    required
                    placeholder="Jim"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-zinc-700/80 pb-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FD3A25] transition-colors font-medium font-[family-name:var(--font-urbanist)]"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2 font-[family-name:var(--font-urbanist)]">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    required
                    placeholder="Hopper"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-zinc-700/80 pb-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FD3A25] transition-colors font-medium font-[family-name:var(--font-urbanist)]"
                  />
                </div>
              </div>

              {/* Row 2: Premium Custom Dropdown & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-10">

                {/* Custom Glassmorphism Dropdown */}
                <div ref={dropdownRef} className="flex flex-col relative">
                  <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2 font-[family-name:var(--font-urbanist)]">
                    Category
                  </label>

                  {/* Dropdown Trigger Button */}
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-full bg-transparent border-b border-zinc-700/80 pb-2.5 text-left text-sm text-white focus:outline-none focus:border-[#FD3A25] transition-colors flex items-center justify-between font-medium font-[family-name:var(--font-urbanist)] cursor-pointer group"
                  >
                    <span className={formData.category ? "text-white font-medium" : "text-zinc-400"}>
                      {formData.category || "Select a category..."}
                    </span>
                    <span
                      className={`text-xs text-zinc-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180 text-[#FD3A25]" : "group-hover:text-white"
                        }`}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Dropdown Menu Overlay */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2.5 w-full z-50 rounded-2xl bg-[#17171b]/98 border border-white/15 backdrop-blur-2xl shadow-[0_24px_50px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.08)] py-2 overflow-hidden animate-fadeIn">
                      {categoryOptions.map((opt) => {
                        const isSelected = formData.category === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, category: opt });
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full px-4 py-2.5 text-left text-xs sm:text-sm font-medium font-[family-name:var(--font-urbanist)] transition-all flex items-center justify-between ${isSelected
                                ? "bg-[#FD3A25]/15 text-[#FD3A25] font-semibold"
                                : "text-zinc-300 hover:bg-white/10 hover:text-white"
                              }`}
                          >
                            <span>{opt}</span>
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FD3A25]" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Email Address */}
                <div className="flex flex-col">
                  <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2 font-[family-name:var(--font-urbanist)]">
                    Your Email Address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-zinc-700/80 pb-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FD3A25] transition-colors font-medium font-[family-name:var(--font-urbanist)]"
                  />
                </div>
              </div>

              {/* Row 3: Message with Minimum Length Constraint (15+ characters) */}
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider font-[family-name:var(--font-urbanist)]">
                    Message*
                  </label>
                  <span className="text-[11px] text-zinc-500 font-mono">
                    min. 15 characters ({formData.message.trim().length}/15)
                  </span>
                </div>
                <textarea
                  name="message"
                  required
                  minLength={15}
                  rows={3}
                  placeholder="Tell us about your project or inquiry (minimum 15 characters)....."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-zinc-700/80 pb-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FD3A25] transition-colors resize-none font-medium font-[family-name:var(--font-urbanist)]"
                />
              </div>

              {/* Status Message Notification */}
              {statusMsg.text && (
                <div
                  className={`p-3.5 rounded-xl text-xs sm:text-sm font-medium font-[family-name:var(--font-urbanist)] transition-all ${statusMsg.type === "success"
                      ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/30"
                      : "bg-red-950/80 text-red-300 border border-red-500/30"
                    }`}
                >
                  {statusMsg.text}
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#1c1c20] to-[#25252a] hover:from-[#FD3A25] hover:to-[#ff523d] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.4)] font-[family-name:var(--font-urbanist)] flex items-center justify-center gap-2 border border-white/10 hover:border-transparent cursor-pointer"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* ========================================================
            SEPARATOR
           ======================================================== */}
        <div className="w-full h-px bg-zinc-800/80 my-16 sm:my-22 md:my-26" />

        {/* ========================================================
            MIDDLE SECTION: Contact Details & Navigation Columns
           ======================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-14 items-start justify-between">

          {/* Left Column (6 cols): Direct Contact Information & CTA */}
          <div className="lg:col-span-6 flex flex-col gap-7">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight font-[family-name:var(--font-urbanist)]">
                Let’s work together
              </h3>
              <a
                href="mailto:contact@corauxis.com"
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight block mt-2 hover:text-[#FD3A25] transition-colors font-[family-name:var(--font-urbanist)] break-all"
              >
                contact@corauxis.com
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-1">
              {/* Phone */}
              <div className="flex flex-col">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-[family-name:var(--font-urbanist)] mb-1.5">
                  PHONE
                </span>
                <a
                  href="tel:+919209552809"
                  className="text-sm sm:text-base text-zinc-300 hover:text-white font-medium transition-colors font-[family-name:var(--font-urbanist)]"
                >
                  +91-9209552809
                </a>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-[family-name:var(--font-urbanist)] mb-1.5">
                  EMAIL
                </span>
                <a
                  href="mailto:contact@corauxis.com"
                  className="text-sm sm:text-base text-zinc-300 hover:text-white font-medium transition-colors font-[family-name:var(--font-urbanist)]"
                >
                  contact@corauxis.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-[family-name:var(--font-urbanist)] mb-1.5">
                ADDRESS
              </span>
              <p className="text-sm sm:text-base text-zinc-300 font-medium leading-relaxed font-[family-name:var(--font-urbanist)] max-w-md">
                12th floor, One West, Balewadi High St,<br />
                Balewadi, Pune, Maharashtra 411045
              </p>
            </div>

            <div className="pt-1">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 pb-1 border-b border-white text-white text-sm sm:text-base font-semibold tracking-wide group font-[family-name:var(--font-urbanist)]"
              >
                <span>Contact Now</span>
                <span className="text-xs inline-block -translate-y-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-2">
                  ┐
                </span>
              </a>
            </div>
          </div>

          {/* Middle Navigation Column (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3.5">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-[family-name:var(--font-urbanist)] mb-1">
              SERVICES
            </span>
            {[
              { label: "SERVICES", href: "#showcase" },
              { label: "PROCESS", href: "#features" },
              { label: "REVIEWS", href: "#about" },
              { label: "ABOUT", href: "#about" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm sm:text-base font-semibold text-zinc-300 hover:text-white transition-colors py-0.5 font-[family-name:var(--font-urbanist)] uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Socials Column & Government Recognition (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-7">
            <div className="flex flex-col gap-3.5">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-[family-name:var(--font-urbanist)] mb-1">
                CONNECT
              </span>
              {[
                {
                  label: "LINKEDIN",
                  href: "linkedin.com/company/corauxis-private-limited/?viewAsMember=true",
                },
                {
                  label: "TWITTER",
                  href: "https://x.com/Corauxis",
                },
                {
                  label: "INSTAGRAM",
                  href: "https://www.instagram.com/jmd_solutions_beyond?igsh=dzVseWNzYXU5aXNs&utm_source=qr",
                },
                {
                  label: "YOUTUBE",
                  href: "www.youtube.com/@Corauxis",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base font-semibold text-zinc-300 hover:text-white transition-colors py-0.5 font-[family-name:var(--font-urbanist)] uppercase tracking-wider flex items-center justify-between group"
                >
                  <span>{social.label}</span>
                  <span className="text-xs text-zinc-600 group-hover:text-white group-hover:translate-x-0.5 transition-all">↗</span>
                </a>
              ))}
            </div>

            {/* Government Certification / Recognition Badge */}
            <div className="flex flex-col gap-2.5 pt-5 border-t border-zinc-800/80">
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-[family-name:var(--font-urbanist)]">
                GOVERNMENT RECOGNITION
              </span>
              <div className="inline-flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl w-fit shadow-lg border border-white/20 transition-all duration-300 hover:scale-[1.02]">
                <img
                  src="/images/dpiit-startup-india.png"
                  alt="DPIIT Startup India Certified"
                  className="h-10 sm:h-11 w-auto object-contain"
                />
                <div className="h-7 w-px bg-zinc-300" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 font-mono">
                    Govt. of India
                  </span>
                  <span className="text-xs font-bold text-zinc-900 leading-tight">
                    Recognized Startup
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================
            DECORATIVE MARKS ROW (+ ❖ +)
           ======================================================== */}
        <div className="flex items-center justify-between px-4 sm:px-12 md:px-24 mt-16 sm:mt-20 md:mt-24 text-zinc-600 select-none">
          <span className="text-xl sm:text-2xl font-light">+</span>
          <span className="text-lg sm:text-xl font-light">❖</span>
          <span className="text-xl sm:text-2xl font-light">+</span>
        </div>

        {/* ========================================================
            SEPARATOR ABOVE GIANT WORDMARK
           ======================================================== */}
        <div className="w-full h-px bg-zinc-800/80 mt-8 mb-10 sm:mb-14" />

        {/* ========================================================
            BOTTOM: Giant JMD Solutions and Beyond Brand Logo & Inline Copyright Meter
           ======================================================== */}
        <div className="relative w-full flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-2 sm:pt-4">
          {/* Giant Brand Logo */}
          <div className="shrink min-w-0 max-w-[85vw] sm:max-w-[70vw] flex items-center justify-start">
            <img
              src="/images/logo.png"
              alt="JMD Solutions and Beyond Logo"
              className="h-14 sm:h-20 md:h-24 lg:h-32 w-auto object-contain select-none"
            />
          </div>

          {/* Bottom Right Copyright & Precision Meter */}
          <div className="flex items-end gap-3 shrink-0 sm:pb-2.5 md:pb-3.5 text-white/90 text-xs sm:text-sm font-mono select-none">
            <span className="tracking-wide">© 2026</span>

            {/* Precision Tick Marks (Expanded length & distinct tall tick) */}
            <div className="flex items-end gap-1 h-[22px] px-0.5 mb-[2px]">
              <span className="w-[1px] h-[8px] bg-white/40" />
              <span className="w-[1px] h-[8px] bg-white/40" />
              <span className="w-[1px] h-[8px] bg-white/40" />
              <span className="w-[1px] h-[8px] bg-white/40" />
              <span className="w-[1px] h-[8px] bg-white/40" />
              <span className="w-[1px] h-[8px] bg-white/40" />
              <span className="w-[1px] h-[8px] bg-white/40" />
              <span className="w-[1.5px] h-[22px] bg-white" />
              <span className="w-[1px] h-[8px] bg-white/40" />
            </div>

            <span className="tracking-wide">19&apos;</span>
          </div>
        </div>

        {/* ========================================================
            LEGAL & COPYRIGHT BOTTOM BAR
           ======================================================== */}
        <div className="w-full h-px bg-zinc-800/80 mt-10 sm:mt-14 mb-6 sm:mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-[family-name:var(--font-urbanist)]">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1.5 text-center sm:text-left">
            <span>© 2026 JMD Solutions and Beyond. All rights reserved.</span>
            <span>•</span>
            <a href="/terms" className="hover:text-zinc-300 transition-colors">Terms &amp; Conditions</a>
            <span>•</span>
            <a href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
          </div>

          <div className="text-zinc-500 font-medium">
            Built with passion.
          </div>
        </div>

      </div>
    </footer>
  );
}
