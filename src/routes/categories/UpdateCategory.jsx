import React from 'react'
import { Form, redirect, useLoaderData, useNavigate, useNavigation } from 'react-router-dom'
import { Button, Title } from '../../components';
import { getCategory, updateCategory } from '../../controllers/Categories';
import Category from './Category';

export async function action({ request }) {
  
  const formData = await request.formData();
  const category = Object.fromEntries(formData);
  const success = await updateCategory(category);
  
  if (success) {
    return redirect('/categorias');
  }

  return null;
}

export async function loader({ params }) {
  const { data, error } = await getCategory(params.categoryId);
  return { data, error };
}

const UpdateCategory = () => {
    const { data, error } = useLoaderData();
    const navigate = useNavigate();
  const { formData } = useNavigation();
  return (
    <>
      <Title color='secondary' position='start'>Alterar categoria</Title>
      <Form method='post'>
        <fieldset className='row g-3'>
          <Category category={data} />
        </fieldset>
        <Button className="btn btn-primary me-3" disabled={formData}>
          { formData ? 'Alterando...' : 'Alterar' }
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

export default UpdateCategory