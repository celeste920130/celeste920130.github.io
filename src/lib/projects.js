const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const projectsDir = path.join(process.cwd(), 'src', 'data', 'projects')

function getProjectSlugs() {
  return fs.readdirSync(projectsDir).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''))
}

function getProjectBySlug(slug) {
  const fullpath = path.join(projectsDir, `${slug}.md`)
  const raw = fs.readFileSync(fullpath, 'utf8')
  const { data, content } = matter(raw)
  return { ...data, content }
}

function getAllProjects() {
  return getProjectSlugs().map((s) => getProjectBySlug(s)).sort((a, b) => (b.year || 0) - (a.year || 0))
}

module.exports = { getProjectSlugs, getProjectBySlug, getAllProjects }
