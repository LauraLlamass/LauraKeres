import SectionHeading from './SectionHeading'
import VisualPanel from './VisualPanel'

type StoriesSectionProps = {
  images: {
    image: string
    label: string
  }[]
  title: string
}

function StoriesSection({ images, title }: StoriesSectionProps) {
  const [mapImage, ...kingdomImages] = images

  return (
    <section className="bg-parchment">
      <div className="mx-auto flex min-h-[calc(100svh-72px)] w-full max-w-6xl flex-col justify-center px-6 py-10 max-[820px]:min-h-0 max-[820px]:py-14">
        <SectionHeading title={title} />

        <div className="mt-8 grid grid-cols-[1fr_0.7fr] items-center gap-8 max-[820px]:grid-cols-1">
          <VisualPanel
            className="min-h-[360px] max-[820px]:min-h-[320px] max-[540px]:min-h-[220px]"
            image={mapImage.image}
            label={mapImage.label}
            variant="leather"
          />

          <div className="flex flex-wrap content-center justify-center gap-4">
            {kingdomImages.map((image) => (
              <VisualPanel
                className="min-h-[100px] w-[calc(35%-0.5rem)] max-[820px]:min-h-[145px] max-[540px]:min-h-[120px]"
                image={image.image}
                key={image.label}
                label={image.label}
                variant="sage"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StoriesSection
