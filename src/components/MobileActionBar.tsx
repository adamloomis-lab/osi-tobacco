import { Phone, MapPin, MessageSquare } from 'lucide-react'
import { Link, useLocation } from 'wouter'
import { company } from '../data/site'

// Elevated floating action capsule — the primary actions one thumb-tap away on
// every page. Off the screen edge, blurred near-black backdrop, big shadow.
// Glassy Call + Directions flank a gold PRIMARY "Contact" with glow-pulse +
// sheen. Mobile only (hidden on lg+); sits above content, below the age gate.
export default function MobileActionBar() {
  const [location] = useLocation()

  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-3 bottom-3 z-40 lg:hidden"
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex items-stretch gap-2 rounded-full border border-white/10 bg-background/85 p-1.5 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.85)] backdrop-blur-md">
        {/* Call (glassy) */}
        <a
          href={company.phoneHref}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-full py-2.5 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-cream transition-colors hover:text-gold active:scale-[0.97]"
        >
          <Phone size={19} aria-hidden="true" />
          Call
        </a>

        {/* Text (glassy) */}
        <a
          href={company.textHref}
          className="flex flex-1 flex-col items-center justify-center gap-0.5 rounded-full py-2.5 font-body text-[11px] font-semibold uppercase tracking-[0.12em] text-cream transition-colors hover:text-gold active:scale-[0.97]"
        >
          <MessageSquare size={19} aria-hidden="true" />
          Text
        </a>

        {/* Primary — Contact (gold, glow-pulse + sheen) */}
        {location === '/contact' ? (
          <a
            href={company.mapsDir}
            target="_blank"
            rel="noopener noreferrer"
            className="group glow-pulse relative flex flex-[1.4] items-center justify-center gap-1.5 overflow-hidden rounded-full bg-gold px-3 py-2.5 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-on-gold transition-transform active:scale-[0.97]"
          >
            <span
              aria-hidden="true"
              className="sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/35 blur-md"
            />
            <MapPin size={18} aria-hidden="true" /> Directions
          </a>
        ) : (
          <Link
            href="/contact"
            className="group glow-pulse relative flex flex-[1.4] items-center justify-center gap-1.5 overflow-hidden rounded-full bg-gold px-3 py-2.5 font-body text-[11px] font-bold uppercase tracking-[0.12em] text-on-gold transition-transform active:scale-[0.97]"
          >
            <span
              aria-hidden="true"
              className="sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/35 blur-md"
            />
            <MapPin size={18} aria-hidden="true" /> Visit Us
          </Link>
        )}
      </div>
    </nav>
  )
}
