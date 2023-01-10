import React from 'react'
import { Link } from 'react-router-dom';
import OffcanvasToggle from './OffcanvasToggle';

const Navbar = () => {
  return (
    <nav className="navbar bg-body mb-2 shadow-sm rounded-bottom">
      <OffcanvasToggle />
      <Link className="navbar-brand ms-2 me-auto" to="/dashboard">Estoque</Link>
    </nav>
  )
}

export default Navbar