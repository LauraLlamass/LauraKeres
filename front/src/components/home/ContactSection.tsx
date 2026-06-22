import ButtonLink from '../ButtonLink'

type ContactSectionProps = {
  email: string
  eyebrow: string
  title: string
}

function ContactSection({ email, eyebrow, title }: ContactSectionProps) {
  return (
    <section
      className="mx-auto w-[min(1120px,100%)] bg-paper px-6 py-20 max-[820px]:py-12"
      id="contacto"
    >
      <div className="flex items-end justify-between gap-8 max-[820px]:flex-col max-[820px]:items-stretch">
        <p className="mb-3 text-sm font-bold uppercase">
          {eyebrow}
        </p>
        <h2 className="font-serif text-6xl leading-none max-[540px]:text-4xl">
          {title}
        </h2>
        <ButtonLink href={`mailto:${email}`}>{email}</ButtonLink>
      </div>
    </section>
  )
}

export default ContactSection
