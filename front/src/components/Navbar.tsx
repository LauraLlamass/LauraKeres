import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const currentPath = window.location.pathname
  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Sobre mí', href: '/sobre-mi' },
    { label: 'Contacto', href: '/contacto' },
  ]

  const isActive = (href: string) =>
    href === '/' ? currentPath === href : currentPath.startsWith(href)

  const navLinkClass = (href: string) =>
    `rounded-xl px-4 py-2 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-parchment ${
      isActive(href)
        ? 'bg-sage text-paper'
        : 'bg-paper text-leather hover:bg-sage hover:text-paper'
    }`

  return (
    <header className="sticky top-0 z-50 bg-services shadow-sm">
      <div className="mx-auto flex min-h-18 w-[min(1120px,100%)] items-center justify-between gap-5 px-6">
        <a
          className="font-serif text-2xl font-bold tracking-tight transition-colors hover:text-parchment focus-visible:text-parchment focus-visible:outline-none"
          href="/"
        >
          Laura Keres
        </a>

        <nav
          className="flex items-center gap-2 max-[720px]:hidden"
          aria-label="Navegación principal"
        >
          {navItems.map(({ label, href }) => (
            <a
              className={navLinkClass(href)}
              href={href}
              key={href}
              aria-current={isActive(href) ? 'page' : undefined}
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          className="hidden size-11 items-center justify-center rounded-full border border-parchment/40 transition-colors hover:bg-parchment hover:text-services focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-parchment max-[720px]:flex"
          type="button"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? (
            <svg aria-hidden="true" className="size-6" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg aria-hidden="true" className="size-6" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="border-t border-parchment/20 px-6 py-3 min-[721px]:hidden"
          aria-label="Navegación móvil"
        >
          <div className="mx-auto flex w-[min(1120px,100%)] flex-col items-start gap-2">
            {navItems.map(({ label, href }) => (
              <a
                className={navLinkClass(href)}
                href={href}
                key={href}
                aria-current={isActive(href) ? 'page' : undefined}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar
