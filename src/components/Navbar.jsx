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
    <header className="navbar sticky-top shadow-sm bg-body mb-2">
      <div className="container-fluid">
        <OffcanvasToggle />
        <Link className="navbar-brand me-auto" to="/">Estoque</Link>
        <div className="hstack gap-2">
          <Link to='perfil' className='btn btn-outline-dark border-0'>{ user && user.fullName }</Link>
          <Button className='btn btn-outline-dark border-0 hstack gap-2' onClick={handleClick}>
            <i className="bi bi-box-arrow-right"></i>
            <span>Sair</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Navbar