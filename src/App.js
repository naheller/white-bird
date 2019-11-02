import React from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App
