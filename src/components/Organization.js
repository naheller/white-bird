import React, { useEffect, useState } from 'react'

const Organization = props => {
  const [name, setName] = useState('')

  useEffect(() => {
    const urlId = window.location.pathname.replace('/org/', '');
    const cachedData = JSON.parse(localStorage.getItem('white-bird-help-book'))
    const selectedOrg = cachedData !== null ? cachedData.orgs.find(org => org._id === urlId) : undefined
    
    setName(selectedOrg ? selectedOrg.Service_Name : 'Organization not found')
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <div>{name}</div>
}

export default Organization
