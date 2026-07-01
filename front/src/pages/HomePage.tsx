import QuoteSection from '../components/home/QuoteSection'
import IthesiaIntroSection from '../components/home/IthesiaIntroSection'
import HomeHero from '../components/home/HomeHero'
import {
  contextContent,
  helpContent,
  heroContent,
  workingImage,
} from '../data/homeContent'

function HomePage() {
  return (
    <main className="w-full flex-1 p-0">
      <HomeHero
        {...heroContent}
        imageAlt="Laura trabajando en su estudio"
        imageSrc={workingImage}
      />
      <QuoteSection {...contextContent} />
      <IthesiaIntroSection
        {...helpContent}
        imageAlt="Proceso creativo de LauraKeres"
        imageSrc={workingImage}
      />
    </main>
  )
}

export default HomePage
