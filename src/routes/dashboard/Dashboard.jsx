import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../controllers/Auth'



const Dashboard = () => {
  const navigate = useNavigate();
  
  async function handleClick() {
    const error = await signOut();
    if (!error) {
      navigate("/")
    }
  }

  return (
    <>
      <div>Dashboard</div>
      <button className='btn btn-primary' onClick={handleClick}>Logout</button>
    </>
  )
}

export default Dashboard