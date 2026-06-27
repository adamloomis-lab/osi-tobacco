import { useState } from 'react'
import { Link, useLocation } from 'wouter'
import { Menu, Phone } from 'lucide-react'
import Logo from './Logo'
import MobileMenu from './MobileMenu'
import { company } from '../data/site'
import { useScrolled } from '../hooks/useScrolled'

const links = [
  { label: 'Home', href: '/' },
  { label: 'The Humidor', href: '/humidor' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [location] = useLocation()
  const scrolled = useScrolled(40)

  // Solid smoky bar once scrolled (or menu open); translucent over the hero.
  const solid = scrolled || open
  const linkBase =
    'font-body text-[13px] font-medium uppercase tracking-[0.18em] transition-colors hover:text-gold'

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        solid
          ? 'border-b border-outline-variant bg-background/92 backdrop-blur-md'
          : 'border-b border-transparent bg-gradient-to-b from-black/55 to-transparent'
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => {
            const active = l.href === location
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`${linkBase} ${active ? 'text-gold' : 'text-cream'}`}
              >
                {l.label}
              </Link>
            )
          })}
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 font-body text-[13px] font-medium uppercase tracking-[0.12em] text-cream transition-colors hover:text-gold"
          >
            <Phone size={15} className="text-gold" /> {company.phone}
          </a>
          <a
            href={company.mapsDir}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded bg-gold px-6 py-3 font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-on-gold transition-colors hover:bg-gold-light"
          >
            Visit Us
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="text-cream lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-haspopup="dialog"
        >
          <Menu size={28} />
        </button>
      </nav>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        links={links}
        location={location}
      />
    </header>
  )
}
