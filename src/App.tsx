import { useEffect } from 'react'
import { Route, Switch, Router, useLocation } from 'wouter'
import Seo from './components/Seo'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AgeGate from './components/AgeGate'
import MobileActionBar from './components/MobileActionBar'
import { useScrollReveal } from './hooks/useScrollReveal'
import { useParallax } from './hooks/useParallax'
import Home from './pages/Home'
import Humidor from './pages/Humidor'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function Shell() {
  const [location] = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  useScrollReveal(location)
  useParallax(location)

  return (
    <>
      <Seo path={location} />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow-lg focus:text-gray-900">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/humidor" component={Humidor} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <div className="h-16 lg:hidden" aria-hidden="true" />
      <MobileActionBar />
      <AgeGate />
    </>
  )
}

export default function App({ ssrPath }: { readonly ssrPath?: string }) {
  return (
    <Router ssrPath={ssrPath}>
      <Shell />
    </Router>
  )
}
