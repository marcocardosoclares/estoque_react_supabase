import React, { useState } from 'react'
import { useSearchParams, useSubmit } from 'react-router-dom'

const TableColumns = ({ columns }) => {

  const submit = useSubmit();
  const [ searchParams ] = useSearchParams();

  function handleClick({ currentTarget }) {
    console.log(searchParams)
    searchParams.set('s',currentTarget.id)
    submit()
  }
  
  return (
    <thead>
        <tr>
          { Object.keys(columns).map(column => (
            <th key={column}>
              <label htmlFor={column} className='me-3'>{columns[column]}</label>
              <button type='button' className='btn btn-sm border-0 shadow-none' id={column} onClick={handleClick}>
                <i className="bi bi-arrow-down-up text-secondary"></i>
              </button>
            </th>
          )) }
          <th></th>
        </tr>
    </thead>
  )
}

export default TableColumns