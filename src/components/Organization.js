import React, { Fragment } from 'react'

const Organization = ({ org }) => {
  const renderInfoTable = () => {
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
      <table className="table-auto w-full text-gray-800 my-3">
        <tbody>
          {!!Main_Phone.length && renderPhone(Main_Phone)}
          {!!Physical_Site_Address_1.length &&
            renderPhysicalAddress(Physical_Site_Address_1)}
          {!!Hours_of_Operation.length &&
            renderHoursOfOperation(Hours_of_Operation)}
          {!!ADA_Access.length && renderADAAccess(ADA_Access)}
          {!!Email.length && renderEmail(Email)}
          {!!Web_Address.length && renderWebsite(Web_Address)}
          {!!Languages_Spoken.length && renderLanguages(Languages_Spoken)}
        </tbody>
      </table>
    )
  }

  const renderRow = (label, data) => (
    <tr className="odd:bg-gray-200">
      <td className="flex items-center px-4 py-2">{label}</td>
      <td className="px-4 py-2">{data}</td>
    </tr>
  )

  const renderPhone = phone => {
    const label = (
      <Fragment>
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M20 18.35V19a1 1 0 0 1-1 1h-2A17 17 0 0 1 0 3V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 0 1 .99 1v3.35z" />
        </svg>
        <span className="font-semibold">Phone</span>
      </Fragment>
    )

    return renderRow(label, phone)
  }

  const renderPhysicalAddress = address => {
    const label = (
      <Fragment>
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" />
        </svg>
        <span className="font-semibold">Address</span>
      </Fragment>
    )

    return renderRow(label, address)
  }

  const renderHoursOfOperation = hours => {
    const label = (
      <Fragment>
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z" />
        </svg>
        <span className="font-semibold">Hours</span>
      </Fragment>
    )

    return renderRow(label, hours)
  }

  const renderEmail = email => {
    const label = (
      <Fragment>
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13.6 13.47A4.99 4.99 0 0 1 5 10a5 5 0 0 1 8-4V5h2v6.5a1.5 1.5 0 0 0 3 0V10a8 8 0 1 0-4.42 7.16l.9 1.79A10 10 0 1 1 20 10h-.18.17v1.5a3.5 3.5 0 0 1-6.4 1.97zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
        <span className="font-semibold">Email</span>
      </Fragment>
    )

    return renderRow(label, email)
  }

  const renderWebsite = website => {
    const label = (
      <Fragment>
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.26 13a2 2 0 0 1 .01-2.01A3 3 0 0 0 9 5H5a3 3 0 0 0 0 6h.08a6.06 6.06 0 0 0 0 2H5A5 5 0 0 1 5 3h4a5 5 0 0 1 .26 10zm1.48-6a2 2 0 0 1-.01 2.01A3 3 0 0 0 11 15h4a3 3 0 0 0 0-6h-.08a6.06 6.06 0 0 0 0-2H15a5 5 0 0 1 0 10h-4a5 5 0 0 1-.26-10z" />
        </svg>
        <span className="font-semibold">Website</span>
      </Fragment>
    )

    const websiteLink = (
      <a
        className="underline"
        href={website.startsWith('http') ? website : `https://${website}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {website}
      </a>
    )

    return renderRow(label, websiteLink)
  }

  const renderADAAccess = adaAccess => {
    const label = (
      <Fragment>
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M11 7l1.44 2.16c.31.47 1.01.84 1.57.84H17V8h-3l-1.44-2.16a5.94 5.94 0 0 0-1.4-1.4l-1.32-.88a1.72 1.72 0 0 0-1.7-.04L4 6v5h2V7l2-1-3 14h2l2.35-7.65L11 14v6h2v-8l-2.7-2.7L11 7zm1-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </svg>
        <span className="font-semibold">ADA Access</span>
      </Fragment>
    )

    return renderRow(label, adaAccess)
  }

  const renderLanguages = languages => {
    const label = (
      <Fragment>
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M7.41 9l2.24 2.24-.83 2L6 10.4l-3.3 3.3-1.4-1.42L4.58 9l-.88-.88c-.53-.53-1-1.3-1.3-2.12h2.2c.15.28.33.53.51.7l.89.9.88-.88C7.48 6.1 8 4.84 8 4H0V2h5V0h2v2h5v2h-2c0 1.37-.74 3.15-1.7 4.12L7.4 9zm3.84 8L10 20H8l5-12h2l5 12h-2l-1.25-3h-5.5zm.83-2h3.84L14 10.4 12.08 15z" />
        </svg>
        <span className="font-semibold">Languages spoken</span>
      </Fragment>
    )

    return renderRow(label, languages)
  }

  return (
    <Fragment>
      <h2 className="font-semibold text-gray-800 tracking-tight text-xl">
        {org.Service_Name}
      </h2>
      {renderInfoTable()}
      <p className="text-gray-800 font-light">{org.Description_of_Service}</p>
    </Fragment>
  )
}

export default Organization
