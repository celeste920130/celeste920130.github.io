"use client"
import ThemeToggle from './ThemeToggle'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="border-b py-4">
      <motion.div className="container flex items-center justify-between" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <div className="text-xl font-bold">Celeste Shih</div>
        <div className="flex items-center gap-4">
          <nav className="space-x-4 text-sm hidden md:block" aria-label="Main navigation">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </motion.div>
    </header>
  )
}
