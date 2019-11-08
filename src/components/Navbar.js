import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="h-full flex items-center justify-center">
      <h2>
        <Link to="/search">White Bird Help Book</Link>
      </h2>
    </nav>
  )
}

export default Navbar
