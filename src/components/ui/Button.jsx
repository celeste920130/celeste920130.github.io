"use client"
import React from 'react'

export default function Button({ children, variant = 'default', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 shadow-sm'
  const variants = {
    default: 'bg-primary text-white hover:bg-primary-800 px-4 py-2',
    ghost: 'bg-transparent px-3 py-1 text-slate-700 hover:bg-slate-100',
    secondary: 'bg-surface text-slate-900 hover:bg-surface-muted px-3 py-1 border'
  }
  const cls = `${base} ${variants[variant] ?? variants.default} ${className}`
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
