import React from 'react'
import { Form } from 'react-router-dom'
import Button from './Button'
import Title from './Title'


const BaseForm = ({ children, title }) => {
  return (
    <>
      <Title color='secondary' position='start'>{ title }</Title>
      <Form method='post' className='row g-3'>
        { children }
        <Button>Gravar</Button>
      </Form>
    </>
  )
}

export default BaseForm