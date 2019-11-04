import React from 'react'

const Table = ({ orgs }) => {
  const renderRow = (org, i) => {
    return (
      <tr className={i % 2 !== 0 ? 'bg-gray-100' : ''}>
        <td className="border px-4 py-2">{org.Service_Name}</td>
      </tr>
    )
  }

  return (
    <table className="table-auto w-full mx-auto">
      <thead className="text-left">
        <tr>
          <th className="px-4 py-2">Organization</th>
        </tr>
      </thead>
      <tbody>
        {orgs.length ? orgs.map((org, i) => renderRow(org, i)) : 'Loading...'}
      </tbody>
    </table>
  )
}

export default Table
