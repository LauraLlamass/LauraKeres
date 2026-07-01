import BookDetail from '../components/ithesia/BookDetail'
import { ithesiaBooks } from '../data/ithesiaContent'
import NotFoundPage from './NotFoundPage'

function IthesiaBookPage() {
  const book = ithesiaBooks.books.find(
    ({ cta }) => cta.href === window.location.pathname,
  )

  if (!book) {
    return <NotFoundPage />
  }

  return (
    <main className="w-full flex-1 bg-paper">
      <BookDetail {...book} />
    </main>
  )
}

export default IthesiaBookPage
