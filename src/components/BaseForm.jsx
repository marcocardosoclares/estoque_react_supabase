import React from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import Button from './Button'
import FormGroup from './FormGroup'
import FormCloseButton from './table/FormCloseButton'
import Title from './Title'


const BaseForm = ({ children, title, disabled = false }) => {
  

  return (
    <>
      <Title color='secondary' position='start'>{ title }</Title>
      <Form method='post'>
        <fieldset className='row g-3' disabled={disabled}>
          { children }
        </fieldset>
        <FormGroup>
          { disabled ? <FormCloseButton /> : <Button>Gravar</Button>}
        </FormGroup>
      </Form>
    </>
  )
}

export default BaseForm