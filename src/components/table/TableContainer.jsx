import React from 'react'

const TableContainer = ({ children }) => {
  return (
    <div className="table-responsive">
        <table className="table table-hover table-borderless table-sm">
            { children }
        </table>
    </div>
  )
}

export default TableContainer