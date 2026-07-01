import BookCover from '../ithesia/BookCover'

type AnthologyHeroProps = {
  image: string
  text: string[]
  title: string
}

function AnthologyHero({ image, text, title }: AnthologyHeroProps) {
  return (
    <section className="mx-auto grid min-h-[620px] w-full max-w-6xl grid-cols-[1fr_minmax(240px,360px)] items-center gap-16 px-6 py-16 max-[820px]:grid-cols-1">
      <div className="max-w-2xl">
       
        <h1 className="mt-5 font-serif text-6xl leading-tight max-[540px]:text-5xl">
          {title}
        </h1>
        <div className="mt-6 grid gap-4">
          {text.map((paragraph) => (
            <p className="text-lg leading-8" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <BookCover image={image} title={title} />
    </section>
  )
}

export default AnthologyHero
