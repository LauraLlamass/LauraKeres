type SectionHeadingProps = {
  eyebrow?: string
  text?: string
  title: string
}

function SectionHeading({ eyebrow, text, title }: SectionHeadingProps) {
  return (
    <header className="max-w-2xl">
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-sage">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-serif text-4xl leading-tight">{title}</h2>
      {text && <p className="mt-4 text-lg leading-8">{text}</p>}
    </header>
  )
}

export default SectionHeading
