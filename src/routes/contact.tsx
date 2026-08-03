import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/Sections";
import { clinic, treatmentOptions } from "@/data/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us | Dental Clinic on MG Road, Pune — SmileCare" },
      {
        name: "description",
        content:
          "Visit SmileCare Dental Hospital at 101 Sunshine Plaza, MG Road, Pune. Call +91 98765 43210, emergency +91 98765 43211. Open Mon–Sat 9 AM to 8 PM.",
      },
      { property: "og:title", content: "Contact SmileCare Dental Hospital, Pune" },
      {
        property: "og:description",
        content: "Address, phone, emergency line, working hours and directions to our MG Road hospital.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

const inputClass =
  "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm placeholder:text-muted-foreground/70 focus:border-sky focus:ring-2 focus:ring-ring/30 focus:outline-none";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHero
        breadcrumb="Contact"
        title="Contact SmileCare Dental Hospital"
        subtitle="Call, WhatsApp or walk in — we are on MG Road, Pune, open six days a week."
      />

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_1fr]">
          <Reveal variant="left">
            <div className="glass rounded-3xl p-8">
              <h2 className="font-display text-2xl font-bold text-navy">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We reply to every enquiry within one working day.
              </p>
              <form
                className="mt-8 grid gap-5 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  e.currentTarget.reset();
                }}
              >
                <input required name="name" placeholder="Your name" className={inputClass} />
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  className={inputClass}
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className={`${inputClass} sm:col-span-2`}
                />
                <select
                  required
                  name="treatment"
                  defaultValue=""
                  className={`${inputClass} sm:col-span-2`}
                >
                  <option value="" disabled>
                    Select treatment of interest
                  </option>
                  {treatmentOptions.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="How can we help?"
                  className={`${inputClass} sm:col-span-2`}
                />
                <button
                  type="submit"
                  className="rounded-xl bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5 sm:col-span-2"
                >
                  <i className="fa-solid fa-paper-plane mr-2" /> Send Message
                </button>
                {sent && (
                  <p className="rounded-xl bg-accent px-4 py-3 text-sm text-accent-foreground sm:col-span-2">
                    <i className="fa-solid fa-circle-check mr-2 text-teal" /> Thank you! Your message
                    has been received — our team will contact you shortly.
                  </p>
                )}
              </form>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="space-y-5">
              <div className="glass rounded-3xl p-7">
                <i className="fa-solid fa-location-dot text-xl text-sky" />
                <h3 className="mt-3 font-display font-semibold text-navy">Clinic Address</h3>
                <address className="mt-2 space-y-0.5 text-sm not-italic text-muted-foreground">
                  <span className="block font-medium text-foreground">{clinic.name}</span>
                  {clinic.address.map((a) => (
                    <span key={a} className="block">
                      {a}
                    </span>
                  ))}
                </address>
              </div>
              <div className="glass rounded-3xl p-7">
                <i className="fa-solid fa-phone-volume text-xl text-teal" />
                <h3 className="mt-3 font-display font-semibold text-navy">Phone</h3>
                <div className="mt-2 space-y-1 text-sm">
                  <a href={`tel:${clinic.phone}`} className="block text-muted-foreground hover:text-sky">
                    Reception: {clinic.phone}
                  </a>
                  <a
                    href={`tel:${clinic.emergency}`}
                    className="block text-muted-foreground hover:text-sky"
                  >
                    Emergency: {clinic.emergency}
                  </a>
                  <a
                    href={`mailto:${clinic.email}`}
                    className="block text-muted-foreground hover:text-sky"
                  >
                    {clinic.email}
                  </a>
                </div>
              </div>
              <div className="glass rounded-3xl p-7">
                <i className="fa-solid fa-clock text-xl text-sky" />
                <h3 className="mt-3 font-display font-semibold text-navy">Working Hours</h3>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {clinic.hours.map((h) => (
                    <li key={h.days}>
                      <span className="font-medium text-foreground">{h.days}:</span> {h.time}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/${clinic.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-whatsapp py-3.5 text-sm font-semibold text-primary-foreground"
                >
                  <i className="fa-brands fa-whatsapp text-lg" /> WhatsApp
                </a>
                <a
                  href={`tel:${clinic.phone}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-navy py-3.5 text-sm font-semibold text-navy-foreground"
                >
                  <i className="fa-solid fa-phone" /> Click To Call
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Find Us" title="Located On MG Road, Pune" />
          <Reveal>
            <div className="mt-10 overflow-hidden rounded-[2rem] shadow-card">
              <iframe
                title="SmileCare Dental Hospital location on Google Maps"
                src="https://www.google.com/maps?q=MG+Road+Pune+Maharashtra&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
