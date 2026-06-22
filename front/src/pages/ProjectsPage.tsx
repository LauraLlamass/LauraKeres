import ServicesSection from '../components/home/ServicesSection'
import { services, workingImage } from '../data/homeContent'

function ProjectsPage() {
  return (
    <main className="w-full flex-1 px-6 py-20 max-[820px]:py-12">
      <section className="mx-auto grid w-[min(1120px,100%)] gap-5">
        <p className="mb-3 text-sm font-bold uppercase">
          Proyectos
        </p>
        <h1 className="font-serif text-8xl leading-none max-[1024px]:text-7xl max-[540px]:text-5xl">
          Historias, mundos y piezas narrativas
        </h1>
        <p className="max-w-[680px] text-lg leading-8">
          Un espacio para reunir libros, relatos, ilustraciones y proyectos
          creativos vinculados al universo de Laura Keres.
        </p>
      </section>

      <ServicesSection imageSrc={workingImage} services={services} />
    </main>
  )
}

export default ProjectsPage
