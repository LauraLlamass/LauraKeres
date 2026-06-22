type ButtonLinkProps = {
  children: string
  href: string
  variant?: 'primary' | 'secondary'
}

function ButtonLink({ children, href, variant = 'primary' }: ButtonLinkProps) {
  const className =
    variant === 'primary'
      ? 'inline-flex min-h-11 items-center justify-center rounded-xl bg-leather px-5 text-base font-bold transition-colors focus-visible:outline-none'
      : 'inline-flex min-h-11 items-center justify-center rounded-xl bg-sage px-5 text-base font-bold transition-colors focus-visible:outline-none'

  return (
    <a className={className} href={href}>
      {children}
    </a>
  )
}

export default ButtonLink
