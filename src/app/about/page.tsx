
import type { Metadata } from "next";
import Link from "next/link";
import {
  Target, Eye, Lightbulb, ShieldCheck,
  Users, ArrowUpRight, Code2, Rocket
} from "lucide-react";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description: "Discover TRIGXUS, our technology-focused approach, mission and vision."
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We explore practical ideas and emerging technologies to solve meaningful problems."
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "We value responsible engineering, clear communication and dependable solutions."
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "We work closely with clients to understand requirements and align outcomes."
  },
  {
    icon: Rocket,
    title: "Continuous Improvement",
    text: "We believe technology should evolve alongside changing business needs."
  }
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#F8FAFC] py-28">
        <div className="container-main">
          <span className="section-label">ABOUT TRIGXUS</span>
          <h1 className="mt-7 max-w-4xl text-5xl font-extrabold leading-tight text-[#0B1730] md:text-7xl">
            We Turn Technology Into{" "}
            <span className="gradient-text">Business Value.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-500">
            TRIGXUS is a technology and digital solutions company focused
            on fintech, software engineering, AI automation and enterprise
            technology.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="section-label">OUR INTRODUCTION</span>
            <h2 className="mt-6 text-4xl font-extrabold text-[#0B1730]">
              Engineering with a purpose.
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              We focus on helping organizations translate business ideas
              into useful digital products, platforms and technology
              infrastructure.
            </p>
            <p className="mt-5 leading-8 text-slate-500">
              Our work brings together software development, financial
              technology, automation and digital transformation. Every
              engagement starts with understanding the problem before
              selecting the technology.
            </p>
            <Link href="/services/enterprise-business-solutions" className="blue-button mt-8">
              Explore Our Capabilities <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-[#0B1730] p-10 md:p-14">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
            <Code2 size={50} className="relative text-cyan-300" />
            <h3 className="relative mt-9 text-3xl font-bold text-white">
              FROM VISION TO VALUE.
            </h3>
            <p className="relative mt-5 leading-8 text-slate-300">
              A technology-first approach to building, integrating and
              improving digital business systems.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-main grid gap-7 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-9">
            <Target className="text-blue-600" size={32} />
            <h2 className="mt-7 text-2xl font-bold text-[#0B1730]">Our Mission</h2>
            <p className="mt-4 leading-8 text-slate-500">
              To engineer practical, scalable and thoughtful digital
              solutions that help businesses solve problems, improve
              operations and create meaningful value.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-9">
            <Eye className="text-blue-600" size={32} />
            <h2 className="mt-7 text-2xl font-bold text-[#0B1730]">Our Vision</h2>
            <p className="mt-4 leading-8 text-slate-500">
              To contribute to a future where businesses can use
              accessible, intelligent and reliable technology to turn
              ambitious ideas into reality.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <span className="section-label">OUR APPROACH</span>
          <h2 className="mt-6 max-w-2xl text-4xl font-extrabold text-[#0B1730]">
            Understand first. Engineer thoughtfully.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Understand", "Discover the real business challenge."],
              ["02", "Architect", "Define an appropriate technical solution."],
              ["03", "Engineer", "Build and validate the product."],
              ["04", "Evolve", "Support, improve and maintain the solution."]
            ].map(([number, title, text]) => (
              <div key={number} className="border-t-2 border-blue-500 pt-6">
                <span className="font-bold text-blue-600">{number}</span>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-main">
          <span className="section-label">OUR CORE VALUES</span>
          <h2 className="mt-6 text-4xl font-extrabold text-[#0B1730]">
            Principles behind our work.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-slate-200 bg-white p-7">
                <value.icon size={30} className="text-blue-600" />
                <h3 className="mt-6 font-bold">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
