import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  CtaBand,
  FaqAccordion,
  PageHero,
  SectionHeading,
  StatsBand,
} from "@/components/site/Sections";
import { images, whyChooseUs } from "@/data/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | SmileCare Dental Hospital, Pune" },
      {
        name: "description",
        content:
          "Since 2011 SmileCare Dental Hospital has delivered painless, affordable dental care in Pune with 12 specialists, digital X-ray, CBCT and an in-house dental lab.",
      },
      { property: "og:title", content: "About SmileCare Dental Hospital, Pune" },
      {
        property: "og:description",
        content:
          "Our mission, vision, technology and the standards behind 25,000+ successfully treated patients.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const milestones = [
  { year: "2011", title: "SmileCare opens on MG Road", desc: "A two-chair clinic with one promise: painless dentistry." },
  { year: "2015", title: "Digital imaging arrives", desc: "First clinic in the area with chairside digital X-ray." },
  { year: "2019", title: "Full-scale dental hospital", desc: "Six operatories, sterile OT and an in-house lab." },
  { year: "2023", title: "CBCT & guided implantology", desc: "3D planned implants with same-week temporary crowns." },
  { year: "2026", title: "25,000 patients treated", desc: "98% clinical success rate and a 4.9 Google rating." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        breadcrumb="About"
        title="Why Choose SmileCare Dental Hospital"
        subtitle="Advanced, painless and affordable dental care using modern technology and experienced specialists."
      />

      <section className="section">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal variant="left">
            <img
              src={images.aboutClinic}
              alt="Reception area of SmileCare Dental Hospital"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full rounded-[2rem] object-cover shadow-card"
            />
          </Reveal>
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Fifteen years of gentle, honest dentistry"
              subtitle="SmileCare Dental Hospital is committed to providing advanced, painless, and affordable dental care using modern technology and experienced specialists."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              What began as a two-chair neighbourhood clinic in 2011 is today a full-scale dental
              hospital with six operatories, a sterile surgical theatre, a CBCT imaging suite and an
              in-house digital laboratory. Every treatment plan is shown to you on screen, priced
              transparently and executed by a specialist in that field — never a generalist guessing.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass rounded-2xl p-6">
                <i className="fa-solid fa-bullseye text-xl text-sky" />
                <h3 className="mt-3 font-display font-semibold text-navy">Mission</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Deliver exceptional dental care with compassion.
                </p>
              </div>
              <div className="glass rounded-2xl p-6">
                <i className="fa-solid fa-eye text-xl text-teal" />
                <h3 className="mt-3 font-display font-semibold text-navy">Vision</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  To become the most trusted dental healthcare provider.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="section bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Our Standards"
            title="What Makes Us Different"
            subtitle="Twelve commitments we hold ourselves to on every single appointment."
          />
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((w, i) => (
              <Reveal as="li" key={w.title} delay={(i % 4) * 70} variant="zoom">
                <div className="glass hover-lift h-full rounded-2xl p-6">
                  <i className={`${w.icon} text-xl text-sky`} />
                  <h3 className="mt-4 font-display text-base font-semibold text-navy">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Milestones"
            title="Our Journey So Far"
            subtitle="Growth measured in patients cared for, not chairs added."
          />
          <ol className="relative mx-auto mt-14 max-w-3xl border-l border-border pl-8">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 90} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[2.6rem] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-brand text-[10px] font-bold text-primary-foreground">
                  {m.year.slice(2)}
                </span>
                <p className="text-xs font-semibold tracking-widest text-sky uppercase">{m.year}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-navy">{m.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-gradient-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal variant="left">
            <img
              src={images.equipmentXray}
              alt="Digital X-ray and CBCT 3D scanning room"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full rounded-[2rem] object-cover shadow-card"
            />
          </Reveal>
          <Reveal variant="right">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Technology"
                title="Diagnostics you can see for yourself"
                subtitle="Modern imaging removes the guesswork — and lets you understand exactly what we recommend and why."
              />
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "CBCT 3D dental scanner",
                  "Chairside digital X-ray",
                  "Intraoral scanning (no impressions)",
                  "Soft-tissue dental laser",
                  "Rotary endodontics + apex locator",
                  "Class B autoclave sterilisation",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-foreground/85">
                    <i className="fa-solid fa-circle-check mt-0.5 text-teal" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <FaqAccordion />
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
