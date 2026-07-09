import React from 'react'
import { getProjectBySlug } from '../../../lib/projects'
import ProjectContent from '../../../components/ProjectContent'

export default function ProjectDetail({ params }) {
  const { slug } = params
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <section>
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <p className="mt-2 text-slate-600">No project matches &quot;{slug}&quot;.</p>
      </section>
    )
  }

  return (
    <article>
      <h1 className="text-3xl font-extrabold">{project.title}</h1>
      <p className="mt-2 text-slate-600">{project.summary}</p>

      <div className="mt-6">
        <ProjectContent content={project.content || ''} />
      </div>
    </article>
  )
}
