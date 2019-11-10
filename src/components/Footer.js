import React from 'react'
import Navbar from './Navbar'
import Container from './Container'

const Footer = () => {
  return (
    <footer className="w-auto border-t border-gray-400 bg-gray-300">
      <Container padding="px-6 py-4">
        <Navbar />
      </Container>
    </footer>
  )
}

export default Footer
