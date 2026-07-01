import ButtonLink from '../ButtonLink'

type IthesiaCtaProps = {
  cta: {
    href: string
    label: string
  }
  text: string
  title: string
}

function IthesiaCta({ cta, text, title }: IthesiaCtaProps) {
  return (
    <section className="bg-sage">
      <div className="mx-auto flex min-h-[300px] w-full max-w-4xl flex-col items-center justify-center px-6 py-16 text-center">
        <h2 className="font-serif text-4xl leading-tight">{title}</h2>
        <p className="mt-5 max-w-2xl text-lg leading-8">{text}</p>
        <div className="mt-7">
          <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default IthesiaCta
