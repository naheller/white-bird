import React from 'react'

const Container = props => {
  return (
    <div className="container max-w-4xl mx-auto h-full p-4">
      {props.children}
    </div>
  )
}

export default Container
