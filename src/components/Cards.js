import React, { useState } from 'react'
import axios from 'axios'

import Organization from './Organization'
import getLoader from '../svg/getLoader'

const Cards = ({ orgs, searchTerm, updateSingleOrg }) => {
  return (
    <div className="w-full">
      {orgs.length
        ? orgs.map((org, i) => (
            <Card org={org} key={`org-${i}`} updateSingleOrg={updateSingleOrg} />
          ))
        : searchTerm.length
        ? 'Your search does not match any organization names.'
        : getLoader()}
    </div>
  )
}

const Card = ({ org, updateSingleOrg }) => {
  const [updatedOrg, setUpdatedOrg] = useState(org)
  const [loading, setLoading] = useState(false)

  const getOrg = id => {
    setLoading(true)

    axios
      .get(`https://white-bird.herokuapp.com/api/organizations/${id}`)
      .then(res => {
        setUpdatedOrg(res.data)
        updateSingleOrg(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.log('getOrg error:', err)
        setLoading(false)
      })
  }

  return (
    <div className="px-4 py-3 border border-gray-400 rounded shadow-lg bg-white overflow-auto mb-6">
      <Organization org={updatedOrg} getOrg={getOrg} getOrgLoading={loading} />
    </div>
  )
}

export default Cards
