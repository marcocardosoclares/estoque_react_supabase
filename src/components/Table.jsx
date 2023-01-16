import React from 'react'

const Table = ({ columns, rows }) => {
  return (
    <div className="table-responsive">
        <table className="table table-hover table-borderless">
            <thead>
                <tr>
                    { Object.values(columns).map(column => <th scope="col" key={column}>{ column }</th> ) }
                </tr>
            </thead>
            <tbody>
                { rows.map((row, index) => (
                    <tr key={index}>
                        { Object.keys(columns).map((column, index) => <td key={index}>{ row[column] }</td>) }
                    </tr>
                    
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default Table