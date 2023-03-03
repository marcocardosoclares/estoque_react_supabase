import React from 'react'

const TableContainer = ({ children }) => {
  return (
    <div className="table-responsive">
        <table className="table table-borderless table-hover">
            { children }
        </table>
    </div>
  )
}

export default TableContainer