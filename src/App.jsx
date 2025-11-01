import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){ 
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <About />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
