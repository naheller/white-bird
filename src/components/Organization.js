import React, { Fragment, useState } from 'react'
import axios from 'axios'
import getLoader from '../svg/getLoader'

const Organization = ({ org, getOrg, getOrgLoading }) => {
  const [editMode, setEditMode] = useState(false)
  const [showFullDesc, setShowFullDesc] = useState(false)
  const [editedOrg, setEditedOrg] = useState(org)
  const [loading, setLoading] = useState(false)

  const getUpdates = () => {
    const updates = {}

    Object.keys(org).forEach(key => {
      if (org[key] !== editedOrg[key]) {
        updates[key] = editedOrg[key]
      }
    })

    return updates
  }

  const submitUpdates = () => {
    setLoading(true)
    const updates = getUpdates()

    axios
      .put(`https://white-bird.herokuapp.com/api/organizations/${org._id}`, {
        ...updates
      })
      .then(() => {
        getOrg(org._id)
        setLoading(false)
      })
      .catch(err => {
        console.log('submitUpdates error:', err)
        setLoading(false)
      })
  }

  const renderInfoTable = () => {
    const {
      Phone_Number,
      Physical_Address,
      Hours_of_Operation,
      Email_Address,
      Web_Address,
      Wheelchair_Access,
      Language_Help
    } = org

    return (
      <table className="table-auto w-full text-gray-800 my-3">
        <tbody>
          {!!(editMode || Phone_Number.length) && renderPhone(Phone_Number)}
          {!!(editMode || Physical_Address.length) && renderPhysicalAddress(Physical_Address)}
          {!!(editMode || Hours_of_Operation.length) && renderHoursOfOperation(Hours_of_Operation)}
          {!!(editMode || Wheelchair_Access.length) && renderADAAccess(Wheelchair_Access)}
          {!!(editMode || Email_Address.length) && renderEmailAddress(Email_Address)}
          {!!(editMode || Web_Address.length) && renderWebsite(Web_Address)}
          {!!(editMode || Language_Help.length) && renderLanguages(Language_Help)}
        </tbody>
      </table>
    )
  }

  const renderRow = (label, data, key) => {
    return (
      <tr className="odd:bg-gray-200">
        <td className="flex items-center px-4 py-2">{label}</td>
        {editMode ? (
          <td className={editMode ? 'pr-1' : 'px-4'}>
            <input
              className="px-2 py-1 border border-gray-400 rounded shadow-inner w-full"
              onChange={e => setEditedOrg({ ...editedOrg, [key]: e.target.value })}
              value={editedOrg[key]}
            />
          </td>
        ) : (
          <td className="px-4 py-2">{data}</td>
        )}
      </tr>
    )
  }

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

    return renderRow(label, phone, 'Phone_Number')
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

    return renderRow(label, address, 'Physical_Address')
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

    return renderRow(label, hours, 'Hours_of_Operation')
  }

  const renderEmailAddress = email => {
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

    return renderRow(label, email, 'Email_Address')
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

    // const websiteLink = (
    //   <a
    //     className="underline"
    //     href={website.startsWith("http") ? website : `https://${website}`}
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     {website}
    //   </a>
    // );

    return renderRow(label, website, 'Web_Address')
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
        <span className="font-semibold">Wheelchair Access</span>
      </Fragment>
    )

    return renderRow(label, adaAccess === 'y' ? 'Yes' : 'No', 'Wheelchair_Access')
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
        <span className="font-semibold">Language Help</span>
      </Fragment>
    )

    return renderRow(label, languages === 'y' ? 'Yes' : 'No', 'Language_Help')
  }

  const renderDescription = () => {
    const maxCharLength = 200
    const shortDesc = org.Description.substring(0, maxCharLength)

    if (editMode) {
      return (
        <textarea
          rows={3}
          className="px-2 py-1 border border-gray-400 font-light rounded shadow-inner w-full"
          onChange={e =>
            setEditedOrg({
              ...editedOrg,
              Description: e.target.value
            })
          }
          value={editedOrg.Description}
        />
      )
    }

    return org.Description.length > maxCharLength && !showFullDesc ? (
      <div className="text-gray-800 font-light">
        <p className="inline">{`${shortDesc}... `}</p>
        <span className="underline cursor-pointer" onClick={() => setShowFullDesc(true)}>
          read more
        </span>
      </div>
    ) : (
      <p className="text-gray-800 font-light">{org.Description}</p>
    )
  }

  const renderEditButtons = () => {
    const editButton = (
      <button
        className="p-2 text-gray-800 hover:bg-gray-200 rounded-full"
        onClick={() => setEditMode(true)}
      >
        <svg
          className="fill-current w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
        </svg>
      </button>
    )

    const closeButton = (
      <button
        className="p-2 text-gray-800 hover:bg-gray-200 rounded-full"
        onClick={() => {
          setEditMode(false)
          setEditedOrg(org)
        }}
      >
        <svg className="fill-red w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      </button>
    )

    const submitButton = (
      <button
        className="p-2 text-gray-800 hover:bg-gray-200 rounded-full"
        onClick={() => {
          submitUpdates()
          setEditMode(false)
        }}
      >
        <svg className="fill-green w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
        </svg>
      </button>
    )

    const updates = getUpdates()

    return (
      <div className="flex">
        {!!(editMode && Object.keys(updates).length) && submitButton}
        {editMode ? closeButton : editButton}
      </div>
    )
  }

  const renderHeader = () => {
    const inputBg = editedOrg.Service_Name.length ? '' : 'bg-red-100'

    return (
      <div className="flex items-center justify-between font-semibold text-gray-800 text-xl">
        {editMode ? (
          <input
            className={`mr-2 px-2 py-1 border border-gray-400 rounded shadow-inner w-full ${inputBg}`}
            placeholder="Name is required"
            onChange={e => setEditedOrg({ ...editedOrg, Service_Name: e.target.value })}
            value={editedOrg.Service_Name}
          />
        ) : (
          <h2 className="py-1 tracking-tight">{org.Service_Name}</h2>
        )}

        {renderEditButtons()}
      </div>
    )
  }

  return loading || getOrgLoading ? (
    getLoader()
  ) : (
    <Fragment>
      {renderHeader()}
      {renderInfoTable()}
      {renderDescription()}
    </Fragment>
  )
}

export default Organization
