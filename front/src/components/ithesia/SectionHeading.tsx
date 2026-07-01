type SectionHeadingProps = {
  eyebrow?: string
  fullWidth?: boolean
  text?: string
  title: string
}

function SectionHeading({ fullWidth = false, text, title }: SectionHeadingProps) {
  return (
    <header className={fullWidth ? 'w-full' : 'max-w-2xl'}>
      
      <h2 className="mt-3 font-serif text-4xl leading-tight">{title}</h2>
      {text && <p className="mt-4 text-lg leading-8">{text}</p>}
    </header>
  )
}

export default SectionHeading
