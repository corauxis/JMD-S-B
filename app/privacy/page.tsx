import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Lock, Eye } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | CorAuxis",
  description: "Privacy policy detailing how CorAuxis collects, uses, and safeguards user data and client communications.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col selection:bg-[#FD3A25] selection:text-white font-[family-name:var(--font-urbanist)]">
      
      {/* Top Header */}
      <header className="w-full border-b border-zinc-800/80 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-5 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>

          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="CorAuxis"
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 sm:px-8 py-14 sm:py-20">
        
        {/* Title Banner */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FD3A25]" />
            <span>Data Privacy &amp; Protection</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base">
            Last Updated: August 2026 • We respect your privacy and are committed to safeguarding your personal information.
          </p>
        </div>

        {/* Legal Sections */}
        <div className="space-y-10 sm:space-y-12 text-zinc-300 text-sm sm:text-base leading-relaxed">
          
          {/* Section 1 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#FD3A25]">01.</span> Overview
            </h2>
            <p>
              This Privacy Policy explains how <strong className="text-white">CorAuxis</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, stores, uses, and safeguards information when you visit our website or submit inquiries through our contact channels.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#FD3A25]">02.</span> Information We Collect
            </h2>
            <p className="mb-3">
              We collect information that you voluntarily provide to us when communicating or requesting service proposals:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-400 pl-2">
              <li><strong>Contact Information:</strong> First and last name, business email address, phone number, and organization name.</li>
              <li><strong>Project Inquiries:</strong> Technical briefs, service requirements, budget preferences, and message contents.</li>
              <li><strong>Automated Technical Data:</strong> Browser type, operating system, and anonymous interaction metrics used strictly to optimize site performance.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#FD3A25]">03.</span> How We Use Your Information
            </h2>
            <p className="mb-3">
              We use collected information solely for legitimate business operations:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-400 pl-2">
              <li>To respond promptly to client consultation requests and project inquiries.</li>
              <li>To formulate accurate statements of work, proposals, and engineering estimates.</li>
              <li>To prevent fraudulent submissions and spam abuse through automated validation.</li>
              <li>We <strong>never sell, rent, or trade</strong> your personal contact details to third-party advertisers.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#FD3A25]">04.</span> Data Security &amp; Retention
            </h2>
            <p>
              We implement industry-standard encryption protocols (SSL/TLS) and secure server infrastructure to protect your personal data from unauthorized access, alteration, or disclosure. Contact records are retained only as long as necessary to fulfill project communication or comply with legal obligations.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#FD3A25]">05.</span> Your Privacy Rights
            </h2>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections to inaccurate information, or request the deletion of your contact records from our active communications database.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#FD3A25]">06.</span> Contact Us
            </h2>
            <p className="mb-4">
              For any questions or requests regarding your data privacy, please contact our data governance team:
            </p>
            <div className="space-y-1.5 text-zinc-400">
              <p><strong className="text-white">Email:</strong> <a href="mailto:contact@corauxis.com" className="text-[#FD3A25] hover:underline">contact@corauxis.com</a></p>
              <p><strong className="text-white">Phone:</strong> <a href="tel:+919209552809" className="text-zinc-300 hover:text-white">+91-9209552809</a></p>
              <p><strong className="text-white">Address:</strong> 12th floor, One West, Balewadi High St, Balewadi, Pune, Maharashtra 411045</p>
            </div>
          </section>

        </div>
      </main>

      {/* Simple Footer */}
      <footer className="w-full border-t border-zinc-800/80 py-8 text-center text-xs text-zinc-500">
        <p>© 2026 CorAuxis. All rights reserved. • Built with passion.</p>
      </footer>

    </div>
  );
}
