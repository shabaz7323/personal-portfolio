import React from 'react'

export default function Footer(){ 
  return (
    <footer className="bg-white border-t py-6">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-3">
          <a href="https://github.com/shabazahamed" target="_blank" rel="noreferrer" className="mr-3">GitHub</a>
          <a href="https://linkedin.com/in/shabaz-ahamed" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} Shabaz Ahamed. All rights reserved.</div>
      </div>
    </footer>
  )
}
