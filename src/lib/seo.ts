import { company, openingHours, brands, exclusives, testimonials } from '../data/site'

// Production target domain. Canonicals, sitemap, OG and schema all point here so
// SEO value lands on the live host the moment DNS flips from the old Duda site.
export const SITE_URL = 'https://www.ositobacco.com'

const OG_IMAGE = '/images/humidor-main.webp'

export const abs = (path: string) => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

// Netlify serves pages with a trailing slash; keep canonical/sitemap URLs aligned.
export const pageUrl = (path: string) =>
  abs(path === '/' ? '/' : path.endsWith('/') ? path : `${path}/`)

function openingHoursSpec() {
  return openingHours.map((o) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: o.days,
    opens: o.opens,
    closes: o.closes,
  }))
}

export function localBusinessSchema() {
  const a = company.address
  return {
    '@context': 'https://schema.org',
    '@type': ['TobaccoShop', 'Store', 'LocalBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: company.name,
    url: SITE_URL,
    image: abs(OG_IMAGE),
    logo: abs('/images/osi-logo-dark.png'),
    telephone: company.phone,
    priceRange: '$$$',
    description: company.shortBlurb,
    slogan: company.tagline,
    address: {
      '@type': 'PostalAddress',
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.state,
      postalCode: a.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: company.geo.lat,
      longitude: company.geo.lng,
    },
    areaServed: [
      { '@type': 'City', name: 'Canton, OH' },
      { '@type': 'AdministrativeArea', name: 'Stark County, OH' },
    ],
    openingHoursSpecification: openingHoursSpec(),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Premium Cigar Brands',
      itemListElement: [...brands, ...exclusives].map((b) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Product', name: b, category: 'Premium Cigars' },
      })),
    },
    sameAs: [company.social.facebook, company.social.instagram],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: company.name,
    publisher: { '@id': `${SITE_URL}/#business` },
  }
}

function reviewSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TobaccoShop',
    '@id': `${SITE_URL}/#business`,
    name: company.name,
    review: testimonials.map((t) => ({
      '@type': 'Review',
      reviewBody: t.quote,
      author: { '@type': 'Person', name: t.name },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    })),
  }
}

function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: pageUrl(it.path),
    })),
  }
}

export type PageMeta = {
  title: string
  description: string
  canonical: string
  ogImage: string
  jsonLd: object[]
}

export function getPageMeta(rawPath: string): PageMeta {
  const path = rawPath !== '/' ? rawPath.replace(/\/$/, '') : '/'
  const ogImage = abs(OG_IMAGE)

  switch (path) {
    case '/':
      return {
        title: 'OSI Tobacco | Largest Selection of Premium Cigars in Ohio',
        description: `${company.shortBlurb} The only Davidoff Appointed Merchant in Stark County. Call ${company.phone}.`,
        canonical: pageUrl('/'),
        ogImage,
        jsonLd: [localBusinessSchema(), websiteSchema(), reviewSchema()],
      }
    case '/humidor':
      return {
        title: 'The Humidor | Premium Cigar Collection, OSI Tobacco, Canton OH',
        description:
          'Step inside the largest walk-in humidor in the Midwest, over 2,600 facings from Davidoff, Arturo Fuente, Padrón, Oliva, Liga Privada and more, held at a steady 70/70.',
        canonical: pageUrl('/humidor'),
        ogImage: abs('/images/humidor-1.webp'),
        jsonLd: [
          localBusinessSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'ImageGallery',
            name: 'The Humidor at OSI Tobacco',
            url: pageUrl('/humidor'),
            isPartOf: { '@id': `${SITE_URL}/#website` },
          },
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'The Humidor', path: '/humidor' },
          ]),
        ],
      }
    case '/contact':
      return {
        title: 'Contact OSI Tobacco | Visit Our Canton, OH Cigar Lounge',
        description: `Visit OSI Tobacco at ${company.addressOneLine}. Hours, directions, and contact details for Stark County's premier premium cigar retailer and lounge. Call ${company.phone}.`,
        canonical: pageUrl('/contact'),
        ogImage: abs('/images/lounge.webp'),
        jsonLd: [
          localBusinessSchema(),
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            url: pageUrl('/contact'),
            about: { '@id': `${SITE_URL}/#business` },
          },
          breadcrumb([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ],
      }
    default:
      return {
        title: 'Page Not Found | OSI Tobacco',
        description: `Sorry, we couldn't find that page. OSI Tobacco is Stark County's premier premium cigar retailer and lounge in Canton, Ohio.`,
        canonical: pageUrl(path),
        ogImage,
        jsonLd: [localBusinessSchema()],
      }
  }
}

export const ALL_ROUTES: string[] = ['/', '/humidor', '/contact']
