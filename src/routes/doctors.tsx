import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero, SectionHeading, StatsBand } from "@/components/site/Sections";
import { clinic, doctors } from "@/data/site";

export const Route = createFileRoute("/doctors")({
  component: DoctorsPage,
  head: () => ({
    meta: [
      { title: "Our Dentists | Best Dentist, Orthodontist & Oral Surgeon in Pune" },
      {
        name: "description",
        content:
          "Meet the SmileCare specialists — implantologist Dr. Rajesh Sharma, orthodontist Dr. Priya Mehta, cosmetic dentist Dr. Neha Kulkarni and oral surgeon Dr. Amit Verma.",
      },
      { property: "og:title", content: "Meet Our Dental Specialists | SmileCare Pune" },
      {
        property: "og:description",
        content:
          "Twelve specialist dentists across implantology, orthodontics, cosmetic dentistry and oral surgery.",
      },
      { property: "og:url", content: "/doctors" },
    ],
    links: [{ rel: "canonical", href: "/doctors" }],
  }),
});

function DoctorsPage() {
  return (
    <SiteLayout>
      <PageHero
        breadcrumb="Doctors"
        title="Meet Our Dental Specialists"
        subtitle="Each treatment is performed by a dentist who specialises in exactly that field."
      />

      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Core Team"
            title="Specialists You Can Trust"
            subtitle="Qualified, experienced and continually trained — our doctors publish, teach and treat."
          />
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {doctors.map((d, i) => (
              <Reveal as="li" key={d.name} delay={i * 90}>
                <article className="glass hover-lift group h-full overflow-hidden rounded-3xl">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={d.image}
                      alt={`${d.name}, ${d.role}`}
                      loading="lazy"
                      width={800}
                      height={1000}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-x-0 bottom-0 flex justify-center gap-2 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                      {clinic.socials.slice(0, 4).map((s) => (
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
                    <dl className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                      <div>
                        <dt className="inline font-semibold text-navy">Qualification: </dt>
                        <dd className="inline">{d.qualification}</dd>
                      </div>
                      <div>
                        <dt className="inline font-semibold text-navy">Experience: </dt>
                        <dd className="inline">{d.experience}</dd>
                      </div>
                      <div>
                        <dt className="inline font-semibold text-navy">Specialisation: </dt>
                        <dd className="inline">{d.specialization}</dd>
                      </div>
                    </dl>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{d.bio}</p>
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

      <StatsBand />

      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Support Team"
            title="Eight More Specialists On Call"
            subtitle="Periodontists, endodontists, pedodontists and dental hygienists complete our 12-doctor panel."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Dr. Kavita Rane", role: "Endodontist", exp: "11 Years" },
              { name: "Dr. Suresh Gokhale", role: "Periodontist", exp: "13 Years" },
              { name: "Dr. Aarti Bhosale", role: "Pedodontist", exp: "9 Years" },
              { name: "Dr. Nilesh Pawar", role: "Prosthodontist", exp: "12 Years" },
              { name: "Dr. Ritu Sane", role: "Implantologist", exp: "8 Years" },
              { name: "Dr. Manoj Kale", role: "Oral Radiologist", exp: "10 Years" },
              { name: "Ms. Pooja Shinde", role: "Dental Hygienist", exp: "7 Years" },
              { name: "Ms. Farah Sheikh", role: "Patient Coordinator", exp: "6 Years" },
            ].map((p, i) => (
              <Reveal as="li" key={p.name} delay={(i % 4) * 70} variant="zoom">
                <div className="glass hover-lift h-full rounded-2xl p-6 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand font-display font-bold text-primary-foreground">
                    {p.name.split(" ")[1]?.charAt(0) ?? p.name.charAt(0)}
                  </span>
                  <h3 className="mt-4 font-display text-sm font-semibold text-navy">{p.name}</h3>
                  <p className="mt-1 text-xs text-sky">{p.role}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{p.exp} experience</p>
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
