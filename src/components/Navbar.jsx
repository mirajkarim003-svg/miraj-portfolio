import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiBars3, HiXMark } from 'react-icons/hi2'

const links = [['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Education', 'education'], ['Experience', 'experience'], ['Projects', 'projects'], ['Contact', 'contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <Link to="/#home" className="font-display text-xl font-extrabold">Miraj<span className="text-accent">.</span>dev</Link>
        <ul className="hidden items-center gap-7 text-sm font-medium text-muted lg:flex">
          {links.map(([label, id]) => (
            <li key={id}><Link to={`/#${id}`} className="transition-colors hover:text-soft">{label}</Link></li>
          ))}
        </ul>
        <button className="rounded-md p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <HiXMark size={26} /> : <HiBars3 size={26} />}
        </button>
      </nav>
      {open && (
        <ul className="border-t border-line bg-ink px-5 pb-4 lg:hidden">
          {links.map(([label, id]) => (
            <li key={id}><Link to={`/#${id}`} onClick={() => setOpen(false)} className="block py-3 text-muted hover:text-soft">{label}</Link></li>
          ))}
        </ul>
      )}
    </header>
  )
}
