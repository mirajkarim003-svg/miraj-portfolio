import { useEffect } from 'react'
import { Routes, Route, useLocation, Link } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ProjectDetails from './pages/ProjectDetails.jsx'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 60)
    else window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollManager />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="*" element={
            <div className="mx-auto max-w-3xl px-5 py-32 text-center">
              <h1 className="font-display text-5xl font-bold">Page not found</h1>
              <p className="mt-3 text-muted">This page does not exist. Go back to the home page.</p>
              <Link to="/" className="mt-6 inline-block rounded-lg bg-accent px-5 py-3 font-bold text-ink">Back to home</Link>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
