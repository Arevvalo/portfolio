import { site } from '../data/site.js'

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl justify-between px-6 py-6 text-sm text-slate-400">
        <p>{site.name}</p>
        <p>{new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer
