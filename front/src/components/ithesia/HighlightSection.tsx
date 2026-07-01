import SectionHeading from './SectionHeading'
import VisualPanel from './VisualPanel'

type HighlightSectionProps = {
  images: {
    image: string
    label: string
  }[]
  paragraphs: string[]
  title: string
}

function HighlightSection({
  images,
  paragraphs,
  title,
}: HighlightSectionProps) {
  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-[0.75fr_1.25fr] items-center gap-12 px-6 py-24 max-[820px]:grid-cols-1">
      <div>
        <SectionHeading eyebrow="Lorem ipsum" title={title} />
        <div className="mt-5 grid gap-4">
          {paragraphs.map((paragraph) => (
            <p className="leading-7" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="grid min-h-[430px] grid-cols-[1.2fr_0.8fr] gap-5">
        <VisualPanel
          className="row-span-2"
          image={images[0].image}
          label={images[0].label}
          variant="sage"
        />
        <VisualPanel image={images[1].image} label={images[1].label} />
        <VisualPanel
          image={images[2].image}
          label={images[2].label}
          variant="parchment"
        />
      </div>
    </section>
  )
}

export default HighlightSection
