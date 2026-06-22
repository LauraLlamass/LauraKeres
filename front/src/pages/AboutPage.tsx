import ImageBlock from '../components/home/ImageBlock'
import { workingImage } from '../data/homeContent'

function AboutPage() {
  return (
    <main className="w-full flex-1 px-6 py-20 max-[820px]:py-12">
      <section className="mx-auto grid w-[min(1120px,100%)] grid-cols-[minmax(320px,0.8fr)_minmax(0,1fr)] items-center gap-20 max-[820px]:flex max-[820px]:flex-col max-[820px]:items-stretch max-[820px]:gap-8">
        <ImageBlock alt="Laura trabajando en su estudio" src={workingImage} />

        <div>
          <p className="mb-3 text-sm font-bold uppercase">
            Sobre mi
          </p>
          <h1 className="font-serif text-8xl leading-none max-[1024px]:text-7xl max-[540px]:text-5xl">
            Laura Keres
          </h1>
          <p className="max-w-[680px] text-lg leading-8">
            Escritora y creadora de mundos de fantasia, relatos breves y piezas
            narrativas con una mirada sensible, botanica y un poco misteriosa.
          </p>
          <p className="max-w-[680px] text-lg leading-8">
            Esta pagina queda preparada para una biografia mas completa: origen
            del proyecto, temas recurrentes, inspiraciones y forma de trabajar.
          </p>
        </div>
      </section>
    </main>
  )
}

export default AboutPage
