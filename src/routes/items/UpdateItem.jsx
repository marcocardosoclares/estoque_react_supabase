import React from 'react'
import { Form, redirect, useLoaderData, useNavigate, useNavigation } from 'react-router-dom'
import { Alert, Button, Spinner, Title } from '../../components';
import { getItem, updateItem } from '../../controllers/Items';
import Item from './Item';

export async function action({ request }) {
  
  const formData = await request.formData();
  const item = Object.fromEntries(formData);
  item.active = 'active' in item;
  console.log(item);
  const success = await updateItem(item);
  
  if (success) {
    return redirect('/itens');
  }

  return null;
}

export async function loader({ params }) {
  const { data } = await getItem(params.itemId);
  return data;
}

const UpdateItem = () => {
    const item = useLoaderData();
    const navigate = useNavigate();
    const { state, formData } = useNavigation();

    return state === 'loading' 
    ? <Spinner /> 
    : ( item 
        ? <>
            <Title color='secondary' position='start'>Alterar item</Title>
            <Form method='post'>
                <fieldset className='row g-3'>
                    <Item item={item} />
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
        : <Alert message="Não foi possível carregar o item." />
    )
}

export default UpdateItem