"use client"
import React from 'react'

export default function Card({ children, className = '', ...props }) {
  return (
    <div className={`rounded-xl border bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 p-4 shadow-md ${className}`} {...props}>
      {children}
    </div>
  )
}
