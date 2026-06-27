import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import { X, Phone, MapPin, Clock, ArrowRight, Facebook, Instagram } from 'lucide-react'
import Logo from './Logo'
import { company } from '../data/site'

export interface MobileMenuProps {
  readonly open: boolean
  readonly onClose: () => void
  readonly links: { label: string; href: string }[]
  readonly location: string
}

// Full-screen, high-trust mobile navigation. Backdrop-blurred near-black panel
// with a gold glow, staggered serif link entrance, and prominent contact CTAs.
// Keeps the dark luxury OSI feel. aria-modal + Esc + scroll lock.
export default function MobileMenu({ open, onClose, links, location }: MobileMenuProps) {
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
      const id = requestAnimationFrame(() => setShown(true))
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
      }
      window.addEventListener('keydown', onKey)
      return () => {
        cancelAnimationFrame(id)
        window.removeEventListener('keydown', onKey)
        document.body.style.overflow = ''
      }
    }
    setShown(false)
    document.body.style.overflow = ''
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[60] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          shown ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Panel */}
      <div
        className={`relative ml-auto flex h-full w-full max-w-sm flex-col overflow-y-auto border-l border-outline-variant bg-background shadow-[0_0_80px_rgba(198,160,73,0.12)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          shown ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex min-h-full flex-col px-7 pb-10 pt-6">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-cream transition-colors hover:border-gold hover:text-gold"
            >
              <X size={22} />
            </button>
          </div>

          <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-3 py-1.5 font-body text-[11px] font-bold uppercase tracking-[0.16em] text-on-gold">
            <span className="pulse-soft h-1.5 w-1.5 rounded-full bg-on-gold" /> Walk-In Humidor Open
          </span>

          <nav className="mt-7 flex flex-col">
            {links.map((l, i) => {
              const active = l.href === location
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={onClose}
                  className={`group flex items-center justify-between border-b border-outline-variant py-4 font-display text-headline-md uppercase transition-all duration-500 hover:text-gold ${
                    active ? 'text-gold' : 'text-cream'
                  } ${shown ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}
                  style={{ transitionDelay: `${120 + i * 70}ms` }}
                >
                  {l.label}
                  <ArrowRight
                    size={20}
                    className="text-outline transition-all group-hover:translate-x-1 group-hover:text-gold"
                  />
                </Link>
              )
            })}
          </nav>

          <div
            className={`mt-8 flex flex-col gap-3 transition-all duration-500 ${
              shown ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: `${120 + links.length * 70 + 60}ms` }}
          >
            <a
              href={company.phoneHref}
              className="flex items-center justify-center gap-2 rounded bg-gold px-6 py-4 font-body text-[13px] font-bold uppercase tracking-[0.16em] text-on-gold shadow-[0_12px_30px_-10px_rgba(198,160,73,0.55)]"
            >
              <Phone size={18} /> Call {company.phone}
            </a>
            <a
              href={company.mapsDir}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded border border-gold/60 px-6 py-4 font-body text-[13px] font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:bg-gold hover:text-on-gold"
            >
              <MapPin size={17} /> Get Directions
            </a>
          </div>

          <div className="mt-auto space-y-3 pt-10 font-body text-body-md text-on-surface-variant">
            <a
              href={company.mapsDir}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-cream"
            >
              <MapPin size={18} className="shrink-0 text-gold" /> {company.addressOneLine}
            </a>
            <p className="flex items-center gap-3">
              <Clock size={18} className="shrink-0 text-gold" /> Mon to Thu 11am to 10pm
            </p>
            <div className="flex items-center gap-4 pt-1">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OSI Tobacco on Facebook"
                className="flex items-center gap-2 hover:text-cream"
              >
                <Facebook size={18} className="shrink-0 text-gold" /> Facebook
              </a>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="OSI Tobacco on Instagram"
                className="flex items-center gap-2 hover:text-cream"
              >
                <Instagram size={18} className="shrink-0 text-gold" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
