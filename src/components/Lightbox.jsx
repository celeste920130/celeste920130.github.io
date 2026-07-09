'use client'
import { useEffect, useRef } from 'react'

export default function Lightbox({ src, alt, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    if (src && closeRef.current) {
      closeRef.current.focus()
    }
  }, [src])

  if (!src) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="max-w-4xl max-h-[80vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={alt || 'Screenshot'} className="w-full h-auto rounded-md" />
        <button ref={closeRef} className="mt-3 px-3 py-1 bg-white text-slate-800 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
