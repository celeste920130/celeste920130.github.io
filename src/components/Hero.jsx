"use client"
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="py-8" id="about">
      <div className="container">
        <motion.h1
          className="text-4xl font-extrabold"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi — I'm Chih Hsuan (Celeste)
        </motion.h1>
        <motion.p className="mt-4 text-lg text-slate-600" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.45 }}>
          Category Management Analyst • Data & Product Enthusiast • MSSM applicant
        </motion.p>
        <motion.div className="mt-4 flex items-center space-x-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
          <a href="mailto:jamie920130@gmail.com" className="text-sm text-primary underline">Email</a>
          <a href="#projects" className="text-sm text-primary underline">Projects</a>
        </motion.div>
      </div>
    </section>
  )
}
