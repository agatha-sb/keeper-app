import React from 'react'

export default function Footer() {
  let date = new Date()

  return (
    <footer className='footer'>
      <p>Copyright ⓒ {date.getFullYear()}</p>
    </footer>
  )
}
