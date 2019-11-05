import React, { useEffect, useState } from 'react'
import Fuse from 'fuse.js'
import axios from 'axios'
import Table from './Table'

const fuseOptions = {
  keys: ['Service_Name'],
  shouldSort: true,
  threshold: 0.3
}

let fuse = null

const Search = () => {
  const [orgs, setOrgs] = useState([])
  const [sortedOrgs, setSortedOrgs] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/organizations')
      .then(res => {
        const orgs = res.data.sort((a, b) =>
          a.Service_Name > b.Service_Name ? 1 : -1
        )

        fuse = new Fuse(orgs, fuseOptions)
        setOrgs(orgs)
      })
      .catch(err => console.error('setOrgs error:', err))
  }, [])

  useEffect(() => {
    if (fuse !== null) setSortedOrgs(fuse.search(searchTerm))
  }, [searchTerm])

  return (
    <div>
      <input
        type="text"
        className="shadow appearance-none border rounded w-full my-6 py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Search organizations..."
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
      ></input>
      <Table orgs={searchTerm.length ? sortedOrgs : orgs} />
    </div>
  )
}

export default Search
