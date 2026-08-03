import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, FaqAccordion, PageHero, SectionHeading } from "@/components/site/Sections";
import { pricing } from "@/data/site";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Dental Treatment Packages & Pricing | SmileCare Dental Hospital Pune" },
      {
        name: "description",
        content:
          "Transparent dental packages in Pune — checkups, professional cleaning, root canal, smile makeover and implant consultations with 0% EMI options.",
      },
      { property: "og:title", content: "Dental Packages & Pricing | SmileCare Pune" },
      {
        property: "og:description",
        content: "Honest estimates shared before treatment begins, with 0% EMI on major procedures.",
      },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
});

function PricingPage() {
  return (
    <SiteLayout>
      <PageHero
        breadcrumb="Pricing"
        title="Transparent Treatment Packages"
        subtitle="Every estimate is explained and agreed before we begin — no surprise additions later."
      />

      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Packages"
            title="Choose The Care You Need"
            subtitle="Final pricing depends on clinical findings and is shared in writing after your consultation."
          />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricing.map((p, i) => (
              <Reveal as="li" key={p.name} delay={(i % 3) * 80}>
                <article
                  className={`hover-lift flex h-full flex-col rounded-3xl p-8 ${
                    p.featured
                      ? "bg-gradient-navy text-navy-foreground shadow-glow"
                      : "glass text-foreground"
                  }`}
                >
                  <span
                    className={`self-start rounded-full px-3 py-1 text-[10px] font-semibold tracking-widest uppercase ${
                      p.featured
                        ? "bg-gradient-brand text-primary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {p.tag}
                  </span>
                  <h3
                    className={`mt-5 font-display text-xl font-bold ${
                      p.featured ? "text-navy-foreground" : "text-navy"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <p
                    className={`mt-3 text-sm ${
                      p.featured ? "text-navy-foreground/75" : "text-muted-foreground"
                    }`}
                  >
                    {p.desc}
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 text-sm">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <i className="fa-solid fa-circle-check mt-0.5 text-teal" />
                        <span className={p.featured ? "text-navy-foreground/85" : ""}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p
                    className={`mt-6 text-xs ${
                      p.featured ? "text-navy-foreground/60" : "text-muted-foreground"
                    }`}
                  >
                    Estimate shared after consultation · 0% EMI available
                  </p>
                  <Link
                    to="/appointment"
                    className={`mt-5 rounded-xl py-3 text-center text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                      p.featured
                        ? "bg-gradient-brand text-primary-foreground"
                        : "bg-secondary text-navy hover:bg-gradient-brand hover:text-primary-foreground"
                    }`}
                  >
                    Book Consultation
                  </Link>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Payments & FAQ" title="Billing Questions, Answered" />
          <FaqAccordion />
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
