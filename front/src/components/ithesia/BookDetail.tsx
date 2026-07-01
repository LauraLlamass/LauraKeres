import ButtonLink from '../ButtonLink'
import BookCover from './BookCover'

type BookDetailProps = {
  description: string
  image?: string
  longDescription: string[]
  status?: string
  title: string
}

function BookDetail({
  description,
  image,
  longDescription,
  status,
  title,
}: BookDetailProps) {
  return (
    <section className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(240px,360px)_1fr] items-center gap-16 px-6 py-20 max-[820px]:grid-cols-1">
      <BookCover image={image} status={status} title={title} />

      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-sage">
          Saga Ithesia
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight max-[540px]:text-4xl">
          {title}
        </h1>
        <p className="mt-5 text-xl leading-8">{description}</p>
        <div className="mt-6 grid gap-4">
          {longDescription.map((paragraph) => (
            <p className="text-lg leading-8" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href="/proyectos/ithesia">Volver a Ithesia</ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default BookDetail
