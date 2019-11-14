import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="h-full flex items-center justify-center">
      <Link to="/search" className="text-lg font-semibold text-gray-800">
        White Bird Help Book
      </Link>
    </nav>
  )
}

export default Navbar
