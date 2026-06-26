import { company } from '../data/site'

export default function Terms() {
  return (
    <>
      {/* ---------- PAGE HERO ---------- */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden">
        <div className="smoke-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-background/80" />
        <div className="container-x relative z-10 pt-24 text-center">
          <p className="eyebrow rise rise-1">Legal</p>
          <h1 className="rise rise-2 mx-auto mt-5 max-w-3xl font-display text-display-lg-mobile font-semibold text-cream md:text-display-lg">
            Terms of Use
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
              <h2 className="font-display text-headline-md text-cream mb-4">Agreement to terms</h2>
              <span className="gold-rule mb-6" />
              <p>
                By using this website, you agree to the following terms. Please read them carefully.
                If you do not agree with any part of these terms, you should not use this site.
              </p>
            </div>

            <div>
              <h2 className="font-display text-headline-md text-cream mb-4">Use of this site</h2>
              <span className="gold-rule mb-6" />
              <p className="mb-4">
                This website is provided for informational purposes about {company.name} and its
                products and services. You agree not to:
              </p>
              <ul className="list-disc list-inside space-y-3 text-on-surface">
                <li>Use the site for any unlawful purpose or in violation of any applicable laws or regulations.</li>
                <li>Infringe on the rights of others, including intellectual property rights.</li>
                <li>Attempt to gain unauthorized access to any portion of the site or its related systems.</li>
                <li>Transmit any harmful, offensive, or disruptive content through the site.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-headline-md text-cream mb-4">Intellectual property</h2>
              <span className="gold-rule mb-6" />
              <p>
                All content on this website, including text, images, graphics, logos, and design
                elements, is owned by {company.name} or its licensors and is protected by applicable
                intellectual property laws. You may not reproduce, distribute, or create derivative
                works from any content on this site without our express written permission.
              </p>
            </div>

            <div>
              <h2 className="font-display text-headline-md text-cream mb-4">Accuracy of information</h2>
              <span className="gold-rule mb-6" />
              <p>
                We strive to keep the information on this site accurate and up to date. However,
                we make no guarantees about the completeness, accuracy, or currency of any
                information provided. Hours, pricing, product availability, and other details
                may change without notice.
              </p>
            </div>

            <div>
              <h2 className="font-display text-headline-md text-cream mb-4">Limitation of liability</h2>
              <span className="gold-rule mb-6" />
              <p>
                To the fullest extent permitted by law, {company.name} is not liable for any
                direct, indirect, incidental, or consequential damages arising from your use of,
                or inability to use, this website or the information contained on it. Your use of
                this site is at your own risk.
              </p>
            </div>

            <div>
              <h2 className="font-display text-headline-md text-cream mb-4">Changes to these terms</h2>
              <span className="gold-rule mb-6" />
              <p>
                We may update these terms at any time without prior notice. The date at the top
                of this page reflects the most recent revision. Your continued use of the site
                following any changes constitutes your acceptance of the updated terms.
              </p>
            </div>

            <div>
              <h2 className="font-display text-headline-md text-cream mb-4">Contact us</h2>
              <span className="gold-rule mb-6" />
              <p>
                If you have questions about these terms, please{' '}
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
