import React from 'react'

const Input = ({ label, name, type = 'text', ...props }) => {
  return (
    <>
      <label htmlFor={ name } className='form-label'>{ label }</label>
      <input 
        className="form-control" 
        id= {name } 
        name={ name } 
        type={ type } 
        { ...props }
      />
    </>
  )
}

export default Input