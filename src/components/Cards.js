import React, { useState } from 'react'
import axios from 'axios'
import Organization from './Organization'

const Cards = ({ orgs, searchTerm }) => {
  return (
    <div className="w-full">
      {orgs.length
        ? orgs.map((org, i) => <Card org={org} key={`org-${i}`} />)
        : searchTerm.length
        ? 'Your search does not match any organization names.'
        : 'Loading...'}
    </div>
  )
}

const Card = ({ org }) => {
  const [updatedOrg, setUpdatedOrg] = useState(org)

  const getOrg = (id) => axios.get(`http://localhost:5000/api/organizations/${id}`)
    .then(res => { 
      console.log('getOrg res', res) 
      setUpdatedOrg(res.data)
    })
    .catch(err => { console.log('getOrg err', err) })

  return (
    <div className="px-4 py-3 border border-gray-400 rounded shadow-lg bg-white overflow-auto mb-6">
      <Organization org={updatedOrg} getOrg={getOrg} />
    </div>
  )
}

export default Cards
