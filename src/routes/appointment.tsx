import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { FaqAccordion, PageHero, SectionHeading } from "@/components/site/Sections";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { clinic } from "@/data/site";

export const Route = createFileRoute("/appointment")({
  component: AppointmentPage,
  head: () => ({
    meta: [
      { title: "Book Dental Appointment Online | SmileCare Dental Hospital Pune" },
      {
        name: "description",
        content:
          "Book your dental appointment online at SmileCare Dental Hospital Pune in 60 seconds. Choose your treatment, doctor, date and time — same-day emergency slots available.",
      },
      { property: "og:title", content: "Book An Appointment | SmileCare Dental Hospital" },
      {
        property: "og:description",
        content: "Pick your specialist, date and time slot. Instant confirmation and a callback within 15 minutes.",
      },
      { property: "og:url", content: "/appointment" },
    ],
    links: [{ rel: "canonical", href: "/appointment" }],
  }),
});

function AppointmentPage() {
  return (
    <SiteLayout>
      <PageHero
        breadcrumb="Book Appointment"
        title="Book Your Appointment"
        subtitle="Priority slots, zero waiting time and a specialist matched to your treatment."
      />

      <section className="section">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal variant="left">
            <div className="glass rounded-3xl p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-navy">Appointment Details</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill in the form and we will confirm your slot by phone within 15 minutes during
                clinic hours.
              </p>
              <div className="mt-8">
                <AppointmentForm />
              </div>
            </div>
          </Reveal>

          <Reveal variant="right">
            <div className="space-y-5">
              <div className="rounded-3xl bg-gradient-navy p-8 text-navy-foreground">
                <h3 className="font-display text-lg font-semibold">Need urgent help?</h3>
                <p className="mt-2 text-sm text-navy-foreground/75">
                  Severe pain, swelling or dental trauma? Call our emergency line — we treat
                  emergencies the same day, 365 days a year.
                </p>
                <a
                  href={`tel:${clinic.emergency}`}
                  className="mt-6 block rounded-xl bg-gradient-brand py-3.5 text-center text-sm font-semibold text-primary-foreground"
                >
                  <i className="fa-solid fa-truck-medical mr-2" /> {clinic.emergency}
                </a>
                <a
                  href={`https://wa.me/${clinic.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 block rounded-xl border border-navy-foreground/25 py-3.5 text-center text-sm font-semibold"
                >
                  <i className="fa-brands fa-whatsapp mr-2" /> Chat on WhatsApp
                </a>
              </div>

              <div className="glass rounded-3xl p-7">
                <h3 className="font-display font-semibold text-navy">What happens next</h3>
                <ol className="mt-4 space-y-4 text-sm text-muted-foreground">
                  {[
                    "We call you back to confirm your slot and doctor.",
                    "A digital examination and X-ray, if required, on arrival.",
                    "Your treatment plan and estimate shown on screen.",
                    "Treatment begins only after you approve.",
                  ].map((s, i) => (
                    <li key={s} className="flex gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-[11px] font-bold text-primary-foreground">
                        {i + 1}
                      </span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="glass rounded-3xl p-7">
                <h3 className="font-display font-semibold text-navy">Clinic Hours</h3>
                <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                  {clinic.hours.map((h) => (
                    <li key={h.days}>
                      <span className="font-medium text-foreground">{h.days}:</span> {h.time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="FAQ" title="Before Your Visit" />
          <FaqAccordion />
        </div>
      </section>
    </SiteLayout>
  );
}
