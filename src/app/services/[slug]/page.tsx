
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight, ArrowUpRight, CheckCircle2,
  Code2, Layers3, HelpCircle
} from "lucide-react";
import { services } from "@/lib/data";
import CTA from "@/components/CTA";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) return { title: "Service Not Found" };

  return {
    title: service.title,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`
    }
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  const serviceIndex = services.findIndex((item) => item.slug === slug);

  return (
    <>
      <section className="relative overflow-hidden bg-[#F8FAFC] py-24 md:py-32">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-100/60 blur-[100px]" />

        <div className="container-main relative">
          <Link href="/#services" className="text-sm font-semibold text-blue-600">
            ← All Services
          </Link>

          <div className="mt-12 max-w-3xl">
            <span className="section-label">SERVICE {service.number}</span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-[#0B1730] md:text-6xl">
              {service.title}
            </h1>
            <p className="mt-7 text-lg leading-8 text-slate-500">
              {service.description}
            </p>
            <Link href="/book-a-call" className="blue-button mt-9">
              Discuss Your Project <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main grid gap-14 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <span className="section-label">WHAT WE DELIVER</span>
            <h2 className="mt-5 text-3xl font-extrabold text-[#0B1730] md:text-4xl">
              Solutions designed for real business needs.
            </h2>
            <p className="mt-5 leading-8 text-slate-500">
              We combine thoughtful planning, engineering and integration
              to deliver technology aligned with your requirements.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7">
            <div className="flex items-center gap-3">
              <Layers3 className="text-blue-600" size={25} />
              <h3 className="text-xl font-bold">Our Capabilities</h3>
            </div>
            <div className="mt-7 space-y-5">
              {service.capabilities.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-blue-600" size={18} />
                  <p className="text-sm leading-7 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-main">
          <span className="section-label">BUSINESS VALUE</span>
          <h2 className="mt-5 text-3xl font-extrabold text-[#0B1730] md:text-4xl">
            Built to support your next stage.
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((benefit, index) => (
              <div key={benefit} className="rounded-xl border border-slate-200 bg-white p-6">
                <span className="text-sm font-bold text-blue-600">
                  0{index + 1}
                </span>
                <h3 className="mt-5 font-bold text-[#0B1730]">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <span className="section-label">TECHNOLOGY CAPABILITIES</span>
          <h2 className="mt-5 text-3xl font-extrabold text-[#0B1730]">
            Technology aligned with your project.
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-slate-500">
            Technology choices depend on your requirements, integrations,
            security needs and long-term product roadmap.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {service.technologies.map((technology) => (
              <span key={technology} className="rounded-lg border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700">
                <Code2 size={15} className="mr-2 inline text-blue-600" />
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-main max-w-4xl">
          <span className="section-label">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="mb-10 mt-5 text-3xl font-extrabold text-[#0B1730]">
            Questions about {service.title}
          </h2>

          <div className="space-y-4">
            {service.faqs.map(([question, answer]) => (
              <details key={question} className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-[#0B1730]">
                  {question}
                  <HelpCircle className="shrink-0 text-blue-600" />
                </summary>
                <p className="mt-5 text-sm leading-7 text-slate-500">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container-main flex flex-wrap justify-between gap-5 border-t border-slate-200 py-8">
          {serviceIndex > 0 ? (
            <Link href={`/services/${services[serviceIndex - 1].slug}`} className="text-sm font-semibold text-blue-600">
              ← Previous Service
            </Link>
          ) : <span />}
          {serviceIndex < services.length - 1 ? (
            <Link href={`/services/${services[serviceIndex + 1].slug}`} className="text-sm font-semibold text-blue-600">
              Next Service <ArrowRight className="inline" size={15} />
            </Link>
          ) : <span />}
        </div>
      </section>

      <CTA />
    </>
  );
}
