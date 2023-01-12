import React from 'react'

const Title = ({ children, color= 'dark', position = 'center' }) => {
  return (
    <h2 className={`text-${color} text-${position}`}>{ children }</h2>
  )
}

export default Title