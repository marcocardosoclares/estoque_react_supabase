import React from 'react'

const JustifyBetween = ({ children }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
        { children }
    </div>
  )
}

export default JustifyBetween