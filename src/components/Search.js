import React, { useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import axios from 'axios'
import Cards from './Cards'

const fuseOptions = {
  keys: ['Service_Name'],
  threshold: 0.1,
  distance: 1000
}

let fuse = null

const Search = () => {
  const [orgs, setOrgs] = useState([])
  const [sortedOrgs, setSortedOrgs] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [showNum, setShowNum] = useState(25)

  useEffect(() => {
    const cachedData = JSON.parse(localStorage.getItem('white-bird-help-book'))
    cachedData !== null ? setOrgsFromCache(cachedData) : setOrgsFromServer()
  }, [])

  useEffect(() => {
    if (fuse !== null) setSortedOrgs(fuse.search(searchTerm))
  }, [searchTerm])

  const setOrgsFromCache = cachedData => {
    setOrgs(cachedData.orgs)
    fuse = new Fuse(cachedData.orgs, fuseOptions)
  }

  const setOrgsFromServer = () => {
    axios
      .get('http://localhost:5000/api/organizations')
      .then(res => {
        const orgs = res.data.sort((a, b) =>
          a.Service_Name > b.Service_Name ? 1 : -1
        )

        fuse = new Fuse(orgs, fuseOptions)
        localStorage.setItem('white-bird-help-book', JSON.stringify({ orgs }))
        setOrgs(orgs)
      })
      .catch(err => console.error('setOrgs error:', err))
  }

  const getFormattedOrgs = () => {
    return searchTerm.length
      ? sortedOrgs.slice(0, showNum)
      : orgs.slice(0, showNum)
  }

  const renderShowMoreButton = () => (
    <button
      onClick={() => setShowNum(showNum + 25)}
      className="mb-6 mt-2 bg-white hover:bg-gray-100 font-light text-gray-800 py-2 px-4 border rounded shadow-lg inline-flex items-center"
    >
      <span>Show more</span>
      <svg
        className="fill-current w-4 h-4 ml-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </button>
  )

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        className="font-light shadow-lg appearance-none border rounded w-full mb-8 py-3 px-4 text-gray-800 placeholder-gray-600 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Search organizations..."
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
      ></input>
      <Cards orgs={getFormattedOrgs()} />
      {showNum < (searchTerm.length ? sortedOrgs.length : orgs.length) &&
        renderShowMoreButton()}
    </div>
  )
}

export default Search
