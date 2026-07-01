import ButtonLink from '../ButtonLink'
import BookCover from './BookCover'

type BookCardProps = {
  cta: {
    href: string
    label: string
  }
  description: string
  image?: string
  status?: string
  title: string
}

function BookCard({
  cta,
  description,
  image,
  status,
  title,
}: BookCardProps) {
  return (
    <article className="flex flex-col">
      <BookCover image={image} status={status} title={title} />
      <h3 className="mt-5 font-serif text-xl leading-8">{title}</h3>
      <p className="mt-2 flex-1 leading-7">{description}</p>
      <div className="mt-5">
        <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
      </div>
    </article>
  )
}

export default BookCard
