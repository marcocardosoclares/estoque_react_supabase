import React from 'react'

const Badge = ({ color, children }) => {
  return (
    <span className={`badge rounded-pill text-body-secondary bg-${ color }-subtle`}>{ children }</span>
  )
}

export default Badge