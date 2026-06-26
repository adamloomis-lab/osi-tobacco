import { Link } from 'wouter'
import { Phone, MapPin, Facebook, Instagram } from 'lucide-react'
import Logo from './Logo'
import HoursList from './HoursList'
import { company } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-outline-variant bg-surface text-on-surface-variant">
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo variant="stacked" className="h-28" />
          <p className="mt-5 max-w-xs text-body-md">{company.shortBlurb}</p>
          <div className="mt-5 flex gap-3">
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded border border-outline text-cream transition-colors hover:border-gold hover:text-gold"
              aria-label="OSI Tobacco on Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded border border-outline text-cream transition-colors hover:border-gold hover:text-gold"
              aria-label="OSI Tobacco on Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-headline-sm text-cream">Visit</h3>
          <ul className="mt-5 space-y-4 text-body-md">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
              <a href={company.mapsDir} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                {company.address.street}
                <br />
                {company.address.city}, {company.address.state} {company.address.zip}
              </a>
            </li>
            <li>
              <a href={company.phoneHref} className="flex items-start gap-3 hover:text-gold">
                <Phone size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>{company.phone}</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-headline-sm text-cream">Hours</h3>
          <HoursList short className="mt-4" />
        </div>

        <div>
          <h3 className="font-display text-headline-sm text-cream">Explore</h3>
          <ul className="mt-5 space-y-3 text-body-md">
            <li>
              <Link href="/" className="hover:text-gold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/humidor" className="hover:text-gold">
                The Humidor
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold">
                Contact &amp; Directions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-gold">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gold">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/accessibility" className="hover:text-gold">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-outline-variant">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-label-sm uppercase tracking-[0.16em] text-muted sm:flex-row">
          <span>
            © {year} {company.name}. All rights reserved.
          </span>
          <span className="text-center">
            Must be 21 or older. Cigars are not for sale to minors.
          </span>
          <span>
            Website by{' '}
            <a
              href="https://adamloomismarketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant transition-colors hover:text-gold"
            >
              Adam Loomis Marketing
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
