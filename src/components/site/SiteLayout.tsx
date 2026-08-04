import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { clinic, navLinks } from "@/data/site";
import { useScrollReveal } from "./Reveal";

/* ---------------- Premium loader ---------------- */
function PremiumLoader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-navy transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        <span className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed border-sky/60" />
        <i className="fa-solid fa-tooth text-3xl text-navy-foreground" />
      </div>
      <p className="mt-5 font-display text-sm tracking-[0.35em] text-navy-foreground/80 uppercase">
        SmileCare
      </p>
    </div>
  );
}

/* ---------------- Scroll progress bar ---------------- */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-transparent">
      <div
        className="h-full bg-gradient-brand transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

/* ---------------- Mouse glow ---------------- */
function MouseGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[5] hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl md:block"
      style={{
        left: pos.x,
        top: pos.y,
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--sky) 22%, transparent), transparent 70%)",
      }}
    />
  );
}

/* ---------------- Header ---------------- */
function TopBar() {
  return (
    <div className="hidden bg-gradient-navy text-navy-foreground lg:block">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2 text-xs">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-location-dot text-sky" /> MG Road, Pune
          </span>
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-clock text-sky" /> Mon–Sat 9:00 AM – 8:00 PM
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a className="flex items-center gap-2 hover:text-sky" href={`tel:${clinic.emergency}`}>
            <i className="fa-solid fa-truck-medical text-teal" /> Emergency {clinic.emergency}
          </a>
          <a className="flex items-center gap-2 hover:text-sky" href={`mailto:${clinic.email}`}>
            <i className="fa-solid fa-envelope text-teal" /> {clinic.email}
          </a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-[60]">
      <TopBar />
      <div
        className={`transition-all duration-300 ${
          scrolled ? "glass shadow-card" : "bg-background/80 backdrop-blur-md"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3"
        >
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
              <i className="fa-solid fa-tooth text-lg" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold text-navy">SmileCare</span>
              <span className="block text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                Dental Hospital
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 xl:flex">
            {navLinks.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground/75 hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            {/* <a
              href={`tel:${clinic.phone}`}
              className="hidden items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-sky hover:text-sky md:flex"
            >
              <i className="fa-solid fa-phone-volume text-sky" /> {clinic.phone}
            </a> */}
            <Link
              to="/appointment"
              className="hidden rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5 sm:block"
            >
              Book Appointment
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-navy xl:hidden"
            >
              <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden border-t border-border transition-[max-height] duration-500 xl:hidden ${
            open ? "max-h-[36rem]" : "max-h-0"
          }`}
        >
          <ul className="mx-auto grid max-w-7xl gap-1 px-6 py-4">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium ${
                    pathname === l.to
                      ? "bg-accent text-accent-foreground"
                      : "text-foreground/80 hover:bg-secondary"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 grid grid-cols-2 gap-2">
              <a
                href={`tel:${clinic.phone}`}
                className="rounded-xl border border-border px-4 py-3 text-center text-sm font-semibold text-navy"
              >
                Call Now
              </a>
              <Link
                to="/appointment"
                className="rounded-xl bg-gradient-brand px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Floating actions ---------------- */
function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Bottom-right stack */}
      <div className="fixed right-4 bottom-20 z-[65] flex flex-col items-end gap-3 sm:bottom-6">
        <a
          href={`https://wa.me/${clinic.whatsapp}?text=Hello%20SmileCare%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex h-13 w-13 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-card transition-transform hover:scale-110"
          style={{ height: "3.25rem", width: "3.25rem" }}
        >
          <i className="fa-brands fa-whatsapp text-2xl" />
        </a>
        <a
          href={`tel:${clinic.phone}`}
          aria-label="Click to call"
          className="flex items-center justify-center rounded-full bg-gradient-brand text-primary-foreground shadow-card transition-transform hover:scale-110 animate-pulse-ring"
          style={{ height: "3.25rem", width: "3.25rem" }}
        >
          <i className="fa-solid fa-phone text-lg" />
        </a>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className={`flex items-center justify-center rounded-full bg-navy text-navy-foreground shadow-card transition-all hover:scale-110 ${
            showTop ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0"
          }`}
          style={{ height: "3.25rem", width: "3.25rem" }}
        >
          <i className="fa-solid fa-arrow-up" />
        </button>
      </div>

      {/* Mobile sticky appointment bar */}
      <div className="fixed inset-x-0 bottom-0 z-[64] flex gap-2 border-t border-border bg-card/95 p-3 backdrop-blur sm:hidden">
        <a
          href={`tel:${clinic.phone}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm font-semibold text-navy"
        >
          <i className="fa-solid fa-phone text-sky" /> Call
        </a>
        <Link
          to="/appointment"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-brand py-3 text-sm font-semibold text-primary-foreground"
        >
          <i className="fa-solid fa-calendar-check" /> Book Appointment
        </Link>
      </div>
    </>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <footer className="mt-24 bg-gradient-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-brand text-primary-foreground">
              <i className="fa-solid fa-tooth" />
            </span>
            <span className="font-display text-lg font-bold">SmileCare</span>
          </div>
          <p className="mt-5 text-sm text-navy-foreground/70">
            Advanced, painless and affordable dental care in Pune — powered by modern technology and
            experienced specialists since 2011.
          </p>
          <div className="mt-6 flex gap-3">
            {clinic.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-navy-foreground/20 transition-colors hover:bg-sky hover:text-primary-foreground"
              >
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/70">
            {[
              { to: "/treatments", label: "Treatments" },
              { to: "/doctors", label: "Doctors" },
              { to: "/appointment", label: "Book Appointment" },
              { to: "/gallery", label: "Smile Gallery" },
              { to: "/pricing", label: "Pricing" },
              { to: "/blog", label: "Blog" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-sky">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold">Business Hours</h3>
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/70">
            {clinic.hours.map((h) => (
              <li key={h.days}>
                <span className="block font-medium text-navy-foreground">{h.days}</span>
                {h.time}
              </li>
            ))}
          </ul>
          <address className="mt-6 space-y-1 text-sm not-italic text-navy-foreground/70">
            {clinic.address.map((a) => (
              <span key={a} className="block">
                {a}
              </span>
            ))}
          </address>
        </div>

        <div>
          <h3 className="font-display text-base font-semibold">Newsletter</h3>
          <p className="mt-5 text-sm text-navy-foreground/70">
            Monthly oral-health tips and clinic offers. No spam, ever.
          </p>
          <form
            className="mt-4 flex flex-col gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              setSubscribed(true);
            }}
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              aria-label="Email address"
              className="rounded-xl border border-navy-foreground/20 bg-navy-foreground/5 px-4 py-3 text-sm placeholder:text-navy-foreground/40 focus:border-sky focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-gradient-brand px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {subscribed ? "Subscribed ✓" : "Subscribe"}
            </button>
          </form>
          <div className="mt-6 space-y-2 text-sm text-navy-foreground/70">
            <a className="block hover:text-sky" href={`tel:${clinic.phone}`}>
              <i className="fa-solid fa-phone mr-2 text-teal" />
              {clinic.phone}
            </a>
            <a className="block hover:text-sky" href={`mailto:${clinic.email}`}>
              <i className="fa-solid fa-envelope mr-2 text-teal" />
              {clinic.email}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-navy-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} SmileCare Dental Hospital. All rights reserved.</p>
          <p>Dental Clinic in Pune · Implants · Braces · Smile Makeover</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Layout ---------------- */
export function SiteLayout({ children }: { children: ReactNode }) {
  useScrollReveal();
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background">
      <PremiumLoader />
      <ScrollProgress />
      <MouseGlow />
      <Header />
      <main className="relative z-10">{children}</main>
      <Footer />
      <FloatingActions />
      <div className="h-16 sm:hidden" />
    </div>
  );
}
