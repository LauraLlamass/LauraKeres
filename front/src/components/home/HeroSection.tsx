import ButtonLink from '../ButtonLink'
import ImageBlock from './ImageBlock'

type HeroSectionProps = {
  eyebrow: string
  imageAlt: string
  imageSrc: string
  text: string
  title: string
  tags: string[]
  cta: {
    href: string
    label: string
  }
}

function HeroSection({
  cta,
  eyebrow,
  imageAlt,
  imageSrc,
  tags,
  text,
  title,
}: HeroSectionProps) {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid min-h-[690px] w-full max-w-6xl grid-cols-[0.78fr_1fr] items-center gap-14 px-6 py-12 max-[820px]:min-h-0 max-[820px]:grid-cols-1 max-[820px]:gap-10 max-[540px]:p-6">
        <ImageBlock
          alt={imageAlt}
          className="min-h-[580px] max-[820px]:min-h-[420px] max-[540px]:min-h-[280px]"
          src={imageSrc}
        />

        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.24em]">
            {eyebrow}
          </p>
          <h1 className="mt-8 font-serif text-6xl  leading-24 max-[820px]:text-6xl max-[540px]:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 max-[540px]:text-base max-[540px]:leading-7">
            {text}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
          </div>
          <ul
            className="mt-7 flex max-w-xl list-none flex-wrap gap-2 border-y border-sage py-3"
            aria-label="Temas principales"
          >
            {tags.map((tag) => (
              <li
                className="rounded-full bg-parchment px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em]"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}

export default HeroSection
