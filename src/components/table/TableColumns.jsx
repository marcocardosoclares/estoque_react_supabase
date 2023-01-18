import React from 'react'

const TableColumns = ({ columns }) => {
  return (
    <thead>
        <tr>
            { columns.map(column => <th key={column}>{ column }</th>) }
            <th></th>
        </tr>
    </thead>
  )
}

export default TableColumns