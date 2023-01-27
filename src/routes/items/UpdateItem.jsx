import React from 'react'
import { Form, redirect, useLoaderData, useNavigate, useNavigation } from 'react-router-dom'
import { Button, Title } from '../../components';
import { getItem, updateItem } from '../../controllers/Items';
import Item from './Item';

export async function action({ request }) {
  
  const formData = await request.formData();
  const item = Object.fromEntries(formData);
  const success = await updateItem(item);
  
  if (success) {
    return redirect('/itens');
  }

  return null;
}

export async function loader({ params }) {
  const { data, error } = await getItem(params.itemId);
  return { data, error };
}

const UpdateItem = () => {
    const { data, error } = useLoaderData();
    const navigate = useNavigate();
  const { formData } = useNavigation();
  return (
    <>
      <Title color='secondary' position='start'>Alterar item</Title>
      <Form method='post'>
        <fieldset className='row g-3'>
          <Item item={data} />
        </fieldset>
        <Button className="btn btn-primary me-3" disabled={formData}>
          { formData ? 'Alterando...' : 'Alterar' }
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

export default UpdateItem