
export const metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using the TRIGXUS website."
};

export default function TermsPage() {
  return (
    <section className="container-main max-w-4xl py-20">
      <span className="section-label">LEGAL</span>
      <h1 className="mt-5 text-5xl font-extrabold">Terms & Conditions</h1>

      <div className="mt-12 space-y-9 text-sm leading-8 text-slate-600">
        <section>
          <h2 className="text-xl font-bold text-[#0B1730]">1. Website Use</h2>
          <p className="mt-3">By accessing this website, you agree to use it lawfully and not interfere with its operation or security.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#0B1730]">2. Services</h2>
          <p className="mt-3">Information about services is provided for general informational purposes. Specific project scope, delivery, fees and responsibilities will be agreed separately in writing.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#0B1730]">3. Intellectual Property</h2>
          <p className="mt-3">Website content, branding and original materials are protected by applicable intellectual property laws unless otherwise stated.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#0B1730]">4. Third-Party Services</h2>
          <p className="mt-3">Third-party integrations and services are subject to their own availability, terms, permissions and licensing requirements.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#0B1730]">5. No Guarantee</h2>
          <p className="mt-3">The website is provided on an as-available basis. We do not guarantee uninterrupted access or that every displayed feature will always be available.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#0B1730]">6. Changes</h2>
          <p className="mt-3">We may update these terms as the website and our services evolve. Continued use after updates constitutes acceptance where applicable.</p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[#0B1730]">7. Contact</h2>
          <p className="mt-3">For questions about these terms, contact us through the website contact page.</p>
        </section>
      </div>
    </section>
  );
}
