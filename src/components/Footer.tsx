
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { services, navigation } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#0B1730] text-white">
      <div className="container-main grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" className="relative block h-12 w-40">
            <Image
              src="/trigxus-logo.png"
              alt="TRIGXUS"
              fill
              className="object-contain object-left"
            />
          </Link>

          <p className="mt-5 text-xs font-bold tracking-[.18em] text-cyan-300">
            FROM VISION TO VALUE.
          </p>

          <p className="mt-5 max-w-xs text-sm leading-7 text-slate-400">
            Technology, fintech and digital solutions engineered to help
            businesses transform ideas into value.
          </p>
        </div>

        <div>
          <h3 className="mb-6 text-base font-bold">Quick Links</h3>
          <div className="flex flex-col gap-4">
            {navigation.map((item) => (
              <Link key={item.label} href={item.href}
                className="text-sm text-slate-400 transition hover:text-cyan-300">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-base font-bold">Our Services</h3>
          <div className="flex flex-col gap-4">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}
                className="text-sm text-slate-400 transition hover:text-cyan-300">
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-base font-bold">Get in Touch</h3>
          <p className="text-sm leading-7 text-slate-400">
            Have a project in mind? Let's discuss how technology can help.
          </p>

          <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300">
            Contact TRIGXUS <ArrowUpRight size={15} />
          </Link>

          <div className="mt-7 space-y-4 text-sm text-slate-400">
            <p className="flex items-center gap-3">
              <Mail size={17} /> Email: info@trigxus.com
            </p>
            <p className="flex items-center gap-3">
              <Phone size={17} /> Phone: +91 8303500869
            </p>
          </div>
        </div>
      </div>

      <div className="container-main border-t border-white/10 py-7">
        <div className="flex flex-col justify-between gap-5 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} TRIGXUS. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
