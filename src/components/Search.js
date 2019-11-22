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
  const [showNum, setShowNum] = useState(20)

  useEffect(() => {
    // const cachedData = JSON.parse(localStorage.getItem('white-bird-help-book'))
    // cachedData !== null ? setOrgsFromCache(cachedData) : setOrgsFromServer()
    setOrgsFromServer()
  }, [])

  useEffect(() => {
    if (fuse !== null) {
      const results = fuse.search(searchTerm)
      setSortedOrgs(results)
    }
  }, [searchTerm])

  // const setOrgsFromCache = cachedData => {
  //   setOrgs(cachedData.orgs)
  //   fuse = new Fuse(cachedData.orgs, fuseOptions)
  // }

  const setOrgsFromServer = () => {
    axios
      .get('https://white-bird.herokuapp.com/api/organizations')
      .then(res => {
        const orgs = res.data.sort((a, b) => (a.Service_Name > b.Service_Name ? 1 : -1))

        fuse = new Fuse(orgs, fuseOptions)
        localStorage.setItem('white-bird-help-book', JSON.stringify({ orgs }))
        setOrgs(orgs)
      })
      .catch(err => console.error('setOrgs error:', err))
  }

  const getFormattedOrgs = () => {
    return !!searchTerm.length ? sortedOrgs.slice(0, showNum) : orgs.slice(0, showNum)
  }

  const updateSingleOrg = updatedValues => {
    const targetOrgIndex = orgs.findIndex(org => org._id === updatedValues._id)
    const targetSortedOrgIndex = sortedOrgs.findIndex(org => org._id === updatedValues._id)

    if (targetOrgIndex !== -1) {
      orgs[targetOrgIndex] = { ...updatedValues }
      fuse = new Fuse(orgs, fuseOptions)
    }

    if (targetSortedOrgIndex !== -1) sortedOrgs[targetSortedOrgIndex] = { ...updatedValues }
  }

  const renderShowMoreButton = () => (
    <button
      onClick={() => setShowNum(showNum + 25)}
      className="mt-2 mb-6 bg-gray-200 hover:bg-gray-300 font-semibold text-gray-800 py-2 px-4 rounded inline-flex items-center"
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
        className="font-light shadow-inner appearance-none border border-gray-400 rounded w-full mb-8 py-3 px-4 text-gray-800 placeholder-gray-600 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Search organizations..."
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
      ></input>
      <Cards orgs={getFormattedOrgs()} searchTerm={searchTerm} updateSingleOrg={updateSingleOrg} />
      {showNum < (searchTerm.length ? sortedOrgs.length : orgs.length) && renderShowMoreButton()}
    </div>
  )
}

export default Search
