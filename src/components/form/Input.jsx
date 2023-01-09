import React from 'react'

const Input = ({ label, name, type }) => {
  return (
    <div className="form-group mb-3">
        <label htmlFor={name} className='form-label'>{label}</label>
        <input type={type || "text"} className="form-control" name={name} id={name} />
    </div>
  )
}

export default Input