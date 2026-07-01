type ProjectsHeaderProps = {
  text: string
  title: string
}

function ProjectsHeader({ text, title }: ProjectsHeaderProps) {
  return (
    <header className="max-w-3xl">
      <h1 className="font-serif text-5xl leading-tight max-[540px]:text-4xl">
        {title}
      </h1>
      <p className="mt-5 text-lg leading-8">{text}</p>
    </header>
  )
}

export default ProjectsHeader
