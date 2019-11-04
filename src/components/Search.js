import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from './Table'

const Search = () => {
  const [orgs, setOrgs] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/organizations')
      .then(res => {
        setOrgs(res.data)
      })
      .catch(err => console.error('setOrgs error:', err))
  }, [])

  return (
    <div>
      <input
        className="shadow appearance-none border rounded w-full my-6 py-3 px-4 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Search organizations..."
      ></input>
      <Table orgs={orgs} />
    </div>
  )
}

export default Search
