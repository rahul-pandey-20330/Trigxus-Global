
"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const services = [
  "Forex & Brokerage Technology",
  "Trading & Financial Technology",
  "AI & Automation",
  "Custom Software & CRM",
  "Web & Mobile Applications",
  "SaaS & Cloud Solutions",
  "EdTech & Digital Learning",
  "Enterprise & Business Solutions",
  "Other"
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setStatus("success");
      setMessage("Thank you! Your inquiry has been received.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold">
            Full Name *
          </label>
          <input id="name" name="name" required maxLength={100}
            autoComplete="name" placeholder="Your full name" className={inputClass} />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold">
            Email Address *
          </label>
          <input id="email" name="email" type="email" required maxLength={254}
            autoComplete="email" placeholder="you@company.com" className={inputClass} />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" maxLength={25}
            autoComplete="tel" placeholder="+91 XXXXX XXXXX" className={inputClass} />
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-semibold">
            Company Name *
          </label>
          <input id="company" name="company" required maxLength={150}
            placeholder="Your company" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="website" className="mb-2 block text-sm font-semibold">
          Website / Instagram
        </label>
        <input id="website" name="website" maxLength={300}
          placeholder="https://example.com" className={inputClass} />
      </div>

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-semibold">
          Which Service Are You Looking For? *
        </label>
        <select id="service" name="service" required defaultValue=""
          className={inputClass}>
          <option value="" disabled>Select a service</option>
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="budget" className="mb-2 block text-sm font-semibold">
          Estimated Project Budget
        </label>
        <select id="budget" name="budget" defaultValue="" className={inputClass}>
          <option value="">Select your budget</option>
          <option>Under ₹50,000</option>
          <option>₹50,000 – ₹2,00,000</option>
          <option>₹2,00,000 – ₹5,00,000</option>
          <option>₹5,00,000 – ₹10,00,000</option>
          <option>Above ₹10,00,000</option>
          <option>To be discussed</option>
        </select>
      </div>

      <div>
        <label htmlFor="description" className="mb-2 block text-sm font-semibold">
          Tell Us About Your Business and Goals *
        </label>
        <textarea id="description" name="description" required
          minLength={10} maxLength={5000} rows={5}
          placeholder="Describe your idea, business needs and project goals..."
          className={inputClass + " resize-y"} />
      </div>

      {/* Honeypot: must remain hidden from normal users */}
      <div aria-hidden="true" className="absolute -left-[10000px]">
        <label htmlFor="website_check">Leave this field empty</label>
        <input id="website_check" name="website_check" tabIndex={-1}
          autoComplete="off" />
      </div>

      {status !== "idle" && (
        <div role="status" className={`flex items-center gap-3 rounded-lg p-4 text-sm ${
          status === "success"
            ? "bg-emerald-50 text-emerald-700"
            : "bg-red-50 text-red-700"
        }`}>
          {status === "success"
            ? <CheckCircle2 size={20} />
            : <AlertCircle size={20} />}
          {message}
        </div>
      )}

      <button type="submit" disabled={loading}
        className="blue-button w-full disabled:cursor-not-allowed disabled:opacity-60">
        {loading ? "Sending..." : "Send Your Inquiry"}
        <Send size={17} />
      </button>

      <p className="text-center text-xs leading-6 text-slate-400">
        By submitting, you agree to our Privacy Policy and consent
        to being contacted about your inquiry.
      </p>
    </form>
  );
}
