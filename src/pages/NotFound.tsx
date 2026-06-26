import Button from '../components/Button'

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-5 pt-20 text-center">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-display-lg-mobile font-semibold text-cream md:text-display-lg">
          This Page Has Gone Up in Smoke
        </h1>
        <p className="mx-auto mt-5 max-w-md text-body-lg text-on-surface-variant">
          We couldn’t find the page you were looking for. Let’s get you back to the humidor.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/" variant="gold">
            Back Home
          </Button>
          <Button href="/humidor" variant="outline">
            The Humidor
          </Button>
        </div>
      </div>
    </section>
  )
}
