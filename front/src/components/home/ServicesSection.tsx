import ServiceCard from './ServiceCard'

type Service = {
  text: string
  title: string
}

type ServicesSectionProps = {
  imageSrc: string
  services: Service[]
}

function ServicesSection({ imageSrc, services }: ServicesSectionProps) {
  return (
    <section className="bg-services text-center" id="proyectos">
      <div className="mx-auto w-[min(1120px,100%)] px-6 py-24 max-[820px]:py-16 max-[540px]:p-6">
        <h2 className="font-serif text-6xl leading-none max-[540px]:text-4xl">
          Servicios
        </h2>

        <div className="mt-8 grid grid-cols-3 gap-6 text-left max-[820px]:grid-cols-1">
          {services.map((service) => (
            <ServiceCard
              imageSrc={imageSrc}
              key={service.title}
              text={service.text}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
