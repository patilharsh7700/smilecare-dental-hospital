import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import {
  BeforeAfterSlider,
  CtaBand,
  PageHero,
  SectionHeading,
} from "@/components/site/Sections";
import { beforeAfter, gallery, galleryFilters } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Smile Gallery | Before & After Dental Results — SmileCare Pune" },
      {
        name: "description",
        content:
          "Browse our smile gallery: clinic photos, patient smiles, treatment moments, before-and-after transformations, equipment and doctors at SmileCare Dental Hospital Pune.",
      },
      { property: "og:title", content: "Smile Gallery | SmileCare Dental Hospital" },
      {
        property: "og:description",
        content: "Real smile transformations — whitening, braces, implants and full smile makeovers.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<null | { src: string; title: string }>(null);
  const items = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  return (
    <SiteLayout>
      <PageHero
        breadcrumb="Smile Gallery"
        title="Smile Gallery"
        subtitle="Our clinic, our team and the transformations we are proudest of."
      />

      <section className="section">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Gallery"
            title="A Look Inside SmileCare"
            subtitle="Filter through our hospital, patients, treatments and results."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {galleryFilters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-colors ${
                  filter === f
                    ? "bg-gradient-brand text-primary-foreground shadow-card"
                    : "border border-border text-navy hover:border-sky hover:text-sky"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry gallery */}
          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            {items.map((g, i) => (
              <Reveal key={g.title + i} delay={(i % 3) * 70} variant="zoom">
                <button
                  type="button"
                  onClick={() => setLightbox({ src: g.src, title: g.title })}
                  className="group relative block w-full overflow-hidden rounded-3xl shadow-card"
                >
                  <img
                    src={g.src}
                    alt={g.title}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/85 via-transparent to-transparent p-5 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-left">
                      <span className="block text-xs text-sky">{g.category}</span>
                      <span className="block font-display text-sm font-semibold text-navy-foreground">
                        {g.title}
                      </span>
                    </span>
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Before & After"
            title="Drag To See The Transformation"
            subtitle="Real patient results from whitening, braces, implants and complete smile makeovers."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {beforeAfter.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 80}>
                <BeforeAfterSlider {...b} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[95] flex items-center justify-center bg-navy/85 p-4 backdrop-blur"
        >
          <figure className="max-h-full max-w-4xl animate-scale-in">
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="max-h-[80vh] w-full rounded-3xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-navy-foreground">
              {lightbox.title} — tap anywhere to close
            </figcaption>
          </figure>
        </div>
      )}

      <CtaBand />
    </SiteLayout>
  );
}
