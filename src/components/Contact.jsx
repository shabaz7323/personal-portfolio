import React from 'react'

export default function Contact(){ 
  return (
    <section id="contact" className="py-12">
      <h3 className="text-2xl font-semibold mb-4">Contact</h3>
      <div className="max-w-xl">
        <form action="https://formsubmit.co/shabaz.ahamed@example.com" method="POST" className="space-y-3">
          <input type="hidden" name="_captcha" value="false" />
          <div>
            <label className="block text-sm">Name</label>
            <input name="name" required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input name="email" type="email" required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm">Message</label>
            <textarea name="message" rows="5" required className="w-full border rounded px-3 py-2"></textarea>
          </div>
          <button className="px-4 py-2 border rounded" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}
