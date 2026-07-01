import ButtonLink from '../ButtonLink'
import FramedImage from './FramedImage'

type IthesiaIntroSectionProps = {
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

function IthesiaIntroSection({
  cta,
  imageAlt,
  imageSrc,
  text,
  title,
}: IthesiaIntroSectionProps) {
  return (
    <section className="mx-auto grid w-[min(1120px,100%)] grid-cols-[minmax(320px,0.88fr)_minmax(0,1fr)] items-center gap-20 px-6 py-28 max-[820px]:flex max-[820px]:flex-col max-[820px]:items-stretch max-[820px]:gap-8 max-[540px]:p-6">
      <FramedImage alt={imageAlt} src={imageSrc} />

      <div>
        <h2 className="font-serif text-4xl leading-none max-[540px]:text-4xl">
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

export default IthesiaIntroSection
