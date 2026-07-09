'use client'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Lightbox from './Lightbox'

export default function ProjectContent({ content }) {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  return (
    <div>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          img: ({ node, ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              {...props}
              className="rounded-md cursor-pointer"
              onClick={() => setLightboxSrc(props.src)}
            />
          ),
        }}
        className="prose prose-slate max-w-none"
      >
        {content}
      </ReactMarkdown>

      <Lightbox src={lightboxSrc} alt="Screenshot" onClose={() => setLightboxSrc(null)} />
    </div>
  )
}
