import React from 'react'
import Organization from './Organization'

const Cards = ({ orgs }) => {
  const renderCard = org => {
    return (
      <div
        key={org._id}
        className="px-4 py-3 border rounded shadow-lg bg-white overflow-auto mb-6"
      >
        <Organization org={org} />
      </div>
    )
  }

  return (
    <div className="w-full">
      {orgs.length ? orgs.map((org, i) => renderCard(org, i)) : 'Loading...'}
    </div>
  )
}

export default Cards
