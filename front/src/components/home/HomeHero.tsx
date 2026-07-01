import ButtonLink from '../ButtonLink'
import FramedImage from './FramedImage'

type HomeHeroProps = {
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

function HomeHero({
  cta,
  imageAlt,
  imageSrc,
  text,
  title,
}: HomeHeroProps) {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid min-h-[690px] w-full max-w-6xl grid-cols-[0.78fr_1fr] items-center gap-14 px-6 py-12 max-[820px]:min-h-0 max-[820px]:grid-cols-1 max-[820px]:gap-10 max-[540px]:p-6">
        <FramedImage
          alt={imageAlt}
          className="min-h-[580px] max-[820px]:min-h-[420px] max-[540px]:min-h-[280px]"
          src={imageSrc}
        />

        <div className="max-w-2xl">
          <h1 className="mt-8 font-serif text-7xl  leading-24 max-[820px]:text-6xl max-[540px]:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 max-[540px]:text-base max-[540px]:leading-7">
            {text}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HomeHero
