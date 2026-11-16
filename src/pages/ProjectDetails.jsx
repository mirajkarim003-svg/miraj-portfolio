import { Link, useParams } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa6'
import { HiArrowTopRightOnSquare, HiArrowLeft } from 'react-icons/hi2'
import Shot from '../components/Shot.jsx'
import { projects } from '../data.js'

const List = ({ title, items }) => (
  <section className="mt-10">
    <h2 className="font-display text-2xl font-bold">{title}</h2>
    <ul className="mt-4 space-y-3">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-muted"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{t}</li>
      ))}
    </ul>
  </section>
)

export default function ProjectDetails() {
  const { slug } = useParams()
  const p = projects.find((x) => x.slug === slug)
  if (!p) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-display text-4xl font-bold">Project not found</h1>
        <Link to="/#projects" className="mt-6 inline-block rounded-lg bg-accent px-5 py-3 font-bold text-ink">Back to projects</Link>
      </div>
    )
  }
  return (
    <article className="mx-auto max-w-4xl px-5 py-12">
      <Link to="/#projects" className="inline-flex items-center gap-2 text-muted hover:text-soft"><HiArrowLeft /> All projects</Link>
      <h1 className="mt-6 font-display text-4xl font-extrabold sm:text-5xl">{p.name}</h1>
      <Shot src={p.image} alt={p.name} className="mt-8 aspect-video w-full rounded-2xl border border-line" />
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-bold text-ink hover:brightness-110"><HiArrowTopRightOnSquare size={20} /> Live project</a>
        <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-bold hover:bg-panel"><FaGithub size={20} /> GitHub (client)</a>
      </div>
      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold">About this project</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">{p.description}</p>
      </section>
      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold">Main technology stack</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((s) => <li key={s} className="rounded-full border border-line bg-panel px-4 py-1.5 text-sm">{s}</li>)}
        </ul>
      </section>
      <List title="Challenges I faced" items={p.challenges} />
      <List title="Future plans and improvements" items={p.future} />
    </article>
  )
}
