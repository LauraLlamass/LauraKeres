import BookCard from './BookCard'
import SectionHeading from './SectionHeading'

type Book = {
  cta: {
    href: string
    label: string
  }
  description: string
  image?: string
  status?: string
  title: string
}

type BooksSectionProps = {
  books: Book[]
  text: string
  title: string
}

function BooksSection({ books, text, title }: BooksSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <SectionHeading text={text} title={title} />

      <div className="mt-10 grid grid-cols-4 gap-6 max-[900px]:grid-cols-2 max-[540px]:grid-cols-1">
        {books.map((book) => (
          <BookCard {...book} key={book.title} />
        ))}
      </div>
    </section>
  )
}

export default BooksSection
