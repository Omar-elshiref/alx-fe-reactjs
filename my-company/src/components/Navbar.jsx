import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="./Services.jsx">Services</Link>
            <Link to="./Contact.jsx">Contact</Link>
            <Link to="./About.jsx">About</Link>

        </nav>
    </header>
  )
}

export default Navbar