import React from 'react'

const Select = ({ columns = 'col-12', label, name, options }) => {
  return (
    <div className={ `${ columns } mb-3` }>
      <label htmlFor={ name } className='form-label'>{label}</label>
      <select className="form-select" name={name} id={name}>
        { options && options.map(({ value, name }) => <option key={ value } value={ value }>{ name }</option>) }
      </select>
    </div>
  )
}

export default Select