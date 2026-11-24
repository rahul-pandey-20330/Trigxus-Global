
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-4 py-20">
      <div className="container-main relative overflow-hidden rounded-3xl bg-[#0B1730] px-7 py-16 text-center md:px-16 md:py-24">
        <div className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-[90px]" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-cyan-300">
            Let's build something meaningful
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Have an Idea? Let's Turn It Into Reality.
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-300">
            Tell us about your vision. Let's explore the right technology
            and build a solution around your business goals.
          </p>

          <Link href="/book-a-call" className="blue-button mt-9">
            Book Your Free Consultation
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
