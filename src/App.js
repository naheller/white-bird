import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Container from './components/Container'
import Search from './components/Search'
import Organization from './components/Organization'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="flex flex-col h-full">
      <Router>
        <Header />
        <main className="flex-1 bg-gray-100">
          <Container padding="px-6 py-10">
            <Switch>
              <Route exact path="/">
                <div>Home</div>
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/org/:id">
                <Organization />
              </Route>
            </Switch>
          </Container>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
