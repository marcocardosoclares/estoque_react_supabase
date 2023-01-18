import React from 'react'
import CrudActions from '../CrudActions';

const TableRows = ({ actions, columns, movements, rows, ...props }) => {
  return (
    <tbody>
        { rows.map((row) => (
            <tr key={row.id} { ...props }>
                { columns.map((column, index) => <td key={index}>{ row[column] }</td>) }
                { actions && 
                    <td>
                        <CrudActions route={`${row.id}`} />
                    </td> 
                }
            </tr>
        )) }
    </tbody>
  )
}

export default TableRows