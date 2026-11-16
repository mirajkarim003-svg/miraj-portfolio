import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { profile } from '../data.js'
export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React and Tailwind CSS.</p>
        <div className="flex gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-soft"><FaGithub size={20} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-soft"><FaLinkedinIn size={20} /></a>
        </div>
      </div>
    </footer>
  )
}
