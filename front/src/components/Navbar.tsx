function Navbar() {
  const navItems = [
    ['Inicio', '/'],
    ['Proyectos', '/proyectos'],
    ['Sobre mi', '/sobre-mi'],
    ['Contacto', '/contacto'],
  ]

  return (
    <header className="relative overflow-hidden bg-sage">
      <div className="relative mx-auto flex w-[min(1120px,100%)] items-center justify-between gap-5 px-6 py-3 max-[820px]:flex-col max-[820px]:items-start max-[820px]:pb-6">
        <a className="font-serif text-2xl font-bold" href="/">
          Laura Keres
        </a>

        <nav
          className="flex flex-wrap justify-end gap-1 max-[820px]:justify-start"
          aria-label="Navegacion principal"
        >
          {navItems.map(([label, href]) => (
            <a
              className="rounded-xl bg-parchment px-4 py-2 text-sm font-bold transition-colors hover:bg-leather focus-visible:outline-none"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
