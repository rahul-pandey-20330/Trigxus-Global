
"use client";

import Cal from "@calcom/embed-react";
import { CalendarDays, Clock, Video, Globe, ShieldCheck } from "lucide-react";

export default function BookCallPage() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

  return (
    <section className="min-h-screen bg-[#F8FAFC] py-20">
      <div className="container-main">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">LET'S CONNECT</span>
          <h1 className="mt-6 text-4xl font-extrabold text-[#0B1730] md:text-6xl">
            Let's Talk About Your{" "}
            <span className="gradient-text">Next Big Idea.</span>
          </h1>
          <p className="mt-6 leading-8 text-slate-500">
            Schedule a free 30-minute technology consultation with TRIGXUS.
            Tell us about your business, your challenges and your vision.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[.7fr_1.3fr]">
          <div className="h-fit rounded-2xl bg-[#0B1730] p-8 text-white">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
              Free Consultation
            </span>
            <h2 className="mt-5 text-2xl font-bold">
              Technology Consultation – 30 Minutes
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              A focused conversation about your project and potential
              technology solutions.
            </p>

            <div className="mt-9 space-y-6">
              {[
                { icon: Clock, text: "30-minute meeting" },
                { icon: Video, text: "Video consultation" },
                { icon: Globe, text: "Asia/Kolkata timezone" },
                { icon: CalendarDays, text: "Live availability" }
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <item.icon size={19} className="text-cyan-300" />
                  <span className="text-sm text-slate-200">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-4">
              <ShieldCheck className="text-cyan-300" size={23} />
              <p className="mt-3 text-xs leading-6 text-slate-300">
                Your booking is handled through Cal.com. Confirmed
                appointments, emails and rescheduling depend on the
                configured Cal.com event type.
              </p>
            </div>
          </div>

          <div className="min-h-[650px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-7">
            {calLink ? (
              <Cal
                calLink={calLink}
                config={{
                  layout: "month_view",
                  theme: "light",
                  hideEventTypeDetails: "false"
                }}
                style={{
                  width: "100%",
                  height: "700px",
                  overflow: "scroll"
                }}
              />
            ) : (
              <div className="flex min-h-[600px] flex-col items-center justify-center text-center">
                <CalendarDays size={45} className="text-blue-600" />
                <h2 className="mt-6 text-2xl font-bold text-[#0B1730]">
                  Booking configuration required
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                  Configure your Cal.com event link in the environment
                  variables to activate live scheduling.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
