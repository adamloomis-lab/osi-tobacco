import { company } from '../data/site'

export default function Accessibility() {
  return (
    <>
      {/* ---------- PAGE HERO ---------- */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden">
        <div className="smoke-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="container-x relative z-10 pt-24 text-center">
          <p className="eyebrow rise rise-1">Legal</p>
          <h1 className="rise rise-2 mx-auto mt-5 max-w-3xl font-display text-display-lg-mobile font-semibold text-cream md:text-display-lg">
            Accessibility Statement
          </h1>
          <p className="rise rise-3 mt-4 text-body-md text-on-surface-variant">
            Updated June 2026
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
                This website is built to WCAG 2.1 AA, the standard referenced by the ADA for web
                accessibility. We review and update our accessibility practices on an ongoing basis.
              </p>
            </div>

            <div>
              <h2 className="font-display text-headline-md text-cream mb-4">What we have done</h2>
              <span className="gold-rule mb-6" />
              <p className="mb-4">
                We have taken the following steps to make this site accessible to as many visitors
                as possible:
              </p>
              <ul className="list-disc list-inside space-y-3 text-on-surface">
                <li>
                  <strong className="text-cream">Keyboard navigation:</strong> Skip links allow
                  keyboard and screen reader users to bypass navigation and get straight to the main
                  content.
                </li>
                <li>
                  <strong className="text-cream">Focus indicators:</strong> A visible outline appears
                  on every interactive element when navigated by keyboard.
                </li>
                <li>
                  <strong className="text-cream">Color contrast:</strong> Text colors meet the 4.5:1
                  minimum contrast ratio for readability by people with low vision.
                </li>
                <li>
                  <strong className="text-cream">Screen reader labels:</strong> All form fields,
                  buttons, and interactive elements have descriptive labels.
                </li>
                <li>
                  <strong className="text-cream">Motion sensitivity:</strong> Animations
                  automatically reduce for users who have the Reduce Motion preference enabled on
                  their device.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-headline-md text-cream mb-4">Report an issue</h2>
              <span className="gold-rule mb-6" />
              <p>
                If you encounter any accessibility barrier on this site, please contact us and we
                will address it promptly. You can reach us by phone at{' '}
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
