import React from 'react'

const Spinner = () => {
  return (        
    <div className="text-center py-5">
      <span className="spinner-border me-2" role="status" aria-hidden="true"></span>
      Carregando...
    </div>
  )
}

export default Spinner