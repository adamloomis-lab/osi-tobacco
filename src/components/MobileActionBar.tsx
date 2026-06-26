import { Phone, MessageSquare, MapPin } from 'lucide-react'
import { company } from '../data/site'

// Sticky mobile action bar — the primary actions one thumb-tap away on every page.
// Mobile only (hidden on lg+); sits above content, below the age-gate modal.
const items = [
  { href: company.phoneHref, label: 'Call', Icon: Phone, primary: true },
  { href: company.textHref, label: 'Text', Icon: MessageSquare },
  { href: company.mapsDir, label: 'Directions', Icon: MapPin, external: true },
]

export default function MobileActionBar() {
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-outline-variant bg-background/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      {items.map(({ href, label, Icon, primary, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className={`flex flex-col items-center justify-center gap-1 py-3 font-body text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors ${primary ? 'bg-gold text-on-gold' : 'text-cream hover:text-gold'}`}
        >
          <Icon size={20} aria-hidden="true" />
          {label}
        </a>
      ))}
    </nav>
  )
}
