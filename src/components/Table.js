import React from 'react'
import { Link } from 'react-router-dom'

const Table = ({ orgs }) => {
  const renderRow = (org, i) => {
    return (
      <tr key={org._id} className={i % 2 !== 0 ? 'bg-gray-100' : ''}>
        <td className="border px-4 py-3">
          <Link
            to={`org/${org._id}`}
            className="text-gray-800 hover:text-gray-600"
          >
            {org.Service_Name}
          </Link>
        </td>
      </tr>
    )
  }

  return (
    <table className="table-auto w-full mx-auto">
      {/* <thead className="text-left">
        <tr>
          <th className="px-4 py-2">Organization</th>
        </tr>
      </thead> */}
      <tbody>
        {orgs.length ? orgs.map((org, i) => renderRow(org, i)) : 'Loading...'}
      </tbody>
    </table>
  )
}

export default Table
