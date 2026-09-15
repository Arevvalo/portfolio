import { projects } from '../data/site.js'

function Projects() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight">Proyectos</h2>
      {projects.length === 0 ? (
        <p className="mt-4 text-slate-300">Tus proyectos aparecerán aquí.</p>
      ) : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article className="rounded-xl border border-white/10 p-6" key={project.name}>
              <h3 className="text-lg font-semibold">{project.name}</h3>
              <p className="mt-2 text-slate-300">{project.description}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

export default Projects
