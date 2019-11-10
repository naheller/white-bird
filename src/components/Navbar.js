import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="h-full flex items-center justify-center">
      <h1 className="font-semibold text-xl text-gray-900 tracking-tight">
        <Link to="/search">White Bird Help Book</Link>
      </h1>
    </nav>
  )
}

export default Navbar
