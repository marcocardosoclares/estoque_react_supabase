import React from 'react'
import { Link } from 'react-router-dom'

const CrudActions = ({ route }) => {
  return (
    <div className="dropdown position-static">
        <button type="button" className="shadow-none border-0 btn btn-sm py-0 my-0" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-three-dots-vertical"></i>
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
            <li><Link to={`${route}/visualizar`} className='dropdown-item'>Visualizar</Link></li>
            <li><Link to={`${route}/editar`} className='dropdown-item'>Editar</Link></li>
            <li><Link to={`${route}/deletar`} className='dropdown-item'>Deletar</Link></li>
        </ul>
    </div>
  )
}

export default CrudActions