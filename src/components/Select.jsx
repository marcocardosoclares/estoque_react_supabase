import React, { useState } from 'react'

const Select = ({ columns = 'col-12', label, loadFunction, name }) => {
  const [categories, setCategories] = useState(null);

  async function handleClick() {
    if (!categories) {
      const { data, error } = await loadFunction();
      if (data) setCategories(data);
    }
  }

  return (
    <div className={ columns }>
      <label htmlFor={ name } className='form-label'>{label}</label>
      <select className="form-select" name={name} id={name} onClick={handleClick}>
        <option defaultValue>Clique para carregar</option>
        { categories && categories.map(category => <option key={ category.id } value={ category.id }>{ category.name }</option>) }
      </select>
    </div>
  )
}

export default Select