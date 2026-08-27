import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, FileText, Sparkles } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | CorAuxis",
  description: "Terms and conditions governing the use of CorAuxis digital services, AI automation solutions, and software development.",
};

export default function TermsPage() {
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
            <FileText className="w-3.5 h-3.5 text-[#FD3A25]" />
            <span>Legal Documentation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-zinc-400 text-sm sm:text-base">
            Last Updated: August 2026 • Please read these terms carefully before engaging with our services.
          </p>
        </div>

        {/* Legal Sections */}
        <div className="space-y-10 sm:space-y-12 text-zinc-300 text-sm sm:text-base leading-relaxed">
          
          {/* Section 1 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#FD3A25]">01.</span> Acceptance of Terms
            </h2>
            <p>
              By accessing, browsing, or utilizing the services provided by <strong className="text-white">CorAuxis</strong> (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), you acknowledge that you have read, understood, and agreed to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please do not use our website or services.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#FD3A25]">02.</span> Scope of Services
            </h2>
            <p className="mb-3">
              CorAuxis specializes in providing advanced AI Automation, Custom Software Engineering, Interactive Web Experiences, and Digital Transformation solutions.
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-400 pl-2">
              <li>Project scope, milestones, and deliverables are formally defined in individual Statement of Work (SOW) agreements.</li>
              <li>Estimated delivery timelines are provided in good faith and may adapt subject to technical feedback and client revisions.</li>
              <li>Any change requests or scope expansions will be evaluated and agreed upon mutually in writing.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#FD3A25]">03.</span> Intellectual Property Rights
            </h2>
            <p>
              Upon receipt of full payment for contracted services, all custom intellectual property, bespoke source code, and design assets created explicitly for the client shall transfer to the client. CorAuxis retains the right to showcase non-confidential project highlights and visual demonstrations in our professional portfolio and marketing materials.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#FD3A25]">04.</span> Client Obligations &amp; Confidentiality
            </h2>
            <p>
              Clients agree to provide necessary assets, access credentials, and timely feedback required to execute contracted projects. Both parties agree to maintain strict confidentiality regarding all proprietary business data, source codes, and sensitive information exchanged during the engagement.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#FD3A25]">05.</span> Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, CorAuxis shall not be held liable for any indirect, incidental, punitive, or consequential damages resulting from third-party hosting outages, unforeseen API changes, or unauthorized access outside our immediate technical control.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#FD3A25]">06.</span> Contact &amp; Inquiries
            </h2>
            <p className="mb-4">
              If you have any questions, clarifications, or feedback concerning these Terms &amp; Conditions, please reach out directly:
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
