import { navigation, site } from '../data/site.js'

function Header() {
  return (
    <header className="border-b border-white/10">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5"
      >
        <a className="text-lg font-semibold tracking-tight" href="#inicio">
          {site.name}
        </a>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
          {navigation.map((item) => (
            <li key={item.href}>
              <a className="transition hover:text-white" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
