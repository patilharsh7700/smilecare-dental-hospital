import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  CtaBand,
  PageHero,
  SectionHeading,
  StatsBand,
  TestimonialsCarousel,
} from "@/components/site/Sections";
import { testimonials } from "@/data/site";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Patient Testimonials & Reviews | SmileCare Dental Hospital Pune" },
      {
        name: "description",
        content:
          "Read verified patient reviews of SmileCare Dental Hospital Pune — painless root canals, implants, aligners and smile makeovers rated 4.9 out of 5.",
      },
      { property: "og:title", content: "Patient Reviews | SmileCare Dental Hospital" },
      {
        property: "og:description",
        content: "★★★★★ 4.9 average rating from 1,840+ patients across Pune.",
      },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
});

function TestimonialsPage() {
  return (
    <SiteLayout>
      <PageHero
        breadcrumb="Testimonials"
        title="What Our Patients Say"
        subtitle="★★★★★ 4.9 overall rating from more than 1,840 verified patient reviews."
      />

      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Patient Stories"
            title="Honest Words From Real Patients"
            subtitle="Unedited feedback collected after treatment completion."
          />
          <TestimonialsCarousel />
          <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal as="li" key={`grid-${t.name}`} delay={(i % 3) * 80}>
                <figure className="glass hover-lift h-full rounded-3xl p-7">
                  <i className="fa-solid fa-quote-left text-2xl text-sky/40" />
                  <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-5">
                    <span className="block font-display text-sm font-semibold text-navy">
                      {t.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">{t.treatment}</span>
                    <span className="mt-2 flex gap-1 text-gold">
                      {Array.from({ length: t.rating }).map((_, k) => (
                        <i key={k} className="fa-solid fa-star text-xs" />
                      ))}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <StatsBand />
      <CtaBand />
    </SiteLayout>
  );
}
