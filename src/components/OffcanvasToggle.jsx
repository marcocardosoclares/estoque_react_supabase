import React from 'react'

const OffcanvasToggle = () => {
  return (
    <button 
    className="btn btn-primary d-md-none" 
    type="button" 
    ata-bs-toggle="offcanvas" 
    data-bs-target="#offcanvasResponsiveLabel" 
    aria-controls="offcanvasResponsiveLabel"
    >
        <i className="bi bi-list"></i>
    </button>

  )
}

export default OffcanvasToggle