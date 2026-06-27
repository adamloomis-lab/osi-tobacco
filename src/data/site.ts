export const company = {
  name: 'OSI Tobacco',
  tagline: 'Largest Selection of Premium Cigars in Ohio',
  shortBlurb:
    "Stark County's premier walk-in cigar humidor and Diamond Crown lounge, with over 2,600 facings from the world's finest brands.",
  phone: '(234) 214-0868',
  phoneHref: 'tel:+12342140868',
  textHref: 'sms:+12342140868',
  address: {
    street: '2688 Easton St NE',
    city: 'Canton',
    state: 'OH',
    zip: '44721',
  },
  addressOneLine: '2688 Easton St NE, Canton, OH 44721',
  geo: { lat: 40.8735213, lng: -81.3304151 },
  mapsDir:
    'https://www.google.com/maps/dir/?api=1&destination=OSI+Tobacco+2688+Easton+St+NE+Canton+OH+44721',
  mapsEmbed:
    'https://www.google.com/maps?q=OSI+Tobacco+2688+Easton+St+NE+Canton+OH+44721&output=embed',
  social: {
    facebook: 'https://www.facebook.com/ositobacco',
    instagram: 'https://www.instagram.com/ositobaccoohio',
  },
} as const

export const hours = [
  { day: 'Monday', short: 'Mon', dow: 1, time: '11:00 am - 10:00 pm' },
  { day: 'Tuesday', short: 'Tue', dow: 2, time: '11:00 am - 10:00 pm' },
  { day: 'Wednesday', short: 'Wed', dow: 3, time: '11:00 am - 10:00 pm' },
  { day: 'Thursday', short: 'Thu', dow: 4, time: '11:00 am - 10:00 pm' },
  { day: 'Friday', short: 'Fri', dow: 5, time: '11:00 am - 11:30 pm' },
  { day: 'Saturday', short: 'Sat', dow: 6, time: '11:00 am - 11:30 pm' },
  { day: 'Sunday', short: 'Sun', dow: 0, time: '12:00 pm - 6:00 pm' },
]

// Condensed hours for compact displays (footer / hero)
export const hoursCompact = [
  { day: 'Mon - Thu', time: '11:00 am - 10:00 pm' },
  { day: 'Fri - Sat', time: '11:00 am - 11:30 pm' },
  { day: 'Sunday', time: '12:00 pm - 6:00 pm' },
]

// Schema.org openingHoursSpecification
export const openingHours = [
  { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '11:00', closes: '22:00' },
  { days: ['Friday', 'Saturday'], opens: '11:00', closes: '23:30' },
  { days: ['Sunday'], opens: '12:00', closes: '18:00' },
]

export const distinctions = [
  'Only Davidoff Appointed Merchant in Stark County',
  'Stark County’s only Diamond Crown Lounge',
  'Largest walk-in humidor in the Midwest',
]

// Marquee / curated brand list (verbatim from the original site)
export const brands = [
  'JC Newman',
  'Davidoff',
  'Arturo Fuente',
  'Meerapfel',
  'Cohiba',
  'Padrón',
  'Ashton',
  'Oliva',
  'Liga Privada',
  'Alec Bradley',
  'Rocky Patel',
  'Punch',
  'Ferio Tego',
  'Montecristo',
  'Perdomo',
  'Foundation',
]

// Exclusive / limited blends called out on the original site
export const exclusives = [
  'Opus X',
  'Diamond Crown',
  'Padrón',
  'Alphonso',
  'Byron',
  'Perdomo Limited',
  'Meerapfel',
]

export const featuredBrands = [
  {
    name: 'Davidoff',
    note: 'The only Davidoff Appointed Merchant in Stark County, including the full Davidoff and Diamond Crown lines.',
  },
  {
    name: 'Arturo Fuente',
    note: 'Home of Opus X and the legendary Fuente family blends, from Hemingway to the rarest releases.',
  },
  {
    name: 'Padrón',
    note: 'Box-pressed Nicaraguan craftsmanship. Anniversary 1964, 1926 and Family Reserve.',
  },
]

export const agingPillars = [
  {
    title: 'Climate Control',
    blurb:
      'A walk-in humidor held at a steady 70°F and 70% relative humidity, so every cigar is kept at the peak of its profile.',
  },
  {
    title: 'Curated Selection',
    blurb:
      'Over 2,600 facings, boutique limited runs alongside the icons, hand-picked by people who actually smoke them.',
  },
  {
    title: 'Properly Aged',
    blurb:
      'Cellar-aged exclusives and rare allocations rest until they are ready, never rushed onto the shelf.',
  },
]

export const testimonials = [
  {
    quote:
      "This place has the best selection I've seen in Ohio. The owner is friendly and very knowledgeable. Their prices are on the lower end as well.",
    name: 'Jamie T.',
  },
  {
    quote:
      "IMPRESSIVE selection. Better than any Pittsburgh or Columbus area cigar store I've been in, and I've been in most! The owner is very knowledgeable, personable and an all-around great gentleman. The store is absolutely incredible and the walk-in humidor is impressive.",
    name: 'Vanessa L.',
  },
]

// Humidor gallery — every photo from the live HUMIDOR page, optimized to webp.
export const gallery = [
  { src: '/images/humidor-1.webp', alt: 'Walk-in humidor aisle at OSI Tobacco' },
  { src: '/images/humidor-2.webp', alt: 'Shelves of premium cigar boxes in the humidor' },
  { src: '/images/humidor-3.webp', alt: 'Premium cigar selection at OSI Tobacco' },
  { src: '/images/humidor-4.webp', alt: 'Boutique cigar brands on display' },
  { src: '/images/humidor-7.webp', alt: 'Inside the OSI Tobacco walk-in humidor' },
  { src: '/images/humidor-5.webp', alt: 'Hand-picked premium cigars' },
  { src: '/images/humidor-6.webp', alt: 'Cigar humidor facings' },
  { src: '/images/humidor-alt.webp', alt: 'The walk-in humidor at OSI Tobacco' },
  { src: '/images/lounge.webp', alt: 'The OSI Tobacco cigar lounge' },
  { src: '/images/fb-1.webp', alt: 'Cigars at OSI Tobacco' },
  { src: '/images/fb-2.webp', alt: 'Inside OSI Tobacco' },
  { src: '/images/fb-3.webp', alt: 'OSI Tobacco event' },
  { src: '/images/fb-4.webp', alt: 'Premium cigars at OSI Tobacco' },
  { src: '/images/fb-5.webp', alt: 'A gathering at OSI Tobacco' },
  { src: '/images/fb-6.webp', alt: 'Inside the OSI Tobacco lounge' },
  { src: '/images/fb-7.webp', alt: 'Event night at OSI Tobacco' },
  { src: '/images/fb-8.webp', alt: 'OSI Tobacco' },
  { src: '/images/guest-barclay-rex.webp', alt: 'Barclay Rex visits OSI Tobacco' },
  { src: '/images/guest-tim-aaron.webp', alt: 'Guests at OSI Tobacco' },
  { src: '/images/guest-jose-blanco.webp', alt: 'José Blanco at OSI Tobacco' },
]
