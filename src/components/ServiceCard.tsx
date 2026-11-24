
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChartNoAxesCombined,
  TrendingUp,
  BrainCircuit,
  Code2,
  Smartphone,
  Cloud,
  GraduationCap,
  Building2
} from "lucide-react";

const icons: Record<string, React.ElementType> = {
  ChartNoAxesCombined,
  TrendingUp,
  BrainCircuit,
  Code2,
  Smartphone,
  Cloud,
  GraduationCap,
  Building2
};

export default function ServiceCard({
  service
}: {
  service: {
    number: string;
    slug: string;
    title: string;
    short: string;
    icon: string;
  };
}) {
  const Icon = icons[service.icon] || Code2;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45 }}
      className="service-card group rounded-2xl border border-slate-200 bg-white p-7"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold tracking-widest text-slate-300">
          {service.number}
        </span>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
          <Icon size={23} />
        </div>
      </div>

      <h3 className="mt-7 text-xl font-bold text-[#0B1730]">
        {service.title}
      </h3>

      <p className="mt-3 min-h-[76px] text-sm leading-7 text-slate-500">
        {service.short}
      </p>

      <Link
        href={`/services/${service.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600"
      >
        Explore More
        <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
      </Link>
    </motion.article>
  );
}
