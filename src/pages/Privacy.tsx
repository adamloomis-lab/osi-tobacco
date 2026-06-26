import { company } from '../data/site'

export default function Privacy() {
  return (
    <>
      {/* ---------- PAGE HERO ---------- */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden">
        <div className="smoke-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="container-x relative z-10 pt-24 text-center">
          <p className="eyebrow rise rise-1">Legal</p>
          <h1 className="rise rise-2 mx-auto mt-5 max-w-3xl font-display text-display-lg-mobile font-semibold text-cream md:text-display-lg">
            Privacy Policy
          </h1>
          <p className="rise rise-3 mt-4 text-body-md text-on-surface-variant">
            Last updated June 2026
          </p>
        </div>
      </section>

      {/* ---------- CONTENT ---------- */}
      <section className="py-20 md:py-24">
        <div className="container-x mx-auto max-w-3xl">
          <div className="rounded-lg border border-outline-variant bg-surface-card p-8 md:p-12 space-y-10 text-body-md text-on-surface leading-relaxed">

            <div>
              <h2 className="font-display text-headline-md text-cream mb-4">Our commitment</h2>
              <span className="gold-rule mb-6" />
              <p>
                {company.name} takes your privacy seriously. This policy explains what information
                we collect when you use our website and how we use it.
              </p>
            </div>

            <div>
              <h2 className="font-display text-headline-md text-cream mb-4">Information we collect</h2>
              <span className="gold-rule mb-6" />
              <ul className="list-disc list-inside space-y-3 text-on-surface">
                <li>
                  <strong className="text-cream">Contact form submissions:</strong> When you reach
                  out through our contact form we collect your name, email address, phone number,
                  and message.
                </li>
                <li>
                  <strong className="text-cream">Payment data:</strong> We do not store any payment
                  information on this site. Any transactions are handled by third-party payment
                  processors.
                </li>
                <li>
                  <strong className="text-cream">Usage data:</strong> Our hosting provider may
                  collect basic anonymous analytics (page views, referral sources) to help us
                  understand how visitors use the site. This data is not personally identifiable.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-headline-md text-cream mb-4">How we use your information</h2>
              <span className="gold-rule mb-6" />
              <ul className="list-disc list-inside space-y-3 text-on-surface">
                <li>To respond to your inquiries and provide the information or services you request.</li>
                <li>To improve the content and usability of our website.</li>
                <li>
                  We do <strong className="text-cream">not</strong> sell, rent, or share your
                  personal information with third parties for marketing purposes.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-headline-md text-cream mb-4">Cookies</h2>
              <span className="gold-rule mb-6" />
              <p>
                This site may use essential cookies required for basic functionality (such as
                session management or security). We do not use advertising or tracking cookies.
                You can disable cookies in your browser settings, though some features of the site
                may not function as intended.
              </p>
            </div>

            <div>
              <h2 className="font-display text-headline-md text-cream mb-4">Third-party links</h2>
              <span className="gold-rule mb-6" />
              <p>
                Our website may contain links to external websites we do not operate. We are not
                responsible for the privacy practices or content of those sites and encourage you
                to review their privacy policies before providing any personal information.
              </p>
            </div>

            <div>
              <h2 className="font-display text-headline-md text-cream mb-4">Contact us</h2>
              <span className="gold-rule mb-6" />
              <p>
                If you have questions about this privacy policy, please{' '}
                <a href="/contact" className="text-gold hover:underline">
                  visit our contact page
                </a>{' '}
                or call us at{' '}
                <a href={company.phoneHref} className="text-gold hover:underline">
                  {company.phone}
                </a>
                .
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
