import { useEffect, useState } from 'react'
import { Link, useLocation } from 'wouter'
import { ArrowRight, MapPin } from 'lucide-react'

// Desktop-only floating "Visit Us" pill, revealed once the visitor scrolls past
// the hero. A glowing, sheened antique-gold capsule that reads as premium.
export default function StickyVisit() {
  const [show, setShow] = useState(false)
  const [location] = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.7)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location])

  // Hide on the contact page — the form and address are already there.
  if (location === '/contact') return null

  return (
    <Link
      href="/contact"
      className={`group glow-pulse fixed bottom-8 right-8 z-40 hidden items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-br from-gold to-gold-dark px-7 py-4 font-body text-[12px] font-bold uppercase tracking-[0.16em] text-on-gold ring-1 ring-white/15 transition-all duration-300 hover:scale-[1.04] lg:flex ${
        show
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-5 opacity-0'
      }`}
    >
      <span
        aria-hidden="true"
        className="sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-md"
      />
      <MapPin size={17} /> Visit Us
      <ArrowRight
        size={17}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  )
}
