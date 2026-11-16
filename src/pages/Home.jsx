import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6'
import { HiArrowDownTray, HiEye, HiEnvelope, HiPhone, HiMapPin } from 'react-icons/hi2'
import Shot from '../components/Shot.jsx'
import { profile, skills, education, experience, projects } from '../data.js'

const Section = ({ id, title, intro, children }) => (
  <section id={id} className="mx-auto max-w-6xl px-5 py-20">
    <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
    {intro && <p className="mt-3 max-w-xl text-muted">{intro}</p>}
    <div className="mt-10">{children}</div>
  </section>
)

const Timeline = ({ items }) => (
  <ol className="space-y-8 border-l border-line pl-6">
    {items.map((it) => (
      <li key={it.title} className="relative">
        <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full bg-accent" />
        <p className="text-sm text-accent">{it.period}</p>
        <h3 className="mt-1 text-lg font-bold">{it.title}</h3>
        <p className="text-muted">{it.place}</p>
        <p className="mt-2 max-w-xl text-sm text-muted">{it.note}</p>
      </li>
    ))}
  </ol>
)

export default function Home() {
  return (
    <>
      <section id="home" className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
        <div>
          <p className="text-muted">Hello, I am</p>
          <h1 className="mt-2 font-display text-5xl font-extrabold leading-tight sm:text-6xl">{profile.name}</h1>
          <p className="mt-3 font-display text-xl text-accent sm:text-2xl">{profile.designation}</p>
          <p className="mt-5 max-w-lg text-lg text-muted">I build clean, responsive websites with React and Next.js, and I am learning the MERN stack by shipping real projects.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={profile.resumeDownload} className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-bold text-ink hover:brightness-110"><HiArrowDownTray size={20} /> Download Resume</a>
            <a href={profile.resumeView} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3 font-bold hover:bg-panel"><HiEye size={20} /> View Resume</a>
          </div>
          <div className="mt-8 flex gap-3">
            {[[profile.github, FaGithub, 'GitHub'], [profile.linkedin, FaLinkedinIn, 'LinkedIn'], [`https://wa.me/${profile.phoneIntl}`, FaWhatsapp, 'WhatsApp']].map(([href, Icon, label]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-soft"><Icon size={20} /></a>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border-2 border-accent" aria-hidden="true" />
          <img src="/images/miraj.jpg" alt="Portrait of Miraj Karim" className="relative aspect-[4/5] w-full rounded-2xl object-cover object-top" />
        </div>
      </section>

      <Section id="about" title="About me">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            <p>I am a college student from Dhaka. I studied Science in SSC and then moved to Commerce for college, so my path into code is not the usual one. I started because I like making things people can actually click, use and share.</p>
            <p>I joined the Programming Hero bootcamp and learn best by building: every concept I study ends up in a small project. So far I have shipped four live projects, and I enjoy the front end most, where design, logic and users meet.</p>
            <p>Outside code, I like exploring new tools, breaking things to understand them, and improving a project one small fix at a time. I am still learning, and I am honest about it. That keeps me curious.</p>
          </div>
          <dl className="h-fit space-y-4 rounded-2xl border border-line bg-panel p-6">
            {[['Based in', 'Dhaka, Bangladesh'], ['Currently', 'College student and bootcamp learner'], ['Enjoys', 'Front end, UI, building real projects'], ['Languages', 'Bangla, English']].map(([k, v]) => (
              <div key={k}><dt className="text-sm text-muted">{k}</dt><dd className="font-medium">{v}</dd></div>
            ))}
          </dl>
        </div>
      </Section>

      <Section id="skills" title="Skills" intro="The tools I use to build projects, grouped by area. The bars show how comfortable I am with each one.">
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((g) => (
            <div key={g.group} className="rounded-2xl border border-line bg-panel p-6">
              <h3 className="font-display text-xl font-bold">{g.group}</h3>
              <div className="mt-5 space-y-4">
                {g.items.map(([name, level]) => (
                  <div key={name}>
                    <div className="mb-1 flex justify-between text-sm"><span>{name}</span><span className="text-muted">{level}%</span></div>
                    <div className="h-2 overflow-hidden rounded-full bg-ink" role="progressbar" aria-label={name} aria-valuenow={level} aria-valuemin="0" aria-valuemax="100">
                      <div className="h-full rounded-full bg-accent" style={{ width: `${level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education"><Timeline items={education} /></Section>
      <Section id="experience" title="Learning and experience" intro="I have not worked professionally yet. This is where my real practice comes from."><Timeline items={experience} /></Section>

      <Section id="projects" title="Projects" intro="Three of my best projects. Open any card to see the stack, challenges and future plans.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.slug} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-panel">
              <Shot src={p.image} alt={p.name} className="h-48 w-full" />
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-xl font-bold">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted">{p.short}</p>
                <Link to={`/projects/${p.slug}`} className="mt-5 inline-block rounded-lg bg-accent px-4 py-2.5 text-center font-bold text-ink hover:brightness-110">View Details</Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact" intro="Have a question or want to work together? Send me a message.">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            [HiEnvelope, 'Email', profile.email, `mailto:${profile.email}`],
            [HiPhone, 'Phone', profile.phone, `tel:+${profile.phoneIntl}`],
            [FaWhatsapp, 'WhatsApp', profile.phone, `https://wa.me/${profile.phoneIntl}`],
          ].map(([Icon, label, value, href]) => (
            <a key={label} href={href} target={label === 'WhatsApp' ? '_blank' : undefined} rel="noreferrer" className="rounded-2xl border border-line bg-panel p-6 transition-colors hover:border-accent">
              <Icon size={26} className="text-accent" />
              <p className="mt-4 text-sm text-muted">{label}</p>
              <p className="break-all font-medium">{value}</p>
            </a>
          ))}
        </div>
        <p className="mt-6 flex items-center gap-2 text-muted"><HiMapPin size={18} /> {profile.location}</p>
      </Section>
    </>
  )
}
