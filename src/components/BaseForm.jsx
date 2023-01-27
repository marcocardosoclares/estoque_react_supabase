import React from 'react'
import { Form } from 'react-router-dom'
import Title from './Title'


const BaseForm = ({ children, title, confirmText = 'Confirmar' }) => {
  

  return (
    <>
      <Title color='secondary' position='start'>{ title }</Title>
      <Form method='post' className='row g-3'>
        { children }
      </Form>
    </>
  )
}

export default BaseForm