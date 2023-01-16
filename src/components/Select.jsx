import React, { useEffect, useState } from 'react'

const Select = ({ fieldValue, label, loadFunction, name }) => {
  const [categories, setCategories] = useState(null);

  async function handleClick() {
    if (!categories) {
      const { data, error } = await loadFunction();
      if (data) setCategories(data);
    }
  }

  useEffect(() => {
    if(fieldValue) {
      
    }
  
    return () => {
      second
    }
  }, [third])
  

  return (
    <>
      <label htmlFor={ name } className='form-label'>{label}</label>
      <select className="form-select" name={name} id={name} onClick={handleClick}>
        <option defaultValue>Clique para carregar</option>
        { categories && categories.map(category => <option key={ category.id } value={ category.id }>{ category.name }</option>) }
      </select>
    </>
  )
}

export default Select