
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Code2, Monitor, Wallet, BrainCircuit } from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore illustrative TRIGXUS technology project concepts and demos."
};

const projects = [
  {
    title: "Digital Brokerage Portal",
    category: "Fintech & Brokerage",
    description: "An illustrative client portal concept with account dashboards, financial summaries and administrative workflows.",
    tech: ["Next.js", "Node.js", "API Integration"],
    icon: Wallet
  },
  {
    title: "Enterprise Management Suite",
    category: "Enterprise Software",
    description: "A sample management platform concept for customer records, business workflows and operational reporting.",
    tech: ["React", "TypeScript", "MySQL"],
    icon: Monitor
  },
  {
    title: "AI Business Assistant",
    category: "AI & Automation",
    description: "A demonstration concept for intelligent business information retrieval and workflow assistance.",
    tech: ["Python", "AI APIs", "Node.js"],
    icon: BrainCircuit
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "SaaS & Cloud",
    description: "A sample analytics dashboard concept illustrating centralized reporting and multi-tenant product interfaces.",
    tech: ["Next.js", "Cloud", "Charts"],
    icon: Code2
  }
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-[#F8FAFC] py-28">
        <div className="container-main">
          <span className="section-label">OUR WORK</span>
          <h1 className="mt-6 max-w-3xl text-5xl font-extrabold leading-tight text-[#0B1730] md:text-7xl">
            Ideas. Engineering.{" "}
            <span className="gradient-text">Digital Experiences.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-500">
            Explore illustrative technology concepts that demonstrate
            the types of digital experiences and systems TRIGXUS can build.
          </p>
          <p className="mt-5 inline-flex rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-xs font-semibold text-amber-800">
            Demonstration concepts only — not verified client projects.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="flex min-h-[245px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B1730] to-[#123FBA]">
                <div className="relative flex h-36 w-36 items-center justify-center rounded-[35px] border border-white/20 bg-white/10 text-white backdrop-blur-xl">
                  <project.icon size={64} strokeWidth={1.2} />
                  <span className="absolute -bottom-4 -right-8 rounded-full border border-white/20 bg-[#087CF0] px-4 py-2 text-xs font-bold">
                    DEMO 0{index + 1}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {project.category}
                </span>
                <h2 className="mt-3 text-2xl font-bold text-[#0B1730]">
                  {project.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-500">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-md bg-slate-100 px-3 py-2 text-xs font-semibold text-slate-600">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link href="/book-a-call" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600">
                  Discuss a Similar Project <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
