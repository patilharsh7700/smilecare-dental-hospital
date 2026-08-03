import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  CtaBand,
  FaqAccordion,
  SectionHeading,
  StatsBand,
  TestimonialsCarousel,
} from "@/components/site/Sections";
import { blogPosts, clinic, doctors, images, services, treatments, whyChooseUs } from "@/data/site";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "SmileCare Dental Hospital | Best Dental Clinic in Pune" },
      {
        name: "description",
        content:
          "Healthy Smile, Healthy Life. Advanced painless dental care in Pune — implants, root canal, braces, aligners, whitening and smile makeovers by 12 specialists.",
      },
      { property: "og:title", content: "SmileCare Dental Hospital | Best Dental Clinic in Pune" },
      {
        property: "og:description",
        content:
          "Advanced dental care with modern technology and experienced specialists. Book your appointment online in 60 seconds.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const floatingIcons = [
  { icon: "fa-solid fa-tooth", className: "top-24 left-[8%]", delay: "0s" },
  { icon: "fa-solid fa-teeth", className: "top-1/3 right-[10%]", delay: "1.2s" },
  { icon: "fa-solid fa-syringe", className: "bottom-32 left-[16%]", delay: "2.1s" },
  { icon: "fa-solid fa-shield-heart", className: "bottom-40 right-[18%]", delay: "0.6s" },
  { icon: "fa-solid fa-x-ray", className: "top-1/2 left-[42%]", delay: "1.7s" },
];

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <img
        src={images.heroClinic}
        alt="Modern operatory at SmileCare Dental Hospital in Pune"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      {/* Floating dental icons */}
      {floatingIcons.map((f) => (
        <span
          key={f.icon + f.className}
          aria-hidden
          className={`absolute hidden animate-float text-navy-foreground/25 lg:block ${f.className}`}
          style={{ animationDelay: f.delay }}
        >
          <i className={`${f.icon} text-4xl`} />
        </span>
      ))}

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
        <Reveal>
          <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.16em] text-navy-foreground uppercase">
            <i className="fa-solid fa-star text-gold" /> Rated 4.9 by 1,840+ patients in Pune
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] font-extrabold text-navy-foreground sm:text-6xl lg:text-7xl">
            Healthy Smile, <br />
            <span className="text-gradient">Healthy Life.</span>
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-foreground/85 sm:text-lg">
            Advanced Dental Care with Modern Technology and Experienced Specialists.
          </p>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/appointment"
              className="rounded-full bg-gradient-brand px-8 py-4 font-display text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-1"
            >
              <i className="fa-solid fa-calendar-check mr-2" /> Book Appointment
            </Link>
            <Link
              to="/treatments"
              className="rounded-full border border-navy-foreground/35 px-8 py-4 font-display text-sm font-semibold text-navy-foreground backdrop-blur transition-colors hover:bg-navy-foreground/10"
            >
              View Treatments
            </Link>
          </div>
        </Reveal>
        <Reveal delay={420}>
          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { icon: "fa-solid fa-user-doctor", label: "12+ Specialists" },
              { icon: "fa-solid fa-feather", label: "Painless Care" },
              { icon: "fa-solid fa-truck-medical", label: "Open 365 Days" },
              { icon: "fa-solid fa-indian-rupee-sign", label: "0% EMI" },
            ].map((b) => (
              <div key={b.label} className="glass-dark rounded-2xl px-4 py-4 text-center">
                <dt className="text-sky">
                  <i className={`${b.icon} text-lg`} />
                </dt>
                <dd className="mt-2 text-xs font-semibold text-navy-foreground">{b.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-navy-foreground/40 p-1.5">
          <span className="h-1.5 w-1.5 animate-scroll-dot rounded-full bg-sky" />
        </span>
        <span className="text-[10px] tracking-[0.28em] text-navy-foreground/60 uppercase">
          Scroll
        </span>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="section bg-gradient-soft">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal variant="left">
          <div className="relative">
            <img
              src={images.aboutClinic}
              alt="SmileCare Dental Hospital reception and waiting lounge"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full rounded-[2rem] object-cover shadow-card"
            />
            <div className="glass absolute -bottom-8 -right-4 hidden w-56 rounded-2xl p-5 sm:block lg:-right-10">
              <p className="font-display text-3xl font-bold text-navy">15+</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Years of trusted dental care in Pune
              </p>
            </div>
          </div>
        </Reveal>
        <div>
          <SectionHeading
            align="left"
            eyebrow="About SmileCare"
            title="Why Choose SmileCare Dental Hospital"
            subtitle="SmileCare Dental Hospital is committed to providing advanced, painless, and affordable dental care using modern technology and experienced specialists."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Reveal delay={80}>
              <div className="glass h-full rounded-2xl p-6">
                <i className="fa-solid fa-bullseye text-xl text-sky" />
                <h3 className="mt-3 font-display text-base font-semibold text-navy">Our Mission</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Deliver exceptional dental care with compassion.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="glass h-full rounded-2xl p-6">
                <i className="fa-solid fa-eye text-xl text-teal" />
                <h3 className="mt-3 font-display text-base font-semibold text-navy">Our Vision</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  To become the most trusted dental healthcare provider.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={220}>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-sky hover:gap-3 transition-all"
            >
              More about our hospital <i className="fa-solid fa-arrow-right" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete Dental Care Under One Roof"
          subtitle="Eighteen specialities, six operatories and an in-house digital lab — everything your family's teeth will ever need."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 3) * 90}>
              <article className="glass hover-lift group h-full rounded-3xl p-7">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground transition-transform group-hover:scale-110">
                  <i className={`${s.icon} text-xl`} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link
                  to="/appointment"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-sky uppercase transition-all hover:gap-3"
                >
                  Book now <i className="fa-solid fa-arrow-right" />
                </Link>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="section bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Twelve Reasons Families Trust SmileCare"
          subtitle="Clinical excellence, honest pricing and genuine warmth — the standards we refuse to compromise on."
        />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((w, i) => (
            <Reveal as="li" key={w.title} delay={(i % 4) * 70} variant="zoom">
              <div className="glass hover-lift h-full rounded-2xl p-6">
                <i className={`${w.icon} text-xl text-teal`} />
                <h3 className="mt-4 font-display text-base font-semibold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function DoctorsPreview() {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Our Specialists"
          title="Meet The Doctors Behind Every Smile"
          subtitle="A multidisciplinary team of implantologists, orthodontists, cosmetic dentists and oral surgeons."
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((d, i) => (
            <Reveal as="li" key={d.name} delay={i * 90}>
              <article className="glass hover-lift group h-full overflow-hidden rounded-3xl">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={d.image}
                    alt={`${d.name}, ${d.role} at SmileCare Dental Hospital`}
                    loading="lazy"
                    width={800}
                    height={1000}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {clinic.socials.slice(0, 3).map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${d.name} on ${s.label}`}
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-card/90 text-navy transition-colors hover:bg-sky hover:text-primary-foreground"
                      >
                        <i className={s.icon} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-base font-semibold text-navy">{d.name}</h3>
                  <p className="mt-1 text-xs font-semibold tracking-wide text-sky uppercase">
                    {d.role}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">{d.qualification}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{d.experience}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{d.specialization}</p>
                  <Link
                    to="/appointment"
                    className="mt-5 block rounded-xl bg-secondary py-2.5 text-center text-xs font-semibold text-navy transition-colors hover:bg-gradient-brand hover:text-primary-foreground"
                  >
                    Book Appointment
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

function TreatmentsPreview() {
  return (
    <section className="section bg-gradient-soft">
      <div className="mx-auto max-w-7xl space-y-16 px-6">
        <SectionHeading
          eyebrow="Signature Treatments"
          title="Precision Dentistry, Beautifully Delivered"
          subtitle="Every plan starts with a digital diagnosis and ends with a result you can see before we begin."
        />
        {treatments.slice(0, 3).map((t, i) => (
          <div
            key={t.slug}
            className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <Reveal variant={i % 2 ? "right" : "left"}>
              <img
                src={t.image}
                alt={t.title}
                loading="lazy"
                width={1200}
                height={800}
                className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-card"
              />
            </Reveal>
            <Reveal variant={i % 2 ? "left" : "right"}>
              <div>
                <h3 className="font-display text-2xl font-bold text-navy sm:text-3xl">{t.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.summary}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-foreground/85">
                      <i className="fa-solid fa-circle-check mt-0.5 text-teal" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/treatments"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
                >
                  Explore treatment <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

function BlogPreview() {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Dental Health Blog"
          title="Latest Articles From Our Dentists"
          subtitle="Practical, jargon-free advice written by the specialists who treat patients every day."
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 90}>
              <article className="glass hover-lift group h-full overflow-hidden rounded-3xl">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={800}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="p-6">
                  <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-semibold tracking-wider text-accent-foreground uppercase">
                    {p.category}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-navy">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                  <p className="mt-4 text-xs text-muted-foreground">
                    {p.date} · {p.read}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-sky hover:text-sky"
          >
            Read all articles <i className="fa-solid fa-arrow-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <WhyChooseUs />
      <StatsBand />
      <DoctorsPreview />
      <TreatmentsPreview />
      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Patient Stories"
            title="★★★★★ 4.9 Average Patient Rating"
            subtitle="Real experiences from patients treated at our MG Road hospital."
          />
          <TestimonialsCarousel />
        </div>
      </section>
      <section className="section bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions Patients Ask Us Most"
            subtitle="Still unsure about something? Call us — a dentist, not a call centre, answers."
          />
          <FaqAccordion />
        </div>
      </section>
      <BlogPreview />
      <CtaBand />
    </SiteLayout>
  );
}
