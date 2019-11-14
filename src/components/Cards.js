import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ orgs }) => {
  const renderCard = org => {
    const { _id, Service_Name, Description_of_Service } = org
    const description =
      Description_of_Service.length > 300
        ? `${Description_of_Service.substring(0, 300)}...`
        : Description_of_Service

    return (
      <div
        key={_id}
        className="px-4 py-3 border rounded shadow-lg bg-white overflow-auto mb-6"
      >
        <h2 className="font-semibold text-xl tracking-tight mb-2 text-gray-800 hover:text-gray-600">
          <Link to={`org/${_id}`}>{Service_Name}</Link>
        </h2>
        <hr className="my-3 border-b border-t-0" />
        {renderContactInfo(org)}
        <hr className="mt-1 mb-3 border-b border-t-0" />
        <p className="font-light text-gray-700 mb-3">{description}</p>
        <div className="flex justify-end">
          <Link to={`org/${org._id}`}>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-semibold py-2 px-4 rounded">
              Details
            </button>
          </Link>
        </div>
      </div>
    )
  }

  const renderContactInfo = org => {
    const { Main_Phone, Physical_Site_Address_1, Email, Web_Address } = org

    return (
      <div className="flex flex-col text-gray-700 font-light">
        {!!Main_Phone.length && renderPhone(Main_Phone)}
        {!!Physical_Site_Address_1.length &&
          renderPhysicalAddress(Physical_Site_Address_1)}
        {!!Email.length && renderEmail(Email)}
        {!!Web_Address.length && renderWebsite(Web_Address)}
      </div>
    )
  }

  const renderPhone = phone => (
    <div className="inline-flex items-center mb-2 mr-4">
      <svg
        className="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z" />
      </svg>
      <span>{phone}</span>
    </div>
  )

  const renderPhysicalAddress = address => (
    <div className="inline-flex items-center mb-2 mr-4">
      <svg
        className="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" />
      </svg>
      <span>{address}</span>
    </div>
  )

  const renderEmail = email => (
    <div className="inline-flex items-center mb-2 mr-4">
      <svg
        className="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13.6 13.47A4.99 4.99 0 0 1 5 10a5 5 0 0 1 8-4V5h2v6.5a1.5 1.5 0 0 0 3 0V10a8 8 0 1 0-4.42 7.16l.9 1.79A10 10 0 1 1 20 10h-.18.17v1.5a3.5 3.5 0 0 1-6.4 1.97zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
      <span>{email}</span>
    </div>
  )

  const renderWebsite = website => (
    <div className="inline-flex items-center mb-2 mr-4">
      <svg
        className="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.26 13a2 2 0 0 1 .01-2.01A3 3 0 0 0 9 5H5a3 3 0 0 0 0 6h.08a6.06 6.06 0 0 0 0 2H5A5 5 0 0 1 5 3h4a5 5 0 0 1 .26 10zm1.48-6a2 2 0 0 1-.01 2.01A3 3 0 0 0 11 15h4a3 3 0 0 0 0-6h-.08a6.06 6.06 0 0 0 0-2H15a5 5 0 0 1 0 10h-4a5 5 0 0 1-.26-10z" />
      </svg>
      <a
        className="underline"
        href={website.startsWith('http') ? website : `https://${website}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {website}
      </a>
    </div>
  )

  return (
    <div className="w-full">
      {orgs.length ? orgs.map((org, i) => renderCard(org, i)) : 'Loading...'}
    </div>
  )
}

export default Cards
