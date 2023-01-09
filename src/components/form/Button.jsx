import React from 'react'

const Button = ({ children, color, type }) => {
  return (
    <button 
    type={type || "submit"} 
    className={`btn btn-${color || 'primary'}`}>
        { children }
    </button>
  )
}

export default Button