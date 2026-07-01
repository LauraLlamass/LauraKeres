import ButtonLink from '../ButtonLink'
import BookCover from './BookCover'

type BookCardProps = {
  cta: {
    href: string
    label: string
  }
  image?: string
  status?: string
  title: string
}

function BookCard({
  cta,
  image,
  status,
  title,
}: BookCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-sage bg-paper">
      <div className="flex min-h-[305px] items-center justify-center border-b border-sage/40 bg-paper p-8">
        <div className="w-[176px]">
          <BookCover image={image} status={status} title={title} />
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center p-6 text-center">
        <h3 className="font-serif text-xl leading-8">{title}</h3>
        <div className="mt-6">
          <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
        </div>
      </div>
    </article>
  )
}

export default BookCard
