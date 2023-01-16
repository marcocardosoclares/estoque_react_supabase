import React, { useState } from 'react'

const Input = ({ columns = 'col-12', fieldValue, label, name, type }) => {
  const [value, setValue] = useState(fieldValue);

  function handleChange({ target }) {
    setValue(target.value);
  }

  return (
    <div className={ columns }>
      <label htmlFor={name} className='form-label'>{label}</label>
      <input 
        className="form-control" 
        id={name} 
        name={name} 
        onChange={handleChange}
        type={type || "text"} 
        value={value} 
      /> 
    </div>
  )
}

export default Input