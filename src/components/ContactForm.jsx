'use client'
import { useState } from 'react'
import { Button } from './ui'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`${name} — Portfolio Inquiry`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:jamie920130@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium">Name</label>
        <input id="contact-name" aria-label="Name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm" required />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium">Email</label>
        <input id="contact-email" type="email" aria-label="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm" required />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium">Message</label>
        <textarea id="contact-message" aria-label="Message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="mt-1 block w-full rounded-md border-gray-200 shadow-sm" required />
      </div>
      <div>
        <Button type="submit" className="bg-primary">Send Email</Button>
      </div>
    </form>
  )
}
