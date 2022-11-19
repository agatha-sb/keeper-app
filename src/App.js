import React from 'react'
import Header from './components/Header'
import Note from './components/Note'
import Footer from './components/Footer'
import notes from './notes'


export default function App() {

  const noteEntry = notes.map(note => (
    <Note
        title={note.title}
        content={note.content}
       />
  ))

  return (
    <div>
      <Header />
      {noteEntry}
      <Footer />
    </div>
  )
}
