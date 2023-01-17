import React, { useState } from 'react'

const Input = ({ fieldValue, label, name, type = 'text', ...props }) => {
  const [value, setValue] = useState(fieldValue);

  function handleChange({ target }) {
    setValue(target.value);
  }

  return (
    <>
      <label htmlFor={ name } className='form-label'>{ label }</label>
      <input 
        className="form-control" 
        id= {name } 
        name={ name } 
        onChange={ handleChange }
        type={ type } 
        value={ value } 
        { ...props }
      />
    </>
  )
}

export default Input