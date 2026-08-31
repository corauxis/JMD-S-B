import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Building, Globe, Scale } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | CorAuxis Private Limited",
  description: "Official Privacy Policy of CorAuxis Private Limited explaining data collection, usage, protection, and rights under applicable Indian laws including DPDP Act 2023.",
};

export default function PrivacyPolicyPage() {
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
              alt="CorAuxis"
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
            <ShieldCheck className="w-3.5 h-3.5 text-[#FD3A25]" />
            <span>Data Privacy &amp; Protection</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-400 font-mono">
            <span className="text-[#FD3A25] font-semibold">Last Updated: 31 August 2026</span>
            <span>•</span>
            <span>CorAuxis Private Limited</span>
          </div>
          <p className="mt-6 text-zinc-300 text-sm sm:text-base leading-relaxed">
            This Privacy Policy (&ldquo;Privacy Policy&rdquo;) explains how CorAuxis Private Limited (&ldquo;CorAuxis&rdquo;, &ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) collects, uses, stores, processes and protects information relating to individuals who visit our website, contact us, use our products or services, or otherwise interact with us.
          </p>
          <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
            We respect your privacy and are committed to handling personal data responsibly and in accordance with applicable laws and regulations. By accessing or using our website or services, you acknowledge that you have read and understood this Privacy Policy.
          </p>
        </div>

        {/* Legal Sections */}
        <div className="space-y-8 sm:space-y-10 text-zinc-300 text-sm sm:text-base leading-relaxed">
          
          {/* Section 1 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">1.</span> About Us
            </h2>
            <p className="mb-4">
              CorAuxis Private Limited is a technology and digital services company providing technology, software, digital marketing, automation, artificial intelligence, web and application development and related professional services.
            </p>
            <p className="mb-5 text-zinc-400">
              For the purposes of applicable data protection laws, CorAuxis may act as the entity responsible for processing personal data collected through its website, products and services, depending upon the nature and context of the processing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 bg-black/40 border border-zinc-800 rounded-xl p-4 sm:p-5 text-xs sm:text-sm">
              <div>
                <span className="text-zinc-500 font-mono block text-xs uppercase">Company Name</span>
                <span className="font-semibold text-white">CorAuxis Private Limited</span>
              </div>
              <div>
                <span className="text-zinc-500 font-mono block text-xs uppercase">CIN</span>
                <span className="font-semibold text-white">U62013PN2026PTC258758</span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-zinc-500 font-mono block text-xs uppercase">Registered Office</span>
                <span className="font-semibold text-white">12th floor, One West, Balewadi High St, Baner, Pune, Maharashtra 411045</span>
              </div>
              <div>
                <span className="text-zinc-500 font-mono block text-xs uppercase">Official Email</span>
                <a href="mailto:contact@corauxis.com" className="font-semibold text-[#FD3A25] hover:underline">contact@corauxis.com</a>
              </div>
              <div>
                <span className="text-zinc-500 font-mono block text-xs uppercase">Website</span>
                <a href="https://corauxis.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#FD3A25] hover:underline">https://corauxis.com</a>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">2.</span> Scope of This Privacy Policy
            </h2>
            <p className="mb-3">This Privacy Policy applies to personal data collected through:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-400 pl-2">
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Our website</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Contact and enquiry forms</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Email communications</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Online meetings and consultations</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Product and software platforms</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Client portals</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Marketing campaigns</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Recruitment or career forms, where applicable</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Customer support interactions</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Events and business communications</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Other digital or offline interactions with CorAuxis</li>
            </ul>
            <p className="mt-4 text-xs text-zinc-500 italic">
              This Privacy Policy does not necessarily apply to third-party websites, applications or services that are linked from our website.
            </p>
          </section>

          {/* Section 3 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">3.</span> What Information We Collect
            </h2>
            <p className="mb-4">
              Depending on how you interact with CorAuxis, we may collect different categories of information.
            </p>
            <h3 className="text-sm sm:text-base font-bold text-white mb-2 text-[#FD3A25]/90">
              3.1 Information You Provide Directly
            </h3>
            <p className="mb-3">You may provide information such as:</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-400 pl-2 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Full name</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Company or organisation name</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Job title or designation</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Email address</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Telephone/mobile number</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Business address</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Billing information</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Website or social media information</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Project requirements</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Messages and enquiries</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Information submitted through forms</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Information provided during consultations</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Information contained in communications with us</li>
            </ul>
            <p className="text-xs text-zinc-400 font-medium">
              We only request information that is reasonably necessary for the relevant purpose.
            </p>
          </section>

          {/* Section 4 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">4.</span> Information Collected Automatically
            </h2>
            <p className="mb-3">
              When you visit our website or use certain digital services, certain technical information may be collected automatically. This may include:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-400 pl-2 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> IP address</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Browser type</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Device type</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Operating system</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Language preference</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Approximate location derived from IP</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Pages visited</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Time spent on pages</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Referring website</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Website interaction data</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Date and time of access</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Error and diagnostic information</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Device identifiers, where applicable</li>
            </ul>
            <p className="text-xs text-zinc-400">
              This information may be collected through cookies, analytics tools, server logs and similar technologies.
            </p>
          </section>

          {/* Section 5 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">5.</span> Cookies and Similar Technologies
            </h2>
            <p className="mb-3">
              We may use cookies and similar technologies to operate, secure and improve our website. Cookies may be used for purposes such as:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-400 pl-2 mb-4">
              <li>Website functionality &amp; remembering preferences</li>
              <li>Analytics &amp; understanding website usage</li>
              <li>Improving website performance</li>
              <li>Security &amp; fraud prevention</li>
              <li>Marketing and advertising, where applicable</li>
            </ul>
            <p className="text-sm text-zinc-400 mb-2">
              Some cookies may be provided by third-party service providers. You may be able to control or delete cookies through your browser settings. Certain website features may not function correctly if necessary cookies are disabled.
            </p>
            <p className="text-xs text-zinc-500 italic">
              Where legally required, we will obtain appropriate consent before using non-essential cookies or similar technologies.
            </p>
          </section>

          {/* Section 6 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">6.</span> How We Use Personal Data
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-white text-sm uppercase tracking-wider text-[#FD3A25]">Business and Service Purposes</h3>
                <p className="text-zinc-400 text-sm mt-1">
                  Responding to enquiries; providing quotations and proposals; delivering products and services; managing client relationships; providing customer support; managing projects; processing payments and invoices; communicating with clients; providing software or SaaS access; maintaining accounts; improving our services.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm uppercase tracking-wider text-[#FD3A25]">Website and Technology Purposes</h3>
                <p className="text-zinc-400 text-sm mt-1">
                  Operating our website; maintaining security; preventing fraud or abuse; troubleshooting technical issues; analysing website performance; improving user experience; developing new products and services.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm uppercase tracking-wider text-[#FD3A25]">Marketing Purposes</h3>
                <p className="text-zinc-400 text-sm mt-1">
                  Where permitted by applicable law, we may use contact information to send company updates, share service information, send promotional communications, share relevant offers, and conduct business development activities. You may opt out of marketing communications at any time.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-white text-sm uppercase tracking-wider text-[#FD3A25]">Legal and Compliance Purposes</h3>
                <p className="text-zinc-400 text-sm mt-1">
                  Complying with applicable laws; responding to lawful requests; establishing, exercising or defending legal claims; detecting and preventing fraud; protecting our rights, property, users and other persons; meeting regulatory or contractual obligations.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">7.</span> Legal Basis / Permitted Grounds for Processing
            </h2>
            <p className="mb-3">
              Depending on the applicable legal framework and the nature of the processing, we may process personal data where:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-400 pl-2 mb-3">
              <li>You have provided valid consent;</li>
              <li>Processing is necessary to provide a service requested by you;</li>
              <li>Processing is necessary to perform or take steps relating to a contract;</li>
              <li>Processing is necessary to comply with a legal obligation;</li>
              <li>Processing is necessary for legitimate business purposes where legally permitted;</li>
              <li>Processing is necessary to protect rights, security or prevent unlawful activity;</li>
              <li>Processing is otherwise permitted under applicable law.</li>
            </ul>
            <p className="text-xs text-zinc-500 italic">
              Where consent is relied upon, you may withdraw consent subject to applicable legal and operational limitations.
            </p>
          </section>

          {/* Section 8 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">8.</span> Sharing of Personal Data
            </h2>
            <p className="mb-3">
              <strong className="text-white">We do not sell your personal data as a business practice.</strong>
            </p>
            <p className="mb-3 text-zinc-400">
              We may share information with selected third parties where reasonably necessary for legitimate business or service purposes, including:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-400 pl-2 mb-4">
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Cloud hosting providers</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Software service providers</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> CRM providers</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Payment processors</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Email service providers</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Analytics providers</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Advertising platforms</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Communication &amp; messaging providers</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> AI and automation providers</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> IT and cybersecurity providers</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Professional, legal &amp; accounting advisers</li>
              <li className="flex items-start gap-2"><span className="text-[#FD3A25]">✦</span> Government authorities where legally required</li>
            </ul>
            <p className="text-xs text-zinc-500">
              We expect service providers handling personal data on our behalf to implement appropriate safeguards.
            </p>
          </section>

          {/* Section 9 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">9.</span> Third-Party Services
            </h2>
            <p className="mb-3">
              Our website or services may integrate with third-party platforms (e.g., Google services, Meta services, WhatsApp, CRM platforms, payment gateways, cloud infrastructure, AI providers).
            </p>
            <p className="text-sm text-zinc-400">
              Third-party services are governed by their own privacy policies and terms. CorAuxis is not responsible for privacy practices independently carried out by third-party platforms. Users should review the privacy policies of third-party services they interact with.
            </p>
          </section>

          {/* Section 10 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">10.</span> AI and Automated Technologies
            </h2>
            <p className="mb-3">
              Certain CorAuxis products and services may use artificial intelligence, machine learning, automation or third-party AI technologies to generate content, provide automated responses, analyse information, automate workflows, provide recommendations, improve software functionality, or perform business analysis.
            </p>
            <p className="text-sm text-zinc-400 mb-2">
              Users should not submit highly sensitive or confidential personal information to AI-enabled services unless the relevant service expressly permits such use.
            </p>
            <p className="text-xs text-zinc-500">
              Where AI services are provided to business clients, the applicable client agreement may contain additional provisions concerning data processing, security, confidentiality and permitted use.
            </p>
          </section>

          {/* Section 11 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">11.</span> Client Data
            </h2>
            <p className="mb-3">
              Where CorAuxis processes personal data provided by a client as part of a contracted service, CorAuxis processes such data according to the client&apos;s documented instructions and the applicable agreement.
            </p>
            <p className="text-sm text-zinc-400">
              In such circumstances, the client remains responsible for determining the purpose of processing, lawful basis, notices, retention period, and individual rights. Where required, CorAuxis may enter into appropriate data-processing or contractual arrangements with the client.
            </p>
          </section>

          {/* Section 12 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">12.</span> Data Security
            </h2>
            <p className="mb-3">
              We take reasonable technical and organisational measures designed to protect personal data from unauthorised access, disclosure, accidental loss, destruction, alteration, misuse, or unauthorised processing.
            </p>
            <p className="text-sm text-zinc-400 mb-2">
              Security measures may include access controls, authentication mechanisms, encryption where appropriate, monitoring, backups and other safeguards appropriate to the nature of the information.
            </p>
            <p className="text-xs text-zinc-500 italic">
              However, no electronic system or internet transmission can be guaranteed to be completely secure. Accordingly, while we take reasonable precautions, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 13 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">13.</span> Data Retention
            </h2>
            <p className="mb-3">
              We retain personal data only for as long as reasonably necessary for the purposes for which it was collected, unless a longer retention period is required or permitted by applicable law (such as accounting, tax, regulatory obligations, or dispute resolution).
            </p>
            <p className="text-sm text-zinc-400">
              When personal data is no longer required, we securely delete, anonymise or otherwise dispose of it in accordance with applicable requirements.
            </p>
          </section>

          {/* Section 14 & 15 */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">14 &amp; 15.</span> Your Rights &amp; How to Exercise Them
            </h2>
            <p className="mb-3">
              Subject to applicable law, individuals may have rights to obtain information about processing, request access, request correction of inaccurate data, request deletion where applicable, withdraw consent, raise a grievance, or exercise other statutory rights.
            </p>
            <div className="bg-black/50 border border-zinc-800 p-4 sm:p-5 rounded-xl my-4">
              <p className="text-xs sm:text-sm text-zinc-300 font-semibold mb-1">To exercise an applicable privacy right, contact us at:</p>
              <p className="text-sm text-[#FD3A25] font-mono font-bold">Privacy Email: contact@corauxis.com</p>
              <p className="text-xs text-zinc-500 mt-2">
                For security purposes, we may verify your identity before fulfilling certain requests. We handle valid requests within the timeline required by applicable law.
              </p>
            </div>
          </section>

          {/* Section 16 to 22 (Standard Protections) */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm space-y-6">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">16.</span> Withdrawal of Consent
              </h2>
              <p className="text-sm text-zinc-400">
                Where we process personal data based on consent, you may withdraw your consent by contacting us. Withdrawal will not affect prior lawful processing or services requiring necessary data.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">17.</span> Marketing Communications
              </h2>
              <p className="text-sm text-zinc-400">
                You may unsubscribe from marketing emails at any time using the unsubscribe link provided in the communication or by contacting us.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">18.</span> Children&apos;s Privacy
              </h2>
              <p className="text-sm text-zinc-400">
                Our website and general business services are not intended to knowingly collect personal data from children without appropriate authorisation. Contact us immediately if you believe a child has provided data improperly.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">19.</span> International Data Transfers
              </h2>
              <p className="text-sm text-zinc-400">
                Some service providers used by CorAuxis may process information outside India. Where transfers occur, we implement safeguards required by applicable law and contractual standards.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">20.</span> Data Breach and Security Incidents
              </h2>
              <p className="text-sm text-zinc-400">
                If CorAuxis becomes aware of a personal data breach affecting personal data under our control, we will assess the incident, take corrective steps, and notify affected parties and authorities where legally required.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">21.</span> Links to Third-Party Websites
              </h2>
              <p className="text-sm text-zinc-400">
                Our website may contain links to third-party websites. CorAuxis is not responsible for the privacy practices, content, or security of external websites.
              </p>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-[#FD3A25]">22.</span> Changes to This Privacy Policy
              </h2>
              <p className="text-sm text-zinc-400">
                We may update this Privacy Policy from time to time. The updated version will be published on this page with a revised &ldquo;Last Updated&rdquo; date.
              </p>
            </div>
          </section>

          {/* Section 23: Grievance Redressal */}
          <section className="bg-gradient-to-br from-zinc-900/90 to-black border border-[#FD3A25]/30 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(253,58,37,0.08)]">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
              <span className="text-[#FD3A25]">23.</span> Grievance Redressal
            </h2>
            <p className="text-sm text-zinc-300 mb-4">
              If you have a concern regarding the processing of your personal data or believe that your privacy rights have not been appropriately addressed, you may contact our designated privacy/grievance contact:
            </p>
            <div className="bg-black/60 border border-zinc-800 rounded-xl p-4 sm:p-5 text-sm space-y-2">
              <p><strong className="text-white">Grievance / Privacy Contact:</strong> Jayesh Deshmukh, Director</p>
              <p><strong className="text-white">Email:</strong> <a href="mailto:contact@corauxis.com" className="text-[#FD3A25] hover:underline">contact@corauxis.com</a></p>
              <p><strong className="text-white">Address:</strong> 12th floor, One West, Balewadi High St, Baner, Pune, Maharashtra 411045</p>
            </div>
          </section>

          {/* Section 24: Applicable Law */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">24.</span> Applicable Law
            </h2>
            <p className="mb-3 text-sm text-zinc-300">
              This Privacy Policy shall be governed by the laws applicable in India. The processing of personal data by CorAuxis will be subject to applicable Indian data protection and privacy laws and regulations, as amended or replaced from time to time.
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              This includes, where applicable, the <strong className="text-white">Digital Personal Data Protection Act, 2023</strong>, the <strong className="text-white">Digital Personal Data Protection Rules, 2025</strong>, the <strong className="text-white">Information Technology Act, 2000</strong>, applicable rules and regulations, and other applicable laws.
            </p>
          </section>

          {/* Section 25: Contact Us */}
          <section className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h2 className="text-lg sm:text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#FD3A25]">25.</span> Contact Us
            </h2>
            <p className="mb-4 text-sm text-zinc-300">
              If you have any questions about this Privacy Policy or how CorAuxis handles personal data, please contact us:
            </p>
            <div className="bg-black/40 border border-zinc-800 rounded-xl p-4 sm:p-5 text-xs sm:text-sm space-y-1.5">
              <p className="font-bold text-white text-base">CorAuxis Private Limited</p>
              <p><strong className="text-zinc-400">Privacy / Legal Email:</strong> <a href="mailto:contact@corauxis.com" className="text-[#FD3A25] hover:underline">contact@corauxis.com</a></p>
              <p><strong className="text-zinc-400">Registered Office:</strong> 12th floor, One West, Balewadi High St, Baner, Pune, Maharashtra 411045</p>
              <p><strong className="text-zinc-400">Website:</strong> <a href="https://corauxis.com" className="text-[#FD3A25] hover:underline">https://corauxis.com</a></p>
              <p><strong className="text-zinc-400">CIN:</strong> U62013PN2026PTC258758</p>
            </div>
          </section>

        </div>

        {/* Footer Note */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            <span className="font-semibold text-zinc-300 block sm:inline">Your Privacy Matters. </span>
            <span>CorAuxis is committed to handling personal data responsibly, transparently and securely.</span>
          </div>
          <span className="font-mono text-zinc-600">© 2026 CorAuxis Private Limited. All Rights Reserved.</span>
        </div>

      </main>
    </div>
  );
}
