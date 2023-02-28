import React from 'react'
import { Form, useLoaderData, useNavigate, useNavigation } from 'react-router-dom'
import { Alert, Button, Spinner, Title } from '../../components';
import { getItem } from '../../controllers/Items';
import Item from './Item';

export async function loader({ params }) {
  const { data } = await getItem(params.itemId);

  return data;
}

const ShowItem = () => {
    const item = useLoaderData();
    const navigate = useNavigate();
    const { state, formData } = useNavigation();

    return state === 'loading' 
    ? <Spinner /> 
    : ( item ? 
        <>
            <Title color='secondary' position='start'>Visualizar item</Title>
            <Form method='post'>
                <fieldset className='row g-3'>
                    <Item item={item} readOnly />
                </fieldset>
                <Button 
                    className="btn btn-dark" 
                    disabled={formData} 
                    onClick={() => navigate('/itens')}
                    type="button"
                >
                    Voltar
                </Button>
            </Form>
        </> : <Alert message="Não foi possível carregar o item." />
    )
}

export default ShowItem