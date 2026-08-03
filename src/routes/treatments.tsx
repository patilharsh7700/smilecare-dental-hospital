import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/Sections";
import { services, treatments } from "@/data/site";

export const Route = createFileRoute("/treatments")({
  component: TreatmentsPage,
  head: () => ({
    meta: [
      { title: "Dental Treatments in Pune | Implants, RCT, Braces — SmileCare" },
      {
        name: "description",
        content:
          "Explore dental implants, root canal treatment, cosmetic dentistry, smile design, teeth cleaning, braces, kids dentistry and emergency dental care at SmileCare Pune.",
      },
      { property: "og:title", content: "Dental Treatments at SmileCare Dental Hospital" },
      {
        property: "og:description",
        content:
          "18 dental specialities under one roof — planned digitally, delivered painlessly by specialist dentists in Pune.",
      },
      { property: "og:url", content: "/treatments" },
    ],
    links: [{ rel: "canonical", href: "/treatments" }],
  }),
});

function TreatmentsPage() {
  return (
    <SiteLayout>
      <PageHero
        breadcrumb="Treatments"
        title="Advanced Dental Treatments"
        subtitle="From a routine cleaning to a full-mouth rehabilitation — planned digitally, delivered painlessly."
      />

      <section className="section">
        <div className="mx-auto max-w-7xl space-y-20 px-6">
          {treatments.map((t, i) => (
            <article
              key={t.slug}
              id={t.slug}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal variant={i % 2 ? "right" : "left"}>
                <div className="relative">
                  <img
                    src={t.image}
                    alt={`${t.title} at SmileCare Dental Hospital Pune`}
                    loading="lazy"
                    width={1200}
                    height={800}
                    className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-card"
                  />
                  <span className="glass absolute top-5 left-5 rounded-full px-4 py-2 text-xs font-semibold text-navy">
                    0{i + 1} / 0{treatments.length}
                  </span>
                </div>
              </Reveal>
              <Reveal variant={i % 2 ? "left" : "right"}>
                <div>
                  <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
                    {t.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.summary}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-foreground/85">
                        <i className="fa-solid fa-circle-check mt-0.5 text-teal" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="/appointment"
                      className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
                    >
                      Book this treatment
                    </Link>
                    <Link
                      to="/pricing"
                      className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-sky hover:text-sky"
                    >
                      See packages
                    </Link>
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="All Specialities"
            title="Every Dental Service We Offer"
            subtitle="Eighteen specialities handled in-house, so you are never referred elsewhere mid-treatment."
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal as="li" key={s.title} delay={(i % 3) * 70}>
                <div className="glass hover-lift flex h-full items-start gap-4 rounded-2xl p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                    <i className={s.icon} />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold text-navy">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
