import { useState } from 'react'
import type { FormEvent } from 'react'
import { MapPin, Phone, Clock, Facebook, Instagram, Check } from 'lucide-react'
import { company } from '../data/site'
import HoursList from '../components/HoursList'

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(false)
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form) as never) as Record<string, string>
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...data }),
      })
      if (!res.ok) throw new Error()
      setSent(true)
      form.reset()
    } catch {
      setError(true)
    }
  }

  const field =
    'w-full rounded border border-outline bg-surface px-4 py-3.5 text-body-md text-cream placeholder:text-muted focus-visible:border-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold/40'

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
                <div className="mt-8 flex flex-col items-center gap-4 rounded-lg border border-gold/40 bg-gold/5 px-6 py-12 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-on-gold">
                    <Check size={28} />
                  </span>
                  <p className="font-display text-headline-sm text-cream">Thank you!</p>
                  <p className="text-body-md text-on-surface-variant">
                    Thank you for contacting us. We’ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={onSubmit}
                  className="mt-7 space-y-4"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="sr-only">Name</label>
                      <input className={field} id="name" type="text" name="name" placeholder="Name" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="sr-only">Phone</label>
                      <input className={field} id="phone" type="tel" name="phone" placeholder="Phone" />
                    </div>
                  </div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input className={field} id="email" type="email" name="email" placeholder="Email" required />
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    className={field}
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can we help?"
                    required
                  />
                  {error && (
                    <p className="text-body-md text-error">
                      Oops, there was an error sending your message. Please try again later, or call{' '}
                      {company.phone}.
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full rounded bg-gold px-8 py-4 font-body text-[13px] font-semibold uppercase tracking-[0.16em] text-on-gold transition-colors hover:bg-gold-light"
                  >
                    Send Message
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
