import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import {
  MapPin,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Send,
  ArrowRight,
  Loader2,
  HelpCircle,
  Cigarette,
  Sofa,
  CalendarDays,
  Gift,
  MessageCircle,
  type LucideIcon,
} from 'lucide-react'
import { company } from '../data/site'
import HoursList from '../components/HoursList'
import { FloatField, SuccessCheck } from '../components/FluidField'

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')

// Single-select icon cards. The submitted `value` is what lands in the Netlify
// submission under `subject`; literal lucide icons only, no AI-cliche glyphs.
const SUBJECT_OPTIONS: { value: string; label: string; icon: LucideIcon }[] = [
  { value: 'General Question', label: 'General question', icon: HelpCircle },
  { value: 'Cigar Recommendation', label: 'Cigar advice', icon: Cigarette },
  { value: 'Lounge Visit', label: 'Lounge visit', icon: Sofa },
  { value: 'Private Event', label: 'Private event', icon: CalendarDays },
  { value: 'Gifts & Special Orders', label: 'Gifts & orders', icon: Gift },
  { value: 'Other', label: 'Something else', icon: MessageCircle },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [sentName, setSentName] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(false)
    setSending(true)
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      })
      if (!res.ok) throw new Error()
      setSentName(formData.name.trim().split(' ')[0])
      setSent(true)
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' })
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* ---------- PAGE HERO ---------- */}
      <section className="relative flex min-h-[52vh] items-center overflow-hidden">
        <img
          src="/images/lounge.webp"
          alt="The OSI Tobacco lounge"
          className="kenburns absolute inset-0 h-full w-full object-cover"
        />
        <div className="smoke-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-background/55" />
        <div className="container-x relative z-10 pt-24 text-center">
          <p className="eyebrow rise rise-1">Come Experience OSI Tobacco</p>
          <h1 className="rise rise-2 mx-auto mt-5 max-w-3xl font-display text-display-lg-mobile font-semibold text-cream md:text-display-lg">
            Visit &amp; Contact
          </h1>
          <p className="rise rise-3 mx-auto mt-6 max-w-2xl text-body-lg text-on-surface">
            Find us in Canton, Ohio. Stop in to browse the humidor and relax in the lounge, or
            reach out with a question and we’ll get right back to you.
          </p>
        </div>
      </section>

      {/* ---------- DETAILS + FORM ---------- */}
      <section className="py-24 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          {/* Details */}
          <div className="reveal">
            <p className="eyebrow">Our Location</p>
            <h2 className="mt-4 font-display text-headline-lg text-cream">2688 Easton St NE</h2>
            <span className="gold-rule mt-5" />

            <ul className="mt-8 space-y-5 text-body-md">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="mt-0.5 shrink-0 text-gold" />
                <a
                  href={company.mapsDir}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface hover:text-gold"
                >
                  {company.addressOneLine}
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Phone size={20} className="mt-0.5 shrink-0 text-gold" />
                <a href={company.phoneHref} className="text-on-surface hover:text-gold">
                  {company.phone}
                </a>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded border border-outline text-cream transition-colors hover:border-gold hover:text-gold"
                aria-label="OSI Tobacco on Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded border border-outline text-cream transition-colors hover:border-gold hover:text-gold"
                aria-label="OSI Tobacco on Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>

            <div className="mt-10 rounded-lg border border-outline-variant bg-surface-card p-7">
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-gold" />
                <h3 className="font-display text-headline-sm text-cream">Hours</h3>
              </div>
              <HoursList className="mt-4 -mx-2" />
            </div>
          </div>

          {/* Form */}
          <div className="reveal">
            <div className="rounded-lg border border-outline-variant bg-surface-card p-8 md:p-10">
              <p className="eyebrow">Send a Message</p>
              <h2 className="mt-4 font-display text-headline-md text-cream">Get in Touch</h2>

              {sent ? (
                <div
                  className="mt-8 flex flex-col items-center gap-4 rounded-lg border border-gold/40 bg-gold/5 px-6 py-12 text-center"
                  style={{ animation: 'osi-pop 0.55s cubic-bezier(0.16,1,0.3,1) both' }}
                >
                  <span
                    className="flex items-center justify-center"
                    style={{ animation: 'osi-pop 0.5s 0.05s cubic-bezier(0.34,1.56,0.64,1) both' }}
                  >
                    <SuccessCheck />
                  </span>
                  <p className="font-display text-headline-sm text-cream">
                    {sentName ? `Thank You, ${sentName}!` : 'Thank You!'}
                  </p>
                  <p className="max-w-sm text-body-md text-on-surface-variant">
                    Your message is on its way to OSI Tobacco. We’ll get back to you as soon as we
                    can. Want an answer right now? Give us a call and we’ll help you today.
                  </p>
                  <a
                    href={company.phoneHref}
                    className="group relative mt-2 inline-flex items-center gap-2 overflow-hidden rounded bg-gold px-7 py-3.5 font-body text-[13px] font-semibold uppercase tracking-[0.16em] text-on-gold transition-colors hover:bg-gold-light"
                  >
                    <span
                      aria-hidden="true"
                      className="sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-md"
                    />
                    <Phone size={16} /> {company.phone}
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false)
                      setSentName('')
                    }}
                    className="mt-1 font-body text-[12px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-gold"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={onSubmit}
                  className="mt-7 space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Mirrors the icon-card selection into the Netlify payload. */}
                  <input type="hidden" name="subject" value={formData.subject} />
                  <p className="hidden">
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FloatField
                      name="name"
                      label="Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                    <FloatField
                      name="phone"
                      label="Phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>
                  <FloatField
                    name="email"
                    label="Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />

                  {/* Subject as single-select icon cards (value submits via hidden input). */}
                  <fieldset>
                    <legend className="mb-3 block font-body text-[11px] font-medium uppercase tracking-[0.18em] text-on-surface-variant">
                      What can we help with?
                    </legend>
                    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                      {SUBJECT_OPTIONS.map((o) => {
                        const active = formData.subject === o.value
                        const Icon = o.icon
                        return (
                          <button
                            key={o.value}
                            type="button"
                            aria-pressed={active}
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                subject: active ? '' : o.value,
                              }))
                            }
                            className={`flex flex-col items-start gap-2 rounded border px-3.5 py-3.5 text-left font-body text-body-md transition-all duration-200 active:scale-[0.98] ${
                              active
                                ? 'border-gold bg-gold text-on-gold shadow-[0_10px_24px_-12px_rgba(198,160,73,0.7)]'
                                : 'border-outline bg-surface text-on-surface hover:border-gold hover:bg-surface-dim'
                            }`}
                          >
                            <Icon
                              size={22}
                              strokeWidth={1.75}
                              className={active ? 'text-on-gold' : 'text-gold'}
                            />
                            <span className="text-[14px] font-medium leading-tight">{o.label}</span>
                          </button>
                        )
                      })}
                    </div>
                  </fieldset>

                  <FloatField
                    name="message"
                    label="How can we help?"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    textarea
                    rows={5}
                  />

                  {error && (
                    <p className="text-body-md text-error">
                      Oops, there was an error sending your message. Please try again later, or call{' '}
                      {company.phone}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded bg-gold px-8 py-4 font-body text-[13px] font-semibold uppercase tracking-[0.16em] text-on-gold transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <span
                      aria-hidden="true"
                      className="sheen pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-white/30 blur-md"
                    />
                    {sending ? (
                      <>
                        <Loader2 size={16} className="animate-spin" /> Sending
                      </>
                    ) : (
                      <>
                        <Send size={14} /> Send Message{' '}
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- MAP ---------- */}
      <section className="border-t border-outline-variant">
        <iframe
          title="OSI Tobacco location map"
          src={company.mapsEmbed}
          className="h-[460px] w-full grayscale-[0.2]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  )
}
