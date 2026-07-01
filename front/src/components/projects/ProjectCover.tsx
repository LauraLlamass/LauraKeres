type ProjectCoverProps = {
  author: string
  eyebrow: string
  title: string
}

function ProjectCover({ author, eyebrow, title }: ProjectCoverProps) {
  return (
    <div className="flex min-h-[305px] items-center justify-center bg-leather p-8">
      <div className="relative flex aspect-[2/3] w-[176px] flex-col items-center justify-center overflow-hidden rounded-lg border border-leather bg-parchment px-5 text-center text-leather">
        <span
          aria-hidden="true"
          className="absolute inset-2 rounded-sm border border-sage"
        />
        <span
          aria-hidden="true"
          className="absolute inset-4 rounded-sm border border-sage"
        />
        <p className="relative text-[10px] uppercase tracking-[0.22em]">
          {eyebrow}
        </p>
        <p className="relative mt-5 font-serif text-2xl font-bold leading-snug">
          {title}
        </p>
        <span
          aria-hidden="true"
          className="relative mt-5 block h-px w-12 bg-sage"
        />
        <p className="relative mt-4 text-[9px] uppercase tracking-[0.2em]">
          {author}
        </p>
      </div>
    </div>
  )
}

export default ProjectCover
