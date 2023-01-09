import React from 'react'

const Checkbox = ({ label, name }) => {
  return (
    <div className="form-group form-check mb-3">
        <input type="checkbox" className="form-check-input" name={ name } id={ name } />
        <label className="form-check-label" htmlFor={ name }>{ label }</label>
    </div>
  )
}

export default Checkbox