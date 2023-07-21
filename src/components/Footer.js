import React from 'react'

function Footer() {
    const year = new Date();
  return (
    <footer>
copyright &copy; {year.getFullYear()}
    </footer>
  )
}

export default Footer