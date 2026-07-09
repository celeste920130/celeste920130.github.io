import Hero from '../components/Hero'
import ProjectCard from '../components/ProjectCard'
import { getAllProjects } from '../lib/projects'

export default function Home() {
  const projects = getAllProjects()
  return (
    <section>
      <Hero />
      <h2 className="mt-12 text-2xl font-semibold">Selected Projects</h2>
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}
