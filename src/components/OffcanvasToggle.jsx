import { Offcanvas } from 'bootstrap'
import React from 'react'

const OffcanvasToggle = ({ target = '#sidebar' }) => {
  let sidebar = null;

  const handleToggle = () => {
    if (!sidebar) {
      sidebar = new Offcanvas('#sidebar');
    }
    sidebar.toggle();
  }

  return (
    <button 
    className="btn btn-light d-md-none" 
    type="button" 
    ata-bs-toggle="offcanvas" 
    data-bs-target={target} 
    aria-controls="offcanvasResponsiveLabel"
    onClick={handleToggle}
    >
        <i className="bi bi-list"></i>
    </button>

  )
}

export default OffcanvasToggle