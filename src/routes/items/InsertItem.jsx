import React from 'react'
import { Form, redirect, useNavigate, useNavigation } from 'react-router-dom'
import { Button, Title } from '../../components';
import { Insert } from '../../models/Item';
import Item from './Item';

export async function action({ request }) {
  const formData = await request.formData();
  const item = Object.fromEntries(formData);
  const success = await Insert(item);
  
  if (success) {
    return redirect('/itens');
  }

  return null;
}

const InsertItem = () => {
  const navigate = useNavigate();
  const { formData } = useNavigation();
  
  return (
    <>
      <Title color='secondary' position='start'>Incluir item</Title>
      <Form method='post'>
        <fieldset className='row g-3'>
          <Item withMovements />
        </fieldset>
        <Button className="btn btn-primary me-3" disabled={formData}>
          { formData ? 'Incluindo...' : 'Incluir' }
        </Button>
        <Button 
          className="btn btn-dark" 
          disabled={formData} 
          onClick={() => navigate('/itens')}
          type="button"
        >
          Voltar
        </Button>
      </Form>
    </>
  )
}

export default InsertItem