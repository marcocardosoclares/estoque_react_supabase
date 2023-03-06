import React from 'react'
import { Form, useLoaderData, useNavigate, useNavigation } from 'react-router-dom'
import { Alert, Button, Spinner, Title } from '../../components';
import { getItem } from '../../controllers/Items';
import Item from './Item';

export async function loader({ params }) {
  return await getItem(params.itemId);
}

const ShowItem = () => {
    const loader = useLoaderData();
    const navigate = useNavigate();
    const { state, formData } = useNavigation();

    return state === 'loading' 
    ? <Spinner /> 
    : ( loader.data ? 
        <>
            <Title color='secondary' position='start'>Visualizar item</Title>
            <Form method='post'>
                <fieldset className='row g-3'>
                    <Item item={loader.data} readOnly />
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
        </> : <Alert message={loader.error.message} />
    )
}

export default ShowItem