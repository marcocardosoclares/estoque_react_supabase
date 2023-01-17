import React from 'react'
import CrudActions from './CrudActions'

const Table = ({ columns, rows, actions, onClick }) => {
  return (
    <div className="table-responsive">
        <table className="table table-hover table-borderless table-sm">
            <thead>
                <tr>
                    { Object.values(columns).map(column => <th key={column}>{ column }</th>) }
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { rows.map((row) => (
                    <tr key={row.id} onClick={onClick}>
                        { Object.keys(columns).map((column, index) => <td key={index}>{ row[column] }</td>) }
                        { actions && <td><CrudActions route={`${row.id}`} /></td>}
                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default Table