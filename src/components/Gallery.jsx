import React from 'react'

const images = ['/images/gallery-1.jpg','/images/hero.jpg','/images/project-1.jpg']

export default function Gallery(){ 
  return (
    <section id="gallery" className="py-12">
      <h3 className="text-2xl font-semibold mb-6">Gallery</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src,i) => (
          <div key={i} className="overflow-hidden rounded-lg">
            <img src={src} alt={`gallery-${i}`} className="w-full h-40 object-cover" />
          </div>
        ))}
      </div>
    </section>
  )
}
