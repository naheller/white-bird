import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Organization = () => {
  const [org, setOrg] = useState({
    _id: '',
    Service_Name: '',
    Main_Phone: '',
    Web_Address: '',
    Hours_of_Operation: '',
    Physical_Site_Address_1: '',
    Email: '',
    Description_of_Service: '',
    ADA_Access: '',
    Languages_Spoken: ''
  })

  useEffect(() => {
    const urlId = window.location.pathname.replace('/org/', '')
    const cachedData = JSON.parse(localStorage.getItem('white-bird-help-book'))
    const selectedOrg =
      cachedData !== null
        ? cachedData.orgs.find(org => org._id === urlId)
        : undefined

    if (selectedOrg) setOrg(selectedOrg)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const renderContactInfo = org => {
    const {
      Main_Phone,
      Physical_Site_Address_1,
      Hours_of_Operation,
      Email,
      Web_Address,
      ADA_Access,
      Languages_Spoken
    } = org

    return (
      <div className="flex flex-col w-full text-gray-800 font-light">
        {!!Main_Phone.length && renderPhone(Main_Phone)}
        {!!Physical_Site_Address_1.length &&
          renderPhysicalAddress(Physical_Site_Address_1)}
        {!!Hours_of_Operation.length &&
          renderHoursOfOperation(Hours_of_Operation)}
        {!!ADA_Access.length && renderADAAccess(ADA_Access)}
        {!!Email.length && renderEmail(Email)}
        {!!Web_Address.length && renderWebsite(Web_Address)}
        {!!Languages_Spoken.length && renderLanguages(Languages_Spoken)}
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
      <span className="font-semibold">Phone:&nbsp;</span>
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
      <span className="font-semibold">Address:&nbsp;</span>
      <span>{address}</span>
    </div>
  )

  const renderHoursOfOperation = hours => (
    <div className="inline-flex items-center mb-2 mr-4">
      <svg
        className="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z" />
      </svg>
      <span className="font-semibold">Hours:&nbsp;</span>
      <span>{hours}</span>
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
      <span className="font-semibold">Email:&nbsp;</span>
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
      <span className="font-semibold">Website:&nbsp;</span>
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

  const renderADAAccess = adaAccess => (
    <div className="inline-flex items-center mb-2 mr-4">
      <svg
        className="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M11 7l1.44 2.16c.31.47 1.01.84 1.57.84H17V8h-3l-1.44-2.16a5.94 5.94 0 0 0-1.4-1.4l-1.32-.88a1.72 1.72 0 0 0-1.7-.04L4 6v5h2V7l2-1-3 14h2l2.35-7.65L11 14v6h2v-8l-2.7-2.7L11 7zm1-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
      </svg>
      <span className="font-semibold">ADA Access:&nbsp;</span>
      <span>{adaAccess}</span>
    </div>
  )

  const renderLanguages = languages => (
    <div className="inline-flex items-center mb-2 mr-4">
      <svg
        className="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M7.41 9l2.24 2.24-.83 2L6 10.4l-3.3 3.3-1.4-1.42L4.58 9l-.88-.88c-.53-.53-1-1.3-1.3-2.12h2.2c.15.28.33.53.51.7l.89.9.88-.88C7.48 6.1 8 4.84 8 4H0V2h5V0h2v2h5v2h-2c0 1.37-.74 3.15-1.7 4.12L7.4 9zm3.84 8L10 20H8l5-12h2l5 12h-2l-1.25-3h-5.5zm.83-2h3.84L14 10.4 12.08 15z" />
      </svg>
      <span className="font-semibold">Languages spoken:&nbsp;</span>
      <span>{languages}</span>
    </div>
  )

  const renderBackButton = () => (
    <Link to="/search" className="mx-auto mt-auto">
      <button className="bg-white hover:bg-gray-100 font-light text-gray-800 py-2 px-4 border rounded shadow-lg inline-flex items-center">
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z" />
        </svg>
        <span>Back to search</span>
      </button>
    </Link>
  )

  return (
    <div className="flex flex-col items-center h-full">
      <h2 className="font-semibold text-gray-800 tracking-tight text-2xl">
        {org.Service_Name}
      </h2>
      <hr className="my-6 border-gray-400 w-full" />
      {renderContactInfo(org)}
      <hr className="my-6 border-gray-400 w-full" />
      <p className="text-gray-800 font-light">{org.Description_of_Service}</p>
      {renderBackButton()}
    </div>
  )
}

export default Organization
