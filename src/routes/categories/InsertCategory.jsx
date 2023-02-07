import React from 'react'
import { Form, redirect, useNavigate, useNavigation } from 'react-router-dom'
import { Button, Title } from '../../components';
import { insertCategory } from '../../controllers/Categories';
import Category from './Category';

export async function action({ request }) {
  const formData = await request.formData();
  const category = Object.fromEntries(formData);
  const success = await insertCategory(category);
  
  if (success) {
    return redirect('/categorias');
  }

  return null;
}

const InsertCategory = () => {
  const navigate = useNavigate();
  const { formData } = useNavigation();
  
  return (
    <>
      <Title color='secondary' position='start'>Incluir categoria</Title>
      <Form method='post'>
        <fieldset className='row g-3'>
          <Category />
        </fieldset>
        <Button className="btn btn-primary me-3" disabled={formData}>
          { formData ? 'Incluindo...' : 'Incluir' }
        </Button>
        <Button 
          className="btn btn-dark" 
          disabled={formData} 
          onClick={() => navigate('/categorias')}
          type="button"
        >
          Voltar
        </Button>
      </Form>
    </>
  )
}

export default InsertCategory