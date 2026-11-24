
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <div className="container-main flex h-[76px] items-center justify-between">
        <Link href="/" className="relative h-10 w-36">
          <Image
            src="/trigxus-logo.png"
            alt="TRIGXUS - From Vision to Value"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13px] font-semibold text-slate-600 transition hover:text-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/book-a-call" className="blue-button">
            Book a Free Call <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-slate-200 p-2 lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-6 py-5 lg:hidden">
          <div className="container-main flex flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-semibold text-slate-700"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/book-a-call"
              onClick={() => setOpen(false)}
              className="blue-button"
            >
              Book a Free Call <ArrowUpRight size={16} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
