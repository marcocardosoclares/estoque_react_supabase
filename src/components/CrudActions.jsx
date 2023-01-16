import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const CrudActions = ({ route }) => {
  return (
    <div className="btn-group">
        <Button type="button" color="outline-dark" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-three-dots-vertical"></i>
        </Button>
        <ul className="dropdown-menu dropdown-menu-end">
            <li><Link to={`${route}/visualizar`} className='dropdown-item'>Visualizar</Link></li>
            <li><Link to={`${route}/editar`} className='dropdown-item'>Editar</Link></li>
            <li><Link to={`${route}/deletar`} className='dropdown-item'>Deletar</Link></li>
        </ul>
    </div>
  )
}

export default CrudActions