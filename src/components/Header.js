import React from 'react'
import Navbar from './Navbar'
import Container from './Container'

const Header = () => {
  return (
    <header className="w-auto border-b bg-gray-100">
      <Container>
        <Navbar />
      </Container>
    </header>
  )
}

export default Header
