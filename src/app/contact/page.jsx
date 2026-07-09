import React from 'react'
import ContactForm from '../../components/ContactForm'

export default function ContactPage() {
  return (
    <section id="contact">
      <h1 className="text-3xl font-extrabold">Contact</h1>
      <p className="mt-2 text-slate-600">Feel free to reach out — open the form to send a quick message.</p>
      <div className="mt-6 max-w-xl">
        <ContactForm />
      </div>
    </section>
  )
}
