import React from 'react'
import { Form, useLoaderData, useNavigate, useNavigation } from 'react-router-dom'
import { Button, Spinner, Title } from '../../components';
import { getItem } from '../../controllers/Items';
import Item from './Item';

export async function loader({ params }) {
  const { data, error } = await getItem(params.itemId);
  return { data, error };
}

const ShowItem = () => {
    const { data, error } = useLoaderData();
    const navigate = useNavigate();
    const { state, formData } = useNavigation();

    return state === 'loading' 
    ? <Spinner /> 
    : ( 
        <>
            <Title color='secondary' position='start'>Visualizar item</Title>
            <Form method='post'>
                <fieldset className='row g-3'>
                    <Item item={data} withMovements readOnly />
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
        </>
    )
}

export default ShowItem