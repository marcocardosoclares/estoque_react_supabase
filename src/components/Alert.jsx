import React from 'react'

const Alert = ({ message, theme = 'danger'}) => {
  return (
    <div className={`alert alert-${theme}`} role="alert">
        {message}
    </div>
  )
}

export default Alert