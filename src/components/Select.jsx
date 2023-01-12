import React, { useState } from 'react'

const Select = ({ label, loadFunction, name }) => {
  const [categories, setCategories] = useState(null);

  async function handleClick() {
    if (categories) {
      console.log(categories)
    } else {
      const { data, error } = await loadFunction();
      if (data) setCategories(data);
    }
  }

  return (
    <div className="form-group mb-3">
      <label htmlFor="goup_id" className='form-label'>{label}</label>
      <select className="form-select" name={name} onClick={handleClick}>
        <option defaultValue>Clique para carregar</option>
        { categories && categories.map(category => <option key={ category.id } value={ category.id }>{ category.name }</option>) }
      </select>
    </div>
  )
}

export default Select