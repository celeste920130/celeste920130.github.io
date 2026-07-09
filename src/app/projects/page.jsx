import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import { getAllProjects } from '../../lib/projects'

export default function ProjectsPage() {
  const projects = getAllProjects()
  return (
    <section id="projects">
      <h1 className="text-3xl font-extrabold">Projects</h1>
      <p className="mt-2 text-slate-600">Selected projects showcasing data analysis and product work.</p>

      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  )
}
