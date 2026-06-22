import ContactSection from '../components/home/ContactSection'
import ContextSection from '../components/home/ContextSection'
import HelpSection from '../components/home/HelpSection'
import HeroSection from '../components/home/HeroSection'
import ServicesSection from '../components/home/ServicesSection'
import {
  contactContent,
  contextContent,
  helpContent,
  heroContent,
  services,
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
      <ServicesSection imageSrc={workingImage} services={services} />
      <ContactSection {...contactContent} />
    </main>
  )
}

export default HomePage
