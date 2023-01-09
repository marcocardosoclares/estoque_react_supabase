import React from 'react'
import { Link } from 'react-router-dom'

const CustomLink = ({ children, route }) => {
  return (
    <Link to={route} className='text-decoration-none'>{ children }</Link>
  )
}

export default CustomLink