import React from 'react'

export default function About(){ 
  return (
    <section id="about" className="py-12">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold mb-2">Shabaz Ahamed</h2>
          <p className="text-slate-600 mb-4">Backend Developer</p>
          <p className="text-slate-700">
            I'm Shabaz Ahamed, a backend developer specializing in Node.js, Express, and MongoDB. 
            I build scalable APIs and services focused on performance and reliability. 
            Currently exploring microservices and cloud deployments.
          </p>
          <div className="mt-4">
            <a href="/resume.pdf" download className="inline-block px-4 py-2 border rounded">Download Resume</a>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/images/hero.jpg" alt="hero" className="w-56 h-56 object-cover rounded-lg shadow" />
        </div>
      </div>
    </section>
  )
}
