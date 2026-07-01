import ButtonLink from '../ButtonLink'
import VisualPanel from './VisualPanel'

type IthesiaHeroProps = {
  cta: {
    href: string
    label: string
  }
  eyebrow: string
  images: {
    image: string
    label: string
  }[]
  text: string
  title: string
}

function IthesiaHero({ cta, images, text, title }: IthesiaHeroProps) {
  return (
    <section className="mx-auto grid min-h-[620px] w-full max-w-6xl grid-cols-[0.9fr_1.1fr] items-center gap-14 px-6 py-16 max-[820px]:grid-cols-1">
      <div className="max-w-xl">
        <h1 className="mt-5 font-serif text-6xl leading-tight max-[540px]:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8">{text}</p>
        <div className="mt-8">
          <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
        </div>
      </div>

      <div className="grid min-h-[480px] grid-cols-[1.15fr_0.85fr] gap-5 max-[540px]:min-h-[380px]">
        <VisualPanel
          className="row-span-2"
          image={images[0].image}
          label={images[0].label}
        />
        <VisualPanel
          image={images[1].image}
          label={images[1].label}
          variant="parchment"
        />
        <VisualPanel
          image={images[2].image}
          label={images[2].label}
          variant="sage"
        />
      </div>
    </section>
  )
}

export default IthesiaHero
