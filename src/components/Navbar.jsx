import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/Auth';
import { signOut } from '../controllers/Auth';
import Button from './Button';
import OffcanvasToggle from './OffcanvasToggle';

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  
  async function handleClick() {
    const error = await signOut();
    if (!error) navigate("/")
  }

  return (
    <header className="navbar sticky-top shadow-sm">
      <div className="container-fluid">
        <OffcanvasToggle />
        <Link className="navbar-brand me-auto" to="/dashboard">Estoque</Link>
        <div className="hstack gap-2">
          <Link to='/' className='btn btn-outline-dark border-0'>{ user && user.fullName }</Link>
          <Button color='outline-dark border-0' onClick={handleClick}>
            <i className="bi bi-box-arrow-right"></i>
            <span className="ms-2">Sair</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar