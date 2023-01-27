import React from 'react'

const Select = ({ options, label, name }) => {
  return (
    <>
      <label htmlFor={ name } className='form-label'>{label}</label>
      <select className="form-select" name={name} id={name}>
        <option defaultValue>Clique para carregar</option>
        { options && options.map(option => <option key={ option.id } value={ option.id }>{ option.name }</option>) }
      </select>
    </>
  )
}

export default Select