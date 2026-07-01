import ButtonLink from '../ButtonLink'
import ProjectCover from './ProjectCover'

type ProjectCardProps = {
  cover: {
    author: string
    eyebrow?: string
    image?: string
    title: string
  }
  cta: {
    href: string
    label: string
  }
  description: string
  eyebrow: string
  title: string
}

function ProjectCard({
  cover,
  cta,
  description,
  eyebrow,
  title,
}: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-sage bg-paper">
      <ProjectCover {...cover} />

      <div className="p-6">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-sage">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-serif text-xl leading-8">{title}</h2>
        <p className="mt-3 text-base leading-7">{description}</p>
        <div className="mt-6">
          <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
