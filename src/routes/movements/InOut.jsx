import React from 'react'
import { Form, redirect, useLoaderData, useNavigate, useNavigation } from 'react-router-dom'
import { Alert, Button, Title } from '../../components';
import { getItem } from '../../controllers/Items';
import Movement from './Movement';

export async function action({ request }) {
  
  const formData = await request.formData();
  const movement = Object.fromEntries(formData);
  console.log(movement);
//   const success = await updateItem(item);
  
//   if (success) {
//     return redirect('/itens');
//   }

  return null;
}

export async function loader({ params }) {
  const { data } = await getItem(params.itemId);
  return data;
}

const InOut = () => {
    const item = useLoaderData();
    const navigate = useNavigate();
    const { state, formData } = useNavigation();

    return state === 'loading' 
    ? <Spinner /> 
    : ( item 
        ? <>
            <Title color='secondary' position='start'>Movimentar Estoque</Title>
            <Form method='post'>
                <fieldset className='row g-3'>
                    <Movement item={item} />
                </fieldset>
                <Button className="btn btn-primary me-3" disabled={formData}>
                    { formData ? 'Movimentando...' : 'Movimentar' }
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
        : <Alert message="Não foi possível carregar o item para movimentação." />
    )
}

export default InOut