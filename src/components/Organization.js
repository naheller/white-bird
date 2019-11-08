import React, { useEffect } from 'react'

const Organization = props => {
  useEffect(() => {
    console.log('Org props', props)
  }, [])

  return <div>Organization page</div>
}

export default Organization
