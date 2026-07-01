function Footer() {
  const contactLinks = [
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@laurakeres_escritora',
      icon: '/svg/tiktok-fill-svgrepo-com.svg',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/laurakeres.escritora/',
      icon: '/svg/instagram-svgrepo-com.svg',
    },
    {
      label: 'Enviar un correo a Laura Keres',
      href: 'mailto:Laurakeres.escritora@gmail.com',
      icon: '/svg/gmail-svgrepo-com.svg',
    },
  ]

  return (
    <footer className="bg-services">
      <div className="mx-auto flex w-[min(1120px,100%)] items-center justify-between gap-5 px-6 py-6 text-sm max-[640px]:flex-col max-[640px]:items-start">
        <a className="font-serif text-xl font-bold" href="/">
          Laura Keres
        </a>

        <nav
          className="flex items-center gap-3"
          aria-label="Redes sociales y contacto"
        >
          {contactLinks.map(({ label, href, icon }) => (
            <a
              className="flex size-11 items-center justify-center rounded-full bg-parchment transition-transform hover:scale-110 focus-visible:scale-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-parchment"
              href={href}
              key={label}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              target={href.startsWith('http') ? '_blank' : undefined}
              aria-label={label}
              title={label}
            >
              <img className="size-6" src={icon} alt="" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
