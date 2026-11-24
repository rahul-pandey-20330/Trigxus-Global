
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, ArrowDownRight,
  ShieldCheck, Layers3, Workflow, Headphones,
  Rocket, Target, Lightbulb, Code2,
  GraduationCap, ShoppingBag, Building2,
  Wallet, Globe, Sparkles, Network
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTA from "@/components/CTA";
import { services, industries } from "@/lib/data";

const reasons = [
  {
    icon: Target,
    title: "Business-Focused Technology",
    text: "Solutions designed around your actual business objectives and operational needs."
  },
  {
    icon: Layers3,
    title: "Custom-Built Solutions",
    text: "Purpose-built platforms rather than one-size-fits-all software."
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    text: "Technology foundations designed to accommodate evolving requirements."
  },
  {
    icon: Code2,
    title: "Modern Development",
    text: "Modern engineering practices, clean architecture and maintainable code."
  },
  {
    icon: Headphones,
    title: "Technical Support",
    text: "Continued technical assistance and maintenance throughout the product lifecycle."
  },
  {
    icon: ShieldCheck,
    title: "Long-Term Partnership",
    text: "A collaborative approach focused on sustainable technology development."
  }
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "Understand your business, challenges, users and project objectives."
  },
  {
    number: "02",
    title: "Plan",
    text: "Define the solution architecture, features, technology and roadmap."
  },
  {
    number: "03",
    title: "Develop",
    text: "Design, engineer, integrate and test your digital solution."
  },
  {
    number: "04",
    title: "Launch & Support",
    text: "Deploy your solution and provide ongoing technical assistance."
  }
];

const industryIcons = [
  Wallet, Globe, GraduationCap, Building2, ShoppingBag, Network
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 hero-glow opacity-80" />
        <div className="absolute inset-0 soft-grid opacity-[0.24]" />

        <div className="container-main relative grid min-h-[660px] items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-xs font-bold tracking-wide text-slate-600">
                TECHNOLOGY · INNOVATION · GROWTH
              </span>
            </div>

            <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.12] text-[#0B1730] md:text-6xl xl:text-[68px]">
              Engineering Tomorrow's{" "}
              <span className="gradient-text">Digital Business.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-500 md:text-lg">
              From Vision to Value. We build powerful fintech platforms,
              intelligent automation and scalable digital solutions
              that help businesses grow.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/#services" className="blue-button">
                Explore Our Services <ArrowRight size={17} />
              </Link>
              <Link href="/book-a-call" className="outline-button">
                Book a Free Call <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-4 border-t border-slate-200 pt-7">
              <div className="flex -space-x-2">
                {["F", "S", "A"].map((letter) => (
                  <div key={letter} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-50 text-xs font-bold text-blue-700">
                    {letter}
                  </div>
                ))}
              </div>
              <p className="text-xs leading-5 text-slate-500">
                Fintech. Software. AI.
                <br />
                <strong className="text-[#0B1730]">Technology built around your vision.</strong>
              </p>
            </div>
          </motion.div>

          {/* ABSTRACT TECHNOLOGY VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto flex min-h-[440px] w-full max-w-[530px] items-center justify-center"
          >
            <div className="absolute h-[390px] w-[390px] rounded-full border border-blue-100" />
            <div className="absolute h-[310px] w-[310px] rounded-full border border-blue-200" />
            <div className="absolute h-[225px] w-[225px] rounded-full bg-blue-50 blur-xl" />

            <div className="relative z-10 flex h-44 w-44 items-center justify-center rounded-[40px] border border-white bg-gradient-to-br from-[#087CF0] to-[#123FBA] shadow-[0_30px_80px_#087cf044]">
              <div className="text-center text-white">
                <Network size={54} strokeWidth={1.3} className="mx-auto" />
                <p className="mt-3 text-xs font-bold tracking-[.2em]">TRIGXUS</p>
              </div>
            </div>

            <div className="absolute right-4 top-10 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                  <ArrowUpRight size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0B1730]">Business Growth</p>
                  <p className="text-[10px] text-slate-400">Built through technology</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 left-0 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <BrainCircuitIcon />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0B1730]">Intelligent Systems</p>
                  <p className="text-[10px] text-slate-400">AI & Automation</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-2 right-10 rounded-2xl border border-slate-100 bg-white p-3 shadow-lg">
              <Code2 className="text-blue-600" size={24} />
            </div>

            <div className="absolute left-12 top-8 rounded-xl border border-slate-100 bg-white p-3 shadow-lg">
              <Globe className="text-cyan-500" size={22} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-main grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="section-label">WHO WE ARE</span>
            <h2 className="mt-6 text-4xl font-extrabold leading-tight text-[#0B1730] md:text-5xl">
              Technology That Moves Businesses Forward.
            </h2>
            <p className="mt-6 leading-8 text-slate-500">
              TRIGXUS helps businesses transform ideas into powerful
              digital solutions through innovative technology,
              intelligent automation and custom software engineering.
            </p>
            <p className="mt-4 leading-8 text-slate-500">
              We approach every project with a focus on business needs,
              practical engineering and long-term scalability.
            </p>
            <Link href="/about" className="blue-button mt-8">
              Discover TRIGXUS <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Lightbulb, title: "Innovation", text: "Ideas into solutions" },
              { icon: Code2, title: "Engineering", text: "Technology with purpose" },
              { icon: Workflow, title: "Automation", text: "Smarter workflows" },
              { icon: Rocket, title: "Scalability", text: "Built for what comes next" }
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <item.icon size={28} className="text-blue-600" />
                <h3 className="mt-7 font-bold text-[#0B1730]">{item.title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            label="OUR SERVICES"
            title="Technology Solutions Built Around Your Business."
            description="From financial technology to enterprise software, explore the capabilities that help transform business requirements into digital products."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="section-padding bg-[#F8FAFC]">
        <div className="container-main">
          <SectionHeading
            label="INDUSTRIES"
            title="Technology for Different Business Environments."
            description="We adapt our technology approach to the requirements, workflows and challenges of different industries."
            center
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => {
              const Icon = industryIcons[index];
              return (
                <div key={industry} className="group flex items-center gap-5 rounded-xl border border-slate-200 bg-white p-6 transition hover:border-blue-200 hover:shadow-lg">
                  <div className="rounded-xl bg-blue-50 p-4 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={25} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-[#0B1730]">{industry}</h3>
                    <p className="mt-1 text-xs text-slate-400">Explore digital solutions</p>
                  </div>
                  <ArrowUpRight size={18} className="text-slate-300 transition group-hover:text-blue-600" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY TRIGXUS */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <SectionHeading
            label="WHY TRIGXUS"
            title="Technology Decisions That Create Lasting Value."
            description="A practical engineering approach focused on business alignment, thoughtful architecture and long-term product development."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="border-l-2 border-blue-100 pl-6 transition hover:border-blue-500"
              >
                <item.icon className="text-blue-600" size={27} />
                <h3 className="mt-5 text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-main">
          <SectionHeading
            label="OUR PROCESS"
            title="From First Conversation to Launch."
            description="A clear and collaborative development process that keeps business objectives at the centre of every decision."
            center
          />

          <div className="grid gap-8 md:grid-cols-4">
            {process.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B1730] text-lg font-bold text-white">
                  {step.number}
                </div>
                {index !== 3 && (
                  <div className="absolute left-16 top-7 hidden h-px w-[calc(100%-35px)] bg-blue-200 md:block" />
                )}
                <h3 className="text-xl font-bold text-[#0B1730]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}

function BrainCircuitIcon() {
  return <Sparkles size={24} />;
}
