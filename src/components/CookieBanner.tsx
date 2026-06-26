import { useState, useEffect } from 'react'
import { Link } from 'wouter'

const STORAGE_KEY = 'cookie-consent'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return
    const timer = setTimeout(() => setVisible(true), 700)
    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setVisible(false)
  }

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="fixed bottom-3 left-3 right-3 z-[9999] mx-auto max-w-2xl rounded border border-outline bg-surface px-5 py-4 shadow-[0_8px_40px_-8px_rgba(0,0,0,0.7)]"
    >
      <p className="text-body-sm text-on-surface-variant">
        This site uses cookies to keep things running smoothly. We never sell your data.{' '}
        <Link href="/privacy" className="text-gold underline-offset-2 hover:underline">
          Privacy Policy
        </Link>
      </p>
      <div className="mt-3 flex flex-wrap gap-3">
        <button
          onClick={accept}
          className="inline-flex items-center justify-center rounded border border-gold bg-gold/10 px-5 py-2 text-[13px] font-medium uppercase tracking-[0.12em] text-gold transition-colors hover:bg-gold/20"
        >
          Accept
        </button>
        <button
          onClick={decline}
          className="inline-flex items-center justify-center rounded border border-outline px-5 py-2 text-[13px] font-medium uppercase tracking-[0.12em] text-on-surface-variant transition-colors hover:border-cream/50 hover:text-cream"
        >
          No Thanks
        </button>
      </div>
    </div>
  )
}
