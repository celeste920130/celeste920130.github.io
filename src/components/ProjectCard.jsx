"use client"
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="border rounded-lg p-4 bg-white shadow-sm"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, duration: 0.45 }}
      layout
    >
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{project.summary}</p>
      <div className="mt-4 flex items-center justify-between">
        <a className="text-sm text-primary underline" href={`/projects/${project.slug}`}>View</a>
        <span className="text-xs text-slate-500">{project.year}</span>
      </div>
    </motion.article>
  )
}
