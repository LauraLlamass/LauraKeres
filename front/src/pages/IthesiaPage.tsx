import BooksSection from '../components/ithesia/BooksSection'
import HighlightSection from '../components/ithesia/HighlightSection'
import IthesiaCta from '../components/ithesia/IthesiaCta'
import IthesiaHero from '../components/ithesia/IthesiaHero'
import StoriesSection from '../components/ithesia/StoriesSection'
import {
  ithesiaBooks,
  ithesiaCta,
  ithesiaHero,
  ithesiaHighlight,
  ithesiaStories,
} from '../data/ithesiaContent'

function IthesiaPage() {
  return (
    <main className="w-full flex-1 bg-paper">
      <IthesiaHero {...ithesiaHero} />
      <div id="libros">
        <BooksSection {...ithesiaBooks} />
      </div>
      <StoriesSection {...ithesiaStories} />
      <HighlightSection {...ithesiaHighlight} />
      <IthesiaCta {...ithesiaCta} />
    </main>
  )
}

export default IthesiaPage
