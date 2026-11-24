
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, ArrowUpRight, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact TRIGXUS to discuss fintech, software, AI and technology projects."
};

export default function ContactPage() {
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="container-main">
        <div className="max-w-3xl">
          <span className="section-label">CONTACT TRIGXUS</span>
          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-[#0B1730] md:text-6xl">
            Let's Start a{" "}
            <span className="gradient-text">Conversation.</span>
          </h1>
          <p className="mt-6 leading-8 text-slate-500">
            Tell us what you're building, what challenges you're facing
            and where you want your business to go.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-9 lg:grid-cols-[.75fr_1.25fr]">
          <div className="space-y-5">
            <div className="rounded-2xl bg-[#0B1730] p-8 text-white">
              <h2 className="text-2xl font-bold">Let's connect.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Choose the communication channel that works best for you.
              </p>

              <div className="mt-9 space-y-7">
                <div className="flex gap-4">
                  <Mail className="shrink-0 text-cyan-300" />
                  <div>
                    <p className="text-sm font-bold">Email</p>
                    <p className="mt-2 text-xs text-slate-400">
                      Configure your official email address.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="shrink-0 text-cyan-300" />
                  <div>
                    <p className="text-sm font-bold">Phone</p>
                    <p className="mt-2 text-xs text-slate-400">
                      Configure your official phone number.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageCircle className="shrink-0 text-cyan-300" />
                  <div>
                    <p className="text-sm font-bold">WhatsApp</p>
                    {whatsapp ? (
                      <a
                        href={`https://wa.me/${whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 text-sm text-cyan-300"
                      >
                        Start a conversation <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      <p className="mt-2 text-xs text-slate-400">
                        WhatsApp configuration pending.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <Link href="/book-a-call" className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-4 text-sm font-bold text-white">
                Schedule a Free Call <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
            <h2 className="text-2xl font-bold text-[#0B1730]">
              Tell Us About Your Project
            </h2>
            <p className="mb-8 mt-3 text-sm text-slate-500">
              Complete the form and our team can review your inquiry.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
