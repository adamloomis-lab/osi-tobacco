import { useState } from 'react'
import { X, Thermometer, Award, Boxes, ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import { gallery, brands, exclusives, agingPillars } from '../data/site'

const pillarIcons = [Thermometer, Boxes, Award]

export default function Humidor() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <>
      {/* ---------- PAGE HERO ---------- */}
      <section className="relative flex min-h-[68vh] items-center overflow-hidden">
        <img
          src="/images/humidor-1.webp"
          alt="Inside the OSI Tobacco walk-in humidor"
          className="kenburns absolute inset-0 h-full w-full object-cover"
        />
        <div className="smoke-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-background/55" />
        <div className="container-x relative z-10 pt-24 text-center">
          <p className="eyebrow rise rise-1">The Collection</p>
          <h1 className="rise rise-2 mx-auto mt-5 max-w-3xl font-display text-display-lg-mobile font-semibold text-cream md:text-display-lg">
            The Humidor
          </h1>
          <p className="rise rise-3 mx-auto mt-6 max-w-2xl text-body-lg text-on-surface">
            The largest walk-in cigar humidor in the Midwest, with over 2,600 facings, held at a steady
            70°F and 70% humidity. Shop our amazing selection today.
          </p>
        </div>
      </section>

      {/* ---------- CLIMATE / 70-70 ---------- */}
      <section className="bg-surface py-24 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="70 / 70 Precision"
            title="Every Cigar at the Peak of Its Profile"
            intro="Our walk-in humidor is held at a steady 70/70 around the clock, so the boutique limited runs and the icons alike rest exactly as their makers intended."
          />
          <div className="mt-14 grid gap-6 reveal-group md:grid-cols-3">
            {agingPillars.map((p, i) => {
              const Icon = pillarIcons[i]
              return (
                <div
                  key={p.title}
                  className="rounded-lg border border-outline-variant bg-surface-card p-8"
                >
                  <Icon size={28} className="text-gold" />
                  <h3 className="mt-5 font-display text-headline-sm text-cream">{p.title}</h3>
                  <p className="mt-3 text-body-md text-on-surface-variant">{p.blurb}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------- GALLERY ---------- */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Inside the Humidor"
            title="A Walk Through the Collection"
            align="left"
          />
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <button
                key={g.src}
                type="button"
                onClick={() => setActive(i)}
                className={`group relative overflow-hidden rounded-lg ${
                  i % 5 === 0 ? 'col-span-2 row-span-2' : ''
                }`}
                aria-label={`View ${g.alt}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- EXCLUSIVES ---------- */}
      <section className="border-y border-outline-variant bg-surface py-24 md:py-28">
        <div className="container-x text-center">
          <p className="eyebrow">Limited &amp; Exclusive</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-headline-lg text-cream md:text-[46px]">
            Allocations You Won’t Find Down the Road
          </h2>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
            {exclusives.map((e) => (
              <span
                key={e}
                className="rounded-full border border-gold/40 px-5 py-2 font-display text-lg text-gold"
              >
                {e}
              </span>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-body-md text-on-surface-variant">
            Plus the full range from {brands.slice(0, 8).join(', ')} and many more, over 2,600
            facings in all.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="gold">
              Plan Your Visit <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- LIGHTBOX ---------- */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-background/95 p-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 text-cream transition-colors hover:text-gold"
            aria-label="Close"
            onClick={() => setActive(null)}
          >
            <X size={32} />
          </button>
          <img
            src={gallery[active].src}
            alt={gallery[active].alt}
            className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
