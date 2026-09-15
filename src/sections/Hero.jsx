import { site } from '../data/site.js'

function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">
        {site.role}
      </p>
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
        {site.name}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{site.description}</p>
    </section>
  )
}

export default Hero
