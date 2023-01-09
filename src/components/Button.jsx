import React from 'react'

const Button = ({ children, color = 'primary', type = 'submit' }) => {
  return (
    <button type={type} className={`btn btn-${color}`}>
      { children }
    </button>
  )
}

export default Button