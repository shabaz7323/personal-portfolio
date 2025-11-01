import React from 'react'

const projects = [
  { title: 'API Service - Orders', desc: 'Robust order-processing API built with Node.js and Redis.', img: '/images/project-1.jpg', link: '#' },
  { title: 'Auth Service', desc: 'JWT-based auth microservice with refresh tokens and role policies.', img: '/images/project-2.jpg', link: '#' },
]

export default function Projects(){ 
  return (
    <section id="projects" className="py-12">
      <h3 className="text-2xl font-semibold mb-6">Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p,i) => (
          <div key={i} className="border rounded-lg overflow-hidden">
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-sm text-slate-600">{p.desc}</p>
              <a href={p.link} className="text-sm mt-2 inline-block">View →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
