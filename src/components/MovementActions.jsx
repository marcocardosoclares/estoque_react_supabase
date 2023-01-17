import React from 'react'
import { Link } from 'react-router-dom'

const MovementActions = () => {
  return (
    
    <>
        <li><Link to='/movimentos/entrada' className='dropdown-item'>Entrada</Link></li>
        <li><Link to='/movimentos/saida' className='dropdown-item'>Saída</Link></li>
    </>
  )
}

export default MovementActions