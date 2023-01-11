import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="list-group list-group-flush flex-grow-1">
      <NavLink to='dashboard' className='list-group-item list-group-item-action list-group-item-light border-0'>
        <i className="bi bi-speedometer"></i>
        <span className='ms-3'>Dashboard</span>
      </NavLink>
      <NavLink to='itens' className='list-group-item list-group-item-action list-group-item-light border-0'>
        <i className="bi bi-stack"></i>
        <span className='ms-3'>Meus Itens</span>
      </NavLink>
      <NavLink to='categorias' className='list-group-item list-group-item-action list-group-item-light border-0 '>
        <i className="bi bi-tag-fill"></i>
        <span className='ms-3'>Categorias</span>
      </NavLink>
      <NavLink to='relatorios' className='list-group-item list-group-item-action list-group-item-light border-0'>
        <i className="bi bi-file-bar-graph-fill"></i>
        <span className='ms-3'>Relatórios</span>
      </NavLink>
    </div>
  
  )
}

export default Menu