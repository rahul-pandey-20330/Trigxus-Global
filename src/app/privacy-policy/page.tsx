
export const metadata = {
  title: "Privacy Policy",
  description: "TRIGXUS privacy policy."
};

export default function PrivacyPage() {
  return (
    <section className="container-main max-w-4xl py-20">
      <span className="section-label">LEGAL</span>
      <h1 className="mt-5 text-5xl font-extrabold">Privacy Policy</h1>
      <p className="mt-4 text-sm text-slate-400">
        Last updated: November 2026
      </p>

      <div className="mt-12 space-y-9 text-sm leading-8 text-slate-600">
        <section>
          <h2 className="text-xl font-bold text-[#0B1730]">1. Introduction</h2>
          <p className="mt-3">TRIGXUS respects your privacy. This policy explains how information submitted through our website may be collected and processed.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#0B1730]">2. Information We Collect</h2>
          <p className="mt-3">Information may include your name, email, phone number, company details, project requirements and booking information that you voluntarily provide.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#0B1730]">3. How We Use Information</h2>
          <p className="mt-3">We may use submitted information to respond to inquiries, discuss projects, arrange consultations, provide requested services and improve website operations.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#0B1730]">4. Third-Party Services</h2>
          <p className="mt-3">Our website may use third-party services such as Cal.com, Resend, hosting providers and analytics tools. Their respective privacy policies and terms also apply.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#0B1730]">5. Data Security</h2>
          <p className="mt-3">We use reasonable technical and organizational safeguards. However, no internet transmission or storage system can be guaranteed completely secure.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#0B1730]">6. Your Rights</h2>
          <p className="mt-3">You may contact us to request access, correction or deletion of personal information, subject to applicable legal obligations.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#0B1730]">7. Contact</h2>
          <p className="mt-3">For privacy-related questions, use the contact page to reach TRIGXUS.</p>
        </section>
      </div>
    </section>
  );
}
