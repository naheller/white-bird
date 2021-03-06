import React from 'react'

const Navbar = () => {
  return (
    <nav className="h-full flex items-center justify-center text-gray-800">
      <svg
        className="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
      </svg>
      <h1 className="text-lg font-semibold">White Bird Help Book</h1>
    </nav>
  )
}

export default Navbar
