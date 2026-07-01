import AnthologyHero from '../components/anthology/AnthologyHero'
import ShortStoriesSection from '../components/anthology/ShortStoriesSection'
import { anthologyHero, anthologyStories } from '../data/anthologyContent'

function AnthologyPage() {
  return (
    <main className="w-full flex-1 bg-paper">
      <AnthologyHero {...anthologyHero} />
      <ShortStoriesSection {...anthologyStories} />
    </main>
  )
}

export default AnthologyPage
