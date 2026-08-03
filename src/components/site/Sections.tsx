import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import { faqs, images, stats, testimonials } from "@/data/site";

/* -------- Section heading -------- */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
      data-reveal="up"
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase ${
            light ? "glass-dark text-navy-foreground" : "bg-accent text-accent-foreground"
          }`}
        >
          <i className="fa-solid fa-tooth" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-5 text-3xl font-bold sm:text-4xl lg:text-[2.6rem] ${
          light ? "text-navy-foreground" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed ${
            light ? "text-navy-foreground/75" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* -------- Page hero (inner pages) -------- */
export function PageHero({
  title,
  subtitle,
  breadcrumb,
}: {
  title: string;
  subtitle: string;
  breadcrumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-navy py-20 text-navy-foreground sm:py-24">
      <img
        src={images.heroClinic}
        alt=""
        aria-hidden
        loading="lazy"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <nav aria-label="Breadcrumb" className="text-xs text-navy-foreground/70">
            <Link to="/" className="hover:text-sky">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-sky">{breadcrumb}</span>
          </nav>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base text-navy-foreground/80 sm:text-lg">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------- Stats band -------- */
export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-navy py-16">
      <div
        aria-hidden
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-teal/25 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 md:grid-cols-3 lg:grid-cols-5">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80} variant="zoom">
            <div className="glass-dark rounded-2xl p-6 text-center">
              <p className="font-display text-3xl font-bold text-navy-foreground sm:text-4xl">
                <Counter value={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
              </p>
              <p className="mt-2 text-xs tracking-[0.14em] text-navy-foreground/70 uppercase">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* -------- Testimonials carousel (scroll-snap, Swiper-style) -------- */
export function TestimonialsCarousel() {
  return (
    <div className="mt-12">
      <ul className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {testimonials.map((t, i) => (
          <Reveal
            as="li"
            key={t.name}
            delay={i * 60}
            className="w-[85%] shrink-0 snap-center sm:w-[48%] lg:w-[32%]"
          >
            <figure className="glass hover-lift h-full rounded-3xl p-7">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <i key={k} className="fa-solid fa-star text-sm" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/85">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-brand font-display text-sm font-bold text-primary-foreground">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-navy">{t.name}</span>
                  <span className="block text-xs text-muted-foreground">{t.treatment}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </ul>
      <p className="text-center text-xs text-muted-foreground">
        <i className="fa-solid fa-arrows-left-right mr-2" /> Swipe to read more reviews
      </p>
    </div>
  );
}

/* -------- FAQ accordion -------- */
export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-12 max-w-3xl space-y-3">
      {faqs.map((f, i) => (
        <Reveal key={f.q} delay={i * 50}>
          <div className="glass overflow-hidden rounded-2xl">
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-display text-sm font-semibold text-navy sm:text-base">
                {f.q}
              </span>
              <i
                className={`fa-solid fa-chevron-down text-sky transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-500 ${
                open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* -------- Before/After comparison slider -------- */
export function BeforeAfterSlider({
  before,
  after,
  title,
  desc,
}: {
  before: string;
  after: string;
  title: string;
  desc: string;
}) {
  const [value, setValue] = useState(50);
  return (
    <div className="glass hover-lift overflow-hidden rounded-3xl">
      <div className="relative aspect-[4/3] select-none">
        <img
          src={after}
          alt={`${title} — after treatment`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${value}%` }}
        >
          <img
            src={before}
            alt={`${title} — before treatment`}
            loading="lazy"
            className="h-full w-full object-cover brightness-90 saturate-50"
            style={{ width: "100%" }}
          />
          <span className="absolute top-4 left-4 rounded-full bg-navy/80 px-3 py-1 text-xs font-semibold text-navy-foreground">
            Before
          </span>
        </div>
        <span className="absolute top-4 right-4 rounded-full bg-gradient-brand px-3 py-1 text-xs font-semibold text-primary-foreground">
          After
        </span>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary-foreground"
          style={{ left: `${value}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-card">
            <i className="fa-solid fa-arrows-left-right text-xs" />
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={100}
          value={value}
          aria-label={`Compare before and after for ${title}`}
          onChange={(e) => setValue(Number(e.target.value))}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-semibold text-navy">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

/* -------- CTA band -------- */
export function CtaBand() {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal variant="zoom">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-navy px-8 py-14 text-center text-navy-foreground sm:px-16">
            <div
              aria-hidden
              className="absolute -top-20 left-1/4 h-64 w-64 rounded-full bg-sky/30 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-20 right-1/4 h-64 w-64 rounded-full bg-teal/30 blur-3xl"
            />
            <div className="relative">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Ready for a healthier, brighter smile?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-navy-foreground/75">
                Book a consultation with our specialists today. Same-day emergency slots available
                365 days a year.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/appointment"
                  className="rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-1"
                >
                  <i className="fa-solid fa-calendar-check mr-2" /> Book Appointment
                </Link>
                <Link
                  to="/treatments"
                  className="rounded-full border border-navy-foreground/30 px-7 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-navy-foreground/10"
                >
                  View Treatments
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
