import SectionHeading from '../ithesia/SectionHeading'

type ShortStoriesSectionProps = {
  stories: {
    description: string
    title: string
  }[]
  text?: string
  title?: string
}

function ShortStoriesSection({ stories, text, title }: ShortStoriesSectionProps) {
  return (
    <section className="bg-[#c0c0c8]" id="relatos">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        {title && <SectionHeading text={text} title={title} />}

        <div className={`${title ? 'mt-10' : ''} grid grid-cols-4 gap-5 max-[900px]:grid-cols-2 max-[540px]:grid-cols-1`}>
          {stories.map((story) => (
            <article
              className="rounded-xl bg-paper p-6 shadow-sm"
              key={story.title}
            >
              
              <h3 className="mt-4 font-serif text-xl leading-8">
                {story.title}
              </h3>
              <p className="mt-3 leading-7">{story.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShortStoriesSection
