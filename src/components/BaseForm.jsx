import React from 'react'
import { Form } from 'react-router-dom'
import Button from './Button'
import FormGroup from './FormGroup'
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
          <Button>Gravar</Button>
        </FormGroup>
      </Form>
    </>
  )
}

export default BaseForm