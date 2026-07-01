import ContextSection from '../components/home/ContextSection'
import HelpSection from '../components/home/HelpSection'
import HeroSection from '../components/home/HeroSection'
import {
  contextContent,
  helpContent,
  heroContent,
  workingImage,
} from '../data/homeContent'

function HomePage() {
  return (
    <main className="w-full flex-1 p-0">
      <HeroSection
        {...heroContent}
        imageAlt="Laura trabajando en su estudio"
        imageSrc={workingImage}
      />
      <ContextSection {...contextContent} />
      <HelpSection
        {...helpContent}
        imageAlt="Proceso creativo de LauraKeres"
        imageSrc={workingImage}
      />
    </main>
  )
}

export default HomePage
