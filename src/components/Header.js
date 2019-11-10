import React from 'react'

import Navbar from './Navbar'
import Container from './Container'

const Header = () => {
  return (
    <header className="w-auto border-b border-gray-400 bg-gray-300">
      <Container padding="px-6 py-4">
        <Navbar />
      </Container>
    </header>
  )
}

export default Header
