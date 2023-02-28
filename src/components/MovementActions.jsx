import React from 'react'
import { Link } from 'react-router-dom'

const MovementActions = ({ itemId }) => {
  return (
    <>
      <li>
        <Link to={`/movimentos/${itemId}/inserir`} className='dropdown-item'>
          Movimentar
        </Link>
      </li>
      <li>
        <Link to={`/movimentos/${itemId}`} className='dropdown-item'>
          Saldos
        </Link>
      </li>
    </>
  )
}

export default MovementActions