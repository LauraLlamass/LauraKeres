import ButtonLink from '../ButtonLink'
import ImageBlock from './ImageBlock'

type HelpSectionProps = {
  cta: {
    href: string
    label: string
  }
  eyebrow: string
  imageAlt: string
  imageSrc: string
  text: string
  title: string
}

function HelpSection({
  cta,
  eyebrow,
  imageAlt,
  imageSrc,
  text,
  title,
}: HelpSectionProps) {
  return (
    <section className="mx-auto grid w-[min(1120px,100%)] grid-cols-[minmax(320px,0.88fr)_minmax(0,1fr)] items-center gap-20 px-6 py-28 max-[820px]:flex max-[820px]:flex-col max-[820px]:items-stretch max-[820px]:gap-8 max-[540px]:p-6">
      <ImageBlock alt={imageAlt} src={imageSrc} />

      <div>
        <p className="mb-3 text-sm font-bold uppercase">
          {eyebrow}
        </p>
        <h2 className="font-serif text-6xl leading-none max-[540px]:text-4xl">
          {title}
        </h2>
        <p className="mt-5 text-lg leading-8">
          {text}
        </p>
        <div className="mt-6">
        <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default HelpSection
