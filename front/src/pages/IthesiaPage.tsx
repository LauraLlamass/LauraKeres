import BooksSection from '../components/ithesia/BooksSection'
import CharacterSection from '../components/ithesia/CharacterSection'
import IthesiaHero from '../components/ithesia/IthesiaHero'
import KingdomsSection from '../components/ithesia/KingdomsSection'
import {
  ithesiaBooks,
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
      <KingdomsSection {...ithesiaStories} />
      <CharacterSection {...ithesiaHighlight} />
    </main>
  )
}

export default IthesiaPage
