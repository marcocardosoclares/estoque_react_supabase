import React from 'react'

const Button = ({ children, type = 'submit', ...props }) => {
  return (
    <button type={type} { ...props }>
      { children }
    </button>
  )
}

export default Button