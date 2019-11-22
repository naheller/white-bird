import React from 'react'

const Container = props => {
  return (
    <div className={`container mx-auto max-w-2xl h-full ${props.padding}`}>{props.children}</div>
  )
}

export default Container
