import {
  Award,
  Thermometer,
  Leaf,
  Boxes,
  Quote,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  Star,
} from 'lucide-react'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'
import HoursList from '../components/HoursList'
import {
  company,
  distinctions,
  brands,
  featuredBrands,
  agingPillars,
  testimonials,
} from '../data/site'

const distinctionIcons = [Award, Star, Boxes]
const pillarIcons = [Thermometer, Leaf, Boxes]

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/poster-hero.webp"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="smoke-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-background/30" />

        <div className="container-x relative z-10 pt-24 text-center">
          <p className="eyebrow rise rise-1">Canton, Ohio · Est. Stark County’s Finest</p>
          <h1 className="rise rise-2 mx-auto mt-6 max-w-4xl font-display text-display-lg-mobile font-semibold text-cream md:text-display-xl">
            The Largest Selection of Premium Cigars in Ohio
          </h1>
          <p className="rise rise-3 mx-auto mt-6 max-w-2xl text-body-lg text-on-surface">
            Step into the largest walk-in humidor in the Midwest, with over 2,600 facings of the world’s
            finest cigars, kept at a flawless 70/70 and waiting in our Diamond Crown lounge.
          </p>
          <div className="rise rise-4 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/humidor" variant="gold">
              Explore the Humidor <ArrowRight size={16} />
            </Button>
            <Button href="/contact" variant="ghost">
              Visit the Lounge
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-label-sm uppercase tracking-[0.24em] text-cream/60">
          Scroll to explore
        </div>
      </section>

      {/* ---------- DISTINCTIONS ---------- */}
      <section className="border-y border-outline-variant bg-surface">
        <div className="container-x grid gap-px reveal-group sm:grid-cols-3">
          {distinctions.map((d, i) => {
            const Icon = distinctionIcons[i]
            return (
              <div
                key={d}
                className="flex items-center justify-center gap-4 px-6 py-10 text-center sm:text-left"
              >
                <Icon size={30} className="shrink-0 text-gold" />
                <span className="font-display text-headline-sm text-cream">{d}</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* ---------- WELCOME / ABOUT ---------- */}
      <section className="py-24 md:py-32">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative">
            <img
              src="/images/humidor-main.webp"
              alt="The walk-in humidor at OSI Tobacco"
              className="w-full rounded-lg object-cover shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-2 rounded-lg border border-gold/40 bg-background/90 px-7 py-5 text-center backdrop-blur sm:right-6">
              <div className="font-display text-display-lg-mobile font-semibold text-gold">
                2,600+
              </div>
              <div className="text-label-sm uppercase tracking-[0.2em] text-on-surface-variant">
                Facings In Stock
              </div>
            </div>
          </div>

          <div className="reveal">
            <p className="eyebrow">Welcome to OSI Tobacco</p>
            <h2 className="mt-4 font-display text-headline-lg text-cream md:text-[46px]">
              A Sanctuary for the Discerning Enthusiast
            </h2>
            <span className="gold-rule mt-5" />
            <p className="mt-6 text-body-lg text-on-surface-variant">
              OSI Tobacco hosts the largest walk-in cigar humidor in the Midwest, with over 2,600
              facings from quality brands like JC Newman, Davidoff, Arturo Fuente, Meerapfel, Cohiba,
              Padrón, Ashton, Oliva, Liga Privada, Alec Bradley, Rocky Patel and more.
            </p>
            <p className="mt-4 text-body-lg text-on-surface-variant">
              We carry Opus X, Diamond Crown, Padrón, Alphonso, Byron, Perdomo Limited Brands and
              Meerapfel blends, making us Stark County’s premier premium cigar retailer and lounge.
            </p>
            <ul className="check-list mt-7 space-y-3 text-body-md text-cream">
              {distinctions.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- CURATED EXCELLENCE / BRANDS ---------- */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Curated Excellence"
            title="The World’s Finest Houses, Under One Roof"
            intro="From rare allocations to everyday legends, including the only Davidoff Appointed Merchant in Stark County."
          />

          <div className="mt-16 grid gap-6 reveal-group md:grid-cols-3">
            {featuredBrands.map((b) => (
              <article
                key={b.name}
                className="group rounded-lg border border-outline-variant bg-surface-card p-8 transition-colors hover:border-gold/50"
              >
                <Leaf size={26} className="text-ember" />
                <h3 className="mt-5 font-display text-headline-sm text-cream">{b.name}</h3>
                <p className="mt-3 text-body-md text-on-surface-variant">{b.note}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-outline-variant pt-12">
            {brands.map((b) => (
              <span
                key={b}
                className="font-display text-xl text-on-surface-variant transition-colors hover:text-gold"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- STEP INSIDE (VIDEO) ---------- */}
      <section className="relative overflow-hidden py-28 md:py-36">
        <video
          className="kenburns absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/poster-humidor.webp"
          aria-hidden="true"
        >
          <source src="/videos/humidor.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/72" />
        <div className="container-x relative z-10 text-center">
          <p className="eyebrow">The Alchemy of Aging</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-headline-lg text-cream md:text-[46px]">
            Slow down. The tobacco has waited years for you.
          </h2>
          <div className="mx-auto mt-14 grid max-w-5xl gap-6 reveal-group md:grid-cols-3">
            {agingPillars.map((p, i) => {
              const Icon = pillarIcons[i]
              return (
                <div
                  key={p.title}
                  className="rounded-lg border border-outline-variant bg-surface/80 p-8 text-left backdrop-blur"
                >
                  <Icon size={28} className="text-gold" />
                  <h3 className="mt-5 font-display text-headline-sm text-cream">{p.title}</h3>
                  <p className="mt-3 text-body-md text-on-surface-variant">{p.blurb}</p>
                </div>
              )
            })}
          </div>
          <div className="mt-12">
            <Button href="/humidor" variant="gold">
              Tour the Humidor <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="py-24 md:py-32">
        <div className="container-x">
          <SectionHeading eyebrow="From Our Guests" title="The Word Around Stark County" />
          <div className="mt-14 grid gap-6 reveal-group md:grid-cols-2">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="relative rounded-lg border border-outline-variant bg-surface-card p-9"
              >
                <Quote size={36} className="text-gold/40" />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-4 font-display text-2xl leading-relaxed text-cream">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 text-label-lg uppercase tracking-[0.18em] text-gold">
                  {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VISIT BAND ---------- */}
      <section className="relative overflow-hidden">
        <img
          src="/images/lounge.webp"
          alt=""
          className="parallax absolute -inset-y-[14%] h-[128%] w-full object-cover"
          style={{ ['--p-amt' as string]: '32px' }}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="container-x relative z-10 grid gap-12 py-24 md:grid-cols-2 md:py-28">
          <div className="reveal">
            <p className="eyebrow">Come Experience OSI Tobacco</p>
            <h2 className="mt-4 font-display text-headline-lg text-cream md:text-[46px]">
              Pull Up a Leather Chair
            </h2>
            <span className="gold-rule mt-5" />
            <p className="mt-6 max-w-md text-body-lg text-on-surface-variant">
              Find us in Canton, just off Easton Street NE. Browse the humidor, settle into the
              lounge, and let our team help you find your next great smoke.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href={company.mapsDir} variant="gold">
                <MapPin size={16} /> Get Directions
              </Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="reveal grid gap-5 sm:grid-cols-2">
            <div className="rounded-lg border border-outline-variant bg-surface-card p-7">
              <MapPin size={24} className="text-gold" />
              <h3 className="mt-4 font-display text-headline-sm text-cream">Location</h3>
              <a
                href={company.mapsDir}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-body-md text-on-surface-variant hover:text-gold"
              >
                {company.address.street}
                <br />
                {company.address.city}, {company.address.state} {company.address.zip}
              </a>
              <a
                href={company.phoneHref}
                className="mt-5 inline-flex items-center gap-2 text-body-md text-cream hover:text-gold"
              >
                <Phone size={17} className="text-gold" /> {company.phone}
              </a>
            </div>
            <div className="rounded-lg border border-outline-variant bg-surface-card p-7">
              <Clock size={24} className="text-gold" />
              <h3 className="mt-4 font-display text-headline-sm text-cream">Hours</h3>
              <HoursList short className="mt-3" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
