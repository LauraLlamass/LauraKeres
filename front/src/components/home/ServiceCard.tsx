type ServiceCardProps = {
  imageSrc: string
  text: string
  title: string
}

function ServiceCard({ imageSrc, text, title }: ServiceCardProps) {
  return (
    <article className="flex min-w-0 flex-col">
      <figure className="m-0 flex aspect-[1.35] items-center justify-center overflow-hidden rounded-xl bg-parchment font-bold">
        <img className="block h-full w-full object-cover" src={imageSrc} alt="" />
      </figure>
      <h3 className="mt-4 font-serif text-2xl leading-tight">
        {title}
      </h3>
      <p className="mt-5 text-base leading-7">
        {text}
      </p>
      <a
        className="mt-4 self-start rounded-xl bg-parchment px-5 py-2 text-xs font-bold transition-colors hover:bg-leather focus-visible:bg-leather focus-visible:outline-none"
        href="#contacto"
      >
        CTA
      </a>
    </article>
  )
}

export default ServiceCard
