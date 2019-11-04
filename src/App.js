import React from 'react'
import Header from './components/Header'
import Container from './components/Container'
import Search from './components/Search'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="flex-1">
        <Container>
          <Search />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
