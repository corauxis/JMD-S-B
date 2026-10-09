import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText, Scale, ShieldAlert, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | JMD Solutions and Beyond Private Limited",
  description: "Official Terms and Conditions governing access to and use of websites, digital platforms, software, and services provided by JMD Solutions and Beyond Private Limited.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col selection:bg-[#FD3A25] selection:text-white font-[family-name:var(--font-urbanist)]">
      
      {/* Top Sticky Header */}
      <header className="w-full border-b border-zinc-800/80 bg-black/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 sm:py-5 flex items-center justify-between">
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
              alt="JMD Solutions and Beyond"
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-6 sm:px-8 py-12 sm:py-16">
        
        {/* Title Banner */}
        <div className="mb-12 sm:mb-16 border-b border-zinc-800/80 pb-8 sm:pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-4">
            <FileText className="w-3.5 h-3.5 text-[#FD3A25]" />
            <span>Legal Documentation</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Terms &amp; Conditions
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-400 font-mono">
            <span className="text-[#FD3A25] font-semibold">Last Updated: 31 August 2026</span>
            <span>•</span>
            <span>JMD Solutions and Beyond Private Limited</span>
          </div>
          <p className="mt-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
            These Terms and Conditions (&ldquo;Terms&rdquo;, &ldquo;Terms and Conditions&rdquo;) govern your access to and use of the website, digital platforms, software, products, services and related offerings provided by JMD Solutions and Beyond Private Limited (&ldquo;JMD Solutions and Beyond&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;).
          </p>
          <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
            By accessing, browsing or using our website or engaging with any service provided by JMD Solutions and Beyond, you acknowledge that you have read, understood and agreed to be bound by these Terms. If you do not agree with these Terms, please do not use our website or services.
          </p>
        </div>

        {/* Legal Sections */}
        <div className="space-y-8 sm:space-y-10 text-zinc-300 text-sm sm:text-base leading-relaxed">
          
          {/* Section 1 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">1.</span> About JMD Solutions and Beyond
            </h2>
            <p className="mb-3">
              JMD Solutions and Beyond Private Limited is a technology and digital services company providing services that may include, without limitation:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-400 pl-2 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Website design and development</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Web application development</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Mobile application development</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Software and SaaS development</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> UI/UX design</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Digital marketing &amp; SEO</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Social media &amp; paid advertising</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Content and creative services</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> CRM, ERP &amp; business automation</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Artificial intelligence &amp; automation</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Technology consulting &amp; integration</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Product engineering &amp; team extension</li>
            </ul>
            <p className="text-xs text-zinc-400 mb-2">
              Specific services, deliverables, timelines, pricing and commercial terms may be separately agreed through a proposal, quotation, statement of work, purchase order, work order, service agreement or other written communication.
            </p>
            <p className="text-xs text-zinc-500 italic">
              Where a separate written agreement exists between JMD Solutions and Beyond and a client, the terms of that agreement will prevail over these Terms to the extent of any inconsistency.
            </p>
          </section>

          {/* Section 2 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">2.</span> Acceptance of Terms
            </h2>
            <p className="mb-3">By using this website or contacting, engaging or purchasing services from JMD Solutions and Beyond, you agree that:</p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-400 pl-2">
              <li>You have the legal capacity to enter into a binding agreement;</li>
              <li>The information you provide to us is accurate and complete;</li>
              <li>You will use our website and services only for lawful purposes;</li>
              <li>You will comply with all applicable laws and regulations;</li>
              <li>You will not misuse, disrupt, attack or attempt to gain unauthorised access to our website, systems or services.</li>
            </ul>
            <p className="mt-3 text-xs text-zinc-400 font-medium">
              If you are accessing our services on behalf of a company, organisation or other legal entity, you represent that you have authority to bind that entity to these Terms.
            </p>
          </section>

          {/* Section 3 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">3.</span> Website Use
            </h2>
            <p className="mb-3">You may access and use our website for lawful business and informational purposes. You must not:</p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-400 pl-2 mb-3">
              <li>Use the website for any unlawful or fraudulent purpose;</li>
              <li>Attempt to gain unauthorised access to our systems, servers, accounts or databases;</li>
              <li>Introduce malware, viruses, malicious code or other harmful material;</li>
              <li>Attempt to interfere with the operation or security of the website;</li>
              <li>Scrape, copy, reproduce or systematically extract website content without our written permission;</li>
              <li>Impersonate JMD Solutions and Beyond, its employees, representatives or other users;</li>
              <li>Use our website to transmit spam, phishing attempts or other unauthorised communications;</li>
              <li>Use our website in a manner that may damage our reputation, systems or business;</li>
              <li>Circumvent any security, authentication or access-control mechanism.</li>
            </ul>
            <p className="text-xs text-zinc-500">
              We reserve the right to suspend or restrict access where we reasonably believe that these Terms have been violated.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">4.</span> Information on the Website
            </h2>
            <p className="mb-3">
              We make reasonable efforts to keep information on our website accurate and up to date. However, website content may contain general information, estimates, illustrations, examples, and technical descriptions that may change over time.
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 mb-2">
              Nothing on this website should be interpreted as a guarantee that a particular result, business outcome, revenue level, ranking, lead volume, conversion rate, software performance level or other commercial outcome will be achieved.
            </p>
            <p className="text-xs text-zinc-500 italic">
              We reserve the right to modify, update or discontinue website content, services or features without prior notice.
            </p>
          </section>

          {/* Section 5, 6, 7 & 8: Service Agreements, Proposals, Client Responsibilities, Scope Changes */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">5.</span> Services
              </h2>
              <p className="text-sm text-zinc-400">
                JMD Solutions and Beyond provides professional technology and digital services based on the scope agreed with each client (deliverables, milestones, revisions, third-party integrations, hosting, maintenance, IP ownership). These are documented in proposals or service agreements. A website enquiry does not by itself create an obligation to provide services.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">6.</span> Proposals, Quotations and Estimates
              </h2>
              <p className="text-sm text-zinc-400">
                Estimates are based on information available at the time. Changes in scope, third-party costs, taxes, and client approval delays may affect final pricing and timelines. A quotation becomes binding only when accepted by both parties in writing.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">7.</span> Client Responsibilities
              </h2>
              <p className="text-sm text-zinc-400">
                The client is responsible for providing accurate, complete and timely information (branding, content, specifications, API keys, credentials, approvals) reasonably required to deliver the services. JMD Solutions and Beyond shall not be responsible for delays resulting from inaccurate or delayed client materials.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">8.</span> Changes in Scope
              </h2>
              <p className="text-sm text-zinc-400">
                Requests that materially change the agreed scope (new features, additional screens, major redesigns, new integrations) will be treated as additional work, separately quoted, and may adjust timelines.
              </p>
            </div>
          </section>

          {/* Section 9, 10 & 11: Payments, Taxes, Refunds */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">9.</span> Payments
              </h2>
              <p className="text-sm text-zinc-400">
                Payments shall be made according to the agreed schedule. Failure to pay when due may result in suspension of services, withholding of deliverables, or recovery of outstanding amounts.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">10.</span> Taxes
              </h2>
              <p className="text-sm text-zinc-400">
                All applicable taxes, including Goods and Services Tax (GST), shall be charged as required by applicable law. Clients must provide accurate tax and billing information.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">11.</span> Refunds and Cancellation
              </h2>
              <p className="text-sm text-zinc-400">
                Amounts paid for work already performed, committed resources, licences, or third-party purchases are non-refundable. Where a project is cancelled after work has commenced, JMD Solutions and Beyond may invoice for work completed up to the date of cancellation.
              </p>
            </div>
          </section>

          {/* Section 12, 13 & 14: IP, Client Materials, Portfolio Rights */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">12.</span> Intellectual Property
              </h2>
              <p className="text-sm text-zinc-400">
                Unless otherwise agreed in writing, all pre-existing IP, frameworks, libraries, templates, algorithms, reusable components, and AI workflows developed by JMD Solutions and Beyond remain our property. Client-specific IP transfer is subject to full payment of all amounts due.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">13.</span> Client Materials
              </h2>
              <p className="text-sm text-zinc-400">
                Clients retain ownership of materials provided to us and grant JMD Solutions and Beyond a limited licence to use them solely to deliver contracted services. Clients warrant they have the necessary rights to provide such materials.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">14.</span> Portfolio and Marketing Rights
              </h2>
              <p className="text-sm text-zinc-400">
                Unless expressly prohibited in a written agreement, JMD Solutions and Beyond may identify completed projects or client relationships in its portfolio and marketing materials while respecting strict confidentiality obligations.
              </p>
            </div>
          </section>

          {/* Section 15 & 16: Third Party Services & SaaS */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">15.</span> Third-Party Services
              </h2>
              <p className="text-sm text-zinc-400">
                Our services may integrate with third-party platforms (cloud hosting, payment gateways, Google, Meta, WhatsApp, CRM, AI APIs). JMD Solutions and Beyond is not responsible for third-party outages, API changes, pricing changes, or policy updates.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">16.</span> Software, SaaS and Technology Products
              </h2>
              <p className="text-sm text-zinc-400">
                Where JMD Solutions and Beyond provides software or SaaS products on a subscription basis, users must keep account credentials secure. Nothing in these Terms grants ownership of JMD Solutions and Beyond software unless expressly agreed in writing.
              </p>
            </div>
          </section>

          {/* Section 17 & 18: Confidentiality & Data Protection */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">17.</span> Confidentiality
              </h2>
              <p className="text-sm text-zinc-400">
                Each party agrees to use reasonable measures to protect confidential information and use it only for legitimate business purposes. Where a separate NDA exists, it shall govern confidentiality matters.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">18.</span> Data Protection and Privacy
              </h2>
              <p className="text-sm text-zinc-400">
                Personal data is processed in accordance with our Privacy Policy and Indian data protection laws, including the <strong className="text-white">Digital Personal Data Protection Act, 2023</strong> and the <strong className="text-white">Digital Personal Data Protection Rules, 2025</strong>.
              </p>
            </div>
          </section>

          {/* Section 19 to 25: Operational Policies & Disclaimers */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">19 &amp; 20.</span> Cookies, Tracking &amp; Security
              </h2>
              <p className="text-sm text-zinc-400">
                We take reasonable measures to protect our systems. Users acknowledge that internet transmissions involve inherent risks and are responsible for safeguarding their login credentials.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">21.</span> Availability and Service Interruptions
              </h2>
              <p className="text-sm text-zinc-400">
                We aim to maintain reasonable availability but do not guarantee uninterrupted operation due to maintenance, hosting, or third-party factors beyond our control.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">22.</span> Artificial Intelligence Disclaimer
              </h2>
              <p className="text-sm text-zinc-400">
                Certain products may utilize AI technologies. AI-generated results may contain inaccuracies and should not be treated as professional, legal, medical, or financial advice. Users must independently review AI outputs.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">23 &amp; 24.</span> Marketing &amp; Professional Advice Disclaimers
              </h2>
              <p className="text-sm text-zinc-400">
                We do not guarantee specific marketing outcomes (revenue, lead counts, ranking). Information on our website is for general informational purposes only and does not constitute regulated legal, tax, or financial advice.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">25.</span> Intellectual Property Infringement
              </h2>
              <p className="text-sm text-zinc-400">
                If you believe material on our website infringes your IP rights, contact us at <a href="mailto:contact@corauxis.com" className="text-[#FD3A25] hover:underline">contact@corauxis.com</a> with supporting evidence for prompt investigation.
              </p>
            </div>
          </section>

          {/* Section 26, 27 & 28: Liability & Indemnification */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">26.</span> Disclaimer of Warranties
              </h2>
              <p className="text-sm text-zinc-400">
                The website and content are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis to the maximum extent permitted by applicable law.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">27.</span> Limitation of Liability
              </h2>
              <p className="text-sm text-zinc-400">
                To the maximum extent permitted by law, JMD Solutions and Beyond shall not be liable for indirect, incidental, or consequential damages. For paid services, our aggregate liability shall not exceed the fees actually paid to JMD Solutions and Beyond for the specific services giving rise to the claim.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">28.</span> Indemnification
              </h2>
              <p className="text-sm text-zinc-400">
                You agree to indemnify and hold harmless JMD Solutions and Beyond and its directors, officers, and employees from claims arising from your unlawful use of the website, breach of these Terms, or violation of third-party rights.
              </p>
            </div>
          </section>

          {/* Section 29 to 32: Termination, Force Majeure, Third-Party Links, Changes */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">29.</span> Suspension and Termination
              </h2>
              <p className="text-sm text-zinc-400">
                We may suspend or terminate access where Terms are breached, payments are unpaid, or unlawful activity is suspected. Surviving clauses (IP, confidentiality, liability, dispute resolution) remain active.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">30.</span> Force Majeure
              </h2>
              <p className="text-sm text-zinc-400">
                JMD Solutions and Beyond shall not be responsible for failure or delays caused by events beyond reasonable control (natural disasters, war, pandemic, government actions, power/internet grid failures).
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">31 &amp; 32.</span> Links to Third Parties &amp; Changes to Terms
              </h2>
              <p className="text-sm text-zinc-400">
                Third-party links are provided for convenience. We may update these Terms periodically, and continued website use constitutes acceptance of revised terms.
              </p>
            </div>
          </section>

          {/* Section 33 & 34: Governing Law & Dispute Resolution */}
          <section className="bg-gradient-to-br from-zinc-900/90 to-black border border-[#FD3A25]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(253,58,37,0.08)]">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#FD3A25]">33 &amp; 34.</span> Governing Law &amp; Dispute Resolution
            </h2>
            <p className="text-sm text-zinc-300 mb-3">
              These Terms shall be governed by and interpreted in accordance with the laws of India.
            </p>
            <p className="text-sm text-zinc-400 mb-3">
              Subject to applicable mandatory legal requirements, disputes arising from these Terms or use of the website shall be subject to the jurisdiction of the competent courts in <strong className="text-white">Pune, Maharashtra, India</strong>.
            </p>
            <p className="text-xs text-zinc-500">
              The parties shall first attempt to resolve any dispute through good-faith discussions. Where a separate written agreement contains an arbitration clause, that agreement shall govern.
            </p>
          </section>

          {/* Section 35 to 40: General Legal Provisions */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-4 text-xs sm:text-sm text-zinc-400">
            <p><strong className="text-white">35. Severability:</strong> If any provision is found unenforceable, remaining provisions continue in full force.</p>
            <p><strong className="text-white">36. Waiver:</strong> Failure to enforce any provision does not waive our right to enforce it later.</p>
            <p><strong className="text-white">37. Entire Agreement:</strong> These Terms and any specific signed agreement constitute the entire understanding between parties.</p>
            <p><strong className="text-white">38. Assignment:</strong> You may not assign rights without prior written consent. JMD Solutions and Beyond may assign rights as part of corporate restructuring.</p>
            <p><strong className="text-white">39. No Partnership:</strong> Nothing creates a partnership, agency, or franchise relationship.</p>
            <p><strong className="text-white">40. Electronic Communications:</strong> Communications may be conducted electronically pursuant to the Information Technology Act, 2000.</p>
          </section>

          {/* Section 41: Contact Information */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">41.</span> Contact Information
            </h2>
            <p className="mb-4 text-sm text-zinc-300">
              For questions, notices or concerns regarding these Terms, please contact:
            </p>
            <div className="bg-black/40 border border-zinc-800 rounded-xl p-4 sm:p-5 text-xs sm:text-sm space-y-1.5">
              <p className="font-bold text-white text-base">JMD Solutions and Beyond Private Limited</p>
              <p><strong className="text-zinc-400">Email:</strong> <a href="mailto:contact@corauxis.com" className="text-[#FD3A25] hover:underline">contact@corauxis.com</a></p>
              <p><strong className="text-zinc-400">Registered Office:</strong> 12th floor, One West, Balewadi High St, Baner, Pune, Maharashtra 411045</p>
              <p><strong className="text-zinc-400">Website:</strong> <a href="https://corauxis.com" className="text-[#FD3A25] hover:underline">https://corauxis.com</a></p>
              <p><strong className="text-zinc-400">CIN:</strong> U62013PN2026PTC258758</p>
            </div>
          </section>

        </div>

        {/* Footer Note & Acknowledgement */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            <span className="font-semibold text-zinc-300 block sm:inline">Acknowledgement: </span>
            <span>By accessing or using the JMD Solutions and Beyond website, you acknowledge that you have read, understood, and agreed to these Terms.</span>
          </div>
          <span className="font-mono text-zinc-600">© 2026 JMD Solutions and Beyond Private Limited. All Rights Reserved.</span>
        </div>

      </main>
    </div>
  );
}
