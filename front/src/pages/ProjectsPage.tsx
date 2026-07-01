import ProjectCard from '../components/projects/ProjectCard'
import ProjectsHeader from '../components/projects/ProjectsHeader'
import { projects, projectsHeader } from '../data/projectsContent'

function ProjectsPage() {
  return (
    <main className="w-full flex-1 bg-paper px-6 py-16 max-[540px]:py-10">
      <div className="mx-auto w-full max-w-6xl">
        <ProjectsHeader {...projectsHeader} />

        <section
          aria-label="Lorem ipsum"
          className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(280px,354px))] gap-8"
        >
          {projects.map((project) => (
            <ProjectCard {...project} key={project.title} />
          ))}
        </section>
      </div>
    </main>
  )
}

export default ProjectsPage
