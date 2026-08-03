import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/Sections";
import { blogPosts } from "@/data/site";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Dental Health Blog | Oral Care Tips From Pune Dentists — SmileCare" },
      {
        name: "description",
        content:
          "Expert dental articles from SmileCare Pune: healthy teeth habits, checkup importance, implant guides, braces vs aligners, kids oral care and gum disease prevention.",
      },
      { property: "og:title", content: "Dental Health Blog | SmileCare Dental Hospital" },
      {
        property: "og:description",
        content: "Practical, jargon-free oral health advice written by practising specialists.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
});

function BlogPage() {
  const featured = blogPosts[0]!;
  const rest = blogPosts.slice(1);
  return (
    <SiteLayout>
      <PageHero
        breadcrumb="Blog"
        title="Dental Health Blog"
        subtitle="Advice you can act on today, written by the dentists who treat patients every day."
      />

      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <article className="glass grid overflow-hidden rounded-[2rem] lg:grid-cols-2">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
              <div className="p-8 sm:p-12">
                <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-semibold tracking-widest text-accent-foreground uppercase">
                  Featured · {featured.category}
                </span>
                <h2 className="mt-5 font-display text-2xl font-bold text-navy sm:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <p className="mt-6 text-xs text-muted-foreground">
                  {featured.date} · {featured.read}
                </p>
                <Link
                  to="/appointment"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-card transition-transform hover:-translate-y-0.5"
                >
                  Ask our dentist <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </article>
          </Reveal>

          <SectionHeading
            eyebrow="Latest Articles"
            title="More From Our Dentists"
            subtitle="Six-minute reads that save six-month problems."
          />

          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={(i % 3) * 80}>
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
                    <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-semibold tracking-widest text-accent-foreground uppercase">
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
        </div>
      </section>

      <CtaBand />
    </SiteLayout>
  );
}
