import React from 'react'

const Button = ({ children, color = 'primary', type = 'submit', ...props }) => {
  return (
    <button type={type} className={`btn btn-${color}`} { ...props }>
      { children }
    </button>
  )
}

export default Button