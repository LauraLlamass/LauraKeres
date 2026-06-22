type ContextSectionProps = {
  quote: string
  source: string
}

function ContextSection({ quote, source }: ContextSectionProps) {
  return (
    <section className="bg-sage text-center" id="sobre-mi">
      <div className="mx-auto grid w-[min(1120px,100%)] justify-items-center px-6 py-16 max-[820px]:py-12">
        <blockquote className="max-w-[920px] font-serif text-2xl italic leading-9 max-[540px]:text-xl">
          {quote}
        </blockquote>
        <cite className="mt-6 text-xs not-italic font-bold uppercase tracking-[0.18em]">
          {source}
        </cite>
      </div>
    </section>
  )
}

export default ContextSection
