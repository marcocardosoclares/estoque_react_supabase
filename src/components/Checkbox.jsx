import React, { useState } from 'react'

const Checkbox = ({ checked, label, name }) => {
  const [value, setValue] = useState(checked)

  function handleChange({ target }) {
    setValue(target.checked);
  }
  return (
    <div className="form-check">
      <input className="form-check-input" type="checkbox" name={ name } id={ name } checked={value} onChange={handleChange} />
      <label className="form-check-label" htmlFor={ name }>{ label }</label>
    </div>
  )
}

export default Checkbox