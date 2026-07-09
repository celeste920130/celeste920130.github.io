import fs from 'fs'
import path from 'path'
import ProjectContent from '../../components/ProjectContent'

export default function AboutPage() {
  const resumePath = path.join(process.cwd(), 'src', 'data', 'resume', 'resume.md')
  const content = fs.readFileSync(resumePath, 'utf8')

  return (
    <section>
      <h1 className="text-3xl font-extrabold">About — Chih Hsuan (Celeste)</h1>
      <p className="mt-4 text-slate-600">A concise resume is shown below — scroll to explore experience, projects and skills.</p>

      <div className="mt-8">
        <ProjectContent content={content} />
      </div>
    </section>
  )
}
