import React from 'react'
import Title from './Title'

const Menu = () => {
  return (
    <div className="list-group list-group-flush">
      <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
        The current link item
      </a>
      <a href="#" className="list-group-item list-group-item-action border-0">A second link item</a>
      <a href="#" className="list-group-item list-group-item-action border-0">A third link item</a>
      <a href="#" className="list-group-item list-group-item-action border-0">A fourth link item</a>
    </div>
  )
}

export default Menu