import React from 'react'

const Checkbox = ({ columns = 'col-12', label, name }) => {
  return (
    <div className={ columns }>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" name={ name } id={ name } />
        <label className="form-check-label" htmlFor={ name }>{ label }</label>
      </div>
    </div>
  )
}

export default Checkbox