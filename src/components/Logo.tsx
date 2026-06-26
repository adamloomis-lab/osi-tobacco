import { Link } from 'wouter'

// OSI Tobacco logo. The brand's tobacco-leaf mark (warm browns/oranges) reads
// well on the dark theme; the original wordmark is solid black, so on dark we
// pair the leaf mark with a cream serif wordmark (bar) or use the recolored
// cream-wordmark logo (stacked) — both stay fully legible on the smoky bg.
export default function Logo({
  variant = 'bar',
  className = '',
}: {
  readonly variant?: 'bar' | 'stacked'
  readonly className?: string
}) {
  if (variant === 'stacked') {
    return (
      <Link href="/" aria-label="OSI Tobacco — home" className={`inline-flex ${className}`}>
        <img
          src="/images/osi-logo-dark.png"
          alt="OSI Tobacco"
          width={320}
          height={360}
          className="h-auto w-auto"
        />
      </Link>
    )
  }

  return (
    <Link
      href="/"
      aria-label="OSI Tobacco — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <img
        src="/images/osi-leaf.png"
        alt=""
        width={120}
        height={90}
        className="h-10 w-auto shrink-0 sm:h-11"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl font-semibold tracking-wide text-cream sm:text-[26px]">
          OSI
        </span>
        <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.42em] text-gold">
          Tobacco
        </span>
      </span>
    </Link>
  )
}
