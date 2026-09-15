import { site } from '../data/site.js'

function Contact() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight">Contacto</h2>
      <p className="mt-4 text-slate-300">
        <a className="underline decoration-cyan-300 underline-offset-4 hover:text-cyan-300" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
    </section>
  )
}

export default Contact
