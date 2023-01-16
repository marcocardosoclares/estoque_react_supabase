import React from 'react'

const Checkbox = ({ label, name }) => {
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" name={ name } id={ name } />
      <label className="form-check-label" htmlFor={ name }>{ label }</label>
    </div>
  )
}

export default Checkbox