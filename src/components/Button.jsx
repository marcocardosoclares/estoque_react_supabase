import React from 'react'

const Button = ({ children, color = 'primary', columns = null, type = 'submit', ...props }) => {
  return (
    <div className={ `${ [columns, 'form-group mb-3'].join(columns ? ' ': '') }` }>
      <button type={type} className={`btn btn-${color}`} { ...props }>
        { children }
      </button>
    </div>
  )
}

export default Button